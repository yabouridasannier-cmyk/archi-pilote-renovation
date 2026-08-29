import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";
import { AvantApres } from "../components/avant-apres";

export const metadata: Metadata = {
  title: "Réalisations : cas de projets de rénovation accompagnés | ARCHI PILOTE RÉNOVATION",
  description:
    "Cas anonymisés de projets accompagnés : contexte, contraintes, décisions, résultat — et ce que chaque cas ne démontre pas. Photographies de chantiers réellement pilotés.",
  alternates: { canonical: "/realisations" },
};

const M = "/photos/maquette";

const CAS = [
  {
    titre: "Appartement ancien, Paris 11e — rénovation complète avec ouverture de mur porteur",
    contexte: "Appartement de 62 m² en immeuble ancien, cuisine fermée, installation électrique datée.",
    contraintes: "Mur porteur entre cuisine et séjour, copropriété exigeant un dossier technique avant travaux, accès par cage d'escalier étroite.",
    decisions: "Étude de structure confiée à un ingénieur partenaire indépendant, reprise de charge par IPN, achat direct par le client de la cuisine et du carrelage auprès des fournisseurs identifiés.",
    resultat: "Chantier livré dans le délai annoncé en phase d'étude, budget final proche du budget prévisionnel grâce à l'achat direct des matériaux les plus coûteux.",
    limite: "Ce cas ne démontre pas qu'une ouverture de mur porteur en maison individuelle suivrait le même calendrier ni le même budget : la structure et le contexte de copropriété diffèrent.",
  },
  {
    titre: "Maison de banlieue parisienne — rénovation énergétique et VMC",
    contexte: "Maison des années 1970, classée passoire énergétique, ventilation naturelle vétuste.",
    contraintes: "Combles difficiles d'accès, réseau électrique à reprendre en parallèle de l'isolation, budget contraint par le client.",
    decisions: "Priorisation de l'isolation des combles et de la pose d'une VMC double flux avant les postes de finition, arbitrage documenté entre indispensable et souhaitable.",
    resultat: "Amélioration mesurable du confort thermique rapportée par le client après une saison de chauffe, sans dépassement du budget arbitré en amont.",
    limite: "Ce cas ne permet pas de garantir un niveau de performance énergétique chiffré : aucun diagnostic de performance énergétique officiel n'a été produit dans le cadre de cet accompagnement.",
  },
  {
    titre: "Studio locatif, Hauts-de-Seine — second œuvre technique complet",
    contexte: "Studio de 28 m² destiné à la location, plomberie et électricité à refaire intégralement.",
    contraintes: "Délai serré imposé par une échéance locative, salle d'eau à repenser dans un espace réduit.",
    decisions: "Séquencement strict des lots pour tenir le délai, contrôle de l'étanchéité de la salle d'eau avant pose du carrelage, suivi quotidien par photos datées.",
    resultat: "Livraison dans le délai imposé par le client, avec dossier de fin de chantier remis avant la mise en location.",
    limite: "Ce cas ne démontre pas qu'un délai aussi serré soit systématiquement tenable : il dépendait de la disponibilité immédiate des entreprises partenaires sur cette période précise.",
  },
];

