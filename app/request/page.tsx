import { pages, business } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { RequestForm } from "@/components/RequestForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.request.title,
  description: pages.request.description,
  path: "/request/",
});

export default function RequestPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Request", url: "https://flood.repair/request/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Request Service" title={pages.request.headline} description={pages.request.subhead} />
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <RequestForm />
          </div>
          <div className="rounded-3xl border border-border bg-surface/80 p-6">
            <h2 className="font-display text-2xl font-semibold text-ink">Emergency line</h2>
            <p className="mt-2 text-sm text-muted">
              For immediate assistance, call our emergency line. We respond 24/7 across Northern Virginia.
            </p>
            <p className="mt-4 text-lg font-semibold text-ink">{business.phone}</p>
            <p className="mt-2 text-sm text-muted">Email: {business.email}</p>
            <p className="mt-4 text-sm text-muted">Address: {business.address}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
