import Link from "next/link";
import { Container } from "@/components/Container";
import { CatalogTag } from "@/components/CatalogTag";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ScoreliftCTA } from "@/components/ScoreliftCTA";
import { CatalogStrip } from "@/components/mocks/CatalogStrip";
import { SelfServiceActions } from "@/components/mocks/SelfServiceActions";
import { DeploymentFeed } from "@/components/mocks/DeploymentFeed";
import { GoldenPathCard } from "@/components/mocks/GoldenPathCard";
import {
  IconArrowRight,
  IconGrid,
  IconZap,
  IconLayers,
  IconCheck,
} from "@/components/icons";

const stats = [
  { value: "142", label: "Services cataloged" },
  { value: "4m", label: "Avg. time to new service" },
  { value: "3", label: "Golden path templates" },
  { value: "99.9%", label: "Managed Cloud uptime SLA" },
];

const capabilities = [
  {
    icon: IconGrid,
    title: "One catalog, always current",
    description:
      "Pulled from repos and CI, not hand-maintained — so it never drifts from reality the way a wiki page does.",
  },
  {
    icon: IconZap,
    title: "Self-service, not a ticket queue",
    description:
      "New service, a database, a cron job — a template an engineer clicks, not a request a platform team has to pick up.",
  },
  {
    icon: IconLayers,
    title: "Golden paths that get followed",
    description:
      "CI, linting, and deploy already wired in — the fast way to start is also the compliant way.",
  },
];

const principles = [
  {
    title: "Graded from source, not a form",
    body: "Scorecards pull from CI and config — fix the gap and the grade moves on its own.",
  },
  {
    title: "Reviewable, not unmoderated",
    body: "Self-service actions are owned by the team that maintains the template behind them.",
  },
  {
    title: "No service is a mystery",
    body: "Every catalog entry has an owner and an on-call rotation, always.",
  },
  {
    title: "Free under 10 services",
    body: "Most open-source projects and small teams never pay us a thing.",
  },
];

const testimonialQuote =
  "We went from 'who owns this service' being a recurring standup question to it being a two-second catalog lookup.";

const faqs = [
  {
    q: "Is Devnoria a new company?",
    a: "Yes — we're an early-stage internal developer platform startup based in Lalitpur, Nepal, built with a small group of platform teams shaping the roadmap directly.",
  },
  {
    q: "How is this different from Backstage?",
    a: "Backstage is a framework you build your own portal on top of. Devnoria is a hosted product — the catalog, scorecards, and self-service actions work out of the box.",
  },
  {
    q: "Does this replace our platform team?",
    a: "No — it gives them leverage. Golden paths and actions are built and owned by your platform engineers; Devnoria is the surface area engineers interact with.",
  },
  {
    q: "How does the catalog stay up to date?",
    a: "Metadata is pulled from repo config, CI results, and your cloud provider — a grade updates automatically as the real state changes.",
  },
  {
    q: "Can we self-host?",
    a: "Yes, the open-source core is free to self-host, with a managed cloud option for teams who'd rather not run the infrastructure.",
  },
  {
    q: "What's a 'golden path' exactly?",
    a: "A pre-approved template for a new service — repo, CI, deploy pipeline, and conventions already configured.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — centered, no split layout */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="node-field" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <Container className="relative z-10 flex flex-col items-center py-20 text-center md:py-28">
          <Reveal>
            <CatalogTag>Startup · Platform teams, early access</CatalogTag>
            <h1 className="mx-auto mt-7 max-w-2xl font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.08] tracking-tight text-[var(--fg)] md:text-6xl">
              The developer portal engineers actually open.
            </h1>
            <p className="mx-auto mt-7 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Devnoria gives your platform team a service catalog,
              automated scorecards, and self-service actions — so
              engineers stop pinging Slack for things a portal should just
              do.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Button href="/contact">Request a demo</Button>
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--fg)]"
              >
                See how the catalog works
                <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-16 w-full">
            <CatalogStrip />
          </Reveal>
        </Container>
      </section>

      {/* Stats band */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-10">
        <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--fg)]">
                {s.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Capabilities — equal 3-col grid, no alternating rows */}
      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-xl text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Three pieces. One portal.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <c.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--fg)]">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Showcase — three mocks side by side, equal weight */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <CatalogTag>What&apos;s inside</CatalogTag>
            <h2 className="mt-5 max-w-lg font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              What an engineer actually sees
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Reveal delay={0} className="flex justify-center">
              <SelfServiceActions />
            </Reveal>
            <Reveal delay={60} className="flex justify-center">
              <GoldenPathCard />
            </Reveal>
            <Reveal delay={120} className="flex justify-center">
              <DeploymentFeed />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles — 2x2 grid */}
      <section className="py-24">
        <Container>
          <Reveal>
            <CatalogTag>How we build</CatalogTag>
            <h2 className="mt-5 max-w-lg font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              A portal engineers trust, not one they route around
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--fg)]">
                      {p.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--fg-muted)]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial — inside a tinted panel, paired with pricing teaser */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-9">
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.5] tracking-tight text-[var(--fg)]">
                &ldquo;{testimonialQuote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[var(--primary-soft)]" />
                <div>
                  <p className="text-sm text-[var(--fg)]">
                    Platform Lead, design-partner team
                  </p>
                  <p className="text-xs text-[var(--fg-faint)]">
                    Early Devnoria customer
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-9">
              <CatalogTag>Pricing</CatalogTag>
              <h2 className="mt-4 text-xl font-bold tracking-tight text-[var(--fg)]">
                Free to self-host.
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                Or let us run it, with SSO and support included.
              </p>
              <Link
                href="/pricing"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline"
              >
                See pricing
                <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ — 2-column grid instead of a single stacked list */}
      <section className="py-24">
        <Container>
          <Reveal>
            <CatalogTag>Questions</CatalogTag>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Before you roll this out to your org
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 30}>
                <details className="group border-b border-[var(--border)] py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-medium text-[var(--fg)]">
                    {item.q}
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-xs text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ScoreliftCTA
        title="See your org's real platform score."
        description="Connect your repos and get a baseline scorecard across every service — no setup call required to see where you stand."
        buttonLabel="Request a demo"
        buttonHref="/contact"
      />
    </>
  );
}
