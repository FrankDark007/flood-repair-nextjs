#!/bin/sh
set -eu

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)

PASS=1

run_check() {
  NAME="$1"
  shift
  if "$@" >/dev/null 2>&1; then
    echo "PASS: $NAME"
  else
    echo "FAIL: $NAME"
    PASS=0
  fi
}

"$SCRIPT_DIR/session_snapshot.sh" || PASS=0
"$SCRIPT_DIR/session_resume.sh" || PASS=0

run_check "codex README" test -f .codex/README.md
run_check "PROJECT_STATE" test -f .codex/PROJECT_STATE.md
run_check "TRUTH_ENFORCER" test -f .codex/TRUTH_ENFORCER.md
run_check "CHECKPOINT" test -f .codex/CHECKPOINT.md
run_check "github-trust-anchor skill" test -f .codex/skills/github-trust-anchor.md

REMOTE_URL=$(git remote get-url origin 2>/dev/null || true)
if [ -n "$REMOTE_URL" ]; then
  echo "PASS: git remote exists"
else
  echo "FAIL: git remote exists"
  PASS=0
fi

if [ -n "$REMOTE_URL" ]; then
  case "$REMOTE_URL" in
    git@github.com:*)
      if ssh -T git@github.com >/dev/null 2>&1; then
        echo "PASS: git auth"
      else
        echo "FAIL: git auth"
        PASS=0
      fi
      ;;
    https://github.com/*)
      if git ls-remote "$REMOTE_URL" >/dev/null 2>&1; then
        echo "PASS: git auth"
      else
        echo "FAIL: git auth"
        PASS=0
      fi
      ;;
    *)
      echo "FAIL: git auth (unknown remote protocol)"
      PASS=0
      ;;
  esac
fi

if [ "$PASS" -eq 1 ]; then
  echo "PREFLIGHT: PASS"
  exit 0
else
  echo "PREFLIGHT: FAIL"
  exit 1
fi
