# Task: generate-html-report

**Gera o index.html a partir de dados ja estruturados (JSON).**

```yaml
task:
  name: generate-html-report
  description: Usa o JSON estruturado para gerar o relatorio HTML com brand MVP
  agent: meeting-renderer
  elicit: false
  inputs:
    - structured_data: JSON   # output do analyze-transcription
    - output_dir: string      # diretorio de saida (default: reunioes-feitas/)
  outputs:
    - html_file: string       # path do index.html gerado
```

## Fluxo

1. Receber o JSON estruturado
2. Calcular o slug a partir do titulo: `meeting.title` → kebab-case sem acentos
3. Criar o diretorio `{output_dir}/{slug}/` se nao existir
4. Usar o template `templates/meeting-report.html` como base
5. Substituir todos os placeholders `{{VARIAVEL}}` com os dados reais
6. Renderizar HTML de cada secao:

### Renderizacao de Participantes (`{{PARTICIPANTS_HTML}}`)
```html
<div class="participant-chip">
  <div class="participant-avatar">INICIAIS</div>
  <div class="participant-info">
    <span class="participant-name">Nome</span>
    <span class="participant-role">Cargo/Papel</span>
  </div>
</div>
```
- Iniciais: primeiras letras do nome (max 2 chars)
- Se papel for vazio, omitir o `<span class="participant-role">`

### Renderizacao de Topicos (`{{TOPICS_HTML}}`)
```html
<div class="topic-card fade-up fade-up-delay-N">
  <div class="topic-header">
    <span class="topic-num">0N</span>
    <span class="topic-title">Titulo</span>
  </div>
  <p class="topic-content">Conteudo...</p>
  <div class="topic-tags">
    <span class="tag">tag1</span>
  </div>
</div>
```
- N = index + 1, com zero a esquerda ate 09
- fade-up-delay-N: ciclar 1-4

### Renderizacao de Decisoes (`{{DECISIONS_HTML}}`)
```html
<div class="decision-card impact-IMPACTO fade-up">
  <span class="decision-icon">&#9654;</span>
  <div class="decision-body">
    <p class="decision-text">Descricao</p>
    <div class="decision-footer">
      <span class="decision-owner">Responsavel: Owner</span>
      <span class="impact-badge IMPACTO">Impacto</span>
    </div>
  </div>
</div>
```
- IMPACTO: `high`, `medium` ou `low` (mapear do JSON: alto→high, medio→medium, baixo→low)

### Renderizacao de Action Items (`{{ACTIONS_HTML}}`)
```html
<div class="action-item priority-PRIORIDADE fade-up">
  <span class="action-task">
    <span class="priority-dot PRIORIDADE"></span>
    Tarefa
  </span>
  <span class="action-owner">Owner</span>
  <span class="action-deadline">Prazo</span>
</div>
```
- PRIORIDADE: `urgente`, `alta`, `media` ou `baixa` (mapear do JSON)

### Renderizacao de Quotes (`{{QUOTES_HTML}}`)
```html
<div class="quote-card fade-up">
  <span class="quote-mark">&ldquo;</span>
  <p class="quote-text">Citacao aqui...</p>
  <p class="quote-author">&#8212; Nome do autor</p>
</div>
```

### Renderizacao de Blockers (`{{BLOCKERS_HTML}}`)
```html
<div class="blocker-item fade-up">
  <span class="blocker-icon">&#9888;</span>
  <p class="blocker-text">Descricao do blocker</p>
</div>
```

### Variaveis Simples
| Placeholder | Fonte |
|---|---|
| `{{MEETING_TITLE}}` | `meeting.title` |
| `{{MEETING_TITLE_PART_1}}` | Parte antes da ultima palavra ou virgula |
| `{{MEETING_TITLE_PART_2}}` | Ultima palavra/frase (vai virar amber italic) |
| `{{MEETING_TYPE}}` | `meeting.type` capitalizado |
| `{{MEETING_DATE}}` | `meeting.date` formatado |
| `{{MEETING_DURATION}}` | `meeting.duration` |
| `{{MEETING_STATUS}}` | `meeting.status` |
| `{{PARTICIPANT_COUNT}}` | `participants.length` |
| `{{DECISION_COUNT}}` | `decisions.length` |
| `{{ACTION_COUNT}}` | `action_items.length` |
| `{{SUMMARY_HEADLINE}}` | `summary.headline` |
| `{{SUMMARY_OVERVIEW}}` | `summary.overview` |
| `{{NEXT_DATE}}` | `next_meeting.date` |
| `{{NEXT_AGENDA}}` | `next_meeting.agenda_preview` |
| `{{GENERATED_DATE}}` | Data atual no formato DD/MM/YYYY |

### Blocos Condicionais
- `{{#if HAS_QUOTES}} ... {{/if HAS_QUOTES}}`: incluir se `key_quotes.length > 0`
- `{{#if HAS_BLOCKERS}} ... {{/if HAS_BLOCKERS}}`: incluir se `blockers.length > 0`

7. Salvar o arquivo `index.html` no diretorio correto
8. Confirmar: "Relatorio salvo em `{path}/index.html`"
