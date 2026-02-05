#!/bin/bash

# 🏗️ MAISVENDASPRO SQUAD COMMANDER
# Comando para chamar os squads para AÇÃO

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Header
echo -e "${PURPLE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║  🏗️  MAISVENDASPRO - SQUAD COMMANDER                    ║${NC}"
echo -e "${PURPLE}╚════════════════════════════════════════════════════════╝${NC}\n"

# Função para mostrar ajuda
show_help() {
    echo -e "${CYAN}📖 COMANDOS DISPONÍVEIS:${NC}\n"
    echo -e "${GREEN}squad.sh dev${NC}              → Chamar Squad Dev (Implementação)"
    echo -e "${GREEN}squad.sh qa${NC}               → Chamar Squad QA (Qualidade)"
    echo -e "${GREEN}squad.sh sales${NC}            → Chamar Squad Comercial (Vendas)"
    echo -e "${GREEN}squad.sh board${NC}            → Chamar Advisory Board"
    echo -e "${GREEN}squad.sh all${NC}              → Chamar TODOS os squads"
    echo -e "${GREEN}squad.sh standup${NC}          → Daily standup"
    echo -e "${GREEN}squad.sh week-1${NC}           → Kickoff Week 1"
    echo -e "${GREEN}squad.sh checkpoint${NC}       → Checkpoint status"
    echo -e "${GREEN}squad.sh status${NC}           → Status geral"
    echo -e "${GREEN}squad.sh help${NC}             → Mostrar este menu\n"
}

# Função para chamar Squad Dev
call_dev() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}🏗️  ATIVANDO SQUAD DEV${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    echo -e "${GREEN}@dev ready to build!${NC}\n"
    echo -e "📋 Squad Dev - Development & Implementation"
    echo -e "👥 Composição: Dev Lead + Dev Senior Frontend + Dev Senior Backend"
    echo -e "🎯 Objetivo: Launch MVP em 7 dias"
    echo -e "📍 Localização: /.aios-core/squads/squad-dev.md\n"
    echo -e "💬 ${YELLOW}Próximo passo: Descreva a tarefa para o @dev${NC}"
    echo -e "   Exemplo: '@dev Inicia setup: Vercel + Supabase + GitHub'\n"
}

# Função para chamar Squad QA
call_qa() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}✅ ATIVANDO SQUAD QA${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    echo -e "${GREEN}@qa ready to test!${NC}\n"
    echo -e "📋 Squad QA - Quality Assurance & Testing"
    echo -e "👥 Composição: QA Lead + QA Automation + QA Manual"
    echo -e "🎯 Objetivo: >90 Lighthouse score, 0 bugs críticos"
    echo -e "📍 Localização: /.aios-core/squads/squad-qa.md\n"
    echo -e "💬 ${YELLOW}Próximo passo: Descreva o teste para o @qa${NC}"
    echo -e "   Exemplo: '@qa Setup Vitest + Lighthouse CI'\n"
}

# Função para chamar Squad Comercial
call_sales() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}💰 ATIVANDO SQUAD COMERCIAL${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    echo -e "${GREEN}@pm ready to sell!${NC}\n"
    echo -e "📋 Squad Comercial - Sales & Business Development"
    echo -e "👥 Composição: Head of Sales + SDR + Account Manager + Marketing"
    echo -e "🎯 Objetivo: 5 clientes + \$15k revenue no Mês 1"
    echo -e "📍 Localização: /.aios-core/squads/squad-comercial.md\n"
    echo -e "💬 ${YELLOW}Próximo passo: Descreva a ação de vendas para o @pm${NC}"
    echo -e "   Exemplo: '@pm Cria pitch deck do Specialist Squad'\n"
}

# Função para chamar Advisory Board
call_board() {
    echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${PURPLE}🏛️  ATIVANDO ADVISORY BOARD${NC}"
    echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    echo -e "${GREEN}Advisory Board ready to advise!${NC}\n"
    echo -e "📋 Advisory Board - Strategic Guidance"
    echo -e "👥 Composição: 6 mentores (CTO, Product, Sales, Operator, UX, Finance)"
    echo -e "🎯 Objetivo: Guidance estratégico + Accountability"
    echo -e "📍 Localização: /.aios-core/squads/advisory-board.md\n"
    echo -e "💬 ${YELLOW}Próximo passo: Agende reunião bi-weekly${NC}"
    echo -e "   Frequência: Sexta 14:00\n"
}

# Função para Daily Standup
standup() {
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${CYAN}📅 DAILY STANDUP - $(date '+%A, %d de %B de %Y')${NC}"
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    echo -e "🎯 ${YELLOW}Perguntas para cada Squad:${NC}\n"
    echo -e "  ${GREEN}@dev:${NC}   O que fiz ontem? O que faço hoje? Blockers?"
    echo -e "  ${GREEN}@qa:${NC}    Testes passando? Performance score? Bugs?"
    echo -e "  ${GREEN}@pm:${NC}    Leads gerados? Calls agendadas? Conversão?"
    echo -e "  ${PURPLE}Board:${NC}  Métricas em track? Decisões necessárias?\n"
    echo -e "⏰ ${YELLOW}Horário: 09:00 AM (15 min)${NC}"
    echo -e "📍 ${YELLOW}Formato: Async no Slack #daily-standup${NC}\n"
}

