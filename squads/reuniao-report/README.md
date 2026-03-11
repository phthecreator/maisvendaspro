# Meeting Report Squad

Transforma transcricoes de reunioes em apresentacoes HTML executivas com identidade visual da MVP.

## Uso Rapido

Ative o squad e use o comando principal:

```
*process-meeting
```

Cole a transcricao ou informe o path do arquivo quando solicitado.

## O que voce recebe

Um arquivo `index.html` auto-contido com:
- Cabecalho executivo com metadata da reuniao
- Sumario com headline de impacto
- Topicos discutidos em cards visuais
- Decisoes com nivel de impacto destacado
- Action items com responsavel e prazo
- Frases-chave em citacoes destacadas
- Pontos em aberto / blockers
- Preview da proxima reuniao

Abre no navegador. Compartilha como arquivo. Imprime como PDF.

## Estrutura de Output

```
reunioes-feitas/
  {slug-da-reuniao}/
    index.html
```

Exemplo: "Alinhamento Lancamento MVP Academy" → `reunioes-feitas/alinhamento-lancamento-mvp-academy/index.html`

## Comandos

| Comando | Descricao |
|---|---|
| `*process-meeting` | Pipeline completo (recomendado) |
| `*analyze-transcription` | Somente extrai dados estruturados |
| `*generate-html-report` | Somente gera HTML a partir de dados prontos |

## Formatos de Input Suportados

- Transcricao bruta de gravacao
- Transcricao com timestamps `[00:00]`
- Transcricao com falas identificadas `Pedro: ...`
- Notas de reuniao em markdown
- Material pre-processado (bullet points, resumos)
