import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CatalogTag } from "@/components/CatalogTag";
import { Reveal } from "@/components/Reveal";
import { ScoreliftCTA } from "@/components/ScoreliftCTA";
import { ServiceScorecard } from "@/components/mocks/ServiceScorecard";
import { SelfServiceActions } from "@/components/mocks/SelfServiceActions";
import { GoldenPathCard } from "@/components/mocks/GoldenPathCard";
import { IconGrid, IconActivity, IconZap, IconLayers } from "@/components/icons";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "How Devnoria's service catalog, automated scorecards, self-service actions, and golden path templates work together.",
  alternates: {
    canonical: "/catalog",
  },
};

const sections = [
  {
    id: "catalog",
    icon: IconGrid,
    name: "Service catalog",
    body: [
      "Every service your org runs, in one searchable catalog — pulled from repo config, CI, and your cloud provider instead of hand-maintained in a spreadsheet.",
      "Each entry carries an owning team, an on-call rotation, a tech stack, and its upstream and downstream dependencies, so \"what happens if we change this\" has an actual answer.",
      "New services are added automatically the moment they're scaffolded through a golden path — nothing to register manually after the fact.",
    ],
    mock: <ServiceScorecard />,
  },
  {
    id: "scorecards",
    icon: IconActivity,
    name: "Automated scorecards",
    body: [
      "Every service gets graded A through F against the checks your platform team defines — has an owner, has on-call, passes its latest security scan, has docs, meets a deploy-frequency bar.",
      "Grades recalculate automatically as the underlying reality changes — fix the gap, and the grade moves on its own, no form to resubmit.",
      "Org-wide and per-team leaderboards make gaps visible without anyone having to chase a spreadsheet owner for status.",
    ],
    mock: <ServiceScorecard />,
  },
  {
    id: "self-service",
    icon: IconZap,
    name: "Self-service actions",
    body: [
      "Provisioning a database, spinning up a new API service, or requesting a cron job happens through a reviewable, templated action — not a ticket that sits in a queue for a platform engineer.",
      "Every action is owned by the team that built it, with its own approval rules, so self-service doesn't mean unreviewed.",
      "Actions can trigger real infrastructure changes through Terraform, Pulumi, or your existing IaC — Devnoria is the interface, not a replacement for your provisioning tooling.",
    ],
    mock: <SelfServiceActions />,
  },
  {
    id: "golden-paths",
    icon: IconLayers,
    name: "Golden path templates",
    body: [
      "A golden path scaffolds a new service with CI, linting, a deploy pipeline, and your org's conventions already wired in — the fast way to start is also the right way to start.",
      "Templates live in your own repo, versioned like any other code, so updating a golden path is a pull request your platform team reviews like everything else.",
      "Teams can see exactly which golden path a service was scaffolded from, and how far it's drifted since — useful context during an incident or a migration.",
    ],
    mock: <GoldenPathCard />,
  },
];

export default function CatalogPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <CatalogTag>Catalog</CatalogTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--fg)] md:text-5xl">
              Four pieces, one portal, zero stale wiki pages.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As an internal developer platform startup, we built Devnoria
              around a single idea: anything that can be pulled from source
              of truth automatically, should be — never hand-maintained.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
          <Reveal className="hidden lg:block">
            <nav className="sticky top-24 flex flex-col gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-lg px-3 py-2 text-sm text-[var(--fg-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--fg)]"
                >
                  {s.name}
                </a>
              ))}
            </nav>
          </Reveal>

          <div className="flex flex-col gap-20">
            {sections.map((s, i) => (
              <Reveal key={s.id} delay={i * 40}>
                <div
                  id={s.id}
                  className="grid scroll-mt-28 grid-cols-1 items-center gap-12 lg:grid-cols-2"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <s.icon className="h-5 w-5 text-[var(--primary)]" />
                    </span>
                    <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--fg)]">
                      {s.name}
                    </h2>
                    <div className="mt-4 flex flex-col gap-3">
                      {s.body.map((p) => (
                        <p
                          key={p}
                          className="text-sm leading-6 text-[var(--fg-muted)]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center">{s.mock}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ScoreliftCTA
        title="Walk through the catalog on your own repos."
        description="We'll connect a sandbox org to a handful of your real repositories so you can see scorecards against your actual services, not a demo dataset."
        buttonLabel="Request a demo"
        buttonHref="/contact"
      />
    </>
  );
}
