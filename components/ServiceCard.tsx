import Link from "next/link";

export function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-semibold">
        →
      </div>
      <div>
        <p className="font-display text-lg font-semibold text-ink group-hover:text-brand">
          {title}
        </p>
        <p className="mt-2 text-sm text-muted">{description}</p>
      </div>
    </Link>
  );
}
