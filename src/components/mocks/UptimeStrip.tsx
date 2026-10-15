const days = Array.from({ length: 45 }, (_, i) => {
  if (i === 12) return "degraded";
  if (i === 31) return "down";
  return "up";
});

const barClass: Record<string, string> = {
  up: "bg-[var(--primary)]",
  degraded: "bg-[var(--warning)]",
  down: "bg-[var(--danger)]",
};

export function UptimeStrip() {
  return (
    <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(21,19,31,0.08)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Devnoria Cloud — 45 day uptime
        </span>
        <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--fg)]">
          99.97%
        </span>
      </div>

      <div className="mt-5 flex gap-1">
        {days.map((status, i) => (
          <span
            key={i}
            className={`h-8 flex-1 rounded-sm ${barClass[status]}`}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-[var(--fg-faint)]">
        <span>45 days ago</span>
        <span>Today</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 border-t border-[var(--border)] pt-4 text-xs text-[var(--fg-muted)]">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
          Operational
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[var(--warning)]" />
          Degraded
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[var(--danger)]" />
          Outage
        </span>
      </div>
    </div>
  );
}
