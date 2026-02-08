import { pages, resources } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.resources.title,
  description: pages.resources.description,
  path: "/resources/",
});

export default function ResourcesPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Resources", url: "https://flood.repair/resources/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Resources" title={pages.resources.headline} description={pages.resources.subhead} />
      <Container className="py-12 md:py-16">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <ServiceCard
                key={resource.slug}
                title={resource.title}
                description={resource.description}
                href={`/resources/${resource.slug}/`}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
