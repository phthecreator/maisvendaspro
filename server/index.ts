import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Dashboard API Helpers ────────────────────────────────────────────────────

const SQUADS_DIR = path.resolve(__dirname, "..", "squads");

function getYamlField(content: string, key: string): string {
  const match = content.match(new RegExp(`^${key}:\\s*[|>]?\\s*(.*)`, "m"));
  return match ? match[1].replace(/['"]/g, "").trim() : "";
}

function getYamlDescription(content: string): string {
  // Handles multiline block scalar (|)
  const blockMatch = content.match(/^description:\s*[|>]\s*\n((?:[ \t]+.+\n?)+)/m);
  if (blockMatch) return blockMatch[1].replace(/^[ \t]+/gm, "").trim();
  return getYamlField(content, "description");
}

function getAgentsFromDir(agentsDir: string): { id: string; name: string; title: string; icon: string; description: string }[] {
  if (!fs.existsSync(agentsDir)) return [];
  return fs
    .readdirSync(agentsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(agentsDir, f), "utf-8");
      return {
        id: f.replace(".md", "").toLowerCase(),
        name: getYamlField(raw, "name") || f.replace(".md", ""),
        title: getYamlField(raw, "title") || "",
        icon: getYamlField(raw, "icon") || "🤖",
        description: getYamlField(raw, "whenToUse") || getYamlField(raw, "description") || "",
      };
    });
}

function readSquads() {
  if (!fs.existsSync(SQUADS_DIR)) return [];
  return fs
    .readdirSync(SQUADS_DIR)
    .filter((d) => fs.statSync(path.join(SQUADS_DIR, d)).isDirectory())
    .map((squadId) => {
      const squadPath = path.join(SQUADS_DIR, squadId);
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

      // Count tasks
      const tasksDir = path.join(squadPath, "tasks");
      const taskCount = fs.existsSync(tasksDir)
        ? fs.readdirSync(tasksDir).filter((f) => f.endsWith(".md")).length
        : 0;

      // Count workflows
      const workflowsDir = path.join(squadPath, "workflows");
      const workflowCount = fs.existsSync(workflowsDir)
        ? fs.readdirSync(workflowsDir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml")).length
        : 0;

      return { id: squadId, name, title, description, version, agents, taskCount, workflowCount };
    });
}

function readMinds() {
  const mindsDir = path.join(SQUADS_DIR, "mmos-squad", "minds");
  if (!fs.existsSync(mindsDir)) return [];

  return fs
    .readdirSync(mindsDir)
    .filter((d) => {
      const p = path.join(mindsDir, d);
      return fs.statSync(p).isDirectory();
    })
    .map((mindId) => {
      const mindPath = path.join(mindsDir, mindId);

      // Try to load identity_core.yaml
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
    });
}

// ─── Server ───────────────────────────────────────────────────────────────────

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // ─── Dashboard API ──────────────────────────────────────────────────────────
  app.get("/api/squads", (_req, res) => {
    try {
      res.json(readSquads());
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  });

  app.get("/api/minds", (_req, res) => {
    try {
      res.json(readMinds());
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  });

  app.get("/api/stats", (_req, res) => {
    try {
      const squads = readSquads();
      const minds = readMinds();
      const totalAgents = squads.reduce((sum, s) => sum + s.agents.length, 0);
      const totalTasks = squads.reduce((sum, s) => sum + s.taskCount, 0);
      const totalWorkflows = squads.reduce((sum, s) => sum + s.workflowCount, 0);
      res.json({ squads: squads.length, minds: minds.length, agents: totalAgents, tasks: totalTasks, workflows: totalWorkflows });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 5000;

  server.listen(port, () => {
    console.log(`\n🚀 ==========================================`);
    console.log(`✅ MAISVENDASPRO WEB: SUCCESSFUL STARTUP`);
    console.log(`🌐 Server running correctly on port: ${port}`);
    console.log(`🕒 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`========================================== 🚀\n`);
  });
}

startServer().catch(console.error);
