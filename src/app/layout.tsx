import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const SITE_URL = "https://devnoria.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Devnoria — The Internal Developer Platform Engineers Open",
    template: "%s · Devnoria",
  },
  description:
    "Devnoria is an early-stage internal developer platform startup based in Lalitpur, Nepal, giving platform teams a service catalog, scorecards, and self-service actions.",
  keywords: [
    "Devnoria",
    "internal developer platform startup",
    "developer platform",
    "service catalog",
    "platform engineering",
    "self-service infrastructure",
    "developer experience",
    "golden paths",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Devnoria — The Internal Developer Platform Engineers Open",
    description:
      "A service catalog, scorecards, and self-service actions for platform teams — the internal developer portal engineers actually open.",
    siteName: "Devnoria",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devnoria — The Internal Developer Platform Engineers Open",
    description:
      "A service catalog, scorecards, and self-service actions for platform teams — the internal developer portal engineers actually open.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Devnoria",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Devnoria is an early-stage internal developer platform startup based in Lalitpur, Nepal, giving platform teams a service catalog, scorecards, and self-service actions.",
  email: "hello@devnoria.tech",
  telephone: "+977-984-5566778",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sanepa",
    addressLocality: "Lalitpur",
    postalCode: "44700",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
