import Link from "next/link";
import { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<string, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand",
  secondary:
    "border border-ink/10 bg-white text-ink hover:border-ink/30 focus-visible:outline-brand",
  ghost: "text-ink hover:bg-ink/5 focus-visible:outline-brand",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
