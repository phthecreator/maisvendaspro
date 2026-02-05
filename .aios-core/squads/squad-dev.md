# SQUAD: DEV (Development & Implementation)

**Responsável**: @dev (Dex)
**Status**: ATIVO
**Missão**: Construir MAISVENDASPRO em 7 dias com qualidade de produção

---

## 👥 COMPOSIÇÃO

### Dev Lead
- **Nome**: [Você/Murillo - Tech Lead]
- **Role**: Architecture + Code Review
- **Expertise**: React, Node.js, Cloud Infrastructure
- **Responsabilidades**:
  - Decisões técnicas
  - Code quality gates
  - Performance optimization
  - Security review

### Dev Senior 1 - Frontend
- **Perfil**: React specialist
- **Foco**: Landing page + Dashboard + Performance
- **Tasks**:
  - Landing page components
  - Cal.com integration
  - Forms + validation
  - Responsive design

### Dev Senior 2 - Backend/Integrações
- **Perfil**: Supabase + API specialist
- **Foco**: Database + Webhooks + Integrações
- **Tasks**:
  - Supabase schema + migrations
  - Auth (JWT + RLS)
  - Webhook handlers (Cal.com, Evolution, Stripe)
  - API integrations

### Dev Junior (Optional/Growth)
- **Role**: UI components + Testing
- **Mentored by**: Dev Lead
- **Growth path**: Frontend → Full-stack

---

## 🎯 OBJETIVOS SPRINT 1 (Semana 1-2)

### Semana 1: Foundation
- [ ] Vercel project criado + GitHub linked
- [ ] Supabase project criado + schema designed
- [ ] React 19 + Vite boilerplate initialized
- [ ] Tailwind 4 configured
- [ ] Authentication (Supabase) working
- [ ] First commit pushed

### Semana 2: MVP Features
- [ ] Landing page (Hero + Cases + CTA)
- [ ] Cal.com integration (booking form working)
- [ ] Email confirmations (Resend)
- [ ] Admin dashboard (basic CRUD)
- [ ] Analytics (Mixpanel) tracking
- [ ] Deploy to Vercel ✅

---

## 📋 TECH STACK (Referência)

```json
{
  "Frontend": "React 19 + Vite 7 + Tailwind 4",
  "Backend": "Supabase (PostgreSQL)",
  "Integrações": "Cal.com, Evolution, Pipedrive, Resend, Stripe",
  "Deploy": "Vercel (Edge CDN)",
  "Observability": "Vercel Analytics, Mixpanel, LogRocket",
  "Testing": "Vitest + React Testing Library"
}
```

---

## 📊 MÉTRICAS DE SUCESSO

| Métrica | Target | Semana 1 | Semana 2 |
|---------|--------|----------|----------|
| **LCP** | <2.5s | <3s | <2.5s ✅ |
| **Bundle** | <100KB | <150KB | <100KB ✅ |
| **Uptime** | 99.9% | 99% | 99.9% ✅ |
| **Performance Score** | >90 | >80 | >90 ✅ |
| **Bugs** | 0 críticos | <5 | 0 ✅ |

---

## 🔄 WORKFLOW

### Daily Standup (15 min)
- 09:00 AM: O que fiz, O que faço hoje, Blockers
- Async: Slack #dev-standup

### Code Review
- PR requirement: 1 approval + passing tests
- Performance: Lighthouse CI check mandatory
- Security: SonarQube scan before merge

### Deploys
- Staging: Auto-deploy on PR
- Production: Manual trigger (1-click Vercel)
- Rollback: Instant (revert commit + redeploy)

---

## 📚 RECURSOS

- **Architecture**: `/docs/ADR-ARCHITECTURE.md`
- **Tech Stack**: `/docs/TECH-STACK.md`
- **PRD**: `/docs/PRD-MAISVENDASPRO.md`
- **Supabase Docs**: https://supabase.com/docs
- **React 19 Docs**: https://react.dev

---

## 🚨 CONTINGENCY

**If Supabase down**:
- Fallback to Firebase (1 hour migration)

**If Vercel down**:
- Push to Railway VPS (2 hour migration)

**If team member unavailable**:
- [Other Dev] takes over + pair programming

---

## ✅ READY TO START

- [ ] Team onboarded
- [ ] Repositories created
- [ ] Local setup complete
- [ ] First standup scheduled
- [ ] Deploy test successful

**Target Start Date**: Tomorrow 🚀
