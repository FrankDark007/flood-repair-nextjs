import { type ServiceCategoryGroup } from "@/content/site";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";

export function ServiceCategoryPage({
  title,
  description,
  hubSlug,
  category,
}: {
  title: string;
  description: string;
  hubSlug: string;
  category: ServiceCategoryGroup;
}) {
  return (
    <div className="bg-white">
      <section className="bg-surface/80 bg-grid">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">{title}</p>
            <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
              {category.title}
            </h1>
            <p className="text-lg text-muted">{description}</p>
          </div>
        </Container>
      </section>
      <Container className="py-12 md:py-16">
        <Reveal>
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
        </Reveal>
      </Container>
    </div>
  );
}
