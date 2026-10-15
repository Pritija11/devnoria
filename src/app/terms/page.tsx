import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CatalogTag } from "@/components/CatalogTag";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Devnoria internal developer platform, self-hosted and managed.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. The service",
    body: [
      "These terms describe the general relationship between Devnoria and prospective or current customers. The specific terms of any Managed Cloud subscription are set out in a separate order form or subscription agreement.",
    ],
  },
  {
    heading: "2. Self-hosted software",
    body: [
      "The self-hosted core is distributed under its open-source license, which governs your rights to run, modify, and redistribute it independently of these terms.",
    ],
  },
  {
    heading: "3. Service access",
    body: [
      "Devnoria requests scoped, read access to connected repositories and cloud accounts to build your catalog. We do not push commits or modify infrastructure unless explicitly configured through a self-service action you trigger.",
    ],
  },
  {
    heading: "4. Fees",
    body: [
      "Managed Cloud fees are charged according to the plan selected at signup, as confirmed in your order form. Fees are billed monthly or annually in advance unless otherwise agreed.",
    ],
  },
  {
    heading: "5. Platform access",
    body: [
      "Access to the Devnoria dashboard is provided as part of an active subscription. Credentials are personal to each user and may not be shared.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "The platform is provided to help manage service ownership and infrastructure requests but does not guarantee the availability or correctness of any connected third-party system. To the extent permitted by law, liability for indirect or consequential damages is limited as set out in your subscription agreement.",
    ],
  },
  {
    heading: "7. Termination",
    body: [
      "Either party may terminate a Managed Cloud subscription as described in the subscription agreement. Catalog data exports remain available for a reasonable transition period after termination.",
    ],
  },
  {
    heading: "8. Governing law",
    body: [
      "These terms are governed by the laws of Nepal. Any dispute arising from use of this website or the platform will be handled in the courts of Kathmandu, Nepal, except as otherwise specified in an individual subscription agreement.",
    ],
  },
  {
    heading: "9. Changes to these terms",
    body: [
      "If we make a material change to these terms, we'll notify active customers by email before the change takes effect.",
    ],
  },
  {
    heading: "10. Contact",
    body: [
      "Questions about these terms can be sent to hello@devnoria.tech, or by post to Sanepa, Lalitpur 44700, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <CatalogTag>Legal</CatalogTag>
          <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--fg)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of the Devnoria website and the
            platform it introduces.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--fg)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
