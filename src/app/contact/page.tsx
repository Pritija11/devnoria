import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CatalogTag } from "@/components/CatalogTag";
import { Reveal } from "@/components/Reveal";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Devnoria team about rolling out a service catalog, scorecards, and self-service actions for your platform team.",
  alternates: {
    canonical: "/contact",
  },
};

const contactMethods = [
  {
    icon: IconMail,
    label: "Email",
    value: "hello@devnoria.tech",
    href: "mailto:hello@devnoria.tech",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+977 984-5566778",
    href: "tel:+9779845566778",
  },
  {
    icon: IconMapPin,
    label: "Office",
    value: "Sanepa, Lalitpur 44700, Nepal",
    href: undefined,
  },
];

const faqs = [
  {
    q: "What happens after I submit this form?",
    a: "Someone on the team reviews it personally and replies directly, usually within a business day — there's no automated sales sequence.",
  },
  {
    q: "Can we try this before talking to anyone?",
    a: "Yes. The self-hosted core is open source — if you'd rather just run it yourself first, mention that and we'll point you straight to the setup docs.",
  },
  {
    q: "Do you do live walkthroughs?",
    a: "Yes, a founder or engineer will walk through the catalog and scorecards live against a sandbox, or your own repos if you're comfortable connecting them.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <CatalogTag>Contact</CatalogTag>
            <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--fg)] md:text-5xl">
              Let&apos;s get your services cataloged.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Tell us about your stack and the catalog gap you&apos;re
              trying to close, and we&apos;ll take it from there.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {contactMethods.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-6 text-center"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-soft)]">
                    <m.icon className="h-4 w-4 text-[var(--primary)]" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--fg-faint)]">
                    {m.label}
                  </span>
                  {m.href ? (
                    <a
                      href={m.href}
                      className="text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                    >
                      {m.value}
                    </a>
                  ) : (
                    <span className="text-sm text-[var(--fg)]">
                      {m.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="flex flex-col items-center">
          <Reveal>
            <CatalogTag>Before you write in</CatalogTag>
            <h2 className="mt-5 max-w-xl text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Quick answers
            </h2>
          </Reveal>

          <div className="mt-10 flex w-full max-w-2xl flex-col divide-y divide-[var(--border)]">
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
    </>
  );
}
