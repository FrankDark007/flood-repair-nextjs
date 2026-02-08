import { Container } from "@/components/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-surface/80 bg-grid">
      <Container className="py-16 md:py-20">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">{eyebrow}</p>
          ) : null}
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">{title}</h1>
          <p className="text-lg text-muted">{description}</p>
        </div>
      </Container>
    </section>
  );
}
