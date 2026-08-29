import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqDark, MqDarkSteps, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/clinique-du-devis" },
  title: "Clinique du devis : lire un devis de rénovation ligne à ligne | ARCHI PILOTE RÉNOVATION",
  description:
    "Méthode d'analyse d'un devis de travaux : quantités, unités, hypothèses, exclusions, doublons entre lots et pièges classiques, avec grille de contrôle et procédure en étapes.",
};

const GRILLE = [
  {
    critere: "Intitulé du lot",
    risque: "Regroupement flou de plusieurs métiers sous un seul intitulé",
    controle: "Chaque lot nommé et rattaché à une pièce ou une zone précise",
  },
  {
    critere: "Quantités",
    risque: "Surface ou linéaire estimé sans relevé réel",
    controle: "Quantités vérifiées au mètre sur plan ou sur site",
  },
  {
    critere: "Unité de facturation",
    risque: "Confusion entre m², mètre linéaire et forfait",
    controle: "Unité cohérente avec la nature de la prestation",
  },
  {
    critere: "Hypothèses techniques",
    risque: "Support sain, accès facile ou réseau existant supposés sans vérification",
    controle: "Hypothèses écrites et confrontées à l'état réel du logement",
  },
  {
    critere: "Exclusions",
    risque: "Évacuation, dépose ou mise aux normes non chiffrées",
    controle: "Liste des exclusions demandée par écrit à chaque entreprise",
  },
  {
    critere: "Interfaces entre lots",
    risque: "Prestation absente des deux devis voisins (réservation, raccord, protection)",
    controle: "Vérification croisée systématique entre lots limitrophes",
  },
  {
    critere: "Doublons",
    risque: "Même prestation facturée par deux corps de métier différents",
    controle: "Repérage ligne à ligne des prestations qui se recoupent",
  },
  {
    critere: "Délai et conditions de règlement",
    risque: "Échéancier flou, avances disproportionnées",
    controle: "Échéancier lié à des étapes de chantier vérifiables",
  },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="PREUVES — MÉTHODE"
        title="Clinique du devis : apprendre à lire un devis de rénovation avant de signer"
        lead="Un devis de rénovation ne se juge pas sur son total mais sur ce qu'il décrit ligne à ligne. Notre clinique du devis applique une méthode issue du chiffrage en foncière : vérification des quantités, des unités, des hypothèses, des exclusions et des interfaces entre lots. Objectif : transformer un document commercial en outil de décision comparable, avant tout engagement financier."
      />

      <MqSection
        kicker="POURQUOI LE TOTAL NE SUFFIT PAS"
        title="Le montant global masque presque toujours l'essentiel"
        lead="Deux devis au même total peuvent couvrir des périmètres très différents. La comparaison n'a de sens qu'après remise à niveau ligne à ligne."
      >
        <MqFig
          src="/photos/maquette/schema-repartition-budget.jpg"
          alt="Répartition indicative d'un budget de rénovation complète par poste de travaux en pourcentage"
          caption="Répartition indicative d'un budget de rénovation complète par poste : ordres de grandeur, à confirmer par un chiffrage détaillé."
        />
        <div className="mt-10 flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Le montant total est une addition, pas une preuve</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Un total identique peut cacher des écarts de quantités, de qualité ou de prestations incluses.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un devis à 42 000 € pour une rénovation de salle de bains peut inclure la dépose complète,
                  l'étanchéité et l'évacuation des gravats, quand un autre au même montant exclut ces trois postes
                  et les facturera en avenant. Sans lecture ligne à ligne, l'écart n'apparaît qu'en cours de
                  chantier.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Le risque se loge entre les lots, pas dans les lots</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Les prestations qui manquent ou qui se répètent se trouvent aux interfaces entre corps de métier.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une ouverture de mur porteur qui déplace une arrivée d'eau, une isolation qui modifie le débit
                  de ventilation, une cuisine dessinée avant le plan électrique : ces jonctions entre lots sont le
                  terrain le plus fertile pour les oublis et les surcoûts imprévus.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <MqFig
            src="/photos/maquette/schema-mur-porteur.jpg"
            alt="Schéma en coupe d'une ouverture de mur porteur avec poutre de reprise et poteaux de descente de charge"
            caption="Ouverture de mur porteur : la charge est reprise par une poutre dimensionnée par un ingénieur structure, puis descendue jusqu'aux appuis."
          />
        </div>
      </MqSection>

      <MqDark
        kicker="MÉTHODE"
        title="La procédure d'analyse en huit étapes"
        lead="Chaque devis reçu suit la même trame de vérification, quel que soit le corps de métier concerné."
      >
        <MqDarkSteps
          steps={[
            {
              title: "Vérifier l'identité des lots et leur périmètre",
              text: "Chaque lot (démolition, plomberie, électricité, cloisons, carrelage, peinture, menuiseries) doit être nommé sans ambiguïté et rattaché à des pièces précises. Un devis qui regroupe plusieurs lots sous un intitulé vague empêche toute comparaison sérieuse.",
            },
            {
              title: "Contrôler les quantités et les unités",
              text: "Mètres carrés de sol, mètres linéaires de plinthe, nombre de points électriques, unités de robinetterie : chaque quantité doit correspondre à un relevé réel du logement, pas à une estimation forfaitaire. Une unité mal choisie (le m² facturé au lieu du mètre linéaire, par exemple) fausse tout le calcul.",
            },
            {
              title: "Lire les hypothèses posées par l'entreprise",
              text: "Un devis sérieux précise ses hypothèses : état du support supposé sain, absence d'amiante, accès normal au chantier, alimentation électrique existante suffisante. Ces hypothèses conditionnent le prix ; si elles sont fausses, un avenant suit presque toujours.",
            },
            {
              title: "Repérer les exclusions écrites noir sur blanc",
              text: "Évacuation des gravats, dépose de l'existant, mise aux normes électriques, raccordements en attente, protection des parties communes : ces postes sont fréquemment exclus sans que le client le remarque avant la facture finale.",
            },
            {
              title: "Chercher les prestations manquantes par comparaison croisée",
              text: "En superposant les devis des différents corps de métier, certaines prestations n'apparaissent nulle part : réservation pour une gaine, réseau de ventilation, reprise d'enduit après percement. Ce vide entre deux lots est le point de rupture budgétaire le plus fréquent.",
            },
            {
              title: "Identifier les doublons entre lots",
              text: "À l'inverse, deux entreprises facturent parfois la même prestation : dépose d'un sanitaire comptée à la fois en plomberie et en démolition, protection de sol facturée deux fois par des corps de métier différents. Chaque doublon repéré est une économie immédiate.",
            },
            {
              title: "Classer chaque ligne selon un code couleur de vigilance",
              text: "Vert pour une ligne précise et complète, orange pour une ligne à clarifier avant signature, rouge pour une ligne absente ou contradictoire avec une autre pièce du dossier. Cette grille de lecture rapide évite de signer sur la seule confiance dans le total.",
            },
            {
              title: "Formaliser les questions à poser avant signature",
              text: "La clinique du devis se termine par une liste écrite de questions précises adressées à l'entreprise : quantités à confirmer, hypothèses à vérifier sur site, exclusions à chiffrer séparément. Rien ne doit rester à l'oral.",
            },
          ]}
        />
      </MqDark>

      <MqSection
        kicker="GRILLE DE CONTRÔLE"
        title="Les points à vérifier avant de signer un devis"
        lead="Cette grille sert de check-list rapide pour une première lecture, avant l'analyse détaillée."
      >
        <div className="overflow-x-auto border border-line rounded-[2px]">
          <table className="w-full min-w-[40rem] text-left text-[0.92rem]">
            <thead>
              <tr className="border-b border-line">
                <th className="px-4 py-3 font-semibold text-ivoire">Critère</th>
                <th className="px-4 py-3 font-semibold text-ivoire">Risque fréquent</th>
                <th className="px-4 py-3 font-semibold text-ivoire">Point de contrôle</th>
              </tr>
            </thead>
            <tbody>
              {GRILLE.map((r) => (
                <tr key={r.critere} className="border-b border-line last:border-b-0 align-top">
                  <td className="px-4 py-3 font-medium text-ivoire whitespace-nowrap">{r.critere}</td>
                  <td className="px-4 py-3 text-muted leading-relaxed">{r.risque}</td>
                  <td className="px-4 py-3 text-ivoire/85 leading-relaxed">{r.controle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-electricite-nfc15100.jpg"
            alt="Schéma d'un tableau électrique de logement rénové avec circuits, différentiel 30 mA et liaison équipotentielle"
            caption="Organisation des circuits d'un logement rénové : protection différentielle 30 mA, sections adaptées et liaison équipotentielle en salle d'eau."
          />
        </div>
      </MqSection>

      <MqSection
        kicker="PIÈGES CLASSIQUES"
        title="Les erreurs de lecture les plus coûteuses"
        lead="Certaines formulations reviennent d'un devis à l'autre. Les reconnaître évite la majorité des mauvaises surprises."
      >
        <MqChecklist
          cols={1}
          items={[
            "Un forfait « tout compris » sans détail des quantités ni des unités de mesure.",
            "Une mention « selon état du support » sans définition de ce que recouvre un support sain.",
            "L'absence de ligne dédiée à l'évacuation des gravats, souvent facturée en supplément après coup.",
            "Une prestation de reprise après percement absente à la fois du devis de gros œuvre et de celui des cloisons.",
            "Deux devis qui facturent chacun la protection des sols communs sur la même période de chantier.",
            "Un délai d'exécution indiqué sans date de démarrage ferme, qui laisse la durée réelle indéterminée.",
          ]}
        />
      </MqSection>

      <MqSection
        kicker="CE QUE CHANGE UNE LECTURE RIGOUREUSE"
        title="Un devis clarifié devient un outil de négociation, pas un pari"
        lead="La rigueur de lecture, héritée du chiffrage en foncière, sert directement le budget du client."
      >
        <MqProse>
          <p>
            Cette méthode s'appuie sur l'expérience d'un ancien expert en chiffrage issu du secteur des foncières,
            habitué à comparer des offres à périmètre strictement identique avant tout engagement. Appliquée à un
            projet de rénovation, elle permet de renégocier en connaissance de cause, d'écarter les lignes
            ambiguës et de garder la maîtrise du budget avant le démarrage des travaux plutôt qu'en cours de
            chantier.
          </p>
        </MqProse>
      </MqSection>

      <MqSection kicker="QUESTIONS FRÉQUENTES" title="Ce que les porteurs de projet demandent le plus souvent">
        <MqFaq
          items={[
            {
              q: "Combien coûte une analyse de devis chez ARCHI PILOTE RÉNOVATION ?",
              a: "L'analyse d'un devis s'inscrit dans l'étude de projet réalisée en amont d'un accompagnement. Le montant et les modalités sont communiqués lors du premier échange, en fonction du nombre de devis et de la complexité du projet.",
            },
            {
              q: "L'analyse remplace-t-elle l'avis d'un architecte ou d'un ingénieur structure ?",
              a: "Non. L'analyse porte sur la lecture économique et technique d'un devis de travaux courants. Lorsque le dossier touche à la structure du bâtiment, un architecte DPLG ou un ingénieur structure partenaire indépendant est mobilisé pour les points relevant de sa responsabilité professionnelle.",
            },
            {
              q: "Faut-il déjà avoir reçu plusieurs devis pour bénéficier de cette analyse ?",
              a: "Un seul devis suffit pour commencer la lecture ligne à ligne. La comparaison à périmètre égal devient possible dès qu'un deuxième devis est disponible, ce qui est recommandé avant toute décision.",
            },
            {
              q: "Que faire si une entreprise refuse de détailler ses hypothèses ou ses exclusions ?",
              a: "Un refus de clarification par écrit est en soi un signal à prendre au sérieux. La méthode consiste à formuler des questions précises et à conserver les réponses par écrit, avant tout engagement financier.",
            },
            {
              q: "Cette méthode s'applique-t-elle à un devis de rénovation complète comme à un devis de peinture seule ?",
              a: "Oui, la logique de vérification (quantités, unités, hypothèses, exclusions, interfaces, doublons) s'applique à tout devis de travaux, qu'il porte sur un seul lot ou sur l'ensemble d'un chantier.",
            },
            {
              q: "Les pièges identifiés donnent-ils lieu à une renégociation du devis ?",
              a: "L'analyse fournit les éléments factuels permettant au client de rouvrir la discussion avec l'entreprise concernée. La décision de renégocier, de faire réviser le devis ou de consulter une autre entreprise reste toujours celle du client.",
            },
          ]}
        />
        <p className="text-muted text-[0.85rem] leading-relaxed mt-8 max-w-2xl">
          Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon
          les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des
          architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les
          entreprises concernées.
        </p>
      </MqSection>

      <MqReadNext
        items={[
          { href: "/modele-economique-transparence", label: "Modèle économique & transparence", sub: "Comment l'achat direct de matériaux réduit le budget" },
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage de A à Z" },
          { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes indicatives par poste de travaux" },
        ]}
      />

      <MqCta
        title="Faites analyser votre devis avant de signer"
        lead="Transmettez votre devis, nous le passons ligne à ligne : quantités, hypothèses, exclusions et interfaces entre lots."
      />
    </main>
  );
}
