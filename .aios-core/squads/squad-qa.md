# SQUAD: QA (Quality Assurance & Testing)

**Responsável**: @qa (Quinn)
**Status**: ATIVO
**Missão**: Garantir MVP com 0 bugs críticos e >90 performance score

---

## 👥 COMPOSIÇÃO

### QA Lead
- **Nome**: [Quality Manager]
- **Role**: Test strategy + Quality gates
- **Expertise**: Testing, Performance, Security audits
- **Responsabilidades**:
  - Test plan creation
  - Performance profiling
  - Security vulnerability scanning
  - Release approval

### QA Automation Engineer
- **Perfil**: Vitest + Playwright specialist
- **Foco**: Automated testing (unit + e2e)
- **Tasks**:
  - Component tests (Vitest)
  - E2E tests (Playwright)
  - Performance benchmarks
  - CI/CD test setup

### QA Manual Tester
- **Perfil**: User journey testing
- **Foco**: Manual exploration + edge cases
- **Tasks**:
  - Conversion funnel testing
  - Mobile responsiveness
  - Cross-browser testing
  - User flow validation

---

## 🎯 OBJETIVOS SPRINT 1

### Semana 1: Test Infrastructure
- [ ] Vitest setup + example tests
- [ ] Playwright E2E setup
- [ ] Lighthouse CI configured
- [ ] LogRocket error tracking setup
- [ ] Test coverage baseline (>60%)

### Semana 2: MVP Testing
- [ ] 80+ automated tests
- [ ] Lighthouse score >90
- [ ] 0 console errors
- [ ] All integrations tested
- [ ] Performance baselines set

---

## 📊 QUALITY GATES

| Check | Status | Tool | Blocker? |
|-------|--------|------|----------|
| **Unit Tests** | >80% coverage | Vitest | No |
| **E2E Tests** | All passing | Playwright | Yes |
| **Lighthouse** | >90 score | Vercel CI | Yes |
| **Performance** | <2.5s LCP | Vercel Analytics | Yes |
| **Security** | No critical | SonarQube | Yes |
| **Accessibility** | WCAG AA | Axe DevTools | No |

---

## 🧪 TEST MATRIX

### Unit Tests
```javascript
// Example: components/Hero.test.tsx
describe('Hero Component', () => {
  it('renders headline correctly', () => {});
  it('CTA button is clickable', () => {});
  it('responsive on mobile', () => {});
});
```

### E2E Tests
```javascript
// Example: e2e/booking.spec.ts
test('Complete booking flow', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[name=email]', 'test@example.com');
  await page.click('button:has-text("Agendar")');
  // Assert success
});
```

### Performance Tests
```javascript
// Lighthouse CI thresholds
{
  "performance": 90,
  "accessibility": 90,
  "best-practices": 90,
  "seo": 90
}
```

---

## 🔍 TESTING CHECKLIST (Pre-Deploy)

- [ ] **Functional**
  - [ ] All features work as PRD specifies
  - [ ] No broken links
  - [ ] Forms validate correctly
  - [ ] Integrations respond properly

- [ ] **Performance**
  - [ ] LCP <2.5s (Lighthouse audit)
  - [ ] FID <100ms
  - [ ] CLS <0.1
  - [ ] Bundle <100KB

- [ ] **Security**
  - [ ] No hardcoded secrets
  - [ ] HTTPS enabled
  - [ ] CORS properly configured
  - [ ] XSS prevention verified
  - [ ] CSRF tokens present

- [ ] **Compatibility**
  - [ ] Chrome latest ✅
  - [ ] Firefox latest ✅
  - [ ] Safari latest ✅
  - [ ] iOS Safari ✅
  - [ ] Chrome Android ✅

- [ ] **Accessibility**
  - [ ] Keyboard navigation works
  - [ ] Screen reader compatible
  - [ ] Color contrast OK (WCAG AA)
  - [ ] Focus indicators visible

- [ ] **Cross-Device**
  - [ ] Desktop 1920px
  - [ ] Tablet 768px
  - [ ] Mobile 375px

---

## 📈 METRICS TRACKED

```
Weekly Dashboard:
├─ Test Coverage: 85%+ (target: 90%)
├─ Bug Severity Breakdown:
│  ├─ Critical: 0
│  ├─ High: <3
│  └─ Medium: <10
├─ Performance Score: 92/100
├─ Uptime: 99.95%
└─ Deploy Frequency: 2x/day (staging), 1x/day (prod)
```

---

## 🚨 BUG TRIAGE

### Priority Levels
- **P0 (Critical)**: App broken, data loss, security breach → Fix immediately
- **P1 (High)**: Major feature broken → Fix this sprint
- **P2 (Medium)**: Feature degraded → Fix next sprint
- **P3 (Low)**: Nice-to-have improvement → Backlog

---

## ✅ READY TO START

- [ ] Test framework installed (Vitest)
- [ ] Playwright setup complete
- [ ] Lighthouse CI configured
- [ ] Test template created
- [ ] First test written + passing

**Target Start Date**: Day 1 of Dev Sprint 🚀
