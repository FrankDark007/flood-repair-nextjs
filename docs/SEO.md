# SEO System

## Titles and Descriptions
- Source of truth: `content/site.ts` and `content/blog.ts`.
- Page metadata is generated with `buildMetadata` in `lib/seo.ts`.
- Service pages inherit `metaTitle` and `metaDescription` from `content/site.ts`.

## Schema (JSON-LD)
- Sitewide: Organization + LocalBusiness + WebSite via `lib/schema.ts` in `app/layout.tsx`.
- Breadcrumbs: implemented on all nested pages with `breadcrumbSchema`.
- Service pages: `Service` + `FAQPage` schema per service route.
- Blog posts: `BlogPosting` schema per blog detail page.
- Reviews: AggregateRating is disabled by default in `app/reviews/page.tsx` and requires real data to enable.

## Sitemap
- Generated in `app/sitemap.xml/route.ts`.
- Includes all static routes, service hubs, service categories, service detail pages, resource pages, and blog posts.

## Robots
- Generated in `app/robots.txt/route.ts`.
- References `/sitemap.xml` and allows full crawl.

## Add a New Service
1. Add the service entry in `content/site.ts` within the correct hub and category.
2. Ensure `slug`, `definition`, `scope`, `process`, and `faqs` are filled.
3. Rebuild: Next.js will include it in sitemap and static params automatically.

## Internal Linking Strategy
- Service pages link to related services and key resources.
- Hub and category pages link to all child services.
- Blog posts and resources are cross-linked from hubs and service pages where relevant.
