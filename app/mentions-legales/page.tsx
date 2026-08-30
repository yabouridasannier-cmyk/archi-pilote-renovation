import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { SITE } from "../data";

export const metadata: Metadata = {
  alternates: { canonical: "/mentions-legales" },
  title: "Mentions légales — ARCHI PILOTE RÉNOVATION",
  description: "Éditeur du site, hébergement, propriété intellectuelle et données personnelles.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Mentions légales"
        segments={[{ text: "Qui édite" }, { text: "ce site.", serif: true, gradient: true }]}
      />
      <section className="relative pb-24 md:pb-36">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-10 text-ivoire/85 text-[0.98rem] leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Éditeur du site</h2>
            <p>{SITE.structure}</p>
            <p>Directeur de la publication : le Président d&apos;IA RENOV (SASU).</p>
            <p>Contact : <a href={`mailto:${SITE.email}`} className="text-orange hover:underline">{SITE.email}</a> — {SITE.telAffiche}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Ce que la marque est, et n&apos;est pas</h2>
            <p>
              ARCHI PILOTE RÉNOVATION est une marque de pilotage de projets de rénovation, exploitée par IA RENOV (SASU).
              ARCHI PILOTE RÉNOVATION n&apos;est pas une entreprise de travaux, n&apos;exécute aucun lot et ne facture aucun
              travaux. Les travaux présentés sur ce site sont réalisés et facturés par des entreprises partenaires
              indépendantes, qui contractent directement avec le client et portent chacune leurs propres assurances
              de responsabilité civile professionnelle et de garantie décennale.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments de ce site (textes, structure, charte graphique) est protégé au titre du
              droit d&apos;auteur. Les photographies présentées comme chantiers réels et légendées « chantier réel des
              équipes partenaires » proviennent de projets effectivement pilotés par les équipes partenaires du
              groupe. Les autres visuels (schémas explicatifs, références de style, photographies de niveau de
              finition) sont des illustrations et sont signalés comme tels sur les pages concernées.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Données personnelles et cookies</h2>
            <p>
              Les informations transmises via le formulaire de contact de ce site sont utilisées
              uniquement pour traiter votre demande de projet. Ce site ne dépose aucun cookie de mesure d&apos;audience
              ni de publicité. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation et d&apos;opposition sur vos données, ainsi que d&apos;un droit de réclamation
              auprès de la CNIL. Le détail des données collectées, des durées de conservation et des modalités
              d&apos;exercice de ces droits figure dans la{" "}
              <Link href="/politique-confidentialite" className="text-orange hover:underline">politique de confidentialité</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
