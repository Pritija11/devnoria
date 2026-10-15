import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CatalogTag } from "@/components/CatalogTag";
import { Reveal } from "@/components/Reveal";
import { ScoreliftCTA } from "@/components/ScoreliftCTA";
import {
  IconGitBranch,
  IconServer,
  IconTerminal,
  IconDatabase,
  IconChat,
  IconActivity,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Devnoria's service catalog to the version control, cloud, CI/CD, and observability tools your platform already runs on.",
  alternates: {
    canonical: "/integrations",
  },
};

const categories = [
  {
    icon: IconGitBranch,
    name: "Version control",
    items: ["GitHub", "GitLab", "Bitbucket", "Azure DevOps"],
  },
  {
    icon: IconServer,
    name: "Cloud providers",
    items: ["AWS", "Google Cloud", "Azure", "DigitalOcean"],
  },
  {
    icon: IconTerminal,
    name: "CI/CD",
    items: ["GitHub Actions", "GitLab CI", "CircleCI", "Argo CD"],
  },
  {
    icon: IconDatabase,
    name: "Infrastructure as code",
    items: ["Terraform", "Pulumi", "Crossplane", "Kubernetes"],
  },
  {
    icon: IconActivity,
    name: "Observability",
    items: ["Datadog", "Grafana", "PagerDuty", "Sentry"],
  },
  {
    icon: IconChat,
    name: "Chat & notifications",
    items: ["Slack", "Microsoft Teams", "Email digests", "Webhooks"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <CatalogTag>Integrations</CatalogTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--fg)] md:text-5xl">
              The catalog is only as good as what it reads from.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Devnoria pulls metadata from the tools you already run —
              nothing in the catalog is hand-entered, which is the whole
              point.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {categories.map((c, i) => (
              <Reveal key={c.name} delay={i * 30}>
                <div className="grid grid-cols-1 gap-4 py-7 sm:grid-cols-[220px_1fr] sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[var(--surface-tint)]">
                      <c.icon className="h-5 w-5 text-[var(--fg)]" />
                    </span>
                    <span className="text-base font-semibold text-[var(--fg)]">
                      {c.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {c.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-sm text-[var(--fg-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ScoreliftCTA
        title="Running something we don't list yet?"
        description="Most integrations are a config file away — tell us what's in your stack and we'll scope it with you directly."
        buttonLabel="Request an integration"
        buttonHref="/contact"
      />
    </>
  );
}