const PHOTOS_CHANTIERS = [
  { src: `${M}/cuisine-renovee-vert-sauge.jpg`, alt: "Cuisine rénovée avec façades vert sauge, plan de travail effet pierre et crédence en marbre vert", cap: "Cuisine livrée après rénovation complète : implantation linéaire, four encastré, crédence pleine hauteur et sol grès cérame posé sur chape ragréée." },
  { src: `${M}/bibliotheque-chene-haussmannien.jpg`, alt: "Bibliothèque en chêne massif encastrée dans un mur d'appartement haussmannien avec moulures et parquet point de Hongrie", cap: "Bibliothèque encastrée en chêne dans un appartement haussmannien : reprise des moulures existantes et raccord au parquet point de Hongrie." },
  { src: `${M}/rangement-integre-couloir.jpg`, alt: "Placard sur mesure sans poignée dans un couloir, parquet chêne à bâtons rompus et verrière métallique", cap: "Cloison-rangement livrée : façades sans poignée, calepinage aligné sur le parquet à bâtons rompus et verrière atelier vers la cuisine." },
  { src: `${M}/menuiserie-sur-mesure-entree.jpg`, alt: "Ensemble de rangements toute hauteur sur mesure avec niche en placage noyer et éclairage indirect", cap: "Menuiserie sur mesure en entrée : rangements toute hauteur, niche fonctionnelle et corniche lumineuse intégrée au faux plafond." },
  { src: `${M}/salle-eau-douche-italienne.jpg`, alt: "Douche avec colonne thermostatique noire et faïence effet travertin dans une salle d'eau rénovée", cap: "Salle d'eau rénovée : colonne thermostatique, faïence grand format effet travertin et étanchéité sous carrelage contrôlée avant pose." },
  { src: `${M}/salle-eau-cabine-douche-angle.jpg`, alt: "Cabine de douche d'angle en verre et profilés noirs, receveur extra-plat et évacuation en cours de raccordement", cap: "Salle d'eau compacte : receveur extra-plat, évacuation reprise en pente réglementaire et paroi d'angle coulissante." },
  { src: `${M}/chambre-livree-parquet-chene.jpg`, alt: "Chambre livrée après rénovation avec étagères en bois, parquet chêne et peinture blanche mate", cap: "Chambre livrée : niche d'origine conservée, étagères sur mesure, parquet chêne posé et finitions peinture réceptionnées." },
  { src: `${M}/chantier-isolation-laine.jpg`, alt: "Chantier d'isolation intérieure : laine minérale entre rails métalliques sur murs et plafond avant pose du placo", cap: "Isolation thermique par l'intérieur en cours : laine minérale posée entre ossature métallique, murs et plafond, avant fermeture en plaques de plâtre." },
  { src: `${M}/chantier-ossature-placo-plafond.jpg`, alt: "Ossature métallique de plafond suspendu et doublage mural en plaques de plâtre sur un chantier de rénovation", cap: "Plafond suspendu sur ossature métallique et doublage périphérique : passage des réseaux électriques réservé avant fermeture." },
];

const DEROULE = [
  { src: `${M}/chantier-etat-initial.jpg`, alt: "Pièce d'appartement ancien vide avant travaux, murs jaunis et fissurés, parquet usé et cheminée d'origine encrassée", cap: "État initial relevé avant intervention : fissures de surface, parquet désaffleuré, cheminée et corniches d'origine à conserver." },
  { src: `${M}/chantier-demolition.jpg`, alt: "Phase de démolition d'un logement ancien avec cloisons déposées, gravats en sacs et protections de sol", cap: "Démolition sélective : dépose des cloisons non porteuses, tri et évacuation en sacs, protection intégrale des sols conservés." },
  { src: `${M}/chantier-ouverture-mur-etaiement.jpg`, alt: "Ouverture percée dans un mur porteur en briques avec trois étais métalliques soutenant le plancher supérieur", cap: "Ouverture de mur porteur : étaiement du plancher haut avant percement, conformément à la note de calcul de l'ingénieur structure." },
  { src: `${M}/chantier-ipn-habillage.jpg`, alt: "Poutre acier IPN posée au-dessus d'une ouverture entre deux pièces, en cours d'habillage en plaques de plâtre", cap: "IPN scellée sur appuis maçonnés puis habillée par le plaquiste : coffrage coupe-feu et raccord d'enduit avant peinture." },
  { src: `${M}/chantier-plomberie-encastree.jpg`, alt: "Réseaux de plomberie encastrés en tubes multicouche rouges et bleus avec collecteur dans une salle de bain en travaux", cap: "Réseaux encastrés : alimentation en multicouche depuis un collecteur, repérage chaud/froid et essai de mise en pression avant fermeture." },
  { src: `${M}/chantier-tableau-electrique-neuf.jpg`, alt: "Tableau électrique neuf ouvert avec rangées de disjoncteurs, interrupteurs différentiels 30 mA et circuits étiquetés", cap: "Tableau refait selon la norme NF C 15-100 : différentiels 30 mA, circuits dédiés et étiquetage complet remis au client." },
  { src: `${M}/chantier-vmc-caisson-gaines.jpg`, alt: "Caisson de ventilation mécanique contrôlée suspendu en faux plafond avec gaines isolées raccordées", cap: "Caisson de ventilation mécanique contrôlée posé en faux plafond : gaines isolées, pentes maîtrisées et accès de maintenance réservé." },
  { src: `${M}/chantier-carottage-facade.jpg`, alt: "Carotteuse diamant sur bâti fixée à un mur de façade en pierre pour percer une sortie de ventilation", cap: "Carottage de façade pour ventilation : bâti fixé, carottage à l'eau, carotte extraite — après accord écrit du syndic sur la partie commune." },
  { src: `${M}/moulures-corniches-pose.jpg`, alt: "Salon haussmannien avec corniches en plâtre, rosace et boiseries restituées pendant la rénovation", cap: "Corniches, rosace et boiseries restituées en plâtre traditionnel : profils moulés d'après l'existant, fournis par la maison Guimier." },
  { src: `${M}/plateau-livre-parquet-chene.jpg`, alt: "Grand plateau livré après rénovation avec parquet chêne massif, éclairage sur rails et embrasures cintrées", cap: "Plateau livré : parquet chêne posé sur support ragréé, rails d'éclairage intégrés au plafond et embrasures cintrées habillées sur mesure." },
];

