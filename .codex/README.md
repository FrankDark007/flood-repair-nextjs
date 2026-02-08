# Codex OS (Repo-Local)

Use this system at the start of every session.

## Preflight (always first)
Run:
- `.codex/scripts/preflight.sh`

What it does:
- Captures current repo snapshot
- Summarizes PROJECT_STATE
- Verifies required .codex files
- Verifies git remote + auth
- Reports PASS/FAIL and stops on FAIL

## Resume a Session
Run:
- `.codex/scripts/session_resume.sh`

## Checkpointing
Every 30–45 minutes (or before major changes):
- Update `.codex/PROJECT_STATE.md`
- Record: Last Completed Step, Files Touched, Next Step

## Snapshot / Resume Scripts
- Snapshot: `.codex/scripts/session_snapshot.sh`
- Resume: `.codex/scripts/session_resume.sh`

## If Something Fails
- Read `.codex/PROJECT_STATE.md`
- Re-run `.codex/scripts/preflight.sh`
- Fix any FAIL items exactly as reported
- If unclear, stop and document UNKNOWN in PROJECT_STATE

## Optional Local Git Alias (Repo-Local)
Set repo-local aliases (no global changes):  
`git config alias.st status -sb`  
`git config alias.co checkout`

## Optional Pre-Commit Note
If you add a hook, keep it repo-local and reversible. Do not install global hooks.
