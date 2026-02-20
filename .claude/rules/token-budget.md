# Token Budget Rules

**Objetivo:** Reduzir consumo de tokens em 40-60% mantendo qualidade.

## Commits

- **Subject:** Max 72 chars, conventional commits obrigatório
- **Body:** Opcional. Só incluir se mudança for complexa/breaking
- **Co-authored-by:** Manter (é leve)

## Testes

- **Execução seletiva:** Use `pytest -k pattern` para rodar só testes relacionados
- **Silenciar warnings:** `pytest -W ignore::DeprecationWarning` (pyiceberg noise)
- **Falhas:** Max 5% de falhas tolerado em testes legados durante refactor
- **Novos testes:** Devem passar 100%

## Documentação

- **Reports de implementação:** Só criar se feature > 500 LOC
- **Design docs:** Só atualizar seção "Status" ao completar
- **CHANGELOG:** Não gerar automático, user atualiza manual

## Code Review

- **Diff verboso:** Evitar. Só mostrar hunks relevantes
- **Explicações:** Ser conciso. "Adicionado X para Y" > parágrafo longo

## Tripwires (Auto-block)

Estas ações exigem aprovação explícita do user:

1. **Nova dependência** não listada em `requirements.txt` ou `package.json`
2. **Testes novos < 80%** passando
3. **Breaking changes** em APIs públicas
4. **Commits > 1000 LOC** sem justificativa

## Economia esperada

- Commits: -30% tokens (body opcional)
- Testes: -50% tokens (execução seletiva + warnings silenciados)
- Docs: -60% tokens (reports opcionais)
- Code review: -20% tokens (diffs concisos)

**Total estimado: 40-50% redução** em operações repetitivas.
