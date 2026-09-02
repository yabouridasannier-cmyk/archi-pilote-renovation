import type { Metadata } from "next";
import { MqHero, MqSection, MqFig, MqReadNext } from "../components/mq";
import { BlogGrid } from "./blog-grid";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Magazine de la rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Prix au m², matériaux, isolation, DPE : nos guides pratiques pour comprendre et réussir votre projet de rénovation en Île-de-France.",
};

export default function BlogPage() {
  return (
    <main>
      <MqHero
        kicker="Magazine de la rénovation"
        title="Tout savoir avant de rénover"
        lead="Prix, matériaux, isolation : nos analyses techniques pour aborder votre projet avec des chiffres réels, pas des estimations vagues."
      />
      <MqSection
        kicker="Avant de commencer"
        title="Les six étapes clés pour préparer votre projet"
        lead="Budget et priorités, faisabilité technique, devis et comparatifs, planning et délais, matériaux et finitions, entreprises et assurances : l'ordre dans lequel ces six sujets sont traités décide de la maîtrise du chantier."
        wide
      >
        <MqFig
          src="/photos/pedagogie/52-tout-savoir-avant-de-renover.jpeg"
          alt="Infographie ARCHI PILOTE RÉNOVATION « Tout savoir avant de rénover » : les six étapes clés pour préparer un projet — budget et priorités, faisabilité technique, devis et comparatifs, planning et délais, matériaux et finitions, entreprises et assurances — disposées autour d'une vue axonométrique d'un logement en cours de rénovation"
          caption="Les six étapes clés pour préparer un projet de rénovation. Infographie ARCHI PILOTE RÉNOVATION."
          ratio="aspect-[16/9]"
        />
      </MqSection>
      <BlogGrid />
      <MqReadNext items={[
        { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes indicatives par poste" },
        { href: "/glossaire-renovation", label: "Glossaire technique", sub: "Le vocabulaire du bâtiment" },
        { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Un budget indicatif en une minute" },
      ]} />
    </main>
  );
}
