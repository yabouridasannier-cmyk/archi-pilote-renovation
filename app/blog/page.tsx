import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { BlogGrid } from "./blog-grid";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Blog — Conseils rénovation | Archipilote",
  description:
    "Prix au m², matériaux, isolation, DPE : nos guides pratiques pour comprendre et réussir votre projet de rénovation d'appartement.",
};

export default function BlogPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Blog & conseils"
        segments={[{ text: "Tout savoir avant" }, { text: "de rénover.", serif: true, gradient: true }]}
        lead="Prix, matériaux, isolation : nos guides pratiques pour aborder votre projet avec des chiffres réels, pas des estimations vagues."
      />
      <BlogGrid />
      <CtaFinal />
    </main>
  );
}
