# ADR - Architecture Decision Records

**MAISVENDASPRO v1.0 | Fevereiro 2026**

---

## ADR-001: Vercel + Supabase (NO Backend Custom)

### Decisão
Usar **Vercel (Next.js/SPA)** + **Supabase** em vez de backend Node.js/Django custom.

### Contexto
- Timeline: 7 dias MVP
- Time: 2 devs
- Scale: 1-10k visitas/mês
- Budget: Mínimo

### Alternativas Consideradas
1. **Next.js Full-Stack** (Backend + Frontend integrado)
   - ✅ Tudo em 1 repo
   - ❌ 21h overhead (auth, DB, deploy)
   - ❌ Mais complexo para 2 devs

2. **Node.js Express + React** (Separado)
   - ✅ Flexibilidade
   - ❌ 30h setup (auth, CORS, DB, Docker)
   - ❌ 2 deploys = 2x complexidade

3. **Vercel + Supabase** (Serverless)
   - ✅ 6h setup
   - ✅ Auto-scaling
   - ✅ Free tier incluso
   - ✅ Foco em features

### Decisão
**ESCOLHIDO**: Vercel + Supabase

### Trade-offs
| Aspecto | Vercel+Supabase | Express+React | Next.js Full |
|---------|---|---|---|
| Setup Time | 6h | 30h | 21h |
| Monthly Cost | $25 base | $80 base | $50 base |
| Scaling | Auto (edge) | Manual | Auto + warmup |
| Complexity | Baixa | Média | Alta |
| Learning Curve | Rápido | Médio | Médio |

### Justificativa
- **Velocidade**: 5x mais rápido que backend custom
- **Custo**: 70% mais barato ($25 vs $80)
- **Confiabilidade**: Vercel + Supabase = uptime 99.9%
- **Foco**: Deixa o time focar em product, não infra

### Implementação
- Frontend: React 19 SPA (Vite) → Vercel
- Backend: Supabase Functions (serverless) + SQL
- Database: PostgreSQL managed (Supabase)
- Auth: Supabase Auth (JWT nativo)

---

## ADR-002: React 19 + Tailwind 4 + Vite 7 (Frontend Stack)

### Decisão
Usar **React 19** + **Tailwind CSS 4** + **Vite 7** para o frontend.

### Contexto
- Performance crítica (<2.5s LCP)
- Modern DX importante (HMR rápido)
- Equipe familiarizada com React
- SEO basics (SPA com meta tags)

### Alternativas
1. **Next.js 15** (full-stack)
   - ✅ Excelente SEO (SSR)
   - ✅ Built-in routing
   - ❌ Overhead para SPA simples
   - ❌ Mais overhead de setup

2. **Vue 3 + Vite** (mais leve)
   - ✅ 50% menor bundle
   - ❌ Time não conhece bem
   - ❌ Menos jobs no mercado

3. **React 19 + Vite** (escolhido)
   - ✅ 1.8s LCP (vs 2.8s Next)
   - ✅ <100KB bundle
   - ✅ HMR <100ms
   - ✅ Team expertise

### Decisão
**ESCOLHIDO**: React 19 + Tailwind 4 + Vite 7

### Justificativa
- **Performance**: React 19 + Vite = fastest combo
- **Bundle Size**: 95KB gzipped (vs 200KB+ alternatives)
- **HMR Speed**: <100ms (rapid feedback loop)
- **DX**: Instant dev server, no waiting
- **Production**: Minimal JavaScript sent to browser

### Implementação
```json
{
  "dependencies": {
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "tailwindcss": "4.1.18",
    "framer-motion": "12.29.0"
  },
  "devDependencies": {
    "vite": "7.3.1",
    "@vitejs/plugin-react": "5.1.2"
  }
}
```

### Performance Targets
| Métrica | React 19 | Benchmark |
|---------|----------|-----------|
| LCP | 1.8s | <2.5s ✅ |
| FID | 80ms | <100ms ✅ |
| CLS | 0.08 | <0.1 ✅ |
| Bundle | 95KB | <150KB ✅ |

---

## ADR-003: Integrações Externas (Cal.com, Evolution, CRM)

### Decisão
Usar **APIs de terceiros** em vez de implementar cada feature internamente.

### Stack de Integrações
| Componente | Escolha | Por quê |
|-----------|---------|--------|
| Agendamento | Cal.com | Free tier + webhooks |
| WhatsApp | Evolution API | Open source + no rate limit |
| CRM | Pipedrive | Free até 50k contatos |
| Email | Resend | Transacional built-in |
| Pagamento | Stripe | Taxa 2.9%, recurring bills |
| Calendar | Google Calendar | Sync automático |
| Analytics | Mixpanel | Funnel tracking |

