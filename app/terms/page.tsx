import { pages } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.terms.title,
  description: pages.terms.description,
  path: "/terms/",
});

export default function TermsPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Terms", url: "https://flood.repair/terms/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Legal" title={pages.terms.headline} description={pages.terms.subhead} />
      <Container className="py-12 md:py-16 space-y-6 text-sm text-muted">
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">Service requests</h2>
          <p className="mt-2">
            Service requests are subject to scheduling availability and site conditions. We confirm details before
            work begins.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">Estimates and documentation</h2>
          <p className="mt-2">
            We provide written scopes and documentation based on onsite conditions. Changes in scope will be
            communicated promptly.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">Use of this site</h2>
          <p className="mt-2">
            Content is provided for general information and does not replace professional advice for emergency
            situations.
          </p>
        </section>
      </Container>
    </div>
  );
}
