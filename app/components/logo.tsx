/** Marque Global Rénovation — monogramme chevron (parquet point de Hongrie). */
export function LogoMark({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="1" y="1" width="38" height="38" rx="8" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
      <path d="M9 28 20 12 31 28" stroke="currentColor" strokeWidth="1.6" opacity="0.5" />
      <path d="M9 28 20 17 31 28" stroke="var(--c-orange)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
