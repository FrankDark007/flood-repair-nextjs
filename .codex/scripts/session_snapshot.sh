#!/bin/sh
set -eu

BRANCH=$(git branch --show-current 2>/dev/null || echo "UNKNOWN")

printf "Branch: %s\n" "$BRANCH"

printf "Status:\n"
if git status -sb >/dev/null 2>&1; then
  git status -sb
else
  echo "UNKNOWN"
fi

printf "Last 5 commits:\n"
if git log -5 --oneline >/dev/null 2>&1; then
  git --no-pager log -5 --oneline
else
  echo "UNKNOWN"
fi

printf "Modified files:\n"
if git status --porcelain >/dev/null 2>&1; then
  git status --porcelain || true
else
  echo "UNKNOWN"
fi
