import type { Metadata } from "next";
import { PageHeader } from "../../components/page-header";
import { CtaFinal } from "../../components/cta-final";
import { PHOTOS } from "../../lib-photos";

export const metadata: Metadata = {
  alternates: { canonical: "/realisations/extension-yvelines" },
  title: "Extension de plain-pied, Yvelines — 28 m² gagnés | ARCHI PILOTE RÉNOVATION",
  description: "Extension de 28 m² sur un jardin en pente : emprise au sol contrainte par le PLU, vide sanitaire ventilé, raccordement de niveau avec le séjour existant.",
  robots: { index: false, follow: true },
};

export default function EtudeDeCasPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Réalisation — visuel d'illustration"
        segments={[{ text: "Extension de plain-pied," }, { text: "Yvelines.", serif: true, gradient: true }]}
        lead="28 m² gagnés sur un jardin en pente, entre contrainte de PLU et raccordement au séjour existant."
      />

      <section className="relative pb-6">
        <div className="container-site max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-none overflow-hidden card-e mb-4">
            <img src={PHOTOS.grosOeuvre} alt="Extension de maison en cours de gros œuvre" className="absolute inset-0 size-full object-cover" />
          </div>
          <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-muted text-center">Visuel d&apos;illustration — nouvelle marque, premiers chantiers à venir</p>
        </div>
      </section>

      <article className="relative pb-20 md:pb-28">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-7 text-ivoire/85 text-[1.02rem] leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">La situation</h2>
            <p>
              Une maison de 92 m² avec un séjour de 21 m² jugé trop petit, et un jardin en pente descendant de
              80 cm sur la profondeur de la parcelle. Projet : une extension en prolongement du séjour, ouverte sur
              le jardin.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">La contrainte</h2>
            <p>
              Deux contraintes se sont croisées. Le PLU communal limitait l&apos;emprise au sol à un pourcentage qui
              laissait exactement 31 m² disponibles — l&apos;extension a donc été dimensionnée à 28 m² pour garder
              une marge, et non l&apos;inverse. Et la pente imposait soit un terrassement important, soit une
              extension sur vide sanitaire ventilé. Le vide sanitaire a été retenu : moins de terres à évacuer,
              meilleure gestion de l&apos;humidité, et raccordement de niveau avec le séjour existant.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Ce qui a été fait</h2>
            <p>
              Déclaration préalable (surface créée inférieure au seuil du permis de construire, emprise vérifiée
              avant dépôt), fondations et vide sanitaire ventilé, murs en blocs isolés, charpente traditionnelle en
              prolongement de la toiture existante, couverture raccordée à l&apos;existant avec traitement de la
              noue, baie coulissante de 3,60 m, chape isolée avec plancher chauffant raccordé sur l&apos;installation
              existante, sol continu entre le séjour d&apos;origine et l&apos;extension.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Le calendrier réel</h2>
            <p>
              Trois semaines d&apos;étude et de vérification d&apos;emprise. Un mois d&apos;instruction de la
              déclaration préalable, plus le délai de recours des tiers. Neuf semaines de travaux. La reprise de la
              toiture existante au droit de la jonction a représenté à elle seule deux semaines : c&apos;est toujours
              le point le plus délicat d&apos;une extension accolée.
            </p>
          </div>

          <dl className="card-e rounded-none p-6 grid grid-cols-2 gap-4 mt-2">
            <div><dt className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">Surface créée</dt><dd className="text-ivoire">28 m²</dd></div>
            <div><dt className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">Autorisation</dt><dd className="text-ivoire">Déclaration préalable</dd></div>
            <div><dt className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">Durée de chantier</dt><dd className="text-ivoire">9 semaines</dd></div>
            <div><dt className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">Budget</dt><dd className="text-ivoire">Indicatif, communiqué sur demande</dd></div>
          </dl>
        </div>
      </article>

      <CtaFinal />
    </main>
  );
}