# Função para Kickoff Week 1
week_1() {
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}🚀 KICKOFF - WEEK 1${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    echo -e "📋 ${YELLOW}Tarefas por Squad:${NC}\n"
    echo -e "${BLUE}Dev Squad:${NC}"
    echo -e "  [ ] Vercel project criado + GitHub linked"
    echo -e "  [ ] Supabase project criado + schema designed"
    echo -e "  [ ] React 19 + Vite boilerplate initialized"
    echo -e "  [ ] Tailwind 4 configured"
    echo -e "  [ ] Authentication (Supabase) working"
    echo -e "  [ ] First commit pushed\n"
    echo -e "${BLUE}QA Squad:${NC}"
    echo -e "  [ ] Vitest setup + example tests"
    echo -e "  [ ] Playwright E2E setup"
    echo -e "  [ ] Lighthouse CI configured"
    echo -e "  [ ] LogRocket error tracking setup"
    echo -e "  [ ] Test coverage baseline (>60%)\n"
    echo -e "${BLUE}Sales Squad:${NC}"
    echo -e "  [ ] Sales collateral started"
    echo -e "  [ ] CRM (Pipedrive) setup begun"
    echo -e "  [ ] Sales process documented"
    echo -e "  [ ] Scripts + templates ready\n"
    echo -e "⏰ ${YELLOW}Target: End of Week 1${NC}\n"
}

# Função para Checkpoint
checkpoint() {
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}📊 CHECKPOINT - Mid-Week Review${NC}"
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    echo -e "🎯 ${CYAN}Métricas a Revisar:${NC}\n"
    echo -e "  ${GREEN}@dev:${NC}"
    echo -e "    ✓ Repos criados?"
    echo -e "    ✓ Boilerplate pronto?"
    echo -e "    ✓ Deployment testado?\n"
    echo -e "  ${GREEN}@qa:${NC}"
    echo -e "    ✓ Test framework pronto?"
    echo -e "    ✓ CI/CD pipeline working?"
    echo -e "    ✓ Performance baselines set?\n"
    echo -e "  ${GREEN}@pm:${NC}"
    echo -e "    ✓ Sales assets ready?"
    echo -e "    ✓ Leads pipeline started?"
    echo -e "    ✓ First outreach sent?\n"
    echo -e "💬 ${YELLOW}Ação: Reportar blockers + Adjust targets if needed${NC}\n"
}

# Função para Status Geral
status() {
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${CYAN}📊 STATUS GERAL DO PROJETO${NC}"
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    echo -e "📁 ${GREEN}Documentação:${NC}"
    echo -e "  ✅ PRD completa"
    echo -e "  ✅ ADR técnico (5 decisões)"
    echo -e "  ✅ Tech Stack definido"
    echo -e "  ✅ Squads estruturados\n"
    echo -e "👥 ${GREEN}Squads:${NC}"
    echo -e "  ⏳ Squad Dev: Pronto para iniciar"
    echo -e "  ⏳ Squad QA: Pronto para iniciar"
    echo -e "  ⏳ Squad Comercial: Pronto para iniciar"
    echo -e "  ⏳ Advisory Board: Pronto para iniciar\n"
    echo -e "🎯 ${GREEN}Targets:${NC}"
    echo -e "  🚀 MVP: 7 dias"
    echo -e "  💰 Month 1: \$15k revenue"
    echo -e "  📈 Q1: \$138k revenue"
    echo -e "  🔥 Series A: Q2 2026\n"
    echo -e "📍 ${YELLOW}Próximo passo: ./squad.sh week-1${NC}\n"
}

# Função para chamar TODOS
call_all() {
    echo -e "${PURPLE}╔════════════════════════════════════════════════════════╗${NC}"
    echo -e "${PURPLE}║  🚀 CONVOCANDO TODOS OS SQUADS                         ║${NC}"
    echo -e "${PURPLE}╚════════════════════════════════════════════════════════╝${NC}\n"
    
    call_dev
    echo -e ""
    call_qa
    echo -e ""
    call_sales
    echo -e ""
    call_board
    
    echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${PURPLE}🎯 TODOS OS SQUADS ATIVADOS E PRONTOS PARA AÇÃO${NC}"
    echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    echo -e "💬 ${YELLOW}Próximo: Descreva as tarefas para cada squad${NC}\n"
}

# Main
case "${1:-help}" in
    dev)
        call_dev
        ;;
    qa)
        call_qa
        ;;
    sales)
        call_sales
        ;;
    board)
        call_board
        ;;
    all)
        call_all
        ;;
    standup)
        standup
        ;;
    week-1)
        week_1
        ;;
    checkpoint)
        checkpoint
        ;;
    status)
        status
        ;;
    help|*)
        show_help
        ;;
esac
