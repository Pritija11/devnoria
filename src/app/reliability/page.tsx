import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CatalogTag } from "@/components/CatalogTag";
import { Reveal } from "@/components/Reveal";
import { ScoreliftCTA } from "@/components/ScoreliftCTA";
import { UptimeStrip } from "@/components/mocks/UptimeStrip";
import {
  IconActivity,
  IconAlertTriangle,
  IconClock,
  IconUsers,
  IconDatabase,
  IconGlobe,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Reliability",
  description:
    "Devnoria's uptime commitment, incident response process, and architecture — because a developer portal every engineer depends on has to stay up.",
  alternates: {
    canonical: "/reliability",
  },
};

const commitments = [
  {
    icon: IconActivity,
    title: "99.9% uptime SLA on Managed Cloud",
    body: "Published SLA with service credits attached, not a best-effort promise.",
  },
  {
    icon: IconAlertTriangle,
    title: "Incidents are public, not buried",
    body: "Every incident gets a postmortem on our status page within 48 hours.",
  },
  {
    icon: IconClock,
    title: "Real on-call coverage",
    body: "Paging thresholds tuned to catch degradation before it becomes an outage.",
  },
  {
    icon: IconUsers,
    title: "Self-hosted means you control it",
    body: "Run the open-source core yourself and our infrastructure is a non-issue.",
  },
  {
    icon: IconDatabase,
    title: "Hourly catalog backups",
    body: "30-day retention on Managed Cloud, with point-in-time restore on request.",
  },
  {
    icon: IconGlobe,
    title: "Multi-region by default",
    body: "A single zone failure shouldn't be why your catalog goes dark.",
  },
];

export default function ReliabilityPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <CatalogTag>Reliability</CatalogTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--fg)] md:text-5xl">
              If engineers depend on it daily, it has to stay up.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup asking teams to route self-service infrastructure
              requests through us, reliability isn&apos;t a nice-to-have —
              it&apos;s the whole pitch.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-16">
        <Container className="flex flex-col items-center">
          <Reveal>
            <UptimeStrip />
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-5 text-center text-xs text-[var(--fg-faint)]">
              Our own status page, embedded here — nothing shown to
              customers that isn&apos;t shown on this page first.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--fg)]">
              What that commitment actually covers
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 30}>
                <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <c.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:items-center sm:gap-6">
                    <p className="text-sm font-semibold text-[var(--fg)]">
                      {c.title}
                    </p>
                    <p className="text-sm leading-6 text-[var(--fg-muted)]">
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ScoreliftCTA
        title="Want our full incident history?"
        description="Every past incident and postmortem is public on our status page — ask us for the link during onboarding."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