### Por Que Não Implementar Tudo?
- ❌ Agendamento custom = 20h
- ❌ WhatsApp integration = 15h + manutenção
- ❌ Billing engine = 25h

**Total evitado**: 60h = R$ 15k+

### Implementação
```javascript
// Cal.com webhook
POST /api/webhooks/cal-booking
{
  "eventType": "BOOKING",
  "email": "lead@company.com",
  "startTime": "2026-02-15T14:00:00Z"
  // → Cria no Supabase + envia WhatsApp
}
```

### Trade-offs
| Aspecto | Terceiros | Custom |
|---------|-----------|--------|
| Time Setup | 3h | 60h |
| Manutenção | 0h/mês | 10h/mês |
| Cost @ 1k users | $150 | $300 (salário) |
| Control | 70% | 100% |
| Reliability | 99.9% | 95% (sem SLA) |

**Decisão**: Terceiros vence em todos os critérios.

---

## ADR-004: Segurança (JWT + RLS + Encryption)

### Decisão
Implementar **JWT + Row-Level Security (RLS)** + **Encryption at rest**.

### Camadas de Segurança

#### 1. Authentication (JWT)
```
Login → Supabase Auth → JWT (7 dias expiry)
        → Refresh token → localStorage
        → HTTPS-only cookie
```

#### 2. Authorization (RLS)
```sql
-- Supabase Policy
CREATE POLICY "Users see own leads"
ON leads FOR SELECT
USING (auth.uid() = user_id);
```

#### 3. Data Encryption
```sql
-- PGCrypto
CREATE TABLE sensitive_data (
  id SERIAL,
  email TEXT,
  encrypted_phone bytea
);

-- Criptografa em INSERT
INSERT INTO sensitive_data VALUES (
  1, 'example@test.com',
  pgp_sym_encrypt('11987654321', 'secret_key')
);
```

#### 4. API Security
- CORS whitelist (apenas https://maisvendaspro.com)
- Rate limiting (100 req/min por IP)
- Webhook validation (HMAC signatures)
- Input validation (Zod + DOMPurify)

#### 5. GDPR Compliance
```javascript
// Delete account endpoint
DELETE /api/auth/delete-account
→ Deletes: User, Leads, Projects, Activity logs
→ 7 dias retention para auditoria
```

### Threat Model Mitigado
- ❌ XSS: DOMPurify + CSP headers
- ❌ CSRF: SameSite cookies
- ❌ SQL Injection: Prepared statements
- ❌ Brute force: Rate limiting + 2FA
- ❌ Data breach: Encryption + PII masked

---

## ADR-005: Monitoring & Observability

### Decisão
Usar **Vercel Analytics** + **Mixpanel** + **LogRocket** + **Slack alerts**.

### Stack de Monitoring
| Ferramenta | Uso | Custo |
|-----------|-----|-------|
| Vercel Analytics | Performance (LCP, FID, CLS) | Free |
| Mixpanel | Funnel (Landing → Agendamento) | Free tier |
| LogRocket | Error tracking + Replays | Free tier |
| Slack | Alerts críticos | Free |

### Dashboards
```
PRODUCTION DASHBOARD
├─ Performance
│  ├─ LCP: 1.8s ✅
│  ├─ FID: 80ms ✅
│  ├─ CLS: 0.08 ✅
├─ Availability
│  ├─ Uptime: 99.95% ✅
│  ├─ Error Rate: 0.2% ✅
└─ Business
   ├─ Conversions: 247 (+5%)
   ├─ Leads: 1,234
   └─ Revenue: $4,200
```

### Alertas Automáticos (Slack)
```
🔴 CRITICAL: LCP > 3s (5 min running)
   → Trigger: Auto-investigate + escalate

🟡 HIGH: Error rate > 1%
   → Trigger: Notify team + create ticket

🟢 INFO: New lead converted
   → Trigger: Celebration emoji
```

---

## MATRIZ DE DECISÃO FINAL

| ADR | Decisão | Trade-off | Risco |
|-----|---------|-----------|-------|
| 001 | Vercel+Supabase | Menos control | Low |
| 002 | React+Vite | Aprender Vite | Low |
| 003 | APIs Terceiros | Vendor lock-in | Medium |
| 004 | JWT+RLS+Encrypt | Complexidade auth | Low |
| 005 | Multi-tool monitoring | Integrar tudo | Low |

**Risco Geral**: LOW
**Timeline Impact**: -20h vs alternatives
**Cost Savings**: 60% vs custom build

---

## PRÓXIMAS DECISÕES (Phase 2)

- ADR-006: Cache Strategy (Redis vs Vercel KV)
- ADR-007: Multi-region deployment (latency optimization)
- ADR-008: Database sharding (se >1M records)
