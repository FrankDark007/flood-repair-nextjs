import { ctas, business } from "@/content/site";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <a
          href={ctas.primary.href}
          className="flex-1 rounded-full bg-brand px-4 py-2 text-center text-sm font-semibold text-white"
        >
          {ctas.primary.label}
        </a>
        <a
          href={`tel:${business.phone}`}
          className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}
