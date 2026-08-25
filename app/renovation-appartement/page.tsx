import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-appartement" },
  title: "Rénovation appartement : contraintes et pilotage | ARCHI PILOTE RÉNOVATION",
  description: "Copropriété, réseaux, murs porteurs, finitions : structurez une rénovation d'appartement sans décisions contradictoires.",
};

const SECTIONS = [
  {
    titre: "Copropriété",
    texte: "Les travaux affectant une structure, une partie commune ou l'aspect extérieur peuvent nécessiter des démarches particulières. Ces sujets doivent être identifiés avant le chantier.",
  },
  {
    titre: "Acoustique",
    texte: "Déplacer un revêtement, une cloison ou un équipement peut modifier les nuisances. Les exigences de l'immeuble et la nature du support doivent être vérifiées.",
  },
  {
    titre: "Réseaux",
    texte: "Les colonnes, évacuations et gaines imposent des limites. Une cuisine très éloignée d'une évacuation n'est pas un simple problème de design.",
  },
  {
    titre: "Bâti ancien",
    texte: "Les immeubles anciens peuvent cumuler murs irréguliers, planchers non plans, réseaux modifiés et éléments patrimoniaux. Les relevés doivent être plus précis.",
  },
  {
    titre: "Finitions",
    texte: "Les moulures, parquets, menuiseries et détails existants peuvent être restaurés ou intégrés à un projet contemporain. Le choix dépend de leur état et de l'objectif du client.",
  },
];

const FAQ = [
  { q: "ARCHI PILOTE RÉNOVATION exécute-t-il ce lot ?", r: "Non. La marque structure et suit le projet ; l'entreprise partenaire spécialisée réalise et facture le lot, sous sa propre responsabilité." },
  { q: "Faut-il l'accord de la copropriété ?", r: "Pas pour tous les travaux. Certains travaux touchant la structure, les parties communes ou l'aspect extérieur peuvent nécessiter une autorisation — à vérifier avant engagement." },
  { q: "Intervenez-vous à Paris et en Île-de-France ?", r: "Oui, avec une zone d'intervention en Île-de-France selon la nature du projet." },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Appartement"
        segments={[{ text: "Rénovation d'appartement :" }, { text: "le projet ne s'arrête pas à la porte.", serif: true, gradient: true }]}
        lead="Un appartement fait partie d'un immeuble. Les parties communes, le règlement de copropriété, les réseaux collectifs et les voisins créent des contraintes spécifiques."
      />
      <section className="relative pb-16 md:pb-24">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-7 text-ivoire/85 text-[1.02rem] leading-relaxed">
          {SECTIONS.map((s) => (
            <div key={s.titre} className="flex flex-col gap-2">
              <h2 className="display text-2xl text-ivoire normal-case">{s.titre}</h2>
              <p>{s.texte}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-3xl mx-auto flex flex-col gap-4">
          {FAQ.map((f) => (
            <div key={f.q} className="card-e rounded-none p-6">
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
