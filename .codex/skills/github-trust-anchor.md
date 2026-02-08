# GitHub Trust Anchor (Repo-Local Skill)

Purpose: prove git identity, auth, and write-path before real work.

## 1) Validate git identity (global + local)
Commands:
- `git config --global user.name`
- `git config --global user.email`
- `git config --local user.name`
- `git config --local user.email`

## 2) Validate remote + protocol (SSH/HTTPS)
Commands:
- `git remote -v`

## 3) Prove auth
If SSH remote:
- `ssh -T git@github.com`
If HTTPS remote:
- `git ls-remote <remote-url>`

## 4) Prove write-path (temporary commit + push)
Commands:
- create a temporary file under `.codex/` (e.g. `.codex/.trust-anchor.tmp`)
- `git add .codex/.trust-anchor.tmp`
- `git commit -m "chore: trust anchor temp"`
- `git push -u origin <branch>`

## 5) Cleanup commit + push
Commands:
- `git rm .codex/.trust-anchor.tmp`
- `git commit -m "chore: remove trust anchor temp"`
- `git push`

## 6) Final report
Output one line:
- `GITHUB: VERIFIED` or `GITHUB: FAILED`
If FAILED, include exact fix commands.
