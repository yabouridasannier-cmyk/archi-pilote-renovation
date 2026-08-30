import Link from "next/link";
import { SITE } from "../data";
import { NAV_GROUPS, NAV_STANDALONE } from "./mq-nav-data";

/* Footer repris de la maquette Lovable : 4 colonnes sur encre + bloc légal.
   Coordonnées réelles conservées (e-mail Gmail actif — l'adresse
   contact@archi-pilote-renovation.fr de la maquette n'existe pas encore). */
export function Footer() {
  return (
    <footer className="mt-16" style={{ background: "var(--mq-dark)" }}>
      <div className="container-site pt-14 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_repeat(4,1fr)] gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/photos/maquette/monogramme-archi-pilote.png" alt="" aria-hidden width={40} height={40} className="size-10 object-contain brightness-[1.8]" />
              <span className="display text-[1.05rem]" style={{ color: "var(--mq-primary-fg)" }}>ARCHI PILOTE RÉNOVATION</span>
            </div>
            <p className="text-[0.88rem] leading-relaxed" style={{ color: "oklch(70% 0.012 75)" }}>
              Pilotage et accompagnement de A à Z des rénovations en Paris, Hauts-de-Seine et Île-de-France.
              Gros œuvre, second œuvre, rénovation énergétique et dossiers techniques lourds.
            </p>
            <div className="mt-4 flex flex-col gap-1 text-[0.85rem]" style={{ color: "oklch(70% 0.012 75)" }}>
              <span>IA RENOV SASU — RCS Nanterre 889 976 387</span>
              <span>8 rue Gabriel Péri, 92250 La Garenne-Colombes</span>
              <a href={`mailto:${SITE.email}`} className="hover:underline break-all" style={{ color: "oklch(80% 0.05 74)" }}>{SITE.email}</a>
              <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="hover:underline" style={{ color: "oklch(80% 0.05 74)" }}>{SITE.telAffiche}</a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="hover:underline" style={{ color: "oklch(80% 0.05 74)" }}>WhatsApp</a>
            </div>
          </div>

          {NAV_GROUPS.map((g) => (
            <div key={g.label}>
              <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "oklch(60% 0.05 74)" }}>{g.label}</p>
              <ul className="flex flex-col gap-1.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[0.86rem] hover:underline" style={{ color: "oklch(74% 0.012 75)" }}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t" style={{ borderColor: "oklch(32% 0.012 60)" }}>
          <p className="text-[0.78rem] leading-relaxed max-w-4xl" style={{ color: "oklch(58% 0.012 70)" }}>
            ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise
            des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires
            indépendants. Les travaux sont exécutés et facturés par les entreprises concernées.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[0.8rem]" style={{ color: "oklch(58% 0.012 70)" }}>
            <span>© 2026 IA RENOV SASU. Marque ARCHI PILOTE RÉNOVATION. Tous droits réservés. — {NAV_STANDALONE.map((l) => (<Link key={l.href} href={l.href} className="hover:underline">{l.label}</Link>))} — <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link> — <Link href="/politique-confidentialite" className="hover:underline">Confidentialité</Link></span>
            <a href="https://fr.trustpilot.com/evaluate/archipiloterenovation.fr" target="_blank" rel="noreferrer" className="hover:underline">Donner votre avis sur Trustpilot ★</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
