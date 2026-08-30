import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/detail-invisible" },
  title: "Le détail invisible : contrôle qualité avant fermeture des cloisons | ARCHI PILOTE RÉNOVATION",
  description:
    "Étanchéité, supports, traversées, réservations, ventilation et câblage : les points de contrôle à vérifier avant que les finitions ne recouvrent le travail des entreprises.",
};

const ETAPES = [
  {
    title: "Vérifier l'étanchéité avant la pose du carrelage",
    text: "Sous carrelage de salle de bains ou de douche, un système d'étanchéité complémentaire doit couvrir le sol et les remontées en plinthe, avec traitement soigné des points singuliers : angles, traversées de canalisation, pied de paroi de douche.",
  },
  {
    title: "Contrôler les supports avant fermeture des cloisons",
    text: "Un renfort bois ou métallique doit être posé derrière une cloison lorsqu'un équipement lourd est prévu : meuble suspendu, sèche-serviettes, WC suspendu, barre de douche. Sans renfort intégré avant la plaque de plâtre, la fixation future reste fragile.",
  },
  {
    title: "Vérifier les traversées de parois",
    text: "Chaque passage de gaine, de canalisation ou de câble à travers un mur ou un plancher doit être repéré, calfeutré et, lorsque nécessaire, protégé pour maintenir la résistance au feu et l'isolation acoustique de la paroi traversée.",
  },
  {
    title: "Positionner les réservations avant le coulage ou le doublage",
    text: "Les réservations pour arrivées d'eau, évacuations, gaines électriques et ventilation doivent être prévues à l'emplacement exact des équipements finaux, validé sur plan, avant que la paroi ne soit fermée.",
  },
  {
    title: "Contrôler le réseau de ventilation avant habillage",
    text: "Le tracé des gaines de ventilation mécanique, les raccordements aux bouches d'extraction et l'étanchéité des jonctions doivent être vérifiés avant la pose d'un faux plafond ou d'un doublage qui les rendra inaccessibles.",
  },
  {
    title: "Vérifier le câblage électrique avant plaquage",
    text: "Chemins de câbles, boîtes de dérivation accessibles, mise à la terre et repérage des circuits sont contrôlés avant la fermeture des cloisons, avec photo datée de chaque zone pour référence future.",
  },
  {
    title: "Photographier et dater chaque point avant recouvrement",
    text: "Chaque contrôle donne lieu à une photo datée, transmise sur WhatsApp le jour même, avant que le lot suivant ne recouvre la zone. Ce document constitue la preuve conservée dans le dossier final du projet.",
  },
];

const GRILLE = [
  ["Salle de bains / douche", "Étanchéité complémentaire sous carrelage", "Pose du carrelage et des faïences"],
  ["Cloisons porteuses d'équipement", "Renfort de fixation (meuble, sèche-serviettes, WC suspendu)", "Pose des plaques de plâtre"],
  ["Traversées de mur ou plancher", "Calfeutrement et protection incendie/acoustique", "Doublage ou chape"],
  ["Arrivées d'eau et évacuations", "Réservations à l'emplacement exact des appareils", "Coulage de chape ou fermeture de gaine technique"],
  ["Ventilation mécanique", "Tracé des gaines, étanchéité des raccords, débit aux bouches", "Pose de faux plafond ou doublage"],
  ["Réseau électrique", "Chemins de câbles, boîtes de dérivation, mise à la terre", "Fermeture des cloisons et pose des plaques"],
  ["Isolation thermique", "Continuité de l'isolant, absence de pont thermique visible", "Pose du parement intérieur"],
];

