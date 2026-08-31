import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Tendances architecture intérieure française 2026-2027 : chêne massif, zellige et pierre | ARCHI PILOTE RÉNOVATION",
  description:
    "Six matières définissent l'intérieur français 2026-2027 : chêne massif huilé, zellige émaillé, pierre naturelle, chaux, laiton patiné, volumes courbes. Ce qu'elles engagent techniquement.",
  alternates: { canonical: "/tendances-2026-2027" },
};

const M = "/photos/maquette";

export default function Page() {
  return (
    <main>
      <MqHero
        kicker="Cahier de tendances 2026-2027"
        title="Les tendances de l'architecture intérieure française 2026-2027, lues par un pilote de chantier"
        lead="Les intérieurs français 2026-2027 se construisent autour de six matières : chêne massif huilé, zellige émaillé, pierre naturelle française, enduit à la chaux, laiton patiné et volumes courbes maçonnés. Ces partis pris ne sont pas décoratifs : chacun engage un support, une charge, une étanchéité et un savoir-faire. ARCHI PILOTE RÉNOVATION, marque exploitée par IA RENOV SASU (RCS Nanterre 889 976 387), conçoit ces intérieurs avec l'architecte partenaire Minh-Hoa Truong, les valide avec l'ingénieur structure Igli Braho du bureau Tridenso et les fait exécuter par des entreprises partenaires contractantes, sous un pilotage et un accompagnement de A à Z."
      />

      <MqFig
        src={`${M}/hero-renovation.jpg`}
        alt="Tendances d'architecture intérieure française 2026-2027."
        caption="Chêne massif en point de Hongrie, lignes courbes, sobriété : le minimalisme chaleureux qui définit l'intérieur parisien 2026-2027."
        ratio="aspect-[21/9]"
      />

      <MqSection kicker="Panorama" title="Six matières qui définissent l'intérieur français 2026-2027" lead="Le minimalisme chaleureux remplace le minimalisme froid : moins d'objets, plus de matière." wide>
        <MqNumbered cols={3} items={[
          { title: "Chêne massif huilé", text: "Point de Hongrie, bâtons rompus, larges lames : le chêne massif français revient au sol, en boiserie et en menuiserie intégrée. Huilé plutôt que verni, il vieillit au lieu de s'user." },
          { title: "Zellige émaillé", text: "Crédences, pièces d'eau, niches : le zellige apporte la vibration de l'émail artisanal. Ses irrégularités s'assument et se calepinent, jamais elles ne se corrigent." },
          { title: "Pierre naturelle française", text: "Pierre de Bourgogne, travertin, marbres veinés : la minéralité chaude remplace les grès uniformes. Sols, plans de travail, tablettes et receveurs taillés sur mesure." },
          { title: "Enduit à la chaux", text: "Badigeon, stuc, tadelakt : le mur redevient une matière. Perméable à la vapeur d'eau, l'enduit à la chaux est aussi un allié du bâti ancien contre la condensation." },
          { title: "Laiton patiné et quincaillerie", text: "Robinetterie, crémones, poignées, appliques : la ferronnerie signe le niveau de finition. Le laiton patiné remplace le chrome brillant sur la quasi-totalité des projets." },
          { title: "Courbes et volumes maçonnés", text: "Arches, niches, retours arrondis, banquettes maçonnées : la ligne droite se casse. Ces ouvrages relèvent du plaquiste et du maçon, pas du décorateur." },
        ]} />
        <MqFig
          src="/photos/pedagogie/31-tendances-2026-six-matieres.jpeg"
          alt="Six matières à plat : chêne massif huilé, zellige émaillé, pierre naturelle française, chaux, laiton patiné, courbe maçonnée"
          caption="Six matières majeures de l'intérieur français 2026-2027."
          ratio="aspect-[21/9]"
        />
      </MqSection>

      <MqSection kicker="Panorama" title="Le chêne massif, matière reine du sol et de la menuiserie" wide>
        <MqProse>
          <p>Le chêne massif huilé s&apos;impose au sol, en boiserie et en menuiserie intégrée, à condition que le plancher le supporte.</p>
          <p>
            Le point de Hongrie et les bâtons rompus reviennent dans les appartements anciens parisiens, en chêne massif de
            14 à 23 millimètres d&apos;épaisseur plutôt qu&apos;en contrecollé fin. La différence se voit au vieillissement : un
            massif huilé se rénove localement, un contrecollé usé se remplace.
          </p>
          <p>
            La pose engage le plancher. Sur solivage ancien, la charge admissible et la flèche sont vérifiées avant tout
            choix d&apos;épaisseur ; sur dalle béton, un ragréage fibré et une sous-couche acoustique conditionnent le
            résultat, notamment en copropriété où le règlement impose souvent une performance minimale aux bruits
            d&apos;impact.
          </p>
          <p>
            Fourchette constatée en Île-de-France : 120 à 260 euros le mètre carré posé selon l&apos;essence, le format, le
            motif et la finition, hors préparation du support. Le parquet est un poste hors décennale : le client
            l&apos;achète en direct.
          </p>
        </MqProse>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          <MqFig src={`${M}/schema-pose-chene-massif.jpg`} alt="Schéma en coupe d'une pose de parquet chêne massif cloué sur lambourdes au-dessus d'une chape et d'une dalle béton, avec plinthe et joint périphérique" caption="Coupe de pose du chêne massif : dalle, chape, sous-couche, lambourdes, lames clouées et joint périphérique de dilatation sous plinthe." />
          <MqFig src={`${M}/chBibliotheque.jpeg`} alt="Bibliothèque en chêne massif encastrée dans un mur d'appartement haussmannien avec moulures et parquet point de Hongrie" caption="Bibliothèque encastrée en chêne dans un appartement haussmannien : reprise des moulures existantes et raccord au parquet point de Hongrie." />
        </div>
      </MqSection>

      <MqSection kicker="Panorama" title="Zellige, pierre et chaux : la matière artisanale au premier plan" lead="Trois matières vivantes, trois exigences de support différentes." wide>
        <MqProse>
          <p>
            Le zellige émaillé, cuit et taillé à la main, ne se pose pas comme une faïence industrielle : le support doit
            être plan au millimètre, le calepinage anticipé, le joint choisi dans la nuance de l&apos;émail. Les variations
            de teinte font partie du produit et se répartissent volontairement sur toute la surface.
          </p>
          <p>
            La pierre naturelle française — pierre de Bourgogne au sol, travertin en pièce d&apos;eau, marbres veinés en plan
            de travail — impose un traitement hydrofuge avant mise en service et un calibrage précis des découpes, faites
            en atelier pour éviter les épaufrures.
          </p>
          <p>
            L&apos;enduit à la chaux, enfin, n&apos;est pas seulement esthétique : perméable à la vapeur d&apos;eau, il accompagne le
            bâti ancien plutôt que de l&apos;étouffer, ce qui en fait une réponse pertinente aux désordres de condensation
            traités par ailleurs sur nos chantiers de rénovation énergétique.
          </p>
        </MqProse>
        <div className="mt-6"><MqChecklist cols={1} items={[
          "Zellige émaillé : 180 à 380 euros le mètre carré posé selon provenance et calepinage.",
          "Pierre de Bourgogne : 160 à 300 euros le mètre carré posé, hydrofuge compris.",
          "Travertin en pièce d'eau : 180 à 320 euros le mètre carré posé, hors étanchéité.",
          "Enduit à la chaux ou stuc : 90 à 180 euros le mètre carré selon le nombre de passes.",
          "Laiton patiné : quincaillerie et robinetterie, poste hors décennale acheté en direct.",
          "Arches et niches maçonnées : chiffrées au cas par cas selon la nature du support.",
        ]} /></div>
      </MqSection>

      <MqSection kicker="Preuve visuelle" title="Chantier réel : la pose du chêne massif en point de Hongrie" lead="La matière noble se joue à la pose, pas à la mise en scène." wide>
        <h3 className="display text-[1.15rem] text-ivoire mb-2">Le chevron, lame après lame</h3>
        <p className="text-muted text-[0.9rem] mb-4 max-w-2xl">Encollage lame par lame sur sous-couche, calepinage ajusté à chaque ouverture de la pièce : la restitution du volume précède toujours la pose du parquet chêne.</p>
        <MqFig
          src="/photos/chantiers/chParquetChevronsPosePiece.jpeg"
          alt="Chantier réel de pose de parquet en chêne massif à motif chevrons, lames encollées et sous-couche apparente"
          caption="Pose du parquet chêne en chevrons : lames encollées une à une sur sous-couche acoustique, calepinage ajusté à chaque ouverture de la pièce. Chantier réel des équipes partenaires."
          ratio="aspect-[16/9]"
        />
      </MqSection>

      <MqSection kicker="Panorama" title="Haut de gamme et maîtrise du budget : notre modèle économique" lead="Les matières nobles deviennent accessibles quand la marge d'intermédiation sur la fourniture disparaît." wide>
        <MqProse>
          <p>
            Le carrelage, la robinetterie, le parquet, les cuisines équipées et les façades sur mesure ne relèvent pas de
            la garantie décennale de l&apos;entreprise qui les pose. Sur ces postes, ARCHI PILOTE RÉNOVATION fait acheter le
            client en direct, auprès des fournisseurs identifiés et du groupe Saint-Gobain via La Plateforme du Bâtiment,
            avec un objectif d&apos;économies pouvant atteindre 20&nbsp;%.
          </p>
          <p>
            Ce modèle, issu de la pratique du chiffrage en foncière, produit deux effets : le budget baisse sur les
            postes de fourniture, et le choix des matériaux n&apos;est plus bridé par le catalogue d&apos;une entreprise. Le
            client peut viser le zellige artisanal ou le chêne massif là où un devis classique l&apos;aurait orienté vers un
            équivalent industriel.
          </p>
          <p>
            La pose, elle, reste entièrement assurée par les entreprises partenaires contractantes, couvertes par leur
            garantie décennale, sous notre pilotage et notre accompagnement quotidien documenté par photographies.
          </p>
        </MqProse>
        <div className="mt-6"><MqFig src={`${M}/tendance-cuisine-facades-sur-mesure-chene.jpg`} alt="Cuisine sur mesure avec façades cannelées en chêne massif, plan de travail en pierre naturelle veinée, crédence zellige vert d'eau et robinetterie laiton" caption="Façades cannelées en chêne massif, plan en pierre naturelle et crédence zellige : ensemble sur mesure acheté en direct par le client, posé par l'entreprise partenaire." /></div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ce que l'on nous demande sur les tendances 2026-2027">
        <MqFaq items={[
          { q: "Quelles sont les tendances d'architecture intérieure française pour 2026-2027 ?", a: "Six matières dominent : chêne massif huilé, zellige émaillé, pierre naturelle française, enduit à la chaux, laiton patiné et volumes courbes maçonnés. Elles remplacent un minimalisme froid par un minimalisme chaleureux, avec des exigences techniques précises de support et de pose." },
          { q: "Le chêne massif est-il adapté à un appartement ancien parisien ?", a: "Oui, à condition de vérifier la charge admissible du plancher existant (solivage ancien) ou de préparer correctement la dalle (ragréage, sous-couche acoustique en copropriété). Le point de Hongrie et les bâtons rompus sont particulièrement adaptés au bâti haussmannien." },
          { q: "Combien coûte une crédence en zellige en 2026 ?", a: "Entre 180 et 380 euros le mètre carré posé selon la provenance et le calepinage, hors préparation du support qui doit être plan au millimètre." },
          { q: "Comment marier matières contemporaines et patrimoine haussmannien ?", a: "En traitant chaque matière selon ses exigences propres : le chêne massif raccordé aux parquets existants, l'enduit à la chaux compatible avec la respiration du bâti ancien, les arches et niches maçonnées en cohérence avec les volumes d'origine plutôt qu'en rupture avec eux." },
          { q: "Qui conçoit et valide ces partis pris chez ARCHI PILOTE RÉNOVATION ?", a: "La conception est menée avec l'architecte partenaire Minh-Hoa Truong, la validation technique avec l'ingénieur structure Igli Braho du bureau Tridenso, et l'exécution par des entreprises partenaires contractantes sous notre pilotage." },
          { q: "Ces finitions haut de gamme font-elles exploser le budget ?", a: "Pas nécessairement : l'achat direct des matériaux par le client, sans marge d'intermédiation, vise jusqu'à 20 % d'économies sur ces postes précis (hors décennale), ce qui rend accessibles des matières qu'un devis classique aurait orientées vers un équivalent industriel." },
        ]} />
        <p className="text-[0.82rem] text-muted mt-6 max-w-3xl border-t border-line pt-4">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta lead="Étude de projet gratuite sous 48 heures : lecture du bien, hiérarchisation des travaux, points de vigilance et budget réaliste." />

      <MqReadNext items={[
        { href: "/tendances-materiaux-francais", label: "Tendances et matières", sub: "Travertin, zellige et béton ciré côté technique" },
        { href: "/achat-direct-materiaux", label: "Achat direct des matériaux", sub: "Les postes hors décennale achetés sans marge" },
        { href: "/savoir-faire-ancien", label: "Charme de l'ancien", sub: "Fenêtres à l'identique, moulures, crémones" },
      ]} />
    </main>
  );
}
