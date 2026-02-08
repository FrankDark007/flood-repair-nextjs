import Link from "next/link";
import { business, navigation, ctas } from "@/content/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-brand/10 text-brand flex items-center justify-center font-display text-lg font-semibold">
            FD
          </span>
          <span className="font-display text-lg font-semibold text-ink">
            {business.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink md:flex">
          {navigation.primary.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href={ctas.primary.href} variant="primary" className="hidden sm:inline-flex">
            {ctas.primary.label}
          </ButtonLink>
          <ButtonLink href={ctas.primary.href} variant="primary" className="sm:hidden">
            Request
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
