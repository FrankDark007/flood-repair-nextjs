import Link from "next/link";
import { business, type ServiceContent } from "@/content/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

export function ServicePage({
  service,
  breadcrumbs,
}: {
  service: ServiceContent;
  breadcrumbs?: Crumb[];
}) {
  return (
    <div className="bg-white">
      <section className="bg-surface/80 bg-grid">
        <Container className="py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
                {service.audience === "residential" ? "Residential" : "Commercial"} ·{" "}
                {service.category.replace(/-/g, " ")}
              </p>
              <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
                {service.heroHeadline}
              </h1>
              <p className="text-lg text-muted">{service.heroSubhead}</p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/request/" variant="primary">
                  Request Service
                </ButtonLink>
                <ButtonLink href={`tel:${business.phone}`} variant="secondary">
                  Call Now
                </ButtonLink>
              </div>
              <p className="text-sm text-muted">
                For emergencies, call {business.phone}.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-ink">Service Definition</h2>
              <p className="mt-3 text-sm text-muted">{service.definition}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink">
                {service.scope.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16 space-y-12">
        <Reveal>
          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h2 className="font-display text-2xl font-semibold text-ink">When to Call Us</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {service.whenToCall.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h2 className="font-display text-2xl font-semibold text-ink">What to Expect</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {service.whatToExpect.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Process</h2>
            <p className="mt-2 text-sm text-muted">
              Clear steps, consistent updates, and a verified dry standard for {business.serviceArea}.
            </p>
            <div className="mt-6">
              <ProcessSteps steps={service.process} />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">FAQs</h2>
              <p className="mt-2 text-sm text-muted">
                Straight answers to common questions about {service.title.toLowerCase()}.
              </p>
              <div className="mt-6">
                <FaqList faqs={service.faqs} />
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-display text-xl font-semibold text-ink">Related Services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {service.relatedServices.map((slug) => (
                  <li key={slug}>
                    <Link href={`/services/${service.audience}/${service.category}/${slug}/`} className="text-brand hover:underline">
                      {slug.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">Helpful Resources</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {service.relatedResources.map((href) => (
                  <li key={href}>
                    <Link href={href} className="text-brand hover:underline">
                      {href.replace("/resources/", "").replace("/", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>
      </Container>
    </div>
  );
}
