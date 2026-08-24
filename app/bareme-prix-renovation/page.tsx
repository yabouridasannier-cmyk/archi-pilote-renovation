import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { GAMMES, PIECES_OPTIONS } from "../data";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Barème public des coûts de rénovation — Île-de-France | ARCHI PILOTE RÉNOVATION",
  description: "Fourchettes observées sur les projets accompagnés en Île-de-France, mise à jour trimestrielle. Indicatif, non contractuel.",
};

const FAQ_BAREME = [
  { q: "Pourquoi cette page est-elle utile ?", r: "Parce qu'elle rassemble des fourchettes datées et contextualisées plutôt qu'un chiffre unique et vague." },
  { q: "Ces montants sont-ils garantis ?", r: "Non. Ce sont des fourchettes observées, indicatives et non contractuelles. Seul le devis remis par l'entreprise après visite technique engage un prix." },
  { q: "À quelle fréquence ce barème est-il mis à jour ?", r: "Dès qu'une donnée significative change, et au minimum lors de la revue trimestrielle." },
];

export default function BaremePage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Barème public des coûts"
        segments={[{ text: "Prix de rénovation" }, { text: "en Île-de-France, 2026.", serif: true, gradient: true }]}
        lead="Fourchettes observées sur les projets accompagnés en Île-de-France, mise à jour trimestrielle. Indicatif et non contractuel — arrêté à août 2026."
      />

      <section className="relative pb-16 md:pb-24">
        <div className="container-site max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-line">
                <th className="py-3 pr-4 font-mono text-[0.7rem] uppercase tracking-wider text-muted">Type de rénovation</th>
                <th className="py-3 font-mono text-[0.7rem] uppercase tracking-wider text-muted">Fourchette</th>
              </tr>
            </thead>
            <tbody>
              {GAMMES.map((g) => (
                <tr key={g.id} className="border-b border-line">
                  <td className="py-4 pr-4">
                    <span className="display text-lg text-ivoire normal-case block">{g.nom}</span>
                    <span className="text-muted text-[0.85rem]">{g.description}</span>
                  </td>
                  <td className="py-4 font-mono text-orange whitespace-nowrap">{g.prixMin}–{g.prixMax} €/m²</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-muted text-[0.85rem] mt-6">Montées en gamme fréquentes, en complément d&apos;une base :</p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {PIECES_OPTIONS.map((p) => (
              <li key={p.id} className="flex items-center justify-between text-[0.92rem] text-ivoire/85 border-b border-line py-2">
                <span>{p.nom}</span>
                <span className="font-mono text-muted">+{p.majoration.toLocaleString("fr-FR")} €</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-3xl mx-auto flex flex-col gap-4">
          {FAQ_BAREME.map((f) => (
            <div key={f.q} className="card-e rounded-2xl p-6">
              <h3 className="display text-[1.05rem] text-ivoire normal-case mb-1.5">{f.q}</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">{f.r}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
