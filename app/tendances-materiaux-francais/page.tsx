import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/tendances-materiaux-francais" },
  title: "Tendances françaises 2026 : travertin, zellige et béton ciré en rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Les trois matières qui structurent aujourd'hui l'esthétique française — travertin, zellige et béton ciré — sont exigeantes sur le support, jamais sur le style.",
};

const PANORAMA = [
  {
    src: "tendance-travertin-salle-bain",
    alt: "Salle de bain contemporaine en travertin beige avec vasque en pierre massive et robinetterie en laiton brossé",
    caption: "Travertin en salle d'eau : pierre naturelle appliquée en grand format, joints minces et traitement hydrofuge obligatoire avant mise en service.",
  },
  {
    src: "tendance-zellige-credence",
    alt: "Crédence de cuisine en zellige vert d'eau posé en pose verticale, plan de travail en pierre et façades en chêne clair",
    caption: "Zellige émaillé en crédence : irrégularités de surface assumées, calepinage vertical et jointoiement fin sur support parfaitement dressé.",
  },
  {
    src: "tendance-beton-cire-sejour",
    alt: "Séjour haussmannien avec sol en béton ciré gris clair, moulures d'origine au plafond et cheminée en marbre",
    caption: "Béton ciré sur plancher ancien : ragréage fibré, primaire d'accroche et contrôle de la charge admissible avant application des couches.",
  },
  {
    src: "detail-menuiserie-moulure",
    alt: "Détail de menuiserie en chêne : porte à panneaux moulurés, chambranle profilé et poignée en laiton patiné",
    caption: "Détail de menuiserie : profils de moulure relevés sur l'existant, chambranle reconstitué et quincaillerie laiton patiné posée à l'ancienne.",
  },
  {
    src: "tendance-chene-massif-point-hongrie",
    alt: "Séjour parisien avec parquet chêne massif point de Hongrie, boiseries et bibliothèque en chêne huilé, murs enduits à la chaux ton argile",
    caption: "Chêne massif point de Hongrie et boiseries huilées : la matière noble travaillée dans les volumes d'origine, murs enduits à la chaux ton argile.",
  },
  {
    src: "tendance-chaux-arches-pierre-bourgogne",
    alt: "Couloir voûté avec arches courbes, enduit à la chaux beige rosé, sol en pierre de Bourgogne et applique en laiton patiné",
    caption: "Arches maçonnées, enduit à la chaux et pierre de Bourgogne : la courbe et la matière minérale, signatures des intérieurs français 2026-2027.",
  },
  {
    src: "tendance-cuisine-facades-sur-mesure-chene",
    alt: "Cuisine sur mesure avec façades cannelées en chêne massif, plan de travail en pierre naturelle veinée, crédence zellige vert d'eau et robinetterie laiton",
    caption: "Façades cannelées en chêne massif, plan en pierre naturelle et crédence zellige : ensemble sur mesure acheté en direct par le client, posé par l'entreprise partenaire.",
  },
];

const FAQ = [
  {
    q: "Le travertin convient-il à une salle d'eau en copropriété ?",
    a: "Oui, à condition que le support soit dressé, que l'étanchéité sous carrelage soit continue et que la pierre reçoive un traitement hydrofuge avant mise en service. Le travertin est poreux : sans protection, il se tache durablement.",
  },
  {
    q: "Le zellige peut-il être posé sur toute une crédence de cuisine ?",
    a: "Oui. Sa fabrication artisanale génère des irrégularités de teinte et d'épaisseur qu'il faut assumer esthétiquement et compenser par un support parfaitement plan, un calepinage anticipé et un joint fin adapté à la nuance choisie.",
  },
  {
    q: "Le béton ciré est-il compatible avec un plancher ancien en bois ?",
    a: "Sous conditions. Le plancher doit être stable et sa charge admissible vérifiée, avec un ragréage fibré et un primaire d'accroche. Sur un plancher trop souple, le risque de faïençage est réel : le diagnostic précède toujours l'application.",
  },
  {
    q: "Ces matières se marient-elles avec des moulures d'origine ?",
    a: "Oui, c'est même la signature de la rénovation française actuelle : matières contemporaines au sol et sur les plans, patrimoine restitué en plafond et en menuiserie. Les profils sont relevés sur l'existant et refaits en plâtre traditionnel avec la maison Guimier.",
  },
  {
    q: "Qui valide la faisabilité technique de ces finitions ?",
    a: "L'architecte partenaire Minh-Hoa Truong sur les partis pris de conception et de distribution, l'ingénieur structure Igli Braho, du bureau Tridenso, dès qu'une charge, une ouverture ou un plancher sont concernés.",
  },
];

