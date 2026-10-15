const services = [
  { name: "payments-api", owner: "Payments", grade: "A", score: 96 },
  { name: "auth-service", owner: "Identity", grade: "A", score: 91 },
  { name: "notifications-worker", owner: "Platform", grade: "C", score: 68 },
  { name: "legacy-billing", owner: "Finance", grade: "D", score: 54 },
];

const gradeClass: Record<string, string> = {
  A: "grade-a",
  B: "grade-b",
  C: "grade-c",
  D: "grade-d",
  F: "grade-f",
};

export function ServiceScorecard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(21,19,31,0.08)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Service scorecard
        </span>
        <span className="pill pill-primary">142 services</span>
      </div>
      <div className="flex flex-col divide-y divide-[var(--border)]">
        {services.map((s) => (
          <div key={s.name} className="flex items-center gap-4 px-6 py-4">
            <span className={`grade-badge ${gradeClass[s.grade]}`}>
              {s.grade}
            </span>
            <div className="flex-1">
              <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--fg)]">
                {s.name}
              </p>
              <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                Owner — {s.owner}
              </p>
            </div>
            <span className="text-sm text-[var(--fg-muted)]">{s.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
