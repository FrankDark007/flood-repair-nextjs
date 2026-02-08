# Status

## Milestone 1 — Scaffold + Base Routing + Layout + Nav/Footer
Status: DONE
Notes:
- Next.js App Router scaffold created.
- Repo initialized and pushed to GitHub.

## Milestone 2 — Content Map + Service Page Generation
Status: DONE
Notes:
- Content source of truth added in `content/site.ts`.
- Service hubs and dynamic service routes created.
Next:
- Milestone checkpoint committed and pushed.

## Milestone 3 — All Routes Implemented + Hubs + Services
Status: DONE
Notes:
- Implemented full route tree including service hubs, resources, blog, and legal pages.
- Global layout includes header, footer, and mobile CTA bar.
Next:
- SEO/DEPLOY/GRAPHICS docs created.
- Document build warning about workspace root if it recurs.

## Milestone 4 — Request Form + API + Leads Storage
Status: DONE
Notes:
- Request form built at `/request/`.
- API route validates and stores leads in `data/leads.json`.

## Milestone 5 — SEO Complete (Metadata, Schema, Sitemap, Robots)
Status: DONE
Notes:
- `lib/seo.ts` metadata helper wired to all pages.
- JSON-LD schema added for Organization, LocalBusiness, WebSite, Breadcrumbs, Service, FAQ, and BlogPosting.
- `/sitemap.xml` and `/robots.txt` implemented.

## Milestone 6 — Animation + SVG Graphics + Final Polish
Status: DONE
Notes:
- IntersectionObserver reveals with reduced-motion guard.
- SVG assets stored in `/public/graphics` and documented in `/docs/GRAPHICS.md`.

Decisions / Tradeoffs:
- None yet.

## Verification (2026-02-08)
- Verified: service routes render, `/request` flow writes to `data/leads.json`, `npm run build`.
- Commands: `npm run build`, `npm run start`, `curl`, `node` route checks.
- Commit: `c25fe86`
