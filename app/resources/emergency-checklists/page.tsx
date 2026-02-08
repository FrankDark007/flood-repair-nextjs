import { notFound } from "next/navigation";
import { resources } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const resource = resources.find((item) => item.slug === "emergency-checklists");

export const metadata = resource
  ? buildMetadata({
      title: resource.title + " | Flood Doctor",
      description: resource.description,
      path: "/resources/emergency-checklists/",
    })
  : undefined;

export default function ResourcePage() {
  if (!resource) return notFound();

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Resources", url: "https://flood.repair/resources/" },
    { name: resource.title, url: "https://flood.repair/resources/emergency-checklists/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Resources" title={resource.title} description={resource.description} />
      <Container className="py-12 md:py-16 space-y-8">
        <div className="rounded-3xl border border-border bg-white p-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Key points</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {resource.bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-brand">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-surface/80 p-6 text-sm text-muted">
          Need help now? Request service or call our emergency line for immediate response.
        </div>
      </Container>
    </div>
  );
}
