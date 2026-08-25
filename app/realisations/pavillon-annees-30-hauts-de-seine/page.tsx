import type { Metadata } from "next";
import { PageHeader } from "../../components/page-header";
import { CtaFinal } from "../../components/cta-final";
import { PHOTOS } from "../../lib-photos";

export const metadata: Metadata = {
  alternates: { canonical: "/realisations/pavillon-annees-30-hauts-de-seine" },
  title: "Pavillon des années 30, Hauts-de-Seine — Rénovation complète | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète d'un pavillon de 118 m² avant emménagement : douze lots pilotés en 19 semaines, calendrier imposé par une date de fin de bail.",
  robots: { index: false, follow: true },
};

export default function EtudeDeCasPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Réalisation — visuel d'illustration"
        segments={[{ text: "Pavillon des années 30," }, { text: "Hauts-de-Seine.", serif: true, gradient: true }]}
        lead="Rénovation complète avant emménagement, 118 m², douze lots pilotés en 19 semaines."
      />

      <section className="relative pb-6">
        <div className="container-site max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-none overflow-hidden card-e mb-4">
            <img src={PHOTOS.chantierIsolation} alt="Isolation des combles avant doublage, pavillon en rénovation" className="absolute inset-0 size-full object-cover" />
          </div>
          <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-muted text-center">Visuel d&apos;illustration — nouvelle marque, premiers chantiers à venir</p>
        </div>
      </section>

      <article className="relative pb-20 md:pb-28">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-7 text-ivoire/85 text-[1.02rem] leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">La situation</h2>
            <p>
              118 m² sur deux niveaux plus combles, acquis en l&apos;état, aucun travaux depuis 1978. Électricité en
              fils sous moulures, chaudière fioul, aucune isolation, salle de bain unique à l&apos;étage. Les
              propriétaires emménageaient dans cinq mois, date de fin de bail non négociable.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">La contrainte</h2>
            <p>
              La contrainte n&apos;était pas technique, elle était calendaire. Cinq mois pour douze lots signifie
              que rien ne peut prendre de retard sans décaler tout le reste. Le point critique était le délai de
              livraison des menuiseries extérieures sur mesure : onze semaines annoncées. Elles ont donc été
              commandées en semaine deux, avant même que la dépose des anciennes soit planifiée.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Ce qui a été fait</h2>
            <p>
              Curage complet, reprise des planchers bois au premier, isolation des combles et des murs par
              l&apos;intérieur, réfection totale de l&apos;électricité avec tableau neuf aux normes NF C 15-100,
              dépose de la cuve fioul et installation d&apos;une pompe à chaleur air-eau avec radiateurs basse
              température, VMC hygroréglable, deux salles d&apos;eau dont une créée au rez-de-chaussée, cuisine sur
              caissons standards habillés de façades sur mesure, parquet contrecollé à l&apos;étage, carrelage
              grand format au rez-de-chaussée, peintures.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Le calendrier réel</h2>
            <p>
              Dix-neuf semaines de chantier, livré avec quatre jours d&apos;avance sur la date de fin de bail. Deux
              semaines de tampon avaient été réservées dans le calendrier prévisionnel : elles ont été consommées à
              70 %, sur un retard d&apos;approvisionnement de carrelage.
            </p>
          </div>

          <dl className="card-e rounded-none p-6 grid grid-cols-2 gap-4 mt-2">
            <div><dt className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">Surface</dt><dd className="text-ivoire">118 m²</dd></div>
            <div><dt className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">Lots intervenus</dt><dd className="text-ivoire">12</dd></div>
            <div><dt className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">Durée de chantier</dt><dd className="text-ivoire">19 semaines</dd></div>
            <div><dt className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">Budget</dt><dd className="text-ivoire">Indicatif, communiqué sur demande</dd></div>
          </dl>
        </div>
      </article>

      <CtaFinal />
    </main>
  );
}
