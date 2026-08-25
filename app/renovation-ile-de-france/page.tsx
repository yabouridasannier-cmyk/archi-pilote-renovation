import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Rénovation en Île-de-France : maison, appartement, structure | ARCHI PILOTE",
  description: "ARCHI PILOTE RÉNOVATION étudie les projets de rénovation complète, structure, extension, surélévation et copropriété dans toute l'Île-de-France selon leur ampleur et leurs contraintes.",
};

const DEPARTEMENTS = [
  { nom: "Hauts-de-Seine (92)", href: "/renovation-hauts-de-seine-92", texte: "Le premier bassin d'intervention. Mix maison / appartement en copropriété, extension, ouverture structurelle, rénovation énergétique." },
  { nom: "Yvelines (78)", href: "/renovation-yvelines-78", texte: "Particulièrement adapté aux projets de maison : rénovation globale, extension, surélévation, toiture, redistribution." },
  { nom: "Val-de-Marne (94)", href: "/renovation-val-de-marne-94", texte: "Mix d'appartements, maisons et opérations de transformation complète — Saint-Maur, Nogent, Le Perreux, Vincennes." },
  { nom: "Val-d'Oise (95)", href: "/renovation-val-doise-95", texte: "Nombreux projets pavillonnaires et de maisons : rénovation complète, énergie, toiture, extension." },
  { nom: "Essonne, Seine-et-Marne, Seine-Saint-Denis", href: "/renovation-essonne-91", texte: "Étudiés lorsque l'ampleur et la complexité justifient un pilotage d'ensemble." },
  { nom: "Paris", href: "/renovation-complexe-paris", texte: "Dossiers à angle technique : structure, copropriété, redistribution, réseaux, transformation complexe." },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Île-de-France"
        segments={[{ text: "Une stratégie adaptée au bien," }, { text: "pas seulement à l'adresse.", serif: true, gradient: true }]}
        lead="ARCHI PILOTE RÉNOVATION étudie les projets à Paris, dans les Hauts-de-Seine et plus largement en Île-de-France. La distance n'est pas le seul critère : plus un projet est complet, technique ou structurant, plus un déplacement régulier peut être justifié."
      />
      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {DEPARTEMENTS.map((d) => (
            <Link key={d.nom} href={d.href} className="card-e rounded-none p-6 flex flex-col gap-2 group hover:-translate-y-1 transition-transform duration-300">
              <h2 className="display text-[1.15rem] text-ivoire group-hover:text-orange transition-colors normal-case">{d.nom}</h2>
              <p className="text-muted text-[0.9rem] leading-relaxed">{d.texte}</p>
            </Link>
          ))}
        </div>
        <p className="text-center text-muted text-[0.85rem] mt-8 max-w-xl mx-auto">
          Votre commune n&apos;est pas citée ? Envoyez l&apos;adresse ou la commune, le type de bien, la surface et votre
          projet. Nous vous indiquons si le dossier entre dans notre zone et notre niveau d&apos;intervention.
        </p>
      </section>
      <CtaFinal />
    </main>
  );
}
