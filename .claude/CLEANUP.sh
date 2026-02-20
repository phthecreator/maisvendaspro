#!/bin/bash
# CLEANUP.sh - Remove token budget monitoring files
# Usage: bash .claude/CLEANUP.sh

echo "🗑️  Removing token budget monitoring files..."

rm -f .claude/rules/token-budget.md
rm -f .claude/rules/monitoring-checklist.md
rm -f .claude/hooks/pre-commit-check.sh
rm -f .claude/CLEANUP.sh

echo "✅ Cleanup complete. Files removed:"
echo "  - .claude/rules/token-budget.md"
echo "  - .claude/rules/monitoring-checklist.md"
echo "  - .claude/hooks/pre-commit-check.sh"
echo "  - .claude/CLEANUP.sh (self-destruct)"
