import { getServiceBySlug, business, pages } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.nearme.title,
  description: pages.nearme.description,
  path: "/nearme/water-damage-restoration/",
});

export default function NearMeWaterDamagePage() {
  const service = getServiceBySlug("residential", "restoration-services", "water-damage-restoration");
  if (!service) return null;

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Near Me", url: "https://flood.repair/nearme/water-damage-restoration/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema(service), faqSchema(service.faqs)]} />
      <section className="bg-surface/80 bg-grid">
        <Container className="py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">Near You</p>
              <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
                Water damage restoration near Vienna, VA
              </h1>
              <p className="text-lg text-muted">
                Flood Doctor responds quickly across {business.serviceArea}. We document moisture, dry to standard,
                and keep you informed from day one.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/request/" variant="primary">
                  Request Service
                </ButtonLink>
                <ButtonLink href={`tel:${business.phone}`} variant="secondary">
                  Call {business.phone}
                </ButtonLink>
              </div>
              <p className="text-sm text-muted">Emergency? Call {business.phone}.</p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-ink">Why local response matters</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Local crews reduce response time.</li>
                <li>Moisture mapping prevents hidden damage.</li>
                <li>Clear documentation supports insurance claims.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16 space-y-12">
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="font-display text-2xl font-semibold text-ink">What’s included</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {service.scope.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="font-display text-2xl font-semibold text-ink">When to call</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {service.whenToCall.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">Our response process</h2>
          <p className="mt-2 text-sm text-muted">Clear steps from emergency response through verified drying.</p>
          <div className="mt-6">
            <ProcessSteps steps={service.process} />
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">FAQs</h2>
          <div className="mt-6">
            <FaqList faqs={service.faqs} />
          </div>
        </section>
      </Container>
    </div>
  );
}