const FAQ = [
  {
    q: "Pourquoi ces points de contrôle sont-ils décisifs pour la qualité finale ?",
    a: "Une fois les cloisons fermées et les finitions posées, ces éléments ne sont plus visibles. Un défaut d'étanchéité, un support absent ou une traversée mal calfeutrée ne se révèlent souvent qu'à l'usage, parfois plusieurs années après la réception des travaux.",
  },
  {
    q: "Qui réalise ces contrôles pendant le chantier ?",
    a: "Les contrôles s'appuient sur les points de vigilance identifiés lors du pilotage du projet et sur les documents techniques des entreprises partenaires contractantes. Pour les points relevant de la structure, un ingénieur structure partenaire indépendant peut être mobilisé.",
  },
  {
    q: "Comment le client garde-t-il une preuve de ces contrôles ?",
    a: "Chaque point contrôlé fait l'objet d'une photo datée, transmise le jour même sur WhatsApp, puis classée dans le dossier de suivi du projet avant que la zone ne soit recouverte par le lot suivant.",
  },
  {
    q: "Ces contrôles s'appliquent-ils à une rénovation partielle comme à une rénovation complète ?",
    a: "Oui. Dès qu'un lot ferme une paroi ou recouvre un réseau, un contrôle préalable s'impose, que le chantier porte sur une seule salle de bains ou sur l'ensemble d'un logement.",
  },
  {
    q: "Que se passe-t-il si un défaut est repéré après la fermeture des cloisons ?",
    a: "La reprise devient plus coûteuse et plus longue, car elle suppose de rouvrir la paroi concernée. C'est précisément ce que ces contrôles préalables cherchent à éviter, en documentant l'état des ouvrages avant qu'ils ne deviennent inaccessibles.",
  },
];

