#!/bin/bash
# Active monitoring script for other Claude terminal
# Run in background: bash .claude/monitor.sh &

MONITOR_INTERVAL=10  # seconds
LOG_FILE=".claude/monitor.log"
ALERT_FILE=".claude/ALERT.txt"

# Colors for terminal output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Initialize
echo "🔍 Monitoring activated at $(date)" > "$LOG_FILE"
echo "" > "$ALERT_FILE"

# Baseline
LAST_COMMIT=$(git rev-parse HEAD 2>/dev/null || echo "none")
LAST_FILE_COUNT=$(git status --short | wc -l)

echo -e "${GREEN}✅ Monitoring ACTIVE${NC}"
echo "Watching: imobia-v1"
echo "Interval: ${MONITOR_INTERVAL}s"
echo "Log: $LOG_FILE"
echo "---"

while true; do
  TIMESTAMP=$(date "+%H:%M:%S")

  # Check for new commits
  CURRENT_COMMIT=$(git rev-parse HEAD 2>/dev/null || echo "none")
  if [ "$CURRENT_COMMIT" != "$LAST_COMMIT" ] && [ "$LAST_COMMIT" != "none" ]; then
    COMMIT_MSG=$(git log -1 --pretty=format:"%s")
    COMMIT_FILES=$(git diff --stat HEAD~1 HEAD | tail -1)

    echo -e "${GREEN}[${TIMESTAMP}] ✅ NEW COMMIT${NC}"
    echo "  Message: $COMMIT_MSG"
    echo "  Files: $COMMIT_FILES"

    # Check commit size (Red Flag: > 1000 LOC)
    LINES_CHANGED=$(git diff --shortstat HEAD~1 HEAD | grep -oE "[0-9]+ insertion" | grep -oE "[0-9]+" || echo "0")
    if [ "$LINES_CHANGED" -gt 1000 ]; then
      echo -e "${RED}[${TIMESTAMP}] 🚨 RED FLAG: Large commit ($LINES_CHANGED lines)${NC}" | tee -a "$ALERT_FILE"
    fi

    # Check for new dependencies (Red Flag)
    if git diff HEAD~1 HEAD --name-only | grep -q -E "(requirements.txt|package.json)"; then
      NEW_DEPS=$(git diff HEAD~1 HEAD requirements.txt package.json 2>/dev/null | grep "^+" | grep -v "^+++" | head -5)
      if [ -n "$NEW_DEPS" ]; then
        echo -e "${RED}[${TIMESTAMP}] 🚨 RED FLAG: Dependencies modified${NC}" | tee -a "$ALERT_FILE"
        echo "$NEW_DEPS" | head -3
      fi
    fi

    LAST_COMMIT=$CURRENT_COMMIT
  fi

  # Check for modified files
  CURRENT_FILE_COUNT=$(git status --short | wc -l | tr -d ' ')
  if [ "$CURRENT_FILE_COUNT" -ne "$LAST_FILE_COUNT" ]; then
    MODIFIED=$(git status --short | grep "^ M" | wc -l | tr -d ' ')
    ADDED=$(git status --short | grep "^??" | wc -l | tr -d ' ')

    if [ "$MODIFIED" -gt 0 ] || [ "$ADDED" -gt 0 ]; then
      echo -e "${YELLOW}[${TIMESTAMP}] 📝 Files changed: +${ADDED} modified, ${MODIFIED} staged${NC}"
    fi

    LAST_FILE_COUNT=$CURRENT_FILE_COUNT
  fi

  # Check if tests are running (look for pytest process)
  if ps aux | grep -q "[p]ytest"; then
    echo -e "${YELLOW}[${TIMESTAMP}] 🧪 Tests running...${NC}"

    # Wait for completion and check results
    sleep 3
    if [ -f "services/ai-python/.pytest_cache/v/cache/lastfailed" ]; then
      FAILED_COUNT=$(cat services/ai-python/.pytest_cache/v/cache/lastfailed 2>/dev/null | grep -c "test_" || echo "0")
      if [ "$FAILED_COUNT" -gt 0 ]; then
        echo -e "${RED}[${TIMESTAMP}] ❌ Tests failed: $FAILED_COUNT${NC}" | tee -a "$ALERT_FILE"
      fi
    fi
  fi

  # Check for alerts
  if [ -s "$ALERT_FILE" ]; then
    echo -e "${RED}🚨 ALERTS DETECTED - Check $ALERT_FILE${NC}"
  fi

  sleep "$MONITOR_INTERVAL"
done
