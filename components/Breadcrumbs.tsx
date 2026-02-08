import Link from "next/link";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link href={item.href} className="hover:text-brand">
              {item.label}
            </Link>
            {index < items.length - 1 ? <span className="text-muted">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
