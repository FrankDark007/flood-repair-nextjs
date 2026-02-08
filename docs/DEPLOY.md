# Deployment (Vercel)

## One-Time Setup
1. Log in to Vercel.
2. Import the GitHub repo `flood-repair-nextjs`.
3. Framework: Next.js (auto-detected).
4. Build command: `npm run build`.
5. Output: default (Next.js).
6. Deploy.

## Domain
1. Add custom domain: `flood.repair`.
2. Follow Vercel DNS instructions.
3. Verify HTTPS is active.

## Environment Variables
- None required for V1.

## Post-Deploy Checks
- Visit `/sitemap.xml` and `/robots.txt`.
- Verify primary routes load and the request form submits.
- Confirm the mobile CTA bar is visible on small screens.
