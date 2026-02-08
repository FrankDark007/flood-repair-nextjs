# Decisions

## 2026-02-08
- Selected fonts: Sora (display) and Source Sans 3 (body) for a modern, clean look while avoiding default system stacks.
- Enabled `trailingSlash` in `next.config.ts` to match the required URL structure.
- Programmatic service pages generated from `content/site.ts` to ensure consistent SEO and content structure.
- Resource and blog detail pages use dynamic routes with `generateStaticParams` for stable SEO-friendly paths.
