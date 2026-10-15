export function CatalogTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="catalog-tag">
      <span className="font-[family-name:var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--fg-muted)]">
        {children}
      </span>
    </div>
  );
}
