import { IconServer, IconDatabase, IconGitBranch } from "../icons";

const actions = [
  { icon: IconServer, name: "New API service", meta: "Go + gRPC template" },
  { icon: IconDatabase, name: "Provision a database", meta: "Postgres, managed" },
  { icon: IconGitBranch, name: "New cron job", meta: "Scheduled task template" },
];

export function SelfServiceActions() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(21,19,31,0.08)]">
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
        Self-service actions
      </span>

      <div className="mt-5 flex flex-col gap-3">
        {actions.map((a) => (
          <div
            key={a.name}
            className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-tint)] px-4 py-3"
          >
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[var(--primary-soft)]">
              <a.icon className="h-4 w-4 text-[var(--primary)]" />
            </span>
            <div className="flex-1">
              <p className="text-sm text-[var(--fg)]">{a.name}</p>
              <p className="text-xs text-[var(--fg-faint)]">{a.meta}</p>
            </div>
            <span className="text-[var(--fg-faint)]">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}
