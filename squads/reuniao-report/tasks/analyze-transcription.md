# Task: analyze-transcription

**Extrai dados estruturados de uma transcricao sem gerar HTML.**

```yaml
task:
  name: analyze-transcription
  description: Analisa transcricao e retorna JSON estruturado para revisao ou uso por outro sistema
  agent: meeting-extractor
  elicit: false
  inputs:
    - transcription: string   # texto bruto ou path do arquivo
    - context: string         # contexto adicional (opcional)
  outputs:
    - structured_data: JSON   # dados estruturados da reuniao
```

## Fluxo

1. Receber o texto da transcricao
2. Aplicar as instrucoes de extracao do agente `meeting-extractor`
3. Retornar o JSON estruturado
4. Nao gerar HTML - apenas os dados

## Quando Usar

- Quero revisar os dados antes de gerar o HTML
- Quero exportar os dados para outro sistema
- Quero testar a qualidade da extracao em uma transcricao nova
