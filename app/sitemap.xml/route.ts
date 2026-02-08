import { business, serviceHubs, resources } from "@/content/site";
import { blogPosts } from "@/content/blog";

const baseUrl = business.domain;

const staticRoutes = [
  "/",
  "/services/",
  "/about/",
  "/contact/",
  "/reviews/",
  "/locations/",
  "/request/",
  "/resources/",
  "/blog/",
  "/nearme/water-damage-restoration/",
  "/careers/",
  "/privacy-policy/",
  "/terms/",
];

const hubRoutes = serviceHubs.map((hub) => `/services/${hub.slug}/`);
const categoryRoutes = serviceHubs.flatMap((hub) =>
  hub.categories.map((cat) => `/services/${hub.slug}/${cat.slug}/`)
);
const serviceRoutes = serviceHubs.flatMap((hub) =>
  hub.categories.flatMap((cat) =>
    cat.items.map((item) => `/services/${hub.slug}/${cat.slug}/${item.slug}/`)
  )
);

const resourceRoutes = resources.map((item) => `/resources/${item.slug}/`);
const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}/`);

const allRoutes = [
  ...staticRoutes,
  ...hubRoutes,
  ...categoryRoutes,
  ...serviceRoutes,
  ...resourceRoutes,
  ...blogRoutes,
];

export function GET() {
  const lastmod = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allRoutes
    .map((route) => `  <url><loc>${baseUrl}${route}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
