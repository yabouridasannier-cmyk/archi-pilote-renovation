import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/savoir-faire-ancien" },
  title: "Charme de l'ancien : fenêtres à l'identique, crémones et moulures restituées | ARCHI PILOTE RÉNOVATION",
  description:
    "Restituer un décor ancien demande un relevé avant démolition, des fournisseurs capables de refaire un profil et une mise aux normes pensée pour rester invisible.",
};

const OUVRAGES = [
  {
    title: "Fenêtres reproduites à l'identique",
    text: "Relevé du châssis existant, report des sections de montants et de petits bois, dépose soignée puis repose de la crémone en laiton d'origine sur un châssis neuf à double vitrage feuilleté.",
  },
  {
    title: "Crémones, espagnolettes et quincaillerie",
    text: "La quincaillerie ancienne est démontée, décapée, remise en fonctionnement et reposée. Lorsqu'une pièce manque, elle est refaite en laiton sur modèle plutôt que remplacée par un modèle courant.",
  },
  {
    title: "Moulures, corniches et rosaces",
    text: "Les profils sont moulés d'après un fragment prélevé sur place, puis fournis par la maison Guimier. Les raccords entre partie conservée et partie restituée sont retouchés au plâtre traditionnel.",
  },
  {
    title: "Parquets et boiseries",
    text: "Parquets point de Hongrie et bâtons rompus déposés lame par lame, purgés, recalés puis complétés en chêne de récupération. Boiseries repeintes en laque après rebouchage et égrenage.",
  },
  {
    title: "Cheminées et pierre",
    text: "Trumeaux et cheminées en marbre conservés, nettoyés et rejointoyés. Les conduits sont contrôlés avant tout habillage ou obturation.",
  },
  {
    title: "Mise aux normes invisible",
    text: "Réseaux électriques et de ventilation intégrés dans les doublages et faux plafonds pour éviter la saignée destructrice dans un décor d'origine.",
  },
];

/*
  Légendes reprises une à une le 03/09/2026, chaque image ayant été rouverte. Sont retirés tous les
  faits qu'une photographie ne peut pas établir : « relevé », « trié », « conformément à la note de
  calcul », « essai de mise en pression », « selon la norme NF C 15-100 », « pentes maîtrisées »,
  « accord écrit du syndic », « support ragréé », ainsi que la restitution de corniches attribuée à
  la maison Guimier. Correction de fond sur la plomberie : les tubes visibles cheminent en apparent,
  aucun collecteur n'est dans le cadre — la légende ne peut pas annoncer des « réseaux encastrés ».
*/
const DEROULE = [
  {
    src: "chantier-etat-initial",
    alt: "Pièce d'appartement ancien vide avant travaux, murs jaunis et fissurés, parquet usé, cheminée ancienne et radiateur en fonte",
    caption: "État initial : murs jaunis et fissurés, parquet ancien usé, cheminée et corniche moulurée en place, radiateur en fonte sous la fenêtre.",
  },
  {
    src: "chantier-demolition",
    alt: "Phase de démolition d'un logement ancien, plafond ouvert jusqu'aux solives, gravats conditionnés en big bags avant évacuation",
    caption: "Démolition en cours : plafond ouvert jusqu'aux solives, gravats conditionnés en big bags et en sacs avant évacuation.",
  },
  {
    src: "chantier-ouverture-mur-etaiement",
    alt: "Ouverture percée dans un mur porteur en briques avec trois étais métalliques soutenant le plancher supérieur",
    caption: "Ouverture pratiquée dans un mur en briques : linteau métallique en place et trois étais réglables maintenant le plancher haut.",
  },
  {
    src: "chantier-ipn-habillage",
    alt: "Poutre de reprise de charge apparente au-dessus d'une ouverture entre deux pièces, habillage métallique à fixations apparentes, pièce encore en cours de finition",
    caption: "Poutre de reprise habillée d'un coffrage métallique à fixations apparentes au-dessus de l'ouverture : la pièce attend encore son revêtement de sol et ses finitions électriques.",
  },
  {
    src: "chantier-plomberie-encastree",
    alt: "Tubes multicouche rouges et bleus et évacuations cheminant en apparent dans une salle d'eau en travaux",
    caption: "Alimentations en tubes multicouche repérés chaud et froid et évacuations raccordées, encore apparentes avant habillage, dans une pièce d'eau en travaux.",
  },
  {
    src: "chantier-tableau-electrique-neuf",
    alt: "Tableau électrique neuf ouvert avec rangées de disjoncteurs, interrupteurs différentiels 40 A 30 mA et circuits étiquetés",
    caption: "Tableau électrique neuf : un interrupteur différentiel 40 A / 30 mA en tête de chaque rangée, circuits séparés et étiquetés poste par poste.",
  },
  {
    src: "chantier-vmc-caisson-gaines",
    alt: "Caisson de ventilation mécanique contrôlée suspendu en faux plafond avec gaines raccordées sur ses piquages",
    caption: "Caisson de ventilation mécanique contrôlée installé dans le plénum d'un faux plafond, gaines raccordées sur ses piquages avant fermeture.",
  },
  {
    src: "chantier-carottage-facade",
    alt: "Carotteuse diamant sur bâti fixée à un mur de façade en pierre pour percer une sortie de ventilation, carotte extraite posée au sol",
    caption: "Carottage d'un mur de façade pour une sortie de ventilation : bâti fixé au mur, carottage à l'eau, carotte extraite posée au sol et sols protégés par des bâches.",
  },
  {
    src: "chantier-isolation-laine",
    alt: "Chantier d'isolation intérieure : laine minérale entre rails métalliques sur murs et plafond avant pose du placo",
    caption: "Isolation thermique par l'intérieur en cours : laine minérale posée entre ossature métallique, murs et plafond, avant fermeture en plaques de plâtre.",
  },
  {
    src: "chantier-ossature-placo-plafond",
    alt: "Ossature métallique de plafond suspendu et doublage mural en plaques de plâtre sur un chantier de rénovation",
    caption: "Plafond suspendu sur ossature métallique et doublage périphérique en plaques de plâtre, avant traitement des joints.",
  },
  {
    src: "moulures-corniches-pose",
    alt: "Salon haussmannien en cours de travaux : corniche à modillons, rosace de plafond, panneaux moulurés et échafaudage roulant devant la fenêtre",
    caption: "Décors en plâtre d'un salon en cours de travaux : corniche à modillons, rosace de plafond et panneaux moulurés, échafaudage roulant en place et sols protégés.",
  },
  {
    src: "plateau-livre-parquet-chene",
    alt: "Grand plateau livré après rénovation avec parquet chêne à lames droites, éclairage sur rails et embrasures de fenêtres cintrées habillées de bois",
    caption: "Plateau livré : parquet chêne à lames droites, rails d'éclairage fixés au plafond et embrasures de fenêtres cintrées habillées de bois.",
  },
];

