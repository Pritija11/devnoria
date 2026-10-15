import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CatalogTag } from "@/components/CatalogTag";
import { Reveal } from "@/components/Reveal";
import { ScoreliftCTA } from "@/components/ScoreliftCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Devnoria is an early-stage internal developer platform startup based in Lalitpur, Nepal, building the portal engineers actually open.",
  alternates: {
    canonical: "/about",
  },
};

const snapshot = [
  { value: "Pre-seed", label: "Current stage" },
  { value: "6", label: "People on the team" },
  { value: "Lalitpur", label: "Where we're based" },
];

const principles = [
  {
    step: "01",
    title: "Pull from source, never hand-maintain",
    body: "If a fact lives in a repo, a CI run, or a cloud API, the catalog should read it from there — not ask a human to keep a form in sync with reality.",
  },
  {
    step: "02",
    title: "Self-service means reviewable, not unmoderated",
    body: "An action an engineer can trigger without a ticket still needs an owner and guardrails — we design for speed and accountability together, not one at the expense of the other.",
  },
  {
    step: "03",
    title: "The platform team is the user we design for first",
    body: "Every feature starts with the question of whether it reduces a platform engineer's interrupt load — the portal exists to absorb toil, not create a new kind of it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <CatalogTag>About</CatalogTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--fg)] md:text-5xl">
              We got tired of platform teams drowning in Slack pings.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--fg-muted)]">
              Devnoria is an internal developer platform startup building
              out of Lalitpur, Nepal — small team, early days, still shaped
              directly by the platform engineers using it every day.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-[var(--border)] pt-8">
              {snapshot.map((s) => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--fg)]">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col gap-5 text-sm leading-7 text-[var(--fg-muted)]">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--fg)]">
                Why we started Devnoria
              </h2>
              <p>
                Every platform team we talked to had the same two problems:
                nobody could say with confidence who owned a given service,
                and every new service request turned into a week of
                back-and-forth in a ticket queue.
              </p>
              <p className="border-l-2 border-[var(--primary)] pl-5 text-base italic text-[var(--fg)]">
                &ldquo;We had a wiki page listing service owners. It was
                wrong for about sixty percent of the services on it, and
                everyone knew it was wrong, and nobody owned fixing it.&rdquo;
              </p>
              <p>
                That&apos;s the problem Devnoria exists to solve — not by
                asking people to maintain documentation better, but by
                pulling the facts from systems that are already true: your
                repos, your CI, your cloud provider.
              </p>
              <p>
                We&apos;re a few months in, pre-seed, and still tuning the
                scorecard checks against real orgs from our first design
                partners. What you&apos;d see in the product today is
                rougher than we&apos;d like — that&apos;s what building it
                with real platform teams looks like.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--fg)]">
              What we optimize for right now
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col">
            {principles.map((p, i) => (
              <Reveal key={p.step} delay={i * 50}>
                <div className="grid grid-cols-1 gap-2 border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0 sm:grid-cols-[80px_1fr]">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--primary)]">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--fg)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ScoreliftCTA
        title="Want to be a design partner?"
        description="We're onboarding a small number of platform teams directly with the founders — tell us about your stack and your biggest catalog gap."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
