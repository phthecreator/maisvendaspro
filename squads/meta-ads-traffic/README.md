# Meta Ads Traffic Squad

> **Gestão Autônoma de Tráfego Pago no Meta Ads (Facebook/Instagram)**

## Visão Geral

Este squad é especializado em gerenciar campanhas de tráfego pago utilizando a Meta Marketing API. Ele automatiza a criação, otimização e análise de campanhas, permitindo escalar resultados com precisão de dados.

### Agentes Especializados

| Agente | Função | Responsabilidade |
|--------|--------|------------------|
| **@meta-ads-traffic:TrafficManager** | Gestor de Tráfego | Execução de campanhas, gestão de orçamento, lances e segmentação. |
| **@meta-ads-traffic:CreativeStrategist** | Estrategista Criativo | Análise de criativos, copywriting e briefing de novos ângulos. |
| **@meta-ads-traffic:DataAnalyst** | Analista de Dados | Relatórios de performance, insights de audiência e auditoria de conta. |

## Funcionalidades Principais

- **Lançamento de Campanhas**: Criação estruturada de campanhas, conjuntos de anúncios e anúncios.
- **Otimização Diária**: Monitoramento de KPIs (ROAS, CPA, CTR) e ajustes automáticos de orçamento/lances.
- **Análise de Criativos**: Identificação de vencedores e perdedores com base em métricas de retenção e conversão.
- **Relatórios Automatizados**: Geração de relatórios de performance periódicos.

## Pré-requisitos

Para que este squad funcione corretamente, configure as seguintes variáveis no seu `.env`:

```env
META_APP_ID=seu_app_id
META_APP_SECRET=seu_app_secret
META_ACCESS_TOKEN=seu_access_token
META_AD_ACCOUNT_ID=act_seu_account_id
```

## Como Usar

### Ativação do Squad
```bash
@meta-ads-traffic
```

### Comandos Comuns
- `*launch-campaign`: Iniciar assistente de criação de campanha.
- `*optimize`: Rodar rotina de otimização diária.
- `*audit`: Gerar relatório de saúde da conta.
- `*analyze-creatives`: Analisar performance dos criativos ativos.

---
**Synkra AIOS Module** - *Meta Ads Traffic Squad*
