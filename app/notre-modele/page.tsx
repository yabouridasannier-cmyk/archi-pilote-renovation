import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { EngagementsSection } from "../components/engagements-section";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Matériaux achetés en direct, entreprises qui facturent directement — ARCHI PILOTE RÉNOVATION",
  description: "Vous achetez vos matériaux sans marge. Chaque entreprise vous facture et porte sa décennale. Nous pilotons, nous ne vendons pas de travaux.",
};

export default function NotreModelePage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Notre modèle"
        segments={[{ text: "Nous pilotons," }, { text: "nous ne vendons pas de travaux.", serif: true, gradient: true }]}
        lead="Deux principes tiennent tout le reste : vous achetez vos matériaux en direct, et chaque entreprise vous facture directement ses propres travaux."
      />

      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-8 text-ivoire/85 text-[1.02rem] leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Pourquoi les matériaux vous coûtent moins cher</h2>
            <p>
              Dans une rénovation classique, l&apos;entreprise achète les matériaux et vous les refacture avec une
              marge. C&apos;est légitime, c&apos;est son métier, et vous ne voyez jamais le prix d&apos;origine.
            </p>
            <p>
              Nous fonctionnons autrement : vous achetez vos matériaux directement chez les fournisseurs, à votre
              nom. Carrelage, parquet, robinetterie, appareillage électrique, cuisine, sanitaires. Nous vous
              indiquons les références, les quantités et les délais de commande ; vous payez le fournisseur, sans
              intermédiaire. Rien ne transite par nous, et aucune marge ne s&apos;ajoute.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Qui porte la responsabilité</h2>
            <p>
              Chaque entreprise qui intervient chez vous porte la responsabilité de ce qu&apos;elle exécute, avec
              sa propre assurance décennale, sa garantie biennale et sa garantie de parfait achèvement. Elle
              contracte directement avec vous, elle vous facture directement.
            </p>
            <p>
              ARCHI PILOTE RÉNOVATION n&apos;exécute aucun lot et ne facture aucun travaux. Notre rôle est le pilotage et
              l&apos;accompagnement : cadrer le projet, mettre en relation, tenir l&apos;interface, documenter.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Comment nous sommes rémunérés</h2>
            <p>
              Vous ne payez aucun honoraire, aucun frais de dossier. Notre rémunération est versée par les
              entreprises partenaires sur les dossiers qu&apos;elles réalisent, sous forme d&apos;un pourcentage de
              leurs travaux. Nous préférons vous dire d&apos;où vient l&apos;argent plutôt que de vous laisser le
              deviner.
            </p>
          </div>
        </div>
      </section>

      <EngagementsSection />
      <CtaFinal />
    </main>
  );
}
