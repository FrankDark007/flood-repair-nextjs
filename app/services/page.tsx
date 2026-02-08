import { serviceHubs } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Services | Flood Doctor",
  description:
    "Explore residential and commercial restoration, cleanup, and specialty services across Northern Virginia.",
  path: "/services/",
});

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="bg-surface/80 bg-grid">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">Services</p>
            <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
              Service hubs built for fast response
            </h1>
            <p className="text-lg text-muted">
              Browse residential and commercial service lines. Each hub routes to defined service offerings with
              clear scopes and FAQs.
            </p>
          </div>
        </Container>
      </section>
      <Container className="py-12 md:py-16">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {serviceHubs.map((hub) => (
              <ServiceCard
                key={hub.slug}
                title={hub.title}
                description={hub.description}
                href={`/services/${hub.slug}/`}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