export default function DetailInvisiblePage() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="Preuves — contrôle qualité"
        title="Le détail invisible : ce qui doit être vérifié avant que les cloisons ne se referment"
        lead="Une finition soignée ne prouve rien sur ce qui se cache derrière. Étanchéité de salle de bains, supports de fixation, traversées de parois, réservations, réseau de ventilation et câblage électrique doivent être contrôlés et photographiés avant que le lot suivant ne les recouvre. Ce contrôle documenté évite les défauts qui ne se révèlent qu'à l'usage, une fois le chantier terminé."
      />

      <MqSection
        kicker="Le problème"
        title="La finition masque, elle ne garantit rien"
        lead="Un carrelage droit ou une peinture nette ne renseignent en rien sur la qualité de ce qui se trouve dessous."
      >
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/maquette/schema-etancheite-salle-eau.jpg"
            alt="Coupe d'une salle d'eau montrant la natte d'étanchéité sous carrelage, la bande d'angle, la pente et le siphon"
            caption="Étanchéité sous carrelage : continuité de la natte entre murs et sol, bandes de renfort en angle et pente d'évacuation de 1 à 2 %."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Ce qui se voit n&apos;est pas ce qui compte</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                {"La réception visuelle d'un chantier porte sur les surfaces terminées, jamais sur les couches techniques enfouies."}
              </p>
              <p className="text-[0.95rem] text-ivoire/85 leading-relaxed">
                {"Un client réceptionne une salle de bains sur l'aspect du carrelage, la propreté des joints et le fonctionnement des appareils. L'étanchéité sous carrelage, elle, n'est plus accessible à ce stade : elle doit avoir été vérifiée avant."}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Le coût d&apos;une reprise après coup</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                {"Un défaut découvert après fermeture impose de rouvrir la paroi, avec un surcoût sans commune mesure avec un contrôle préalable."}
              </p>
              <p className="text-[0.95rem] text-ivoire/85 leading-relaxed">
                {"Une infiltration liée à une étanchéité incomplète, un meuble qui se descelle faute de renfort, une bouche de ventilation mal raccordée : ces défauts se révèlent des mois après la réception, quand la reprise suppose de casser une finition neuve."}
              </p>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Méthode"
        title="La procédure de contrôle avant fermeture"
        lead="Chaque zone technique fait l'objet d'une vérification avant que le lot suivant ne la recouvre."
      >
        <div className="flex flex-col gap-10">
          <MqFig
            src="/photos/maquette/schema-doublage-isolant.jpg"
            alt="Coupe verticale d'un doublage isolant sur mur ancien : rails, montants, laine minérale, pare-vapeur et plaque de plâtre"
            caption="Doublage isolant sur mur ancien : ossature métallique à entraxe 600 mm, laine minérale, pare-vapeur continu et plaque de plâtre."
          />
          <MqNumbered items={ETAPES} />
        </div>
      </MqSection>

      <MqSection
        kicker="Grille de contrôle"
        title="Les points à vérifier avant fermeture des cloisons"
        lead="Cette grille sert de référence pour les visites de chantier précédant chaque fermeture de paroi."
      >
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/maquette/schema-vmc.jpg"
            alt="Schéma de principe d'une ventilation mécanique contrôlée avec bouches d'extraction et entrées d'air"
            caption="Principe de la ventilation mécanique contrôlée : entrées d'air en pièces sèches, extraction en cuisine et salle d'eau, réseau raccordé au caisson."
          />
          <div className="overflow-x-auto border border-line rounded-[2px] bg-surface">
            <table className="w-full text-left text-[0.92rem]">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-4 py-3 font-semibold text-ivoire whitespace-nowrap">Zone technique</th>
                  <th className="px-4 py-3 font-semibold text-ivoire">Point de contrôle</th>
                  <th className="px-4 py-3 font-semibold text-ivoire">À vérifier avant</th>
                </tr>
              </thead>
              <tbody>
                {GRILLE.map((row) => (
                  <tr key={row[0]} className="border-b border-line last:border-b-0 align-top">
                    <td className="px-4 py-3 text-ivoire font-medium">{row[0]}</td>
                    <td className="px-4 py-3 text-ivoire/85">{row[1]}</td>
                    <td className="px-4 py-3 text-muted">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Signes d'alerte"
        title="Ce qui doit déclencher une vérification immédiate"
        lead="Certains signaux, visibles pendant le chantier, indiquent qu'un point invisible mérite un contrôle avant fermeture."
      >
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/maquette/schema-electricite-nfc15100.jpg"
              alt="Schéma d'un tableau électrique de logement rénové avec circuits, différentiel 30 mA et liaison équipotentielle"
              caption="Organisation des circuits d'un logement rénové : protection différentielle 30 mA, sections adaptées et liaison équipotentielle en salle d'eau."
            />
            <MqFig
              src="/photos/chantiers/chPlacardTableauElectriqueIntegre.jpeg"
              alt="Tableau électrique et compteur intégrés dans un placard sur mesure, chantier réel"
              caption="Tableau électrique et compteur intégrés dans un placard sur mesure : l'accès de maintenance reste dégagé derrière une façade menuisée. Chantier réel des équipes partenaires."
            />
          </div>
          <MqChecklist
            items={[
              "Aucune mention écrite du système d'étanchéité prévu sous carrelage dans le devis de plomberie ou de carrelage.",
              "Absence de renfort visible derrière une cloison là où un meuble suspendu est prévu au plan.",
              "Traversée de mur ou de plancher non calfeutrée au moment de la visite de chantier.",
              "Réservation d'arrivée d'eau positionnée sans confirmation du plan d'implantation final des appareils.",
              "Gaine de ventilation posée sans contrôle du débit avant la pose du faux plafond.",
              "Câblage électrique fermé sans photo datée du parcours des circuits.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Suivi documenté"
        title="Une preuve conservée avant recouvrement"
        lead="Le suivi quotidien par photos datées transforme un contrôle ponctuel en dossier exploitable dans la durée."
      >
        <MqProse>
          <p>
            {"Chaque point vérifié fait l'objet d'une photo datée, transmise le jour même sur WhatsApp, avec un repère de pièce et de zone. Ces photos sont ensuite classées dans le dossier de suivi du projet, aux côtés des notices et des garanties, pour constituer une trace exploitable en cas de question ultérieure sur un ouvrage devenu invisible."}
          </p>
        </MqProse>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ce que les clients demandent avant de fermer un chantier">
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
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage de A à Z" },
          { href: "/second-oeuvre", label: "Second œuvre technique", sub: "Électricité, plomberie, cloisons" },
          { href: "/realisations", label: "Réalisations", sub: "Cas datés et documentés" },
        ]}
      />

      <MqCta
        title="Faites vérifier vos points techniques avant fermeture"
        lead="Étude de projet gratuite sous 48 heures : lecture du bâti, hiérarchisation des travaux et points de vigilance avant chantier."
      />
    </main>
  );
}
