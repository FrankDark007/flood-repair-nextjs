import Link from "next/link";
import { business, navigation } from "@/content/site";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-8 py-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-lg font-semibold text-ink">{business.name}</p>
          <div className="text-sm text-muted">
            <p>{business.address}</p>
            <p>
              <a href={`tel:${business.phone}`} className="font-semibold text-ink">
                {business.phone}
              </a>
              {" · "}
              <a href={`mailto:${business.email}`} className="text-ink">
                {business.email}
              </a>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
              24/7 Emergency Response
            </p>
          </div>
          <ButtonLink href="/request/" variant="primary">
            Request Service
          </ButtonLink>
        </div>
        <div className="grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2">
          {navigation.primary.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand">
              {item.label}
            </Link>
          ))}
          <Link href="/services/" className="hover:text-brand">
            Service Hubs
          </Link>
          <Link href="/request/" className="hover:text-brand">
            Request Service
          </Link>
        </div>
      </Container>
    </footer>
  );
}
