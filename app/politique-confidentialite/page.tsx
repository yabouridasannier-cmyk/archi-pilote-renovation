import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { SITE } from "../data";

export const metadata: Metadata = {
  alternates: { canonical: "/politique-confidentialite" },
  title: "Politique de confidentialité — ARCHI PILOTE RÉNOVATION",
  description: "Données collectées, finalités, durée de conservation, transferts hors Union européenne et droits RGPD des visiteurs et prospects.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Vie privée"
        segments={[{ text: "Politique de" }, { text: "confidentialité.", serif: true, gradient: true }]}
      />
      <section className="relative pb-24 md:pb-36">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-10 text-ivoire/85 text-[0.98rem] leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Responsable du traitement</h2>
            <p>{SITE.structure}</p>
            <p>
              Contact pour toute question relative à vos données personnelles :{" "}
              <a href={`mailto:${SITE.email}`} className="text-orange hover:underline">{SITE.email}</a> — {SITE.telAffiche}.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Données collectées</h2>
            <p>
              Le formulaire de contact de ce site collecte : nom et prénom, coordonnées (téléphone, courriel
              facultatif), commune du bien, type de projet, surface, budget envisagé, horizon du projet et
              description libre. Ces champs sont ceux strictement nécessaires pour qualifier une demande d&apos;étude
              de projet. L&apos;estimateur de travaux, lui, fonctionne entièrement dans votre navigateur : aucune
              donnée saisie n&apos;est transmise ni conservée par nos serveurs.
            </p>
            <p>
              Le site ne dépose aucun cookie de mesure d&apos;audience ni de publicité : aucun outil d&apos;analytics
              tiers (Google Analytics ou équivalent) n&apos;est installé à ce jour. Seuls des cookies techniques
              strictement nécessaires au fonctionnement du site peuvent être utilisés ; ils ne requièrent pas de
              consentement au sens de la réglementation applicable aux cookies.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Finalité et base légale</h2>
            <p>
              Les données transmises via les formulaires sont utilisées exclusivement pour traiter votre demande
              d&apos;étude de projet de rénovation : vous recontacter, qualifier le projet et, le cas échéant,
              organiser une visite technique. Le traitement repose sur l&apos;exécution de mesures précontractuelles
              prises à votre demande (article 6.1.b du RGPD).
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Destinataires</h2>
            <p>
              Vos données sont destinées à IA RENOV (SASU) et, lorsque votre projet est confié à une entreprise
              partenaire contractante pour l&apos;exécution des travaux, aux seules coordonnées nécessaires à la mise
              en relation avec cette entreprise. Aucune donnée n&apos;est vendue ni cédée à des tiers à des fins
              commerciales ou publicitaires.
            </p>
            <p>
              Le site est hébergé par Vercel Inc. (États-Unis) ; l&apos;hébergement d&apos;une page web implique un
              traitement technique minimal des requêtes (adresse IP, journaux serveur) nécessaire au fonctionnement
              du site, encadré par les clauses contractuelles types de la Commission européenne pour les transferts
              hors Union européenne.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Durée de conservation</h2>
            <p>
              Les données d&apos;une demande de contact sont conservées le temps nécessaire au traitement du projet,
              puis jusqu&apos;à trois ans à compter du dernier échange si le projet ne se concrétise pas, conformément
              aux recommandations de la CNIL pour la prospection commerciale. Les données rattachées à un projet
              effectivement piloté sont conservées pendant la durée nécessaire au suivi du chantier et aux
              obligations légales de conservation qui s&apos;y rattachent.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Vos droits</h2>
            <p>
              Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et
              Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation et
              d&apos;opposition, ainsi que d&apos;un droit à la portabilité des données que vous avez fournies.
            </p>
            <p>
              Pour exercer ces droits, écrivez à{" "}
              <a href={`mailto:${SITE.email}`} className="text-orange hover:underline">{SITE.email}</a>, en précisant
              votre identité. Une réponse vous sera apportée dans le délai légal d&apos;un mois.
            </p>
            <p>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser
              une réclamation à la Commission nationale de l&apos;informatique et des libertés (CNIL), 3 place de
              Fontenoy, 75007 Paris — <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="text-orange hover:underline">www.cnil.fr</a>.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="display text-xl text-ivoire normal-case">Mise à jour</h2>
            <p>
              Cette politique peut être adaptée pour refléter une évolution du site ou de la réglementation. La
              version en ligne fait foi. Pour toute question, voir aussi les{" "}
              <Link href="/mentions-legales" className="text-orange hover:underline">mentions légales</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
