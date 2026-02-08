import Link from "next/link";
import { business, serviceHubs, pages } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.home.title,
  description: pages.home.description,
  path: "/",
});

export default function HomePage() {
  const crumbs = [{ name: "Home", url: "https://flood.repair/" }];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="relative overflow-hidden bg-surface/80 bg-grid">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
                24/7 Emergency Response
              </p>
              <h1 className="font-display text-4xl font-semibold text-ink md:text-6xl">
                Flood Doctor restores homes and businesses fast.
              </h1>
              <p className="text-lg text-muted">
                Water damage, flood cleanup, and specialty drying for {business.serviceArea}. We bring rapid
                response, detailed documentation, and a clear plan from day one.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/request/" variant="primary">
                  Request Service
                </ButtonLink>
                <ButtonLink href={`tel:${business.phone}`} variant="secondary">
                  Call {business.phone}
                </ButtonLink>
              </div>
              <p className="text-sm text-muted">
                Serving {business.serviceArea}. For emergencies, call {business.phone}.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  Response Promise
                </p>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  Ready Now
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                Emergency-ready teams with clear communication.
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-brand">●</span>
                  Rapid dispatch and onsite stabilization
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">●</span>
                  Moisture mapping and verified drying standards
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">●</span>
                  Documentation built for insurance clarity
                </li>
              </ul>
              <div className="mt-6 rounded-2xl border border-dashed border-brand/40 bg-brand/5 p-4 text-sm text-ink">
                “We treat every job like a recovery mission — stabilize, document, restore.”
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16 space-y-12">
        <Reveal>
          <section className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-3 rounded-2xl border border-border bg-white p-5">
              <h3 className="font-display text-xl font-semibold text-ink">Clear Scope</h3>
              <p className="text-sm text-muted">
                We inspect, document, and explain each step so you know what’s happening and why.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-border bg-white p-5">
              <h3 className="font-display text-xl font-semibold text-ink">Verified Drying</h3>
              <p className="text-sm text-muted">
                Moisture mapping and monitoring ensure spaces are ready for rebuild.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-border bg-white p-5">
              <h3 className="font-display text-xl font-semibold text-ink">Emergency Ready</h3>
              <p className="text-sm text-muted">
                24/7 dispatch for urgent events across Northern Virginia.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="space-y-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">Service Hubs</p>
                <h2 className="font-display text-3xl font-semibold text-ink">Explore our core service lines</h2>
              </div>
              <Link href="/services/" className="text-sm font-semibold text-brand">
                View all services →
              </Link>
            </div>
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
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 rounded-3xl border border-border bg-surface/80 p-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-semibold text-ink">Our 5-step recovery plan</h2>
              <p className="text-sm text-muted">
                A repeatable process focused on speed, safety, and verified dryness.
              </p>
              <ol className="mt-4 space-y-2 text-sm text-ink">
                <li>1. Dispatch + stabilization</li>
                <li>2. Inspection + moisture mapping</li>
                <li>3. Extraction + drying</li>
                <li>4. Monitoring + documentation</li>
                <li>5. Handoff to rebuild</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">Emergency Line</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">Need help now?</h3>
              <p className="mt-2 text-sm text-muted">Call our emergency line and we’ll dispatch immediately.</p>
              <ButtonLink href={`tel:${business.phone}`} variant="primary" className="mt-4">
                Call {business.phone}
              </ButtonLink>
            </div>
          </section>
        </Reveal>
      </Container>
    </div>
  );
}
