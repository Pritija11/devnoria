import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

export function ScoreliftCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] py-24">
      <div className="hero-glow" aria-hidden />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
            {description}
          </p>
          <Button href={buttonHref} className="mt-8">
            {buttonLabel}
          </Button>
        </Reveal>

        <Reveal delay={80} className="mt-14 w-full max-w-md">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_24px_60px_-28px_rgba(21,19,31,0.08)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
              Org platform score
            </p>
            <div className="mt-6 flex items-center justify-between gap-6">
              <div className="flex flex-col items-center gap-2">
                <span className="grade-badge grade-d h-14 w-14 text-xl">
                  D
                </span>
                <span className="text-xs text-[var(--fg-faint)]">
                  Before
                </span>
                <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--fg-muted)]">
                  58
                </span>
              </div>

              <div className="flex flex-1 items-center">
                <span className="h-px flex-1 bg-gradient-to-r from-[var(--border)] to-[var(--primary)]" />
                <span className="mx-2 text-[var(--primary)]">&rarr;</span>
                <span className="h-px flex-1 bg-[var(--primary)]" />
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="grade-badge grade-a h-14 w-14 text-xl">
                  A
                </span>
                <span className="text-xs text-[var(--fg-faint)]">
                  After 90 days
                </span>
                <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--fg)]">
                  94
                </span>
              </div>
            </div>
            <p className="mt-6 border-t border-[var(--border)] pt-5 text-xs leading-5 text-[var(--fg-muted)]">
              Median score lift across design-partner orgs after rolling out
              scorecards and golden-path templates.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
