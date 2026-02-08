import { pages } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.careers.title,
  description: pages.careers.description,
  path: "/careers/",
});

export default function CareersPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Careers", url: "https://flood.repair/careers/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Careers" title={pages.careers.headline} description={pages.careers.subhead} />
      <Container className="py-12 md:py-16 space-y-8">
        <div className="rounded-3xl border border-border bg-white p-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Open roles</h2>
          <p className="mt-2 text-sm text-muted">
            We’re building a high-performance restoration team. Email us to learn about current openings.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Emergency Response Technician</li>
            <li>Project Coordinator</li>
            <li>Commercial Restoration Lead</li>
          </ul>
          <ButtonLink href="mailto:info@flood.doctor" variant="primary" className="mt-4">
            Email Careers
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
