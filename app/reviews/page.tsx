import { pages, business } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.reviews.title,
  description: pages.reviews.description,
  path: "/reviews/",
});

const enableAggregateRating = false;

export default function ReviewsPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Reviews", url: "https://flood.repair/reviews/" },
  ];

  const reviewsSchema = enableAggregateRating
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: business.name,
        url: business.domain,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "0",
          reviewCount: "0",
          description: "PLACEHOLDER - enable only with real review data",
        },
      }
    : null;

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {reviewsSchema ? <JsonLd data={reviewsSchema} /> : null}
      <PageHero eyebrow="Reviews" title={pages.reviews.headline} description={pages.reviews.subhead} />
      <Container className="py-12 md:py-16 space-y-8">
        <div className="rounded-3xl border border-border bg-white p-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Google reviews</h2>
          <p className="mt-2 text-sm text-muted">
            This page is ready to embed verified Google reviews. We do not publish ratings without real data.
          </p>
          <div className="mt-4 flex h-48 items-center justify-center rounded-2xl border border-dashed border-border bg-surface text-sm text-muted">
            Review embed placeholder
          </div>
          <ButtonLink href="https://www.google.com" variant="secondary" className="mt-4">
            See reviews on Google
          </ButtonLink>
          <p className="mt-3 text-xs text-muted">
            AggregateRating schema is disabled by default. Enable only after verified review data is available.
          </p>
        </div>
      </Container>
    </div>
  );
}
