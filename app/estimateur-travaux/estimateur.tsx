"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

/* Estimateur de travaux — reconstruit d'après l'outil de la maquette Lovable :
   surface × niveau × type de bien × finition + options techniques.
   Fourchettes €/m² alignées sur le barème IDF validé du site. */

const NIVEAUX = [
  { id: "rafraichissement", nom: "Rafraîchissement", detail: "Peintures, sols, petits équipements.", min: 250, max: 450 },
  { id: "partielle", nom: "Rénovation partielle", detail: "Une pièce d'eau ou une cuisine, reprises ponctuelles.", min: 600, max: 900 },
  { id: "complete", nom: "Rénovation complète", detail: "Réseaux, cloisons, pièces techniques, sols.", min: 1000, max: 1500 },
  { id: "lourde", nom: "Rénovation lourde", detail: "Structure, redistribution, mise aux normes intégrale.", min: 1500, max: 2500 },
] as const;

const BIENS = [
  { id: "appart", nom: "Appartement en copropriété", coef: 1.05 },
  { id: "maison", nom: "Maison ou pavillon", coef: 1 },
  { id: "locatif", nom: "Bien locatif ou investissement", coef: 0.95 },
] as const;

const FINITIONS = [
  { id: "sobre", nom: "Finition sobre", detail: "Matériaux courants, calepinage simple.", coef: 0.9 },
  { id: "soignee", nom: "Finition soignée", detail: "Grès cérame grand format, menuiseries standard.", coef: 1 },
  { id: "hdg", nom: "Haut de gamme", detail: "Travertin, zellige, béton ciré, menuiserie sur mesure.", coef: 1.25 },
] as const;

const OPTIONS = [
  { id: "porteur", nom: "Ouverture de mur porteur ou reprise de structure", montant: 15000 },
  { id: "vmc", nom: "Création de ventilation mécanique (carottage inclus)", montant: 6500 },
  { id: "iti", nom: "Isolation thermique par l'intérieur", montant: 7500 },
  { id: "cuisine", nom: "Cuisine équipée neuve", montant: 9000 },
  { id: "sde", nom: "Salle d'eau complète supplémentaire", montant: 8500 },
  { id: "ancien", nom: "Restitution du charme de l'ancien (moulures, fenêtres à l'identique)", montant: 7000 },
] as const;

/* Répartition indicative par lot (part du budget médian) — grille de la maquette. */
const LOTS = [
  { nom: "Dépose, gros œuvre et structure", part: 0.18 },
  { nom: "Plomberie et ventilation", part: 0.14 },
  { nom: "Électricité et mise aux normes", part: 0.13 },
  { nom: "Cloisons, doublages et plafonds", part: 0.16 },
  { nom: "Sols, faïences et pierre", part: 0.17 },
  { nom: "Menuiseries et peintures", part: 0.22 },
] as const;

const fmt = (n: number) => (Math.round(n / 500) * 500).toLocaleString("fr-FR");

