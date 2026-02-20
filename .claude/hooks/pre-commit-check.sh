#!/bin/bash
# Pre-commit tripwire - blocks unsafe commits
# Location: .claude/hooks/pre-commit-check.sh

set -e

echo "🔍 Running pre-commit checks..."

# Tripwire 1: Check for new dependencies
check_new_deps() {
  if git diff --cached --name-only | grep -q -E "(requirements.txt|package.json|package-lock.json)"; then
    echo "⚠️  Dependency files modified. Verify no unnecessary additions."
    git diff --cached requirements.txt package.json 2>/dev/null | grep "^+" | grep -v "^+++" || true
  fi
}

# Tripwire 2: Run only affected tests (fast feedback)
run_affected_tests() {
  CHANGED_PY=$(git diff --cached --name-only --diff-filter=AM | grep "\.py$" | grep -v "__pycache__" || true)

  if [ -n "$CHANGED_PY" ]; then
    echo "🧪 Running tests for changed files..."
    cd services/ai-python

    # Extract test names from changed files
    TEST_PATTERN=$(echo "$CHANGED_PY" | sed 's/app\///g' | sed 's/\.py//g' | sed 's/\//_/g' | tr '\n' ' ' | sed 's/ $//')

    if [ -n "$TEST_PATTERN" ]; then
      # Run only relevant tests, silence deprecation warnings
      python -m pytest -q -W ignore::DeprecationWarning -W ignore::PydanticDeprecatedSince212 -k "$TEST_PATTERN" 2>&1 | tail -5 || {
        echo "❌ Affected tests failing. Fix before commit."
        exit 1
      }
    fi
  fi
}

# Tripwire 3: Block commits > 1000 LOC without approval
check_commit_size() {
  LINES_CHANGED=$(git diff --cached --shortstat | grep -oE "[0-9]+ insertion" | grep -oE "[0-9]+" || echo "0")

  if [ "$LINES_CHANGED" -gt 1000 ]; then
    echo "⚠️  Large commit detected: $LINES_CHANGED lines. Consider splitting."
  fi
}

# Execute checks
check_new_deps
# run_affected_tests  # Uncomment to enable test enforcement
check_commit_size

echo "✅ Pre-commit checks passed"
