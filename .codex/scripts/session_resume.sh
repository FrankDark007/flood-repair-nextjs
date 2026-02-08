#!/bin/sh
set -eu

STATE_FILE=".codex/PROJECT_STATE.md"

extract_section() {
  awk -v h="$1" '
    $0==h {flag=1; next}
    flag && $0!="" {print; exit}
  ' "$STATE_FILE"
}

if [ -f "$STATE_FILE" ]; then
  echo "Objective: $(extract_section "## Objective (ONE ONLY)" || echo "UNKNOWN")"
  echo "Last Completed: $(extract_section "## Last Completed Step" || echo "UNKNOWN")"
  echo "Next Step: $(extract_section "## Next Step (SINGLE ACTION)" || echo "UNKNOWN")"
  echo "Blockers: $(extract_section "## Blockers / Unknowns" || echo "UNKNOWN")"
else
  echo "Objective: UNKNOWN"
  echo "Last Completed: UNKNOWN"
  echo "Next Step: UNKNOWN"
  echo "Blockers: UNKNOWN"
fi

BRANCH=$(git branch --show-current 2>/dev/null || echo "UNKNOWN")

printf "Branch: %s\n" "$BRANCH"

printf "Status:\n"
if git status -sb >/dev/null 2>&1; then
  git status -sb
else
  echo "UNKNOWN"
fi