export function Estimateur() {
  const [surface, setSurface] = useState(60);
  const [niveauId, setNiveauId] = useState<string>("complete");
  const [bienId, setBienId] = useState<string>("appart");
  const [finitionId, setFinitionId] = useState<string>("soignee");
  const [opts, setOpts] = useState<string[]>([]);

  const niveau = NIVEAUX.find((n) => n.id === niveauId)!;
  const bien = BIENS.find((b) => b.id === bienId)!;
  const finition = FINITIONS.find((f) => f.id === finitionId)!;

  const { min, max, mid, semaines, economie } = useMemo(() => {
    const coef = bien.coef * finition.coef;
    const extra = OPTIONS.filter((o) => opts.includes(o.id)).reduce((s, o) => s + o.montant, 0);
    const min = niveau.min * surface * coef + extra;
    const max = niveau.max * surface * coef + extra;
    const mid = (min + max) / 2;
    const lvl = { rafraichissement: 0.45, partielle: 0.7, complete: 1, lourde: 1.4 }[niveau.id as string] ?? 1;
    const semaines = Math.max(2, Math.round((surface / 12) * lvl));
    return { min, max, mid, semaines, economie: mid * 0.2 };
  }, [surface, niveau, bien, finition, opts]);

  const toggle = (id: string) => setOpts((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const groupCls = "border border-line bg-surface rounded-[2px] p-5";
  const radioCls = (on: boolean) => `text-left border rounded-[2px] px-4 py-3 transition-colors cursor-pointer ${on ? "border-ivoire bg-surface-2" : "border-line hover:border-line-strong"}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 items-start">
      <div className="flex flex-col gap-5">
        <div className={groupCls}>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[0.9rem] text-ivoire">Surface du logement</span>
            <span className="display text-[1.4rem] text-ivoire tabular-nums">{surface}&nbsp;m²</span>
          </div>
          <input type="range" min={15} max={250} step={5} value={surface} onChange={(e) => setSurface(Number(e.target.value))} className="w-full mt-3 accent-[oklch(26%_0.013_60)] cursor-pointer" />
          <div className="flex justify-between text-[0.75rem] text-muted mt-1"><span>15 m²</span><span>250 m²</span></div>
        </div>

        <div className={groupCls}>
          <p className="font-semibold text-[0.9rem] text-ivoire mb-3">Niveau de rénovation</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {NIVEAUX.map((n) => (
              <button key={n.id} onClick={() => setNiveauId(n.id)} className={radioCls(niveauId === n.id)}>
                <span className="block font-semibold text-[0.92rem] text-ivoire">{n.nom}</span>
                <span className="block text-muted text-[0.8rem] mt-0.5">{n.detail}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={groupCls}>
          <p className="font-semibold text-[0.9rem] text-ivoire mb-3">Type de bien</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {BIENS.map((b) => (
              <button key={b.id} onClick={() => setBienId(b.id)} className={radioCls(bienId === b.id)}>
                <span className="block font-medium text-[0.88rem] text-ivoire leading-snug">{b.nom}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={groupCls}>
          <p className="font-semibold text-[0.9rem] text-ivoire mb-3">Niveau de finition</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {FINITIONS.map((f) => (
              <button key={f.id} onClick={() => setFinitionId(f.id)} className={radioCls(finitionId === f.id)}>
                <span className="block font-semibold text-[0.9rem] text-ivoire">{f.nom}</span>
                <span className="block text-muted text-[0.78rem] mt-0.5">{f.detail}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={groupCls}>
          <p className="font-semibold text-[0.9rem] text-ivoire mb-3">Postes techniques structurants</p>
          <div className="grid grid-cols-1 gap-2">
            {OPTIONS.map((o) => {
              const on = opts.includes(o.id);
              return (
                <button key={o.id} onClick={() => toggle(o.id)} className={`flex items-center justify-between gap-3 border rounded-[2px] px-4 py-2.5 text-left transition-colors cursor-pointer ${on ? "border-ivoire bg-surface-2" : "border-line hover:border-line-strong"}`}>
                  <span className="flex items-center gap-3">
                    <span className={`size-4 border rounded-[2px] flex items-center justify-center ${on ? "bg-ivoire border-ivoire" : "border-line-strong"}`}>
                      {on && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="oklch(98.5% 0.008 85)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
                    </span>
                    <span className="text-[0.88rem] text-ivoire leading-snug">{o.nom}</span>
                  </span>
                  <span className="text-muted text-[0.8rem] tabular-nums shrink-0">+{o.montant.toLocaleString("fr-FR")}&nbsp;€</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="rounded-[2px] p-6 md:p-7" style={{ background: "var(--mq-dark)" }}>
          <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase" style={{ color: "oklch(66% 0.106 74)" }}>Fourchette indicative</p>
          <p className="display text-[clamp(1.7rem,3vw,2.3rem)] mt-2 tabular-nums" style={{ color: "var(--mq-primary-fg)" }}>
            {fmt(min)}&nbsp;€ – {fmt(max)}&nbsp;€
          </p>
          <p className="text-[0.85rem] mt-2 leading-relaxed" style={{ color: "oklch(72% 0.012 75)" }}>
            Budget travaux hors mobilier, hors électroménager et hors honoraires éventuels d&apos;architecte ou d&apos;ingénieur partenaire.
          </p>
          <p className="text-[0.85rem] mt-1" style={{ color: "oklch(80% 0.05 74)" }}>
            Soit environ {Math.round(min / surface / 50) * 50} € à {Math.round(max / surface / 50) * 50} € par mètre carré.
          </p>
          <dl className="grid grid-cols-2 gap-4 mt-5 pt-4 border-t" style={{ borderColor: "oklch(35% 0.012 60)" }}>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-wider" style={{ color: "oklch(60% 0.012 70)" }}>Durée de chantier indicative</dt>
              <dd className="font-semibold mt-0.5" style={{ color: "var(--mq-primary-fg)" }}>{semaines} semaines</dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-wider" style={{ color: "oklch(60% 0.012 70)" }}>Économie visée par achat direct</dt>
              <dd className="font-semibold mt-0.5" style={{ color: "var(--mq-primary-fg)" }}>jusqu&apos;à {fmt(economie)} €</dd>
            </div>
          </dl>
        </div>

        <div className="border border-line bg-surface rounded-[2px] p-6">
          <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-orange-deep">Répartition indicative par lot</p>
          <ul className="mt-3 flex flex-col divide-y divide-line">
            {LOTS.map((l) => (
              <li key={l.nom} className="flex items-baseline justify-between gap-4 py-2 text-[0.88rem]">
                <span className="text-ivoire/85">{l.nom}</span>
                <span className="text-muted tabular-nums shrink-0">{fmt(mid * l.part)} €</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/contact" className="btn btn-primary w-full">Passer au budget réel — étude gratuite</Link>
      </div>
    </div>
  );
}
