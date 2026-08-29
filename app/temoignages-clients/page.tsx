import type { Metadata } from "next";
import { MqHero, MqSection, MqChecklist, MqQuotes, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/temoignages-clients" },
  title: "Témoignages clients anonymisés et méthode de recueil | ARCHI PILOTE RÉNOVATION",
  description:
    "Retours clients anonymisés sur des projets de rénovation accompagnés en Île-de-France, avec méthode de recueil et transparence sur la vérification.",
};

const QUOTES = [
  {
    quote: "Nous avons pu comparer nos devis ligne à ligne avant de signer, ce qui a changé notre façon de discuter avec les entreprises.",
    author: "Client, propriétaire occupant — Rénovation complète d'un appartement, Paris, exemple anonymisé",
  },
  {
    quote: "Le suivi par photos datées chaque jour nous a permis de suivre le chantier sans être sur place en permanence.",
    author: "Cliente, investisseur locatif — Second œuvre technique d'un studio, Hauts-de-Seine, exemple anonymisé",
  },
  {
    quote: "L'achat direct des matériaux nous a semblé plus contraignant au départ, mais l'écart de budget final nous a convaincus.",
    author: "Client, propriétaire occupant — Rénovation énergétique d'une maison, Île-de-France, exemple anonymisé",
  },
];

const FAQ = [
  {
    q: "Ces témoignages sont-ils vérifiés ?",
    a: "Chaque retour publié est relié à un projet réel accompagné par ARCHI PILOTE RÉNOVATION. Les éléments identifiants sont retirés pour préserver la confidentialité des clients, mais le contexte du projet (type de bien, lots concernés, période) est conservé pour rester vérifiable.",
  },
  {
    q: "Pourquoi les témoignages sont-ils anonymisés plutôt que signés d'un nom complet ?",
    a: "L'anonymisation protège la vie privée des clients, notamment lorsque le témoignage porte sur un logement identifiable. Le contexte du projet est en revanche détaillé pour permettre au lecteur de juger de la pertinence du retour par rapport à sa propre situation.",
  },
  {
    q: "Comment les retours clients sont-ils recueillis ?",
    a: "Les retours sont sollicités après la livraison du chantier, à un moment où le client peut juger du résultat dans la durée et non sous le coup de l'enthousiasme du jour de réception. Le client valide le contenu et le niveau d'anonymisation avant toute publication.",
  },
  {
    q: "Un retour négatif serait-il publié sur cette page ?",
    a: "La méthode de recueil ne filtre pas les retours par leur tonalité, mais par leur capacité à décrire un contexte de projet exploitable. Un retour mitigé et argumenté a autant sa place qu'un retour très positif, dès lors qu'il reste rattaché à un projet identifiable en interne.",
  },
  {
    q: "Puis-je échanger directement avec un client ayant témoigné ?",
    a: "Pour préserver la confidentialité des clients, une mise en relation directe n'est pas proposée systématiquement. En revanche, l'étude de votre projet peut s'appuyer sur des exemples de cas comparables présentés sur la page réalisations.",
  },
];

export default function TemoignagesClientsPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="Preuves — retours clients"
        title="Témoignages clients : des retours anonymisés, reliés à un projet réel"
        lead="Chaque témoignage publié ici correspond à un projet réellement accompagné, présenté de façon anonymisée pour préserver la confidentialité du client. Le contexte du projet (type de bien, lots concernés, période) reste indiqué pour que le retour demeure vérifiable, plutôt que réduit à une citation flatteuse sans ancrage."
      />

      <MqSection
        kicker="Retours clients"
        title="Exemples de retours reçus après livraison"
        lead="Ces citations sont présentées comme des exemples représentatifs de retours reçus, anonymisés à la demande des clients concernés."
        wide
      >
        <MqQuotes items={QUOTES} />
      </MqSection>

      <MqSection
        kicker="Méthode de recueil"
        title="Comment un témoignage devient une preuve exploitable"
        lead="Le recueil intervient après livraison, avec validation du client sur le contenu et le niveau d'anonymisation retenu."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Un recueil après livraison, pas à chaud</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              {"Le retour est sollicité une fois le chantier terminé et le recul suffisant pour juger du résultat dans la durée."}
            </p>
            <p className="text-[0.95rem] text-ivoire/85 leading-relaxed">
              {"Solliciter un avis le jour de la réception favorise l'enthousiasme immédiat plutôt que le jugement sur la durée. Le recueil intervient donc après un délai permettant au client de juger de la tenue des ouvrages dans l'usage quotidien."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Une validation du client avant publication</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              {"Le client relit et valide le contenu ainsi que le niveau d'anonymisation retenu avant toute mise en ligne."}
            </p>
            <p className="text-[0.95rem] text-ivoire/85 leading-relaxed">
              {"Aucun témoignage n'est publié sans l'accord explicite du client sur sa formulation et sur les éléments de contexte conservés. Le client peut demander le retrait de son retour à tout moment."}
            </p>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Transparence sur la vérification"
        title="Ce que ce site garantit, et ce qu'il ne garantit pas"
        lead="Chaque retour est rattaché en interne à un projet identifiable, sans qu'un tiers indépendant certifie ces témoignages."
      >
        <MqChecklist
          cols={1}
          items={[
            "Chaque témoignage correspond à un projet réel accompagné, conservé en interne avec ses justificatifs.",
            "Aucun témoignage nominatif fictif ni chiffre non vérifiable n'est publié sur cette page.",
            "Le contexte du projet (type de bien, lots, difficulté rencontrée) est indiqué pour rester comparable.",
            "Les témoignages ne remplacent pas une analyse individuelle : chaque projet reste évalué sur son propre contexte.",
            "Aucun label ni certification tierce n'est associé à ces témoignages ; leur vérification reste interne à la marque.",
          ]}
        />
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ce que les visiteurs demandent sur ces témoignages">
        <MqFaq items={FAQ} />
      </MqSection>

      <section className="py-10 border-t border-line">
        <div className="container-site max-w-4xl">
          <p className="text-muted text-[0.85rem] leading-relaxed max-w-2xl">
            {"Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées."}
          </p>
        </div>
      </section>

      <MqReadNext
        items={[
          { href: "/realisations", label: "Réalisations", sub: "Cas de projets accompagnés, contexte et limites" },
          { href: "/modele-economique-transparence", label: "Modèle économique & transparence", sub: "Comment fonctionne l'achat direct de matériaux" },
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage de A à Z" },
        ]}
      />

      <MqCta
        title="Discutez de votre projet avec notre équipe"
        lead="Étude de projet gratuite sous 48 heures : lecture du bien, hiérarchisation des travaux et budget réaliste."
      />
    </main>
  );
}
