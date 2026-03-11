# Task: process-meeting

**Pipeline completo de transcricao para relatorio HTML.**

```yaml
task:
  name: process-meeting
  description: Recebe transcricao ou material de reuniao e entrega index.html finalizado
  agent: meeting-extractor + meeting-renderer
  elicit: true
  inputs:
    - transcription_source: string  # path do arquivo ou texto colado diretamente
  outputs:
    - html_report: string           # path do index.html gerado
```

## Fluxo de Execucao

### Passo 1 - Receber Input

**Elicitar do usuario:**
```
Voce pode fornecer a transcricao de duas formas:
1. Colar o texto diretamente aqui
2. Informar o path do arquivo (ex: reunioes-feitas/minha-reuniao.txt)

Qual o formato da reuniao?
A) Transcricao bruta (gravacao com falas)
B) Material pre-processado (notas, bullet points, resumo)
C) Transcricao com identificacao de falantes (Pedro: ... / Joao: ...)

Algum contexto adicional? (ex: cliente, projeto, data)
```

### Passo 2 - Extracao (Extractor Agent)

Executar o agente `meeting-extractor` com o input recebido.

- Ler o arquivo ou texto
- Aplicar instrucoes de extracao do agent
- Gerar o JSON estruturado

Se algum campo critico estiver ausente (titulo, topicos), PAUSAR e pedir confirmacao ao usuario antes de continuar.

### Passo 3 - Preview dos Dados (opcional)

Mostrar resumo do JSON extraido em formato legivel:
```
Reuniao: [titulo]
Data: [data]  |  Tipo: [tipo]
Participantes: [lista]
Topicos: [N topicos identificados]
Decisoes: [N decisoes]
Action items: [N itens]
```

Perguntar: "Os dados estao corretos? Posso gerar o HTML? (s/n - se nao, informe o que corrigir)"

### Passo 4 - Geracao HTML (Renderer Agent)

Executar o agente `meeting-renderer` com o JSON aprovado.

- Gerar o `index.html` completo
- Salvar em `reunioes-feitas/{slug}/index.html`
- Criar o diretorio se nao existir

### Passo 5 - Confirmacao

```
Relatorio gerado com sucesso!
Arquivo: reunioes-feitas/{slug}/index.html

Para visualizar: abra o arquivo no navegador
Para compartilhar: envie o arquivo HTML ou hospede em qualquer servidor estatico
```

## Notas
- O pipeline pode ser executado parcialmente (so extracao ou so geracao HTML)
- Em caso de transcricoes longas (>10.000 palavras), processar em blocos tematicos
- Preservar a lingua original da transcricao nos dados, mas os labels do template sao sempre em PT-BR
