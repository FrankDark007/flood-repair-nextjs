import { pages, business } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.contact.title,
  description: pages.contact.description,
  path: "/contact/",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Contact", url: "https://flood.repair/contact/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Contact" title={pages.contact.headline} description={pages.contact.subhead} />
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-3xl border border-border bg-white p-6">
            <h2 className="font-display text-2xl font-semibold text-ink">Get in touch</h2>
            <p className="text-sm text-muted">
              Call or email anytime. We respond 24/7 for emergency service across Northern Virginia.
            </p>
            <div className="space-y-2 text-sm text-ink">
              <p>{business.address}</p>
              <p>
                <a href={`tel:${business.phone}`} className="font-semibold text-brand">
                  {business.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${business.email}`} className="text-brand">
                  {business.email}
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-brand/40 bg-brand/5 p-4 text-sm text-ink">
              Emergency response is available 24/7.
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/request/" variant="primary">
                Request Service
              </ButtonLink>
              <ButtonLink href={`tel:${business.phone}`} variant="secondary">
                Call Now
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-surface/80 p-6">
            <h3 className="font-display text-xl font-semibold text-ink">Map</h3>
            <div className="mt-4 flex h-64 items-center justify-center rounded-2xl border border-dashed border-border bg-white text-sm text-muted">
              Map embed placeholder
            </div>
            <p className="mt-4 text-sm text-muted">Hours: 24/7 emergency response</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
