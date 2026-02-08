import { pages, business } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.about.title,
  description: pages.about.description,
  path: "/about/",
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "About", url: "https://flood.repair/about/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="About" title={pages.about.headline} description={pages.about.subhead} />
      <Container className="py-12 md:py-16 space-y-10">
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="font-display text-2xl font-semibold text-ink">Our mission</h2>
            <p className="mt-3 text-sm text-muted">
              Provide rapid, reliable restoration services that protect property, minimize downtime, and give owners
              confidence. Every response is built on documentation, measured drying, and clear communication.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="font-display text-2xl font-semibold text-ink">How we operate</h2>
            <p className="mt-3 text-sm text-muted">
              We map moisture, stabilize the environment, and track progress daily. Our teams coordinate with
              adjusters and contractors to keep restoration moving without surprises.
            </p>
          </div>
        </section>
        <section className="rounded-3xl border border-border bg-surface/80 p-6">
          <h3 className="font-display text-xl font-semibold text-ink">Service area focus</h3>
          <p className="mt-2 text-sm text-muted">
            Flood Doctor serves {business.serviceArea}. Our local presence means faster dispatch and tighter
            communication for property owners and facility managers.
          </p>
        </section>
      </Container>
    </div>
  );
}