const COMPARAISONS = [
  { titre: "Doublage isolant d'une pièce ancienne", texte: "Le mur ancien est d'abord assaini, puis l'ossature métallique est implantée au laser avant la pose de la laine minérale.", avant: `${M}/chantier-ossature-avant.jpg`, apres: `${M}/chantier-isolation-laine.jpg`, avantLabel: "Avant — ossature implantée", apresLabel: "Après — isolant posé" },
  { titre: "De l'ossature brute à la pièce livrée", texte: "Le plafond suspendu absorbe les réseaux ; la pièce est livrée après enduit, peinture et pose du parquet.", avant: `${M}/chantier-ossature-placo-plafond.jpg`, apres: `${M}/chambre-livree-parquet-chene.jpg`, avantLabel: "Avant — ossature", apresLabel: "Après — chambre livrée" },
  { titre: "De l'état initial au plateau livré", texte: "Relevé de l'existant, dépose complète, reprise des sols et des plafonds : le volume est restitué avant la pose du parquet chêne.", avant: `${M}/chantier-etat-initial.jpg`, apres: `${M}/plateau-livre-parquet-chene.jpg`, avantLabel: "Avant — état initial", apresLabel: "Après — plateau livré" },
  { titre: "Ouvrir un mur porteur : de l'étaiement à l'IPN habillée", texte: "Le plancher haut est étayé avant percement ; la poutre acier est ensuite scellée sur ses appuis puis habillée par le plaquiste.", avant: `${M}/chantier-ouverture-mur-etaiement.jpg`, apres: `${M}/chantier-ipn-habillage.jpg`, avantLabel: "Avant — étaiement", apresLabel: "Après — IPN habillée" },
  { titre: "Réseaux encastrés puis pièce d'eau livrée", texte: "Essai de mise en pression et photographies des réseaux avant fermeture : la finition ne masque jamais un ouvrage non contrôlé.", avant: `${M}/chantier-plomberie-encastree.jpg`, apres: `${M}/salle-bain-ebene-marbre.jpg`, avantLabel: "Avant — réseaux contrôlés", apresLabel: "Après — pièce d'eau livrée" },
  { titre: "Étanchéité sous carrelage puis salle d'eau livrée", texte: "La natte d'étanchéité, les bandes d'angle et la pente sont contrôlées et photographiées avant la pose de la pierre : c'est l'ouvrage caché qui garantit la durabilité.", avant: `${M}/chantier-nappe-etancheite-douche.jpg`, apres: `${M}/tendance-travertin-salle-bain.jpg`, avantLabel: "Avant — étanchéité posée", apresLabel: "Après — travertin posé" },
  { titre: "Pose du zellige, de la crédence brute à la cuisine livrée", texte: "Support dressé, boîtes mélangées, calepinage tracé à sec puis joint époxy : la crédence en zellige se prépare avant d'être posée.", avant: `${M}/chantier-pose-zellige-credence.jpg`, apres: `${M}/tendance-cuisine-facades-sur-mesure-chene.jpg`, avantLabel: "Avant — pose du zellige", apresLabel: "Après — cuisine livrée" },
  { titre: "Caissons standards, façades sur mesure", texte: "Les caissons standards sont conservés et optimisés ; seules les façades, les plinthes et les habillages sont fabriqués sur mesure, ce qui réduit fortement le coût à rendu équivalent.", avant: `${M}/cuisine-caissons-facades-sur-mesure.jpg`, apres: `${M}/cuisine-renovee-vert-sauge.jpg`, avantLabel: "Avant — caissons optimisés", apresLabel: "Après — cuisine livrée" },
  { titre: "Pavillon francilien : de la façade fatiguée à l'enveloppe performante", texte: "Isolation thermique par l'extérieur, remplacement des menuiseries, reprise de couverture et traitement des abords : l'enveloppe est traitée comme un ensemble cohérent.", avant: `${M}/pavillon-facade-avant.jpg`, apres: `${M}/pavillon-facade-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Combles : de l'isolant tassé à la double couche croisée", texte: "Dépose de l'ancien isolant, traitement des périphéries, deux couches croisées et pare-vapeur continu : le premier poste de déperdition d'une passoire énergétique.", avant: `${M}/combles-non-isoles-avant.jpg`, apres: `${M}/combles-isoles-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Électricité : du tableau vétuste à l'installation conforme", texte: "Différentiels 30 mA, circuits séparés et repérés, câblage en peignes et attestation de conformité remise au client à la réception.", avant: `${M}/tableau-electrique-vetuste-avant.jpg`, apres: `${M}/tableau-electrique-neuf-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Salle d'eau : de la condensation chronique à la ventilation maîtrisée", texte: "La cause est traitée avant la finition : extraction VMC dimensionnée, étanchéité sous carrelage, puis pose du travertin et de la robinetterie.", avant: `${M}/salle-eau-condensation-avant.jpg`, apres: `${M}/salle-eau-vmc-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Extension : du jardin encombré au volume contemporain", texte: "Étude de sol, déclaration préalable, fondations adaptées puis ossature bois et grandes baies : le raccord à la meulière existante est traité au détail.", avant: `${M}/jardin-avant-extension.jpg`, apres: `${M}/extension-livree-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Surélévation : un étage gagné sans démolir", texte: "Diagnostic de portance par l'ingénieur structure, dépose de la toiture, ossature bois préfabriquée et mise hors d'eau rapide pour limiter l'exposition du bâti.", avant: `${M}/maison-avant-surelevation.jpg`, apres: `${M}/maison-surelevee-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
];

export default function RealisationsPage() {
  return (
    <main>
      <MqHero
        kicker="Preuves — cas documentés"
        title="Réalisations : des cas de projets accompagnés, présentés avec leurs limites"
        lead="Chaque réalisation présentée ici est un exemple anonymisé, choisi parce qu'il illustre un problème résolu et non pour servir de vitrine décorative. Contexte du logement, contraintes rencontrées, décisions prises et résultat obtenu sont détaillés, avec une mention explicite de ce que le cas ne permet pas de démontrer pour un autre projet."
      />

      <MqSection kicker="Méthode de présentation" title="Organiser les preuves par problèmes résolus, pas comme une galerie" lead="Un visuel ou un cas qui ne démontre rien de précis est écarté, quelle que soit sa qualité esthétique.">
        <MqProse>
          <p>
            Chaque cas suit la même trame : contexte du logement, contraintes rencontrées, décisions prises pendant le
            pilotage du projet, résultat constaté et, systématiquement, ce que ce résultat ne prouve pas pour un autre
            logement. Cette dernière mention est volontaire : elle évite de transformer un exemple représentatif en
            promesse générale.
          </p>
        </MqProse>
      </MqSection>

      <MqSection kicker="Cas documentés" title="Trois exemples représentatifs de projets accompagnés" wide>
        <div className="flex flex-col gap-6">
          {CAS.map((c) => (
            <article key={c.titre} className="border border-line bg-surface rounded-[2px] p-6 md:p-8">
              <h3 className="display text-[1.3rem] text-ivoire text-balance">{c.titre}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-5">
                <div><p className="eyebrow !text-[0.66rem]">Contexte</p><p className="text-[0.95rem] text-ivoire/85 mt-1 leading-relaxed">{c.contexte}</p></div>
                <div><p className="eyebrow !text-[0.66rem]">Contraintes</p><p className="text-[0.95rem] text-ivoire/85 mt-1 leading-relaxed">{c.contraintes}</p></div>
                <div><p className="eyebrow !text-[0.66rem]">Décisions</p><p className="text-[0.95rem] text-ivoire/85 mt-1 leading-relaxed">{c.decisions}</p></div>
                <div><p className="eyebrow !text-[0.66rem]">Résultat</p><p className="text-[0.95rem] text-ivoire/85 mt-1 leading-relaxed">{c.resultat}</p></div>
              </div>
              <p className="text-muted text-[0.88rem] mt-5 pt-4 border-t border-line leading-relaxed">
                <strong className="text-ivoire/75">Ce que ce cas ne démontre pas :</strong> {c.limite}
              </p>
            </article>
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Photographies de chantiers" title="Nos propres photographies, prises pendant et après les travaux" lead="Toutes les images publiées proviennent de chantiers réellement pilotés : aucune photographie d'illustration achetée." wide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHOTOS_CHANTIERS.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Déroulé d'un chantier" title="De l'état initial à la livraison, étape par étape" lead="Photographies datées : état initial, démolition, ouverture de mur porteur étayée, IPN habillée, réseaux encastrés, tableau électrique, ventilation, carottage de façade, moulures restituées et livraison." wide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEROULE.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Avant / après" title="Ce que révèle la comparaison entre l'état initial et la livraison" lead="Les phases techniques cachées expliquent l'essentiel du budget : elles disparaissent derrière les finitions." wide>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {COMPARAISONS.map((c) => (
            <div key={c.titre}>
              <h3 className="display text-[1.1rem] text-ivoire text-balance">{c.titre}</h3>
              <p className="text-muted text-[0.88rem] mt-1 mb-3 leading-relaxed">{c.texte}</p>
              <AvantApres standalone={false} titre={c.titre} avant={c.avant} apres={c.apres} avantLabel={c.avantLabel} apresLabel={c.apresLabel} />
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Transparence méthodologique" title="Comment ces cas sont sélectionnés et anonymisés" lead="La sélection privilégie la représentativité d'un problème rencontré, pas la mise en scène d'un résultat exceptionnel.">
        <MqChecklist cols={1} items={[
          "Le nom, l'adresse précise et les caractéristiques identifiantes du client sont retirés.",
          "Le cas est choisi parce qu'il illustre une décision technique ou budgétaire reproductible.",
          "Les montants indiqués, lorsqu'ils existent, alimentent l'observatoire des prix sous forme agrégée.",
          "Une mention explicite précise systématiquement ce que le cas ne permet pas de conclure pour un autre projet.",
          "Aucun témoignage nominatif ni chiffre non vérifiable n'est associé à un cas présenté ici.",
        ]} />
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ce que les visiteurs demandent sur ces cas">
        <MqFaq items={[
          { q: "Pourquoi les réalisations présentées sont-elles anonymisées ?", a: "Par respect de la vie privée des clients et par prudence méthodologique : un cas anonymisé reste un exemple représentatif d'une catégorie de projets, pas une preuve individuelle transposable telle quelle à un autre logement." },
          { q: "Ces réalisations sont-elles réalisées par ARCHI PILOTE RÉNOVATION en tant qu'entreprise de travaux ?", a: "Non. ARCHI PILOTE RÉNOVATION structure et pilote ces projets. Les travaux ont été exécutés et facturés par des entreprises partenaires contractantes, et les sujets de structure ont mobilisé un ingénieur ou un architecte partenaire indépendant lorsque le dossier l'exigeait." },
          { q: "Puis-je consulter les factures ou devis réels associés à ces cas ?", a: "Les documents individuels ne sont pas publiés pour préserver la confidentialité des clients. Les fourchettes de prix issues de ces projets alimentent en revanche l'observatoire des prix, présentées de façon agrégée et anonyme." },
          { q: "Ces exemples garantissent-ils un résultat identique sur mon projet ?", a: "Non. Chaque cas est présenté avec son contexte, ses contraintes et ses limites explicites. Un résultat obtenu sur un logement donné ne se transpose pas automatiquement à un autre bien, dont l'état, la structure et les contraintes diffèrent nécessairement." },
          { q: "Comment un nouveau projet est-il ajouté à cette page ?", a: "Un projet est ajouté lorsqu'il illustre un problème résolu de façon représentative, avec l'accord du client sur l'anonymisation retenue. Le quota de cas publiés reste volontairement limité pour privilégier la qualité de la démonstration." },
        ]} />
        <p className="text-[0.82rem] text-muted mt-6 max-w-3xl border-t border-line pt-4">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta title="Discutons du problème que votre projet doit résoudre" lead="Étude de projet gratuite sous 48 heures : lecture du bien, hiérarchisation des travaux et budget réaliste." />

      <MqReadNext items={[
        { href: "/temoignages-clients", label: "Témoignages clients", sub: "Retours anonymisés et méthode de recueil" },
        { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes indicatives par poste de travaux" },
        { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage de A à Z" },
      ]} />
    </main>
  );
}
