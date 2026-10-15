const stages = [
  { label: "Template selected", meta: "go-grpc-service" },
  { label: "Repository created", meta: "org/checkout-service" },
  { label: "CI pipeline configured", meta: "Lint, test, build" },
  { label: "Deployed to staging", meta: "Live in 4m 12s" },
];

export function GoldenPathCard() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(21,19,31,0.08)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Golden path — new service
        </span>
        <span className="pill pill-success">Complete</span>
      </div>

      <div className="mt-6 flex flex-col">
        {stages.map((s, i) => (
          <div key={s.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)] font-[family-name:var(--font-mono)] text-[11px] text-[var(--primary)]">
                {i + 1}
              </span>
              {i < stages.length - 1 && (
                <span className="mt-1 h-full w-px flex-1 bg-[var(--border)]" />
              )}
            </div>
            <div className="pb-6 last:pb-0">
              <p className="text-sm font-medium text-[var(--fg)]">
                {s.label}
              </p>
              <p className="mt-0.5 font-[family-name:var(--font-mono)] text-xs text-[var(--fg-faint)]">
                {s.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
