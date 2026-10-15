import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CatalogTag } from "@/components/CatalogTag";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ScoreliftCTA } from "@/components/ScoreliftCTA";
import { IconCheck, IconUsers, IconClock, IconServer } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Devnoria pricing — free, open-source self-hosting, or a managed cloud plan priced per developer seat with SSO, backups, and support.",
  alternates: {
    canonical: "/pricing",
  },
};

const plans = [
  {
    name: "Self-hosted",
    price: "$0",
    period: "open source",
    description:
      "Run the Devnoria core on your own infrastructure. Full catalog, scorecards, and self-service actions, no seat limits.",
    features: [
      "Unlimited services and developers",
      "Full scorecard and catalog engine",
      "Self-service actions and golden paths",
      "Community support via GitHub",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Managed Cloud",
    price: "$14",
    period: "/developer/month",
    description:
      "We run it for you — hosting, backups, upgrades, and support included, with enterprise auth out of the box.",
    features: [
      "Everything in Self-hosted",
      "Hosted and fully managed",
      "SSO and SCIM provisioning",
      "Automated backups and upgrades",
      "Shared support channel",
    ],
    cta: "Start free trial",
    featured: true,
  },
];

const addons = [
  {
    icon: IconUsers,
    name: "Dedicated onboarding",
    price: "$2,000 one-time",
    body: "A platform engineer works directly with your team to import services and configure your first scorecard checks.",
  },
  {
    icon: IconClock,
    name: "Priority support SLA",
    price: "+$4/developer/month",
    body: "1-hour response time during business hours, with a direct Slack connect channel to our engineering team.",
  },
  {
    icon: IconServer,
    name: "Dedicated infrastructure",
    price: "Custom",
    body: "Single-tenant hosting in a region of your choice, for orgs with strict data-residency requirements.",
  },
];

const faqs = [
  {
    q: "Is the self-hosted version really free forever?",
    a: "Yes. The core catalog, scorecard, and self-service engine is open source under a permissive license — no seat caps, no feature gates, no trial period that expires.",
  },
  {
    q: "What does Managed Cloud actually save us?",
    a: "Mainly the operational overhead — you're not the one patching, backing up, or scaling the Devnoria instance itself. Most teams move to Managed once self-hosting it becomes its own chore.",
  },
  {
    q: "Can we start self-hosted and move to Managed later?",
    a: "Yes, and it's a common path. We provide a migration script that moves your catalog data and scorecard history into the managed environment.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <CatalogTag>Pricing</CatalogTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--fg)] md:text-5xl">
              Free to run yourself. Priced simply if we run it.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup, we didn&apos;t want to gate the core product
              behind a paywall — the open-source core is the real thing, not
              a crippled trial.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 50}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  p.featured
                    ? "border-[var(--primary)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(109,90,239,0.2)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}
              >
                {p.featured && (
                  <span className="pill pill-primary mb-4 w-fit">
                    Most teams land here
                  </span>
                )}
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--fg)]">
                  {p.name}
                </h2>
                <p className="mt-2 max-w-sm text-sm text-[var(--fg-muted)]">
                  {p.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--fg)]">
                    {p.price}
                  </span>
                  <span className="text-sm text-[var(--fg-faint)]">
                    {p.period}
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-[var(--fg-muted)]"
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={p.featured ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {p.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--fg)]">
              Add-ons for Managed Cloud
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {addons.map((a, i) => (
              <Reveal key={a.name} delay={i * 40}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <a.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--fg)]">
                    {a.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--primary)]">
                    {a.price}
                  </p>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--fg)]">
              Pricing questions
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-[var(--fg)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ScoreliftCTA
        title="Not sure if self-hosted or managed fits?"
        description="Tell us your team size and infra setup and we'll recommend a path directly — no feature grid to decode."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
