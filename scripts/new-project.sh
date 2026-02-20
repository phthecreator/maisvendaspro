#!/bin/bash
# ============================================================
# AIOS Template - Criar Novo Projeto
# Uso: ./scripts/new-project.sh <nome-do-projeto> [diretorio-destino]
#
# Exemplos:
#   ./scripts/new-project.sh ecommerce-loja
#   ./scripts/new-project.sh crm-vendas ~/projetos
# ============================================================

set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Argumentos
PROJECT_NAME=$1
DEST_DIR=${2:-$(dirname "$(cd "$(dirname "$0")" && pwd)")/..}

# Resolve o diretório do template (onde este script mora)
TEMPLATE_DIR=$(cd "$(dirname "$0")/.." && pwd)

# Validacoes
if [ -z "$PROJECT_NAME" ]; then
  echo -e "${RED}Uso: ./scripts/new-project.sh <nome-do-projeto> [diretorio-destino]${NC}"
  echo ""
  echo "Exemplos:"
  echo "  ./scripts/new-project.sh ecommerce-loja"
  echo "  ./scripts/new-project.sh crm-vendas ~/projetos"
  exit 1
fi

PROJECT_PATH="$DEST_DIR/$PROJECT_NAME"

if [ -d "$PROJECT_PATH" ]; then
  echo -e "${RED}Projeto '$PROJECT_NAME' ja existe em $PROJECT_PATH${NC}"
  exit 1
fi

echo -e "${BLUE}============================================================${NC}"
echo -e "${BLUE}  AIOS Template - Criando Novo Projeto${NC}"
echo -e "${BLUE}============================================================${NC}"
echo ""
echo -e "  Template:  ${YELLOW}$TEMPLATE_DIR${NC}"
echo -e "  Projeto:   ${YELLOW}$PROJECT_PATH${NC}"
echo ""

# 1. Copiar template
echo -e "${GREEN}[1/6]${NC} Copiando template..."
cp -r "$TEMPLATE_DIR" "$PROJECT_PATH"

# 2. Remover git do template
echo -e "${GREEN}[2/6]${NC} Removendo historico git do template..."
rm -rf "$PROJECT_PATH/.git"

# 3. Remover estado de runtime (se existir)
echo -e "${GREEN}[3/6]${NC} Limpando estado de runtime..."
rm -rf "$PROJECT_PATH/.aios"
rm -rf "$PROJECT_PATH/.synapse/sessions"
rm -rf "$PROJECT_PATH/.synapse/cache"
mkdir -p "$PROJECT_PATH/.synapse/sessions"
mkdir -p "$PROJECT_PATH/.synapse/cache"
rm -rf "$PROJECT_PATH/.aios-core.tmp"

# 4. Criar estrutura de projeto
echo -e "${GREEN}[4/6]${NC} Criando estrutura do projeto..."
mkdir -p "$PROJECT_PATH/docs"
mkdir -p "$PROJECT_PATH/src"

# 5. Ajustar core-config.yaml (se existir)
CORE_CONFIG="$PROJECT_PATH/.aios-core/core-config.yaml"
if [ -f "$CORE_CONFIG" ]; then
  echo -e "${GREEN}[5/6]${NC} Ajustando core-config.yaml..."
  # Muda type de template para greenfield
  sed -i.bak 's/type: template/type: greenfield/' "$CORE_CONFIG" 2>/dev/null || true
  rm -f "$CORE_CONFIG.bak"
else
  echo -e "${YELLOW}[5/6]${NC} core-config.yaml nao encontrado (AIOS sera instalado depois)"
fi

# 6. Inicializar git do projeto
echo -e "${GREEN}[6/6]${NC} Inicializando git do projeto..."
cd "$PROJECT_PATH"
git init -q
git add .
git commit -q -m "feat: initial project setup from aios-master-template"

echo ""
echo -e "${GREEN}============================================================${NC}"
echo -e "${GREEN}  Projeto '$PROJECT_NAME' criado com sucesso!${NC}"
echo -e "${GREEN}============================================================${NC}"
echo ""
echo -e "  Proximos passos:"
echo ""
echo -e "  ${YELLOW}cd $PROJECT_PATH${NC}"
echo -e "  ${YELLOW}claude${NC}"
echo ""
echo -e "  Dentro do Claude Code:"
echo -e "  ${BLUE}/AIOS:agents:pm${NC}"
echo -e "  ${BLUE}> *create-prd${NC}"
echo ""
