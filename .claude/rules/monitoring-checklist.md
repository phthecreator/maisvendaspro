# Monitoring Checklist - Dev Agent (Dex)

**Objetivo:** Garantir que o outro Claude não desperdice tokens.

## Red Flags (Intervir Imediatamente)

- [ ] Adiciona dependência sem necessidade (ex: lib nova pra fazer o que já existe)
- [ ] Commita com >20% testes falhando (16/132 = 12% atual, ok temporariamente)
- [ ] Gera docs de 500+ linhas para mudança trivial
- [ ] Re-executa TODOS os testes a cada mudança (deveria usar `-k pattern`)
- [ ] Explica código linha-por-linha (desperdício massivo)
- [ ] Cria múltiplos arquivos de report/log redundantes

## Yellow Flags (Observar)

- [ ] Commit body > 20 linhas (pode ser conciso)
- [ ] Roda `pytest` sem `-W ignore` (29 warnings = noise)
- [ ] Cria story/design doc antes de implementar (overthinking)
- [ ] Refatora código não relacionado (scope creep)

## Green Flags (Deixar rolar)

- [x] Feature usa infra existente (pgvector, LangChain já instalados)
- [x] Testes novos passam 100%
- [x] Commits atômicos e descritivos
- [x] Não adiciona deps novas

## Economia Garantida (Opção 1)

Deixando o RAG implementar **com as regras de token-budget.md ativas**:

- **Testes seletivos:** -50% tokens (executa só testes relacionados)
- **Warnings silenciados:** -15% tokens (remove 29 linhas de noise por run)
- **Docs opcionais:** -40% tokens (não gera report se < 500 LOC)
- **Commits concisos:** -20% tokens (body opcional)

**Total: 40-50% economia vs modo verboso**

## Ação Manual se Red Flag

```bash
# Se outro Claude disparar Red Flag:
# 1. Pausar trabalho dele (Ctrl+C no terminal)
# 2. Corrigir problema aqui
# 3. Resumir trabalho dele

# Exemplo: Bloquear nova dependência
git diff requirements.txt  # Review mudança
git restore requirements.txt  # Reverter se desnecessária
```

## Auto-Monitor (Low Effort)

```bash
# Watch git status a cada 30s (low token cost)
watch -n 30 "git status --short | head -10"

# Watch pytest summary (só quando testes rodarem)
tail -f services/ai-python/.pytest_cache/pytest.log 2>/dev/null || true
```