/*
  Examiné le 02/09/2026 : les comparatifs ci-dessous restent intégralement composés d'images de
  stock de /public/photos/maquette/. Les photographies réelles du chantier haussmannien livré n'y ont
  volontairement PAS été insérées. Un bloc « avant / après » se lit comme deux états d'un même
  ouvrage ; placer un cliché réel du client en « après » d'un « avant » de stock (réseaux encastrés,
  étaiement, ossature…) fabriquerait une continuité qui n'existe pas et laisserait croire que ces
  chantiers sont les siens. Ces photos réelles sont donc utilisées plus haut, seules et légendées pour
  ce qu'elles montrent, plutôt qu'en second terme d'une comparaison.

  Repris le 03/09/2026 : le même raisonnement s'appliquait aux paires de stock entre elles. Les 30
  images ont été ouvertes une par une. Sur les 15 paires, 4 seulement montraient réellement UN MÊME
  bâtiment avant puis après (pavillon, combles, extension, surélévation : mêmes pignons, mêmes
  ouvertures, mêmes maisons voisines). Les 11 autres associaient deux lieux différents sous un
  « Avant : » / « Après : » qui affirme une continuité inexistante, et le plus souvent une pièce
  meublée en second terme d'un intitulé technique :
  — « Réseaux encastrés puis pièce d'eau livrée » : plomberie d'un chantier / salle de bain en placage
    sombre d'un autre ; — « Étanchéité sous carrelage » : douche à l'étanchéité liquide / salle d'eau
    en travertin ; — « De l'état initial au plateau livré » : petite pièce ancienne / grand plateau à
    embrasures cintrées ; — « De l'ossature brute à la pièce livrée », « Ouvrir un mur porteur »,
    « Pose du zellige », « Salle d'eau : condensation », « Doublage isolant » : même schéma.
  — « Caissons standards, façades sur mesure » était le cas le plus net : l'« Avant » était une
    cuisine en chêne entièrement finie, photographiée sous une rosace.
  — « Trémie d'escalier » portait l'aveu dans sa propre légende : « Après : Référence de style ».
  Ces 11 paires ont été supprimées. Les ouvrages techniques qu'elles portaient (état initial,
  ouverture de mur, poutre habillée, plomberie, isolation, ossature) restent illustrés dans la
  section « Déroulé » ci-dessus — ce qui supprime au passage les 7 images qui s'affichaient deux fois
  sur cette page (chantier-etat-initial, chantier-ossature-placo-plafond, chantier-ouverture-mur-etaiement,
  chantier-ipn-habillage, chantier-plomberie-encastree, chantier-isolation-laine, plateau-livre-parquet-chene).
*/
const COMPARATIFS: {
  title: string;
  text: string;
  avant?: { src: string; caption: string };
  apres?: { src: string; caption: string };
}[] = [
  {
    title: "Pavillon francilien : de la façade fatiguée à l'enveloppe performante",
    text: "Isolation thermique par l'extérieur, remplacement des menuiseries, reprise de couverture et traitement des abords : l'enveloppe est traitée comme un ensemble cohérent.",
    avant: {
      src: "pavillon-facade-avant",
      caption: "État initial d'un pavillon francilien : enduit fissuré et sali, volets en bois vétustes, descente d'eaux pluviales rouillée, garde-corps corrodé et abords en friche.",
    },
    apres: {
      src: "pavillon-facade-apres",
      caption: "Le même pavillon après travaux : façade réenduite, menuiseries neuves à dormants sombres, couverture et gouttières remplacées, escalier et garde-corps refaits, abords paysagers et allée en dalles.",
    },
  },
  {
    title: "Combles : de l'isolant tassé à la double couche croisée",
    text: "Dépose de l'ancien isolant, traitement des périphéries, deux couches croisées et pare-vapeur continu : le premier poste de déperdition d'une passoire énergétique.",
    avant: {
      src: "combles-non-isoles-avant",
      caption: "Combles perdus avant intervention : ancien isolant tassé et discontinu entre les solives, planches de circulation posées en travers.",
    },
    apres: {
      src: "combles-isoles-apres",
      caption: "Les mêmes combles après traitement : laine minérale entre solives, film jointoyé à l'adhésif sur toute la surface et chemin de circulation en panneaux.",
    },
  },
  {
    title: "Extension : du jardin encombré au volume contemporain",
    text: "Étude de sol, déclaration préalable, fondations adaptées puis ossature bois et grandes baies : le raccord à la meulière existante est traité au détail.",
    avant: {
      src: "jardin-avant-extension",
      caption: "Avant extension : pignon en meulière aveugle, terrasse béton fissurée et appentis en tôle adossé au mur de clôture.",
    },
    apres: {
      src: "extension-livree-apres",
      caption: "Le même pignon après extension : volume bardé de bois à claire-voie, grandes baies d'angle à profilés fins noirs, toiture-terrasse à couronnement métallique et terrasse en dalles de pierre. La meulière est laissée apparente.",
    },
  },
  {
    title: "Surélévation : un étage gagné sans démolir",
    text: "Diagnostic de portance par l'ingénieur structure, dépose de la toiture, ossature bois préfabriquée et mise hors d'eau rapide pour limiter l'exposition du bâti.",
    avant: {
      src: "maison-avant-surelevation",
      caption: "Avant surélévation : maison de bourg à un seul niveau, comble sous rampants éclairé par deux fenêtres de toit, façade à encadrements de briques.",
    },
    apres: {
      src: "maison-surelevee-apres",
      caption: "La même maison surélevée : étage supplémentaire habillé d'un bardage clair à joints debout, larges baies à profilés sombres et toiture à faible pente. Le rez-de-chaussée, ses briques et ses volets bois sont inchangés.",
    },
  },
];

