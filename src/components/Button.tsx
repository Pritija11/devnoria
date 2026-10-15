import Link from "next/link";

type Variant = "primary" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--primary)] text-[var(--on-primary)] shadow-[0_18px_40px_-16px_rgba(109,90,239,0.3)] hover:bg-[var(--primary-dark)]",
  outline:
    "border border-[var(--border-strong)] text-[var(--fg)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
  ghost: "text-[var(--fg-muted)] hover:text-[var(--fg)]",
  light:
    "bg-[var(--fg)] text-[var(--on-dark)] hover:bg-[color-mix(in_srgb,var(--fg)_85%,transparent)]",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
