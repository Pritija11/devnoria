const services = [
  { name: "payments-api", grade: "A", lang: "Go" },
  { name: "auth-service", grade: "A", lang: "Go" },
  { name: "web-dashboard", grade: "B", lang: "TypeScript" },
  { name: "notifications-worker", grade: "C", lang: "Python" },
  { name: "billing-ledger", grade: "B", lang: "Java" },
  { name: "legacy-billing", grade: "D", lang: "Ruby" },
  { name: "search-indexer", grade: "A", lang: "Rust" },
];

const gradeClass: Record<string, string> = {
  A: "grade-a",
  B: "grade-b",
  C: "grade-c",
  D: "grade-d",
  F: "grade-f",
};

export function CatalogStrip() {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_24px_60px_-28px_rgba(21,19,31,0.08)]">
      <div className="flex gap-4">
        {services.map((s) => (
          <div
            key={s.name}
            className="flex w-44 flex-none flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-tint)] p-4"
          >
            <div className="flex items-center justify-between">
              <span className={`grade-badge ${gradeClass[s.grade]}`}>
                {s.grade}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-[var(--fg-faint)]">
                {s.lang}
              </span>
            </div>
            <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--fg)]">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
