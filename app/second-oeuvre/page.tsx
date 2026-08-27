import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/second-oeuvre" },
  title: "Second œuvre technique : réseaux, cloisons et finitions compatibles | ARCHI PILOTE RÉNOVATION",
  description:
    "Électricité, plomberie, ventilation, cloisons et finitions se lisent ensemble : ce qui se décide avant fermeture conditionne tout le reste. Pilotage du second œuvre en Île-de-France.",
};

/* Page hub "Second œuvre technique" — fiche PAGE PRINCIPALE · 07 du dossier V3.
   Les 4 visuels prescrits (réseaux ouverts, coupe de cloison, essais réseaux,
   interface cuisine) exigent des photos réelles de chantier et un schéma validé
   qui n'existent pas encore — la page vit en texte seul + illustration honnête
   en attendant, conformément à la hiérarchie des sources V3 §3.1. */
export default function Page() {
  return (
    <SpecialtyPage
      eyebrow="Second œuvre"
      segments={[{ text: "Le second œuvre," }, { text: "un système, pas une liste de lots.", serif: true, gradient: true }]}
      lead="Une rénovation réussit ou échoue dans ce qui ne se voit plus après fermeture : réseaux, réservations, renforts, ventilation. Le second œuvre technique consiste à faire dialoguer électricité, plomberie, cloisons et finitions avant que le parement ne cache tout — parce qu'une décision prise dans un lot crée une contrainte dans un autre, et que la corriger après coup coûte toujours plus cher que l'avoir anticipée."
      photo="chantierRenovation"
      photoAlt="Cloisons hydrofuges et phoniques en cours de montage sur ossature métallique — chantier réel"
      slug="/second-oeuvre"
      sections={[
        { titre: "Les réseaux se lisent ensemble", texte: "Plomberie, électricité et ventilation partagent les mêmes cloisons, les mêmes gaines, parfois les mêmes réservations. Les passages sont contrôlés avant fermeture : un réseau validé isolément peut devenir incompatible dès qu'un autre lot pose le sien. Le pilotage consiste à organiser ce contrôle croisé au bon moment, pas après la pose des parements." },
        { titre: "Une cloison prépare aussi les usages futurs", texte: "Derrière un parement se décident les renforts pour le mobilier suspendu, les gaines pour les équipements à venir, l'isolant acoustique, les réservations. Une cloison technique se dessine en pensant à ce qu'elle devra porter et laisser passer — pas seulement à la surface qu'elle délimite." },
        { titre: "Repérer, tester, documenter", texte: "Un lot fini doit être repéré et testé avant d'être refermé : étiquetage du tableau électrique, essais des circuits, mise en eau des réseaux sanitaires. Chaque essai documenté avant fermeture est un litige évité après réception — c'est le rôle du point d'arrêt que le pilote organise entre les entreprises." },
        { titre: "L'interface cuisine et salle de bain", texte: "Les pièces d'eau concentrent les interfaces : les attentes (alimentations, évacuations, électricité) doivent être validées avant la pose du mobilier, car le dessin du mobilier doit suivre les contraintes techniques, jamais l'inverse. C'est l'endroit exact où un projet mal séquencé se paie en reprises." },
      ]}
      faqExtra={[
        { q: "Quels lots couvre le second œuvre technique ?", r: "Électricité, plomberie, chauffage, ventilation, cloisons et doublages, puis les finitions qui les recouvrent (sols, murs, menuiseries intérieures). Chaque lot est réalisé et facturé par l'entreprise partenaire spécialisée." },
      ]}
    />
  );
}
