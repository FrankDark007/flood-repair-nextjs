import { type ServiceHub, type ServiceCategoryGroup } from "@/content/site";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";

export function ServiceHubPage({ hub }: { hub: ServiceHub }) {
  return (
    <div className="bg-white">
      <section className="bg-surface/80 bg-grid">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Services
            </p>
            <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
              {hub.title}
            </h1>
            <p className="text-lg text-muted">{hub.description}</p>
          </div>
        </Container>
      </section>
      <Container className="py-12 md:py-16 space-y-12">
        {hub.categories.map((category) => (
          <Reveal key={category.slug}>
            <CategoryBlock hubSlug={hub.slug} category={category} />
          </Reveal>
        ))}
      </Container>
    </div>
  );
}

function CategoryBlock({
  hubSlug,
  category,
}: {
  hubSlug: string;
  category: ServiceCategoryGroup;
}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">{category.title}</h2>
        <p className="mt-2 text-sm text-muted">{category.description}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {category.items.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.definition}
            href={`/services/${hubSlug}/${category.slug}/${service.slug}/`}
          />
        ))}
      </div>
    </section>
  );
}
