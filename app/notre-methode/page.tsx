import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { ProcessTimeline } from "../components/process-timeline";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Notre méthode de pilotage de travaux, étape par étape — ARCHI PILOTE RÉNOVATION",
  description: "Premier échange, visite technique, devis des entreprises, chantier piloté, réception. Les cinq étapes d'un projet piloté par ARCHI PILOTE RÉNOVATION.",
};

export default function NotreMethodePage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Notre méthode"
        segments={[{ text: "Un pilote de projet," }, { text: "jamais un standard.", serif: true, gradient: true }]}
        lead="Une rénovation échoue rarement sur les travaux eux-mêmes — elle échoue sur l'enchaînement des lots. Un seul pilote suit votre chantier du diagnostic à la réception."
      />
      <ProcessTimeline />

      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-6 text-ivoire/85 text-[1.02rem] leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Le cadrage, avant les entreprises</h2>
            <p>
              Après la visite technique, nous rédigeons une note de cadrage : ce que le projet suppose, dans quel
              ordre, avec quelles fourchettes budgétaires par lot et quel calendrier prévisionnel. Si une étude de
              structure est nécessaire, elle est identifiée à ce moment-là, pas trois mois plus tard.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Le suivi de chantier</h2>
            <p>
              Un point d&apos;avancement écrit chaque semaine, photos datées à l&apos;appui. Vous suivez le chantier
              depuis votre téléphone, même à distance, et chaque décision est conservée et horodatée.
            </p>
          </div>
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
