import { IconCheck } from "../icons";

const deploys = [
  { service: "payments-api", version: "v2.4.1", meta: "3m ago" },
  { service: "web-dashboard", version: "v8.0.12", meta: "11m ago" },
  { service: "auth-service", version: "v4.1.0", meta: "26m ago" },
  { service: "notifications-worker", version: "v1.9.3", meta: "40m ago" },
];

export function DeploymentFeed() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(21,19,31,0.08)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Live deployments
        </span>
        <span className="pill pill-success">Healthy</span>
      </div>

      <ul className="mt-5 flex flex-col gap-4">
        {deploys.map((d) => (
          <li key={d.service} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
              <IconCheck className="h-3 w-3 text-[var(--primary)]" />
            </span>
            <div className="flex-1">
              <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--fg)]">
                {d.service}
                <span className="ml-2 text-[var(--fg-faint)]">
                  {d.version}
                </span>
              </p>
              <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                {d.meta}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
