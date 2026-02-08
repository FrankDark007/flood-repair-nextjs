import { type ServiceFAQ } from "@/content/site";

export function FaqList({ faqs }: { faqs: ServiceFAQ[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-2xl border border-border bg-white p-5">
          <summary className="cursor-pointer font-semibold text-ink">{faq.question}</summary>
          <p className="mt-3 text-sm text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