const FAQ = [
  {
    q: "Peut-on remplacer des fenêtres anciennes sans perdre le cachet du logement ?",
    a: "Oui, à condition de reproduire le châssis à l'identique : mêmes sections de montants, mêmes petits bois, même partition des vantaux. Le double vitrage feuilleté se loge dans un profil traditionnel, et la crémone en laiton d'origine est remontée sur le nouveau châssis lorsqu'elle est récupérable.",
  },
  {
    q: "D'où proviennent les moulures et corniches posées sur vos chantiers ?",
    a: "Les profils sont fournis par la maison Guimier, à partir d'un relevé ou d'un fragment prélevé sur place. Cela permet de restituer une corniche disparue avec le même profil que celle conservée dans la pièce voisine.",
  },
  {
    q: "Qui achète les matériaux et auprès de qui ?",
    a: "Le client achète en direct. Les matériaux techniques proviennent du groupe Saint-Gobain et sont retirés à La Plateforme du Bâtiment. Cette organisation supprime la marge habituellement appliquée sur la fourniture et contribue à l'économie constatée sur le budget travaux.",
  },
  {
    q: "Une mise aux normes électrique abîme-t-elle nécessairement les décors anciens ?",
    a: "Non. Les réseaux sont majoritairement passés dans les doublages, les faux plafonds et les plinthes techniques. Les saignées sont réservées aux zones sans décor, et les traversées de corniche sont proscrites.",
  },
  {
    q: "Faut-il une autorisation pour modifier des fenêtres sur rue ?",
    a: "En copropriété, la façade est une partie commune : la modification d'aspect d'une menuiserie sur rue relève d'une autorisation de l'assemblée générale, et parfois d'une déclaration préalable en mairie, notamment en secteur protégé.",
  },
];

