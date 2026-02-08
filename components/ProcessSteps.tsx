export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <li key={step} className="rounded-2xl border border-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Step {index + 1}
          </p>
          <p className="mt-2 text-sm text-ink">{step}</p>
        </li>
      ))}
    </ol>
  );
}
