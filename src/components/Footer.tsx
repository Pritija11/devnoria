import Link from "next/link";
import { Container } from "./Container";
import { IconLogo, IconMail, IconPhone, IconMapPin } from "./icons";

const productLinks = [
  { href: "/catalog", label: "Catalog" },
  { href: "/integrations", label: "Integrations" },
  { href: "/reliability", label: "Reliability" },
  { href: "/pricing", label: "Pricing" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[#a8a5bd]">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/8">
              <IconLogo className="h-4.5 w-4.5 text-[var(--primary)]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--on-dark)]">
              Devnoria
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">
            A service catalog, scorecards, and self-service actions for
            platform teams — the internal developer portal engineers
            actually open.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6f6c86]">
            Product
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {productLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--on-dark)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6f6c86]">
            Company
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--on-dark)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-col gap-3 text-sm">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--on-dark)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6f6c86]">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 flex-none" />
              <a
                href="mailto:hello@devnoria.tech"
                className="hover:text-[var(--on-dark)]"
              >
                hello@devnoria.tech
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 flex-none" />
              <a
                href="tel:+9779845566778"
                className="hover:text-[var(--on-dark)]"
              >
                +977 984-5566778
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-none" />
              <span>Sanepa, Lalitpur 44700, Nepal</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/8">
        <Container className="flex flex-col gap-4 py-6 text-[11px] text-[#6f6c86] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Devnoria. All rights reserved.</p>
          <p>Internal developer platform, built from Lalitpur, Nepal.</p>
        </Container>
      </div>
    </footer>
  );
}
