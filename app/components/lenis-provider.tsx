/** Défilement natif du navigateur — le lissage Lenis donnait une sensation de scroll "collant" que le client a signalée comme désagréable. */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