export default function TendancesMateriauxFrancaisPage() {
  return (
    <main>
      <MqHero
        kicker="Matières et finitions"
        title="Travertin, zellige et béton ciré : les matières de la rénovation française, vues côté technique"
        lead="Les trois matières qui structurent aujourd'hui l'esthétique française — travertin, zellige et béton ciré — sont exigeantes sur le support, jamais sur le style. Chacune impose une préparation précise : planéité, étanchéité, charge admissible, traitement de protection. ARCHI PILOTE RÉNOVATION conçoit ces finitions avec l'architecte partenaire Minh-Hoa Truong, les valide avec l'ingénieur structure Igli Braho du bureau Tridenso lorsque la structure est concernée, et les fait exécuter par des entreprises partenaires contractantes, sous notre pilotage et notre accompagnement de A à Z."
      />

      <MqSection
        kicker="Panorama"
        title="Quatre matières, quatre logiques de mise en œuvre"
        lead="Chaque matière se juge sur son support avant de se juger sur son aspect."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PANORAMA.map((f) => (
            <MqFig key={f.caption} src={`/photos/maquette/${f.src}.jpg`} alt={f.alt} caption={f.caption} />
          ))}
        </div>
      </MqSection>

      <MqSection
        title="Le travertin : pierre naturelle en pièce d'eau"
        lead="Une pierre poreuse qui exige une étanchéité continue et un hydrofuge avant usage."
      >
        <div className="flex flex-col gap-8">
          <MqProse>
            <p>
              Le travertin s'impose en salle d'eau pour sa matière chaude et ses veines irrégulières. Sa porosité en fait toutefois un
              matériau techniquement exigeant : sans hydrofuge, une eau calcaire ou un produit d'entretien acide marquent la pierre en
              quelques semaines.
            </p>
            <p>
              La mise en œuvre suppose un support dressé au millimètre, une natte d'étanchéité continue entre sol et murs, des bandes de
              renfort en angle et une pente d'évacuation régulière. Les découpes de grand format sont réalisées en atelier pour limiter les
              épaufrures.
            </p>
            <p>
              Fourchette constatée en Île-de-France : 180 à 320 euros le mètre carré posé selon le format, l'épaisseur et le calepinage
              retenu, hors étanchéité et hors préparation du support.
            </p>
          </MqProse>
          <MqFig
            src="/photos/maquette/schema-etancheite-salle-eau.jpg"
            alt="Coupe d'une salle d'eau montrant la natte d'étanchéité sous carrelage, la bande d'angle, la pente et le siphon"
            caption="Étanchéité sous carrelage : continuité de la natte entre murs et sol, bandes de renfort en angle et pente d'évacuation de 1 à 2 %."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Le zellige : artisanat émaillé et calepinage anticipé"
        lead="Ses irrégularités sont un parti pris esthétique qui se prépare en amont, pas une tolérance de pose."
      >
        <div className="flex flex-col gap-8">
          <MqProse>
            <p>
              Le zellige, terre cuite émaillée façonnée à la main, apporte une vibration de lumière qu'aucun carreau industriel ne reproduit.
              Les nuances de teinte et les variations d'épaisseur sont inhérentes au produit : elles se répartissent en mélangeant les boîtes
              à la pose.
            </p>
            <p>
              Le support doit être parfaitement plan, faute de quoi les écarts d'épaisseur deviennent visibles en lumière rasante. Le
              calepinage — vertical, horizontal ou en chevrons — se décide avant commande, puisqu'il détermine les quantités et le taux de
              casse à prévoir.
            </p>
            <p>Fourchette constatée : 140 à 260 euros le mètre carré posé, joint compris, selon la teinte et la provenance des carreaux.</p>
          </MqProse>
          <MqFig
            src="/photos/maquette/tendance-zellige-credence.jpg"
            alt="Crédence de cuisine en zellige vert d'eau posé en pose verticale, plan de travail en pierre et façades en chêne clair"
            caption="Zellige émaillé en crédence : irrégularités de surface assumées, calepinage vertical et jointoiement fin sur support parfaitement dressé."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Le béton ciré : continuité visuelle et contrainte de support"
        lead="Sa réussite dépend entièrement de la stabilité du support et de la préparation du fond."
      >
        <div className="flex flex-col gap-8">
          <MqProse>
            <p>
              Le béton ciré crée une surface continue sans joint, particulièrement recherchée dans les grands plateaux et les séjours
              haussmanniens où il contraste avec les moulures d'origine.
            </p>
            <p>
              Sur plancher bois ancien, la faisabilité se vérifie avant tout engagement : stabilité des solives, charge admissible, ragréage
              fibré et primaire d'accroche. Un support trop souple provoque un faïençage irréversible des couches de finition.
            </p>
            <p>
              Fourchette constatée : 110 à 200 euros le mètre carré selon la préparation nécessaire, la surface traitée et le nombre de
              couches de protection.
            </p>
          </MqProse>
          <MqFig
            src="/photos/pedagogie/01-beton-cire.jpeg"
            alt="Schéma pédagogique du béton ciré appliqué sur dalle béton et sur plancher bois ancien, avec ragréage fibré et primaire d'accroche"
            caption="Schéma pédagogique : préparation du support avant béton ciré, sur dalle béton comme sur plancher bois ancien où la stabilité des solives se vérifie en premier."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Menuiserie et moulures : le charme de l'ancien restitué"
        lead="Les profils sont relevés sur l'existant, jamais approchés par un profil standard du commerce."
      >
        <div className="flex flex-col gap-8">
          <MqChecklist
            cols={1}
            items={[
              "Relevé des profils de corniche, cimaise et rosace existants avant dépose.",
              "Moulures en plâtre traditionnel fournies par la maison Guimier, moulées d'après ces profils.",
              "Fenêtres reproduites à l'identique : petits bois, sections d'origine et crémones en laiton.",
              "Menuiseries sur mesure en chêne : portes à panneaux, chambranles profilés, plinthes hautes.",
              "Approvisionnement des matériaux courants via le groupe Saint-Gobain, à La Plateforme du Bâtiment, facturé au client sans marge.",
            ]}
          />
          <MqFig
            src="/photos/pedagogie/05-menuiserie-moulures.jpeg"
            alt="Schéma pédagogique de trois profils : corniche relevée, fenêtre à petits bois et crémone en laiton, menuiserie chêne à chambranle profilé"
            caption="Schéma pédagogique : trois profils relevés sur l'existant — corniche, fenêtre à petits bois et crémone en laiton, menuiserie chêne à chambranle profilé."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Compétences mobilisées"
        title="Les partenaires qui valident ces partis pris"
        lead="Conception et calcul sont assurés par des professionnels identifiés, mobilisés projet après projet."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Minh-Hoa Truong — architecte partenaire</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Collaboration régulière sur les projets de redistribution et de rénovation patrimoniale : partis pris de conception, cohérence
              des matières, dossiers d'autorisation d'urbanisme.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Igli Braho — ingénieur structure, Tridenso</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Collaboration régulière sur les dossiers structurels : notes de calcul d'ouverture de mur porteur, renforcement de plancher,
              création de trémie et vérification des charges admissibles avant finition.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Entreprises partenaires contractantes</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Exécutent et facturent les lots concernés : pierre, faïence, béton ciré, menuiserie et plâtrerie traditionnelle, sous notre
              pilotage et notre accompagnement du diagnostic à la réception.
            </p>
          </div>
        </div>
      </MqSection>

      <section className="py-8 border-t border-line">
        <div className="container-site max-w-4xl">
          <p className="border border-line bg-surface rounded-[2px] px-5 py-4 text-[0.85rem] leading-relaxed text-muted">
            <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
            les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque
            nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises
            concernées.
          </p>
        </div>
      </section>

      <MqSection title="Questions fréquentes sur ces finitions">
        <MqFaq items={FAQ} />
      </MqSection>

      <MqReadNext
        items={[
          { href: "/savoir-faire-ancien", label: "Charme de l'ancien", sub: "Fenêtres à l'identique, moulures, crémones" },
          { href: "/reseau-partenaires", label: "Réseau de partenaires", sub: "Architecte et ingénieur structure" },
          { href: "/realisations", label: "Réalisations", sub: "Comparatifs avant / après" },
          { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Fourchette de budget en une minute" },
        ]}
      />

      <MqCta
        title="Faire valider vos choix de matières avant chiffrage"
        lead="Étude de projet gratuite sous 48 heures : faisabilité des finitions, contraintes de support et budget poste par poste."
      />
    </main>
  );
}
