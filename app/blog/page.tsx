import type { Metadata } from "next";
import { MqHero, MqReadNext } from "../components/mq";
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
      <BlogGrid />
      <MqReadNext items={[
        { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes indicatives par poste" },
        { href: "/glossaire-renovation", label: "Glossaire technique", sub: "Le vocabulaire du bâtiment" },
        { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Un budget indicatif en une minute" },
      ]} />
    </main>
  );
}
