import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";
import { SITE } from "../data";

export const metadata: Metadata = {
  alternates: { canonical: "/parcours-expertise" },
  title: "ARCHI PILOTE RÉNOVATION, marque exploitée par IA RENOV (SASU)",
  description: "Une marque de pilotage de travaux de rénovation en Île-de-France, priorité maison et pavillon en couronne francilienne.",
};

export default function QuiSommesNousPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Qui sommes-nous"
        segments={[{ text: "Un pilote," }, { text: "pas un exécutant.", serif: true, gradient: true }]}
      />

      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-8 text-ivoire/85 text-[1.02rem] leading-relaxed">
          <p>
            ARCHI PILOTE RÉNOVATION est une marque de pilotage de projets de rénovation, exploitée par IA RENOV (SASU). Nous
            accompagnons les propriétaires de maisons et de pavillons d&apos;Île-de-France sur les projets qui
            touchent à la structure : ouverture de mur porteur, extension, surélévation, toiture, comme sur les
            rénovations complètes et le second œuvre.
          </p>
          <p>
            Notre rôle : cadrer le projet, aider à réunir les entreprises spécialisées adaptées à chaque lot, tenir
            l&apos;interface entre elles et vous, et documenter chaque décision jusqu&apos;à la fin du chantier. Les
            travaux sont exécutés et facturés par des entreprises partenaires assurées, qui engagent chacune leur
            responsabilité et leur garantie décennale. Les matériaux sont achetés par vous, en direct, sans
            intermédiaire.
          </p>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Notre territoire</h2>
            <p>
              Île-de-France, priorité pavillon et maison individuelle : Hauts-de-Seine, Yvelines, Essonne,
              Val-d&apos;Oise, Seine-et-Marne. Nous connaissons particulièrement les pavillons de la première et
              deuxième couronne — leurs typologies, et les contraintes de PLU communales qui décident de ce qui est
              possible avant même de parler de travaux.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Nos partenaires</h2>
            <p>
              Un architecte DPLG et un bureau d&apos;études structure interviennent en amont sur chaque dossier qui
              touche à la descente de charges. Les entreprises d&apos;exécution sont choisies par lot, présentées
              au client, qui signe directement avec elles.
            </p>
          </div>
          <p className="text-muted text-[0.85rem]">{SITE.structure}</p>
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