export default function SavoirFaireAncienPage() {
  return (
    <main>
      <MqHero
        kicker="Savoir-faire"
        title="Charme de l'ancien : fenêtres à l'identique, crémones et moulures restituées"
        lead={
          <>
            <p>
              Restituer un décor ancien demande un relevé avant démolition, des fournisseurs capables de refaire un profil et une mise aux
              normes pensée pour rester invisible.
            </p>
            <p className="mt-4">
              Préserver le charme de l'ancien consiste à relever l'existant avant toute dépose, puis à reproduire les ouvrages disparus à
              l'identique : sections de petits bois, crémones en laiton, profils de corniche, hauteurs de plinthe. ARCHI PILOTE RÉNOVATION
              fait mouler les moulures et corniches par la maison Guimier et fait approvisionner les matériaux techniques du groupe
              Saint-Gobain à La Plateforme du Bâtiment, achetés en direct par le client. Les mises aux normes contemporaines — électricité,
              ventilation, étanchéité — sont intégrées sans dénaturer le décor d'origine.
            </p>
          </>
        }
      />

      <div className="container-site max-w-4xl pb-12 md:pb-16">
        {/*
          Légende corrigée le 03/09/2026 après ouverture de l'image. Elle affirmait une fenêtre
          « restaurée à l'identique » et un « double vitrage discret » : ni la restauration ni
          l'épaisseur du vitrage ne se voient sur ce visuel, qui est de surcroît une image générée
          de /photos/pedagogie/ (donc jamais la preuve d'un ouvrage exécuté). La légende ne décrit
          plus que ce qui est effectivement visible.
        */}
        <MqFig
          src="/photos/pedagogie/41-savoir-faire-fenetre-hero.jpeg"
          alt="Fenêtre ancienne à petits bois vue de l'intérieur, crémone en laiton, ouvrant sur une façade parisienne en pierre de taille"
          caption="Fenêtre à petits bois et crémone en laiton, vue depuis l'intérieur, face à une façade en pierre de taille. Image d'illustration."
          ratio="aspect-[16/9]"
        />
      </div>

      <MqSection
        kicker="Ce que nous préservons"
        title="Les ouvrages qui font le cachet d'un logement ancien"
        lead="Six familles d'ouvrages concentrent l'essentiel du caractère d'un appartement haussmannien ou d'une maison de ville ancienne."
      >
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {OUVRAGES.map((o) => (
              <div key={o.title} className="flex flex-col gap-2">
                <h3 className="display text-[1.15rem] text-ivoire">{o.title}</h3>
                <p className="text-muted text-[0.92rem] leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/*
              Grille revue le 03/09/2026 : chaque vignette a été rouverte et son recadrage réel
              simulé (aspect-[4/3] + object-cover) avant d'être jugée. Quatre vignettes ont été
              retirées ou remplacées parce que l'ouvrage ancien n'y était pas le sujet, ou parce que
              la légende affirmait ce que l'image ne montre pas :
              — chHdgChambreBalconApplique : chambre meublée (lit, téléviseur au centre du cadre) ;
                la légende annonçait des portes-fenêtres « à petits bois », or les vantaux sont à
                grands carreaux avec panneau plein en partie basse, et elle qualifiait les persiennes
                d'« intérieures » alors qu'elles sont repliées dans le tableau. Remplacée par la
                photo de dépose ci-dessous, où boiseries et volets sont réellement le sujet.
              — chBibliotheque : le sujet est une bibliothèque neuve ; la légende renvoyait à un
                « parquet ancien conservé » que le recadrage 4/3 supprime presque entièrement
                (350 px rognés en haut et en bas sur une source portrait). Retirée ; cette photo
                reste à sa place sur /menuiserie-agencement-sur-mesure.
              — chParquetChevronsCacheRadiateur : cache-radiateur contemporain devant une baie
                coulissante en aluminium noir — menuiserie d'aujourd'hui, et second parquet à
                chevrons redondant avec celui conservé ci-dessous. Retirée.
              — chHdgChambreLustreSdbOuverte : la grille de ventilation encastrée y est réelle mais
                occupe moins de 3 % du cadre dans une chambre meublée avec baignoire ; la légende
                décrivait en outre une « porte ancienne à panneaux moulurés » alors que la porte
                visible est un panneau lisse à rainure. Remplacée par le tableau électrique logé en
                placard, où la mise aux normes invisible est le sujet.
              Les mentions « conservé », « maintenu » et « restitué » ont été retirées partout où la
              photographie ne documente pas l'opération elle-même.
            */}
            <MqFig
              src="/photos/chantiers/chDemolitionBoiseriesHaussmannien.jpeg"
              alt="Pièce d'un appartement haussmannien en cours de dépose : boiseries murales moulurées et volets persiennés en place, parquet déposé jusqu'aux solives, granulés d'isolation répandus entre elles"
              caption="Appartement haussmannien en cours de travaux : boiseries murales moulurées et volets persiennés en place dans leurs embrasures ; parquet déposé jusqu'aux solives et granulés d'isolation répandus entre elles. Chantier réel des équipes partenaires."
            />
            <MqFig
              src="/photos/chantiers/chHdgSalonSalleMangerMoulures.jpeg"
              alt="Salon et salle à manger d'un appartement haussmannien livré, rosace de plafond et corniche sculptée, murs à panneaux moulurés et parquet chêne à chevrons"
              caption="Salon-salle à manger livré : rosace de plafond, corniche sculptée et murs à panneaux moulurés, grande glace à cadre mouluré encastrée dans le lambris, parquet chêne posé à chevrons. Chantier réel des équipes partenaires."
            />
            {/*
              Déplacé ici le 03/09/2026 depuis la section « Plâtrerie décorative » : cette vignette
              montre une menuiserie neuve raccordée au décor mouluré, pas une restitution de plâtre
              par la maison Guimier — sujet de cette section-là. Elle est à sa place ici, parmi les
              ouvrages qui font le cachet. « Conservés » retiré : rien à l'image ne prouve que le
              radiateur et la persienne sont d'origine.
            */}
            <MqFig
              src="/photos/chantiers/chHdgChambrePlacardMoulure.jpeg"
              alt="Chambre haussmannienne livrée, placard sur mesure toute hauteur à portes blanches moulurées couronné d'une corniche alignée sur celle de la pièce, radiateur en fonte à colonnes"
              caption="Raccord du neuf au décor existant : le placard sur mesure monte jusqu'au plafond et se termine par une corniche alignée sur celle de la pièce ; ses portes reprennent le dessin des panneaux moulurés. Radiateur en fonte à colonnes et persienne en bois en place. Chantier réel des équipes partenaires."
            />
            <MqFig
              src="/photos/chantiers/chHdgChambreChemineeMiroirMoulure.jpeg"
              alt="Chambre d'appartement haussmannien livrée, cheminée en marbre blanc sculpté avec foyer en fonte, trumeau mouluré au-dessus, corniche sculptée et parquet chêne à chevrons"
              caption="Cheminée en marbre blanc sculpté et son foyer en fonte, surmontés d'un trumeau à cadre mouluré ; corniche sculptée, panneaux muraux moulurés et parquet chêne posé à chevrons. Une armoire en bois clair est ajustée contre le mur. Chantier réel des équipes partenaires."
            />
            {/*
              Photo réelle fournie par le client. Le motif de pose et la coupe de raccord sont
              vérifiables à l'image (lames abouties en pointe, joint continu au faîte = pose à
              chevrons, point de Hongrie), mais ce parquet est un ouvrage NEUF : la légende
              n'affirme donc ni dépose lame par lame ni complément en chêne de récupération
              (ce que décrit le texte de l'ouvrage) — aucune photo du dossier ne documente cette
              reprise-là.
            */}
            <MqFig
              src="/photos/chantiers/chParquetChevronsCouloirDeuxTeintes.jpeg"
              alt="Raccord de deux parquets chêne posés à chevrons au droit d'un seuil, entre un couloir et une pièce, chantier réel"
              caption="Parquets chêne posés à chevrons (point de Hongrie), motif traditionnel des logements anciens : raccord traité au droit du seuil par une seule coupe droite, avec un changement net de teinte de part et d'autre. Chantier réel des équipes partenaires."
            />
            {/*
              Légende revue le 03/09/2026 après ouverture de l'image : les carreaux anciens visibles
              sont des carreaux émaillés à motif floral et non des « carreaux de ciment » (matériau
              non identifiable à l'image), et ils courent le long des murs — pas « en fond de niche ».
              La seconde vue de ce même local (chComptoirBarMouluresFinition) a été retirée : sa
              légende annonçait un comptoir « fini », alors qu'il y est en MDF brut, avant peinture,
              avec échafaudage et compagnon dans le cadre.
            */}
            <MqFig
              src="/photos/chantiers/chComptoirBarColonneFonteCarreauxAnciens.jpeg"
              alt="Colonne en fonte et carreaux anciens à motif floral conservés autour d'un comptoir en cours de construction, chantier réel"
              caption="Colonne en fonte et carreaux anciens à motif floral conservés en place, autour d'un comptoir neuf encore en bois brut. Chantier réel des équipes partenaires."
            />
            {/*
              Légende revue le 03/09/2026 : « onyx » et « conservée » ont été retirés. La dalle de
              gauche est une pierre fortement veinée dont la nature exacte n'est pas identifiable à
              l'image, et rien sur le cliché ne documente la conservation de la cheminée de droite —
              seule sa sculpture est vérifiable.
            */}
            <MqFig
              src="/photos/chantiers/chHdgDetailNicheOnyxCheminee.jpeg"
              alt="Diptyque : à gauche une niche taillée dans une pierre veinée au-dessus d'un meuble à façades cannelées, à droite le gros plan d'une tablette de cheminée en marbre blanc sculpté avec coquille et volutes"
              caption="Pierre neuve et pierre ancienne côte à côte : à gauche, niche taillée dans une dalle de pierre veinée posée au-dessus d'un meuble à façades cannelées ; à droite, gros plan de la traverse d'une cheminée en marbre blanc — coquille, volutes et feuillages sculptés — avec son âtre en fonte. Chantier réel des équipes partenaires."
            />
            {/*
              Ajouté le 03/09/2026 pour l'ouvrage « Mise aux normes invisible », à la place de la
              chambre meublée qui l'illustrait jusqu'ici. Ici l'ouvrage EST le sujet : compteur et
              tableau logés derrière une porte de placard. Photo ouverte et recadrage 4/3 simulé
              (source portrait : le tableau reste entièrement dans le cadre).
            */}
            <MqFig
              src="/photos/chantiers/chPlacardTableauElectriqueIntegre.jpeg"
              alt="Compteur et tableau électriques logés derrière une porte de placard sur mesure en MDF brut, à côté de la porte d'entrée, chantier réel"
              caption="Mise aux normes logée dans la menuiserie : compteur et tableau électriques placés derrière une porte de placard sur mesure, à l'entrée, plutôt que posés en applique dans la pièce. Placard encore en MDF brut avant peinture. Chantier réel des équipes partenaires."
            />
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Menuiseries"
        title="Reproduire une fenêtre à l'identique, crémone comprise"
        lead="Une fenêtre reproduite à l'identique conserve les proportions d'origine tout en atteignant les performances thermiques et acoustiques attendues aujourd'hui."
      >
        <div className="flex flex-col gap-8">
          {/*
            Revu le 03/09/2026.
            — La légende de la photo de fenêtre affirmait une reproduction « à l'identique », une
              section « relevée sur l'existant » et une crémone « restaurée et remontée » : trois
              opérations qu'aucune image ne peut montrer, sur un visuel de stock de surcroît. Elle ne
              décrit plus que ce qui est visible.
            — Le schéma des déperditions thermiques qui l'accompagnait a été retiré de cette section :
              il traite de l'enveloppe complète d'un logement (toiture, murs, plancher), pas de la
              reproduction d'une menuiserie ; il reste en place sur les pages énergie et sur l'accueil.
            — Le schéma pédagogique passe en aspect-[3/2], sa dimension réelle (1536×1024) : en 16/9,
              object-cover coupait en deux la dernière ligne des trois légendes (« en laiton »,
              « profilé »).
          */}
          <MqFig
            src="/photos/maquette/fenetre-identique-cremone-laiton.jpg"
            alt="Fenêtre en bois à petits bois dans un appartement haussmannien, crémone en laiton, vue vers une façade en pierre de taille et des toits en zinc"
            caption="Fenêtre en bois à petits bois et crémone en laiton, dans une embrasure à panneautage mouluré."
            ratio="aspect-[16/9]"
          />
          <MqFig
            src="/photos/pedagogie/05-menuiserie-moulures.jpeg"
            alt="Trois relevés de menuiserie : profil de corniche, fenêtre à petits bois avec crémone en laiton, chambranle en chêne profilé"
            caption="Schéma pédagogique : les trois relevés qui précèdent une commande — profil de corniche, fenêtre à petits bois et crémone en laiton, chambranle en chêne profilé."
            ratio="aspect-[3/2]"
          />
          <MqProse>
            <h3 className="display text-[1.3rem] text-ivoire">Le relevé précède toujours la dépose</h3>
            <p>Chaque châssis est mesuré et photographié avant démontage, quincaillerie comprise.</p>
            <p>
              Sont relevés : la section des montants et traverses, le dessin et l'épaisseur des petits bois, la profondeur de feuillure, la
              hauteur d'allège, le sens d'ouverture et le modèle de crémone. Ce relevé constitue le cahier des charges transmis au menuisier.
            </p>
            <p>
              Sans ce relevé, la menuiserie neuve arrive avec des montants plus larges : la surface vitrée diminue, les proportions se
              déséquilibrent et le cachet disparaît, même avec un matériau noble.
            </p>
            <h3 className="display text-[1.3rem] text-ivoire mt-4">Crémones et espagnolettes : réemploi avant remplacement</h3>
            <p>La quincaillerie ancienne est remise en service chaque fois qu'elle est récupérable.</p>
            <p>
              Les crémones en laiton sont déposées, décapées, lubrifiées et reposées sur le châssis neuf après adaptation des gâches. Une
              pièce manquante est refaite sur modèle plutôt que remplacée par une poignée courante.
            </p>
            <h3 className="display text-[1.3rem] text-ivoire mt-4">Performance sans dénaturation</h3>
            <p>Double vitrage feuilleté, joints d'étanchéité et calfeutrement se logent dans un profil traditionnel.</p>
            <p>
              Le gain acoustique est souvent le premier bénéfice ressenti en front de rue. Le gain thermique n'a de sens que combiné à la
              ventilation : une menuiserie étanche sans extraction correcte déplace le problème vers la condensation.
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection
        kicker="Plâtrerie décorative"
        title="Moulures, corniches et rosaces : profils moulés par la maison Guimier"
        lead="Les décors en plâtre disparus sont restitués à partir d'un fragment prélevé sur place, non choisis sur catalogue."
      >
        <div className="flex flex-col gap-8">
          {/*
            Revu le 03/09/2026. Cette section ne porte plus qu'UNE image, et c'est voulu :
            — la vignette du placard mouluré a été déplacée dans la grille « Ce que nous préservons ».
              Elle montre une menuiserie neuve raccordée à un décor existant, pas de la plâtrerie
              décorative restituée : sous ce titre-ci, elle annonçait autre chose que ce qu'elle montre.
            — le cliché conservé est le seul du dossier où un décor en plâtre sculpté est réellement le
              sujet (gros plan du cadre de glace). Il est affiché seul, en pleine largeur, à son ratio
              d'origine (1600×1064 ≈ 3/2, aucun rognage).
            HONNÊTETÉ : il documente un décor mouluré existant, PAS une restitution de profil par la
            maison Guimier (relevé du fragment, moulage, pose au plâtre) — aucune photo du dossier ne
            montre cette séquence, ce que détaille le commentaire ci-dessous. La légende ne lui
            attribue donc aucun ouvrage restitué.
          */}
          <MqFig
            src="/photos/chantiers/chHdgDiptyqueSalonMiroirBalcon.jpeg"
            alt="Diptyque : à gauche le gros plan d'un cadre de glace mouluré en plâtre reflétant un salon haussmannien et sa cheminée en marbre, à droite le balcon parisien en ferronnerie et les immeubles en pierre de taille en vis-à-vis"
            caption="À gauche, cadre de glace mouluré en gros plan — rang de perles, rais-de-cœur et coquille — le salon et sa cheminée en marbre se reflétant dans le miroir. À droite, le balcon sur rue du même appartement : garde-corps en ferronnerie et façades en pierre de taille en vis-à-vis. Chantier réel des équipes partenaires."
            ratio="aspect-[3/2]"
          />
          {/*
            À GÉNÉRER — Visual 3 (brief original, jamais traité) : séquence RÉELLE du MÊME profil de
            corniche/moulure/rosace — avant, prise d'empreinte ou relevé, reproduction, pose et finition.
            Alt prévu : "Étapes de restitution d'une moulure ancienne."

            Vérification faite dans /public/photos/chantiers/ (~200 fichiers) : aucune photo ne documente
            cette continuité sur un seul profil. Les seuls fichiers contenant "Moulures" dans leur nom
            (chDressingNoyerMoulures2.jpeg, chDressingNoyerMouluresAngle1.jpeg,
            chDressingBufetNoyerMoulures1.jpeg, chDressingNoyerBufetMoulures4.jpeg,
            chDressingBufetNoyerMoulures3.jpeg, chDressingNoyerMouluresFenetre.jpeg,
            chBibliothequePanneauxMoulures.jpeg) montrent des moulures de dressings/bibliothèques en
            menuiserie (portes de placard) et non une restitution de corniche/rosace en plâtre relevée
            puis moulée par la maison Guimier — sujet hors-propos, à ne pas réutiliser ici pour ne pas
            présenter une fausse séquence.

            Contrôle MD5 complémentaire (01/09/2026) sur ce lot : il ne contient en réalité que 3 clichés
            distincts, chacun enregistré deux fois sous un nom différent —
            chDressingBufetNoyerMoulures1.jpeg ≡ chDressingNoyerBufetMoulures4.jpeg,
            chDressingNoyerMoulures2.jpeg ≡ chDressingNoyerMouluresAngle1.jpeg, et
            chDressingBufetNoyerMoulures3.jpeg ≡ chDressingNoyerMouluresFenetre.jpeg (l'ancien hero de
            cette page, remplacé depuis par le schéma généré /photos/pedagogie/41-savoir-faire-fenetre-hero.jpeg).
            chBibliothequePanneauxMoulures.jpeg a un hash distinct des 6 autres et sert déjà sur
            /menuiserie-agencement-sur-mesure. Aucun des 6 noms dupliqués n'est utilisé comme src sur la
            présente page : pas de doublon visible pour le visiteur ici, ce lot entier reste hors-sujet
            et à ne pas réutiliser.

            Réel à privilégier : demander aux équipes partenaires de photographier, sur un seul et même
            chantier, le fragment avant dépose, la prise d'empreinte/le relevé du profil, le moule ou le
            gabarit, la pose au plâtre et la finition peinte.

            À défaut, prompt de génération (macro réaliste, PAS un rendu illustratif) :
            "Photographie macro documentaire en 5 vignettes contiguës, format triptyque large, lumière
            naturelle de chantier, grain photo réel (pas de style aquarelle ni schématique) : (1) fragment
            de corniche en plâtre ancienne, encore en place au plafond d'un appartement haussmannien,
            partiellement dégradé ; (2) prise d'empreinte au silicone ou relevé au calibre sur ce même
            fragment ; (3) moule en plâtre du profil reproduit, posé sur un établi d'atelier ; (4) pose du
            nouveau profil au plâtre traditionnel, calage au cordeau, angle de pièce ; (5) même corniche
            finie et peinte en blanc mat, raccord invisible avec la partie ancienne conservée. Cohérence de
            lumière, de teinte et de profil entre les 5 vignettes pour bien montrer qu'il s'agit du même
            ouvrage du début à la fin."
          */}
          <MqChecklist
            cols={1}
            items={[
              "Prélèvement d'un fragment de corniche conservée et relevé du développé.",
              "Commande du profil correspondant auprès de la maison Guimier.",
              "Pose au plâtre traditionnel, calage au cordeau et raccord des angles à la main.",
              "Retouche des jonctions entre partie ancienne conservée et partie restituée.",
              "Peinture après séchage complet, en finition mate pour révéler le relief.",
              "Réservation des réseaux en amont pour éviter toute traversée du décor.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Approvisionnement"
        title="Matériaux du groupe Saint-Gobain, retirés à La Plateforme du Bâtiment"
        lead="Le client achète ses matériaux en direct : la fourniture n'est jamais une source de marge cachée."
      >
        <div className="flex flex-col gap-8">
          {/*
            Revu le 03/09/2026 : la légende de la photo d'entrepôt nommait le fournisseur et le point
            de retrait, invisibles à l'image (aucune enseigne dans le cadre) et facturait même la
            fourniture « sans marge ». Ces engagements sont portés par la liste ci-dessous, qui est
            leur place ; la légende ne décrit plus que ce que montre la photo. Les deux visuels passent
            en aspect-[10/7], leur dimension réelle (1280×896) : en 4/3, object-cover rognait 43 px de
            chaque côté et mordait sur le cadre et le pied de page du schéma de budget.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/maquette/approvisionnement-materiaux-plateforme.jpg"
              alt="Entrepôt de matériaux de construction avec palettes de plaques de plâtre, rouleaux de laine minérale et sacs d'enduit"
              caption="Dépôt de matériaux : plaques de plâtre sur palettes, rouleaux de laine minérale et sacs d'enduit, prêts à être retirés."
              ratio="aspect-[10/7]"
            />
            <MqFig
              src="/photos/maquette/schema-repartition-budget.jpg"
              alt="Répartition indicative d'un budget de rénovation complète par poste de travaux en pourcentage"
              caption="Répartition indicative d'un budget de rénovation complète par poste : ordres de grandeur, à confirmer par un chiffrage détaillé."
              ratio="aspect-[10/7]"
            />
          </div>
          <MqChecklist
            cols={1}
            items={[
              "Les matériaux techniques — plaques de plâtre, isolants, enduits, chapes, colles — proviennent du groupe Saint-Gobain.",
              "Le retrait s'effectue à La Plateforme du Bâtiment, avec un compte ouvert au nom du client lorsqu'il le souhaite.",
              "Le client achète en direct et conserve les factures : aucune marge n'est prise sur la fourniture.",
              "Les quantités sont calculées par ouvrage et vérifiées avant commande pour limiter les chutes et les reliquats.",
              "Les moulures, corniches et rosaces sont commandées auprès de la maison Guimier sur relevé du profil existant.",
              "Le calendrier d'approvisionnement est aligné sur le planning des lots pour éviter le stockage sur chantier.",
            ]}
          />
          <MqProse>
            <p>
              Cette organisation, héritée des méthodes d'achat des foncières, explique une part importante de l'économie constatée sur le
              budget travaux, jusqu'à 20 % d'économies sur le budget travaux.
            </p>
          </MqProse>
        </div>
      </MqSection>

      {/*
        Titre et chapeau corrigés le 03/09/2026. Le chapeau annonçait « douze étapes documentées par
        photographies datées, transmises au client au fil du chantier » : il présentait donc comme des
        photos de chantier transmises au client une grille entièrement composée d'images de stock, et
        le titre au singulier laissait croire à un chantier unique suivi du début à la fin. Le
        commentaire ci-dessous rappelle qu'aucune séquence réelle complète n'existe dans le dossier.
      */}
      <MqSection
        kicker="Déroulé"
        title="Les étapes d'un chantier dans l'ancien, de l'état initial à la livraison"
        lead="Douze étapes types, de la lecture de l'existant à la livraison. Sur nos chantiers, chacune est documentée par des photographies datées transmises au client ; les vues ci-dessous sont des illustrations."
        wide
      >
        {/*
          À GÉNÉRER — Visual 4 (brief original, jamais traité) : séquence RÉELLE du MÊME appartement ancien —
          relevé, protection, travaux techniques, finition, livraison.
          Alt prévu : "Rénovation d'un appartement ancien sans perdre son cachet."

          Vérification faite dans /public/photos/chantiers/ : chDemolitionOuvertureCouloir.jpeg,
          chDemolitionLattisPlatreChantier2.jpeg, chDemolitionGravatsChantier.jpeg et
          chDemolitionCloisonBoisPlatre.jpeg montrent bien le même couloir d'un appartement haussmannien
          (même papier peint ancien, même fenêtre à volets, même garde-corps) à des instants rapprochés
          d'une seule phase de démolition — mais aucune photo de protection des sols/menuiseries, de
          travaux techniques (électricité, plomberie, VMC) ni de finition/livraison de CE MÊME appartement
          n'a été retrouvée dans le dossier. Impossible de compléter honnêtement les 5 étapes du brief sans
          mélanger des chantiers différents (ce serait fabriquer une fausse continuité). La grille ci-dessous
          reste donc composée de photos stock génériques de /public/photos/maquette/, jamais présentées
          comme réelles (légendes sans la mention "Chantier réel des équipes partenaires").

          Réel à privilégier : demander aux équipes de reprendre en photo, sur UN SEUL chantier d'appartement
          ancien suivi du début à la fin, les 5 étapes ci-dessous.

          À défaut, prompt de génération (macro réaliste, PAS un rendu illustratif) :
          "Photographie macro documentaire en 5 vignettes contiguës, même appartement ancien haussmannien du
          relevé à la livraison, grain photo réel (pas de style aquarelle ni schématique) : (1) relevé au
          mètre et à l'appareil photo d'une pièce ancienne avant travaux, cheminée et moulures d'origine
          visibles ; (2) protection intégrale du sol et des menuiseries conservées par bâches et cartons
          avant démolition ; (3) réseaux techniques (électricité, plomberie ou VMC) posés et encore apparents
          avant fermeture des doublages ; (4) finition en cours : enduit, ponçage, peinture autour des
          moulures restituées ; (5) même pièce livrée, meublée sobrement, moulures et parquet ancien mis en
          valeur. Cohérence de lumière, de couleur de mur et de profil de moulure entre les 5 vignettes pour
          bien montrer qu'il s'agit du même chantier du début à la fin."
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEROULE.map((f) => (
            <MqFig key={f.caption} src={`/photos/maquette/${f.src}.jpg`} alt={f.alt} caption={f.caption} />
          ))}
        </div>
      </MqSection>

      <MqSection
        kicker="Comparatifs"
        title="Avant / après sur les ouvrages déterminants"
        lead="Quatre comparaisons portant chacune sur un même bâtiment, photographié avant puis après travaux."
      >
        <div className="flex flex-col gap-12">
          {COMPARATIFS.map((c) => (
            <div key={c.title} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="display text-[1.3rem] text-ivoire">{c.title}</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">{c.text}</p>
              </div>
              {c.avant && c.apres && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <MqFig src={`/photos/maquette/${c.avant.src}.jpg`} alt={c.avant.caption} caption={`Avant : ${c.avant.caption}`} />
                  <MqFig src={`/photos/maquette/${c.apres.src}.jpg`} alt={c.apres.caption} caption={`Après : ${c.apres.caption}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        kicker="Pédagogie"
        title="Trois schémas pour comprendre les arbitrages techniques"
        lead="Ventilation, étanchéité et structure conditionnent la durabilité d'une rénovation dans l'ancien."
        wide
      >
        {/*
          ratio aligné sur la dimension réelle des trois schémas (1280×896 = 10/7). En aspect-[4/3],
          object-cover rognait 43 px de chaque côté et amputait la première lettre des titres
          (« PRINCIPE D'UNE VMC », « ÉTANCHÉITÉ SOUS CARRELAGE ») — vérifié en simulant le recadrage
          le 03/09/2026.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/maquette/schema-vmc.jpg"
            alt="Schéma d'une ventilation mécanique contrôlée avec entrées d'air, bouches d'extraction, gaines et caisson"
            caption="Principe de la ventilation mécanique contrôlée : entrées d'air en pièces sèches, extraction en cuisine et salle d'eau, réseau raccordé au caisson."
            ratio="aspect-[10/7]"
          />
          <MqFig
            src="/photos/maquette/schema-etancheite-salle-eau.jpg"
            alt="Coupe d'une salle d'eau montrant la natte d'étanchéité sous carrelage, la bande d'angle, la pente et le siphon"
            caption="Étanchéité sous carrelage : continuité de la natte entre murs et sol, bandes de renfort en angle et pente d'évacuation de 1 à 2 %."
            ratio="aspect-[10/7]"
          />
          <MqFig
            src="/photos/maquette/schema-mur-porteur.jpg"
            alt="Schéma en coupe d'une ouverture de mur porteur avec poutre de reprise et poteaux de descente de charge"
            caption="Ouverture de mur porteur : la charge est reprise par une poutre dimensionnée par un ingénieur structure, puis descendue jusqu'aux appuis."
            ratio="aspect-[10/7]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Pédagogie"
        title="Arbitrages techniques pour préserver le charme d'un logement ancien"
        lead="Fenêtre, corniche et réseau derrière doublage : trois arbitrages qui reviennent systématiquement dans un logement ancien."
        wide
      >
        <MqFig
          src="/photos/pedagogie/32-savoir-faire-trois-schemas.jpeg"
          alt="Trois coupes techniques : fenêtre ancienne avec crémone laiton, corniche en plâtre, réseau derrière doublage"
          caption="Arbitrages techniques pour préserver le charme d'un logement ancien. Schéma pédagogique."
          ratio="aspect-[16/9]"
        />
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Rénover l'ancien sans le dénaturer">
        <MqFaq items={FAQ} />
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

      <MqCta
        title="Un bien ancien à rénover sans perdre son cachet ?"
        lead="Envoyez-nous quelques photographies des décors existants : nous identifions ce qui doit être conservé, restitué ou remplacé, et nous chiffrons les ouvrages correspondants."
      />

      <MqReadNext
        items={[
          { href: "/renovation-appartement", label: "Rénovation d'appartement", sub: "Copropriété, évacuations, ventilation" },
          { href: "/detail-invisible", label: "Le détail invisible", sub: "Ce qui se joue avant les finitions" },
          { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Achats en direct, transparence" },
        ]}
      />
    </main>
  );
}
