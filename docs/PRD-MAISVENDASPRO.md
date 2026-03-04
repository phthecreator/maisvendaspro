# PRD - MAISVENDASPRO

**Versão**: 1.0 | **Data**: Fevereiro 2026 | **Status**: ATIVO

---

## 1. VISÃO ESTRATÉGICA

### Missão
Transformar tecnologia em resultado. Entregar soluções autônomas que resolvem problemas reais de empresas gringas, **em 7 dias**, com ROI comprovado em 48h.

### Visão
Ser a agência tech preferida de empresários que compram **resultado**, não **código**.

### Objetivos Q1 2026
- ✅ MVP rodando em produção (7 dias)
- ✅ 5 clientes Specialist Squad ($3k)
- ✅ 2 clientes Enterprise OS ($6k-10k)
- ✅ $25-35k faturado
- ✅ 5-10% conversão landing
- ✅ 99.9% uptime

---

## 2. PROBLEMA & OPORTUNIDADE

### O Problema
Empresas **perdem 40% dos leads** porque:
- ❌ Demoram 3-4h responder
- ❌ Não escalável sem contratar
- ❌ Agências = $15k+ setup + 30 dias

### Nossa Solução
Sistemas autônomos de IA:
- ✅ Respondem em segundos (24/7)
- ✅ Qualificam automaticamente
- ✅ 7 dias entrega
- ✅ ROI em 48h

---

## 3. USER PERSONAS

### Marina - Gerente Agência ($3k)
- **Pain**: "Perco 40% dos leads por demora"
- **Goal**: +30% conversão
- **Budget**: $3-5k/mês
- **CTA**: "Quanto tempo até rodar?"

### Carlos - CTO Founder ($6k-15k)
- **Pain**: "Sistema não escala"
- **Goal**: Solução multi-agente
- **Budget**: $10-15k + $1-2k retainer
- **CTA**: "Arquitetura robusta?"

### João - Admin (Interno)
- **Pain**: "Preciso trackear"
- **Goal**: Dashboards + docs
- **Budget**: N/A
- **CTA**: "Como monitoro?"

---

## 4. FEATURES (MVP → Phase 3)

### FASE 1 (Semana 1-2)
- Landing Page: Hero + Cases + CTA
- Cal.com Integration: Agendamento
- Auth: Supabase JWT
- Analytics: Mixpanel básico

### FASE 2 (Semana 3-4)
- Dashboard Cliente: Status + ROI
- Integrações: WhatsApp + Email + CRM
- Admin: CRUD leads

### FASE 3 (Semana 5-7)
- Chatbot IA: Qualificação automática
- Relatórios: ROI + Insights
- VPS: Deploy produção

---

## 5. REQUISITOS NÃO-FUNCIONAIS

| Métrica | Target | Como |
|---------|--------|------|
| LCP | <2.5s | Vercel Edge |
| Conversão | 5-10% | UX simples |
| Uptime | 99.9% | Vercel + Supabase |
| Security | HTTPS+JWT | RLS + 2FA |
| Scale | 100k visitas | Auto-scaling |

---

## 6. ROADMAP EXECUTIVO

| Semana | Deliverable | KPI |
|--------|------------|-----|
| 1 | Landing + Cal.com | 100 visitas |
| 2 | Auth + Dashboard | 500 visitas, 5 leads |
| 3-4 | Integrações | 1.5k visitas, 10 agendamentos |
| 5-6 | Analytics + IA | 3k visitas, 25 agendamentos |
| 7 | VPS + Go Live | 5k visitas, 1 cliente |

---

## 7. MODELO DE NEGÓCIO

### Specialist Squad ($3,000)
- Prazo: 14 dias (real: 3-5 com AIOS)
- Exemplos: Qualificação leads, Content pipeline
- Retainer: $500-800/mês

### Enterprise OS ($6,000-15,000)
- Prazo: 30 dias (real: 10-12 com AIOS)
- Exemplos: SaaS MVP, CRM Autopilot
- Retainer: $1,000-3,000/mês

### Receita Q1
- Mês 1: 5 × $3k = $15k
- Mês 2: 8 × $3k + 3 × $8k = $48k
- Mês 3: 10 × $3k + 2 × $10k + $25k recorrente = $75k

---

## 8. DEFINIÇÃO DE PRONTO (MVP)

- ✅ LCP < 2.5s (Lighthouse)
- ✅ Cal.com 100% funcional
- ✅ Email confirmação <5s
- ✅ 0 erros críticos (LogRocket)
- ✅ 99.9% uptime medido
- ✅ 5-10% conversão
- ✅ 1 cliente real dogfooding

---

## PRÓXIMOS PASSOS

1. ✅ PRD aprovado (HOJE)
2. ⏳ ADR discussão técnica
3. ⏳ Tech Stack confirmado
4. ⏳ Squad criado
5. ⏳ Dev inicia Semana 1

**Owner**: Murillo (Product) + Pedro (Tech Lead)
