import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Security Middleware ─────────────────────────────────────────────────────

function securityHeaders(_req: express.Request, res: express.Response, next: express.NextFunction) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://forge.butterfly-effect.dev https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://images.unsplash.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://forge.butterfly-effect.dev https://docs.google.com; frame-src 'self' https://www.youtube.com https://cal.com https://docs.google.com; form-action 'self' https://docs.google.com;"
  );
  next();
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 60;

function rateLimit(req: express.Request, res: express.Response, next: express.NextFunction) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return next();
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    res.setHeader("Retry-After", String(Math.ceil((entry.resetAt - now) / 1000)));
    return res.status(429).json({ error: "Too many requests" });
  }

  next();
}

// Cleanup stale rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  rateLimitMap.forEach((entry, ip) => {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  });
}, 300_000);

function apiAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const apiKey = process.env.DASHBOARD_API_KEY;
  if (!apiKey) return next(); // No key configured = open (dev mode)

  const provided = req.headers["x-api-key"] || req.query["api_key"];
  if (provided === apiKey) return next();

  res.status(401).json({ error: "Unauthorized" });
}

// ─── Dashboard API Helpers ────────────────────────────────────────────────────

const SQUADS_DIR = path.resolve(__dirname, "..", "squads");

function getYamlField(content: string, key: string): string {
  const safeKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = content.match(new RegExp(`^${safeKey}:\\s*[|>]?\\s*(.*)`, "m"));
  return match ? match[1].replace(/['"]/g, "").trim() : "";
}

function getYamlDescription(content: string): string {
  const blockMatch = content.match(/^description:\s*[|>]\s*\n((?:[ \t]+.+\n?)+)/m);
  if (blockMatch) return blockMatch[1].replace(/^[ \t]+/gm, "").trim();
  return getYamlField(content, "description");
}

function safePath(base: string, ...segments: string[]): string | null {
  const resolved = path.resolve(base, ...segments);
  if (!resolved.startsWith(base)) return null;
  return resolved;
}

function getAgentsFromDir(agentsDir: string): { id: string; name: string; title: string; icon: string; description: string }[] {
  if (!fs.existsSync(agentsDir)) return [];
  return fs
    .readdirSync(agentsDir)
    .filter((f) => f.endsWith(".md") && !f.includes(".."))
    .map((f) => {
      const filePath = safePath(agentsDir, f);
      if (!filePath) return null;
      const raw = fs.readFileSync(filePath, "utf-8");
      return {
        id: f.replace(".md", "").toLowerCase(),
        name: getYamlField(raw, "name") || f.replace(".md", ""),
        title: getYamlField(raw, "title") || "",
        icon: getYamlField(raw, "icon") || "🤖",
        description: getYamlField(raw, "whenToUse") || getYamlField(raw, "description") || "",
      };
    })
    .filter(Boolean) as { id: string; name: string; title: string; icon: string; description: string }[];
}

function readSquads() {
  if (!fs.existsSync(SQUADS_DIR)) return [];
  return fs
    .readdirSync(SQUADS_DIR)
    .filter((d) => {
      const p = safePath(SQUADS_DIR, d);
      return p && fs.statSync(p).isDirectory();
    })
    .map((squadId) => {
      const squadPath = safePath(SQUADS_DIR, squadId);
      if (!squadPath) return null;

      const configFile =
        fs.existsSync(path.join(squadPath, "squad.yaml"))
          ? "squad.yaml"
          : fs.existsSync(path.join(squadPath, "config.yaml"))
          ? "config.yaml"
          : null;

      let name = squadId;
      let title = squadId;
      let description = "";
      let version = "1.0.0";

      if (configFile) {
        const raw = fs.readFileSync(path.join(squadPath, configFile), "utf-8");
        name = getYamlField(raw, "name") || squadId;
        title = getYamlField(raw, "title") || getYamlField(raw, "short-title") || name;
        description = getYamlDescription(raw);
        version = getYamlField(raw, "version") || "1.0.0";
      }

      const agents = getAgentsFromDir(path.join(squadPath, "agents"));

      const tasksDir = path.join(squadPath, "tasks");
      const taskCount = fs.existsSync(tasksDir)
        ? fs.readdirSync(tasksDir).filter((f) => f.endsWith(".md")).length
        : 0;

      const workflowsDir = path.join(squadPath, "workflows");
      const workflowCount = fs.existsSync(workflowsDir)
        ? fs.readdirSync(workflowsDir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml")).length
        : 0;

      return { id: squadId, name, title, description, version, agents, taskCount, workflowCount };
    })
    .filter(Boolean);
}

function readMinds() {
  const mindsDir = safePath(SQUADS_DIR, "mmos-squad", "minds");
  if (!mindsDir || !fs.existsSync(mindsDir)) return [];

  return fs
    .readdirSync(mindsDir)
    .filter((d) => {
      const p = safePath(mindsDir, d);
      return p && fs.statSync(p).isDirectory();
    })
    .map((mindId) => {
      const mindPath = safePath(mindsDir, mindId);
      if (!mindPath) return null;

      const artifactsCore = path.join(mindPath, "artifacts", "identity_core.yaml");
      const synthesisCore = path.join(mindPath, "synthesis", "identity-core.yaml");
      const coreFile = fs.existsSync(artifactsCore) ? artifactsCore : fs.existsSync(synthesisCore) ? synthesisCore : null;

      let name = mindId.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      let archetype = "";
      let essence = "";
      let superpower = "";

      if (coreFile) {
        const raw = fs.readFileSync(coreFile, "utf-8");
        name = getYamlField(raw, "mind_name") || getYamlField(raw, "name") || name;
        archetype = getYamlField(raw, "archetype") || "";
        essence = getYamlField(raw, "core_obsession") || getYamlField(raw, "primary") || "";
        superpower = getYamlField(raw, "superpower") || "";
      }

      return { id: mindId, name, archetype, essence, superpower };
    })
    .filter(Boolean);
}

// ─── Lead capture endpoint ───────────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function sanitize(str: string, maxLen = 200): string {
  return str.slice(0, maxLen).replace(/[<>]/g, "").trim();
}

// ─── Server ───────────────────────────────────────────────────────────────────

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Security middleware
  app.use(securityHeaders);
  app.use(rateLimit);
  app.use(express.json({ limit: "10kb" }));

  // ─── Quiz API (new home form) ────────────────────────────────────────────
  app.post("/api/quiz", (req, res) => {
    try {
      const { area, teamSize, revenue, aiMaturity, freeText, timing, name, whatsapp, squadRecommended } = req.body;

      if (!name || typeof name !== "string" || name.trim().length < 2) {
        return res.status(400).json({ error: "Nome deve ter pelo menos 2 caracteres" });
      }
      if (!whatsapp || !isValidPhone(whatsapp)) {
        return res.status(400).json({ error: "WhatsApp invalido" });
      }

      // Server-side score (never trust client)
      const REVENUE_SCORE: Record<string, number> = { "+R$10M": 30, "R$2M-R$10M": 25, "R$500k-R$2M": 20, "R$100k-R$500k": 10, "Ate R$100k": 5 };
      const TEAM_SCORE: Record<string, number> = { "30+": 15, "11-30": 12, "4-10": 8, "1-3": 3 };
      const MATURITY_SCORE: Record<string, number> = { "Tenho equipe de IA": 15, "Tenho automacoes": 12, "Uso ChatGPT/Gemini": 5, "Nunca usei": 2 };
      const TIMING_SCORE: Record<string, number> = { "Essa semana": 20, "Este mes": 15, "Proximos 3 meses": 5, "So pesquisando": 2 };

      let score = 0;
      score += REVENUE_SCORE[revenue] || 5;
      score += TEAM_SCORE[teamSize] || 3;
      score += MATURITY_SCORE[aiMaturity] || 2;
      score += TIMING_SCORE[timing] || 2;
      if (freeText && freeText.length > 50) score += 10;
      else if (freeText && freeText.length > 0) score += 3;
      const temperatura = score >= 60 ? "HOT" : score >= 30 ? "WARM" : "COLD";

      const lead = {
        type: "quiz-home-v2",
        name: sanitize(name),
        whatsapp: sanitize(whatsapp, 20),
        area: sanitize(area || "", 50),
        teamSize: sanitize(teamSize || "", 10),
        revenue: sanitize(revenue || "", 30),
        aiMaturity: sanitize(aiMaturity || "", 30),
        freeText: sanitize(freeText || "", 500),
        timing: sanitize(timing || "", 30),
        score,
        temperatura,
        squadRecommended: sanitize(squadRecommended || "", 100),
        createdAt: new Date().toISOString(),
      };

      // Save to leads file
      const leadsDir = path.resolve(__dirname, "..", "data");
      if (!fs.existsSync(leadsDir)) fs.mkdirSync(leadsDir, { recursive: true });
      fs.appendFileSync(path.join(leadsDir, "leads.jsonl"), JSON.stringify(lead) + "\n");

      res.json({ success: true, score, temperatura });
    } catch (e) {
      res.status(500).json({ error: "Erro interno" });
    }
  });

  // ─── Lead capture API (legacy form) ─────────────────────────────────────
  app.post("/api/leads", (req, res) => {
    try {
      const { email, phone, company, instagram, usesAI, invested, wouldInvest, lgpdConsent } = req.body;

      if (!email || !phone) {
        return res.status(400).json({ error: "Email e telefone são obrigatórios" });
      }
      if (!isValidEmail(email)) {
        return res.status(400).json({ error: "Email inválido" });
      }
      if (!isValidPhone(phone)) {
        return res.status(400).json({ error: "Telefone inválido" });
      }
      if (!lgpdConsent) {
        return res.status(400).json({ error: "Consentimento LGPD necessário" });
      }

      const lead = {
        email: sanitize(email, 254),
        phone: sanitize(phone, 20),
        company: sanitize(company || ""),
        instagram: sanitize(instagram || "", 50),
        usesAI: sanitize(usesAI || "", 10),
        invested: sanitize(invested || "", 50),
        wouldInvest: sanitize(wouldInvest || "", 50),
        createdAt: new Date().toISOString(),
      };

      // Store to file (append-only log) — will be migrated to Supabase
      const leadsDir = path.resolve(__dirname, "..", "data");
      if (!fs.existsSync(leadsDir)) fs.mkdirSync(leadsDir, { recursive: true });
      fs.appendFileSync(
        path.join(leadsDir, "leads.jsonl"),
        JSON.stringify(lead) + "\n"
      );

      res.json({ success: true });
    } catch (e) {
      res.status(500).json({ error: "Erro interno" });
    }
  });

  // ─── Dashboard API (protected) ────────────────────────────────────────────
  app.get("/api/squads", apiAuth, (_req, res) => {
    try {
      res.json(readSquads());
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  });

  app.get("/api/minds", apiAuth, (_req, res) => {
    try {
      res.json(readMinds());
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  });

  app.get("/api/stats", apiAuth, (_req, res) => {
    try {
      const squads = readSquads() as any[];
      const minds = readMinds();
      const totalAgents = squads.reduce((sum, s) => sum + s.agents.length, 0);
      const totalTasks = squads.reduce((sum, s) => sum + s.taskCount, 0);
      const totalWorkflows = squads.reduce((sum, s) => sum + s.workflowCount, 0);
      res.json({ squads: squads.length, minds: minds.length, agents: totalAgents, tasks: totalTasks, workflows: totalWorkflows });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  });

  // ─── V2 Home (static HTML/CSS/JS) ─────────────────────────────────────────
  const v2HomePath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "..", "v2-home")
      : path.resolve(__dirname, "..", "v2-home");

  // Serve V2 home static files first (index.html, app.js, style.css)
  // This takes priority over the React SPA for the root path
  app.use(express.static(v2HomePath));

  // ─── React SPA (other routes) ───────────────────────────────────────────────
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve React SPA for all non-root routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 5000;

  server.listen(port, () => {
    console.log(`\n🚀 ==========================================`);
    console.log(`✅ MAISVENDASPRO WEB: SUCCESSFUL STARTUP`);
    console.log(`🌐 Server running correctly on port: ${port}`);
    console.log(`🕒 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔒 Security: headers, rate-limit, API auth enabled`);
    console.log(`========================================== 🚀\n`);
  });
}

startServer().catch(console.error);
