import { business } from "@/content/site";

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${business.domain}/sitemap.xml\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
