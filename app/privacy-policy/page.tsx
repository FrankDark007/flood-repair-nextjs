import { pages } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.privacy.title,
  description: pages.privacy.description,
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Privacy Policy", url: "https://flood.repair/privacy-policy/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Legal" title={pages.privacy.headline} description={pages.privacy.subhead} />
      <Container className="py-12 md:py-16 space-y-6 text-sm text-muted">
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">Information we collect</h2>
          <p className="mt-2">
            We collect contact details and service information you submit through our forms or by phone to deliver
            requested services.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">How we use information</h2>
          <p className="mt-2">
            We use your information to respond to service requests, schedule visits, and provide updates related to
            restoration services.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">Sharing</h2>
          <p className="mt-2">
            We only share information with partners or insurers when needed to deliver services or with your consent.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">Contact</h2>
          <p className="mt-2">Questions? Email info@flood.doctor.</p>
        </section>
      </Container>
    </div>
  );
}
