import { pages } from "@/content/site";
import { locations } from "@/content/locations";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.locations.title,
  description: pages.locations.description,
  path: "/locations/",
});

export default function LocationsPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Locations", url: "https://flood.repair/locations/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Locations" title={pages.locations.headline} description={pages.locations.subhead} />
      <Container className="py-12 md:py-16 space-y-8">
        <p className="text-sm text-muted">
          We serve the region via local pages. Edit the list below in <code>content/locations.ts</code> as pages go
          live.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <a
              key={location.city}
              href={location.url}
              className="rounded-2xl border border-border bg-white p-4 text-sm font-semibold text-ink hover:border-brand/40"
            >
              {location.city}
              {location.status === "placeholder" ? (
                <span className="ml-2 text-xs font-normal text-muted">(placeholder)</span>
              ) : null}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
