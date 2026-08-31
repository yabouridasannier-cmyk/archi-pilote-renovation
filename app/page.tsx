import type { Metadata } from "next";
import Link from "next/link";
import { MqKicker, MqSection, MqProse, MqFig, MqStats, MqNumbered, MqChecklist, MqDark, MqDarkSteps, MqQuotes, MqFaq, MqCta, MqReadNext } from "./components/mq";

export const metadata: Metadata = {
  title: "ARCHI PILOTE RÉNOVATION | Pilotage de rénovation en Île-de-France",
  description:
    "ARCHI PILOTE RÉNOVATION structure, chiffre et pilote de A à Z les rénovations en Île-de-France : analyse du bâti, devis comparables, entreprises partenaires adaptées.",
  alternates: { canonical: "/" },
};

/* Accueil — porté de la maquette Lovable (batir-optimale, 29/08/2026). */
export default function Home() {
  return (
    <main>
      {/* Hero : texte à gauche, photo légendée à droite */}
      <header className="pt-32 md:pt-40 pb-10 md:pb-14">
        <div className="container-site grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 items-start">
          <div>
            <MqKicker>Paris · Hauts-de-Seine · Île-de-France</MqKicker>
            <h1 className="display text-[clamp(2.6rem,5.8vw,4.3rem)] text-ivoire text-balance mt-4">
              Pilotez votre rénovation, de la structure aux finitions
            </h1>
            <p className="mt-4 font-semibold text-ivoire text-[1.05rem]">Gros œuvre. Second œuvre. Décisions claires. Partenaires adaptés.</p>
            <p className="lead mt-4 max-w-2xl">
              ARCHI PILOTE RÉNOVATION est une marque de IA RENOV SASU (RCS Nanterre 889 976 387) qui structure, chiffre
              et pilote de A à Z les rénovations en Île-de-France. Nous analysons le bâti, hiérarchisons les travaux,
              rendons les devis comparables et mobilisons les entreprises partenaires adaptées. L&apos;achat des matériaux
              en direct par le client permet d&apos;atteindre jusqu&apos;à 20&nbsp;% d&apos;économies sur le budget travaux.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Décrire mon projet</Link>
              <Link href="/notre-methode" className="btn btn-ghost">Voir la méthode</Link>
            </div>
          </div>
          <MqFig
            src="/photos/maquette/hero-renovation.jpg"
            alt="Séjour d'un appartement haussmannien parisien rénové : parquet en point de Hongrie restauré, moulures conservées et menuiseries remises en état"
            caption="Rénovation complète d'un appartement haussmannien : le résultat visible dépend des arbitrages techniques décidés en amont."
            ratio="aspect-[4/3]"
          />
        </div>
        <div className="container-site mt-10">
          <MqStats items={[
            { dt: "20 %", dd: "d'économies visées sur le budget travaux" },
            { dt: "A à Z", dd: "pilotage et accompagnement du projet" },
            { dt: "Quotidien", dd: "photos de chantier transmises au client" },
          ]} />
        </div>
      </header>

      <MqSection kicker="Le risque est entre les lots" title="Un projet lisible avant de devenir un chantier">
        <MqProse>
          <p>
            Une rénovation complète ne se résume pas à additionner des corps de métier. Le vrai risque apparaît entre
            les lots : une ouverture structurelle qui déplace un réseau, une isolation qui modifie la ventilation, une
            cuisine dessinée avant les contraintes électriques, ou un budget qui dérive parce que les arbitrages
            arrivent trop tard.
          </p>
        </MqProse>
        <div className="mt-7">
          <MqChecklist items={[
            "Analyse du besoin et lecture du bien existant.",
            "Identification des contraintes techniques et structurelles.",
            "Hiérarchisation des travaux, poste par poste.",
            "Lecture et comparaison des chiffrages ligne à ligne.",
            "Aide à la sélection des entreprises partenaires.",
            "Pilotage d'ensemble et suivi des décisions.",
          ]} />
        </div>
        <div className="mt-10">
          <MqFig
            src="/photos/pedagogie/08-accueil-axonometrique.jpeg"
            alt="Schéma pédagogique en coupe axonométrique d'un appartement montrant les interfaces entre structure, plomberie, électricité, isolation et cuisine"
            caption="Interfaces entre gros œuvre, second œuvre et lots techniques dans une rénovation complète. Schéma pédagogique."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection kicker="Nos domaines" title="Gros œuvre, second œuvre et lots techniques" wide>
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 items-start">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="display text-[1.3rem] text-ivoire">Gros œuvre et structure</h3>
              <p className="mt-2 font-medium text-ivoire/90 text-[0.98rem]">Un mur porteur, un plancher, une extension ou une surélévation ne se traitent pas comme un lot de finition.</p>
              <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
                Ouverture de mur porteur, création de trémie, reprise en sous-œuvre, poutre métallique, appuis et
                descente de charges : chaque décision engage la stabilité de l&apos;ouvrage. Selon le projet, un architecte
                DPLG ou un ingénieur structure partenaire indépendant intervient sous sa propre responsabilité.
              </p>
              <Link href="/gros-oeuvre-structure" className="inline-block mt-2 font-semibold text-orange-deep hover:underline text-[0.92rem]">Gros œuvre et structure en rénovation →</Link>
            </div>
            <div>
              <h3 className="display text-[1.3rem] text-ivoire">Second œuvre technique</h3>
              <p className="mt-2 font-medium text-ivoire/90 text-[0.98rem]">Électricité, plomberie, cloisons, isolation, ventilation, chauffage et revêtements doivent être organisés autour des mêmes plans.</p>
              <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
                L&apos;objectif n&apos;est pas de multiplier les intervenants mais de réduire les contradictions entre leurs
                travaux. Chaque lot peut être correctement exécuté et pourtant entrer en conflit avec le suivant.
              </p>
              <Link href="/second-oeuvre" className="inline-block mt-2 font-semibold text-orange-deep hover:underline text-[0.92rem]">Second œuvre : rendre les lots compatibles →</Link>
            </div>
            <div>
              <h3 className="display text-[1.3rem] text-ivoire">Passoire énergétique, ventilation et carottage</h3>
              <p className="mt-2 font-medium text-ivoire/90 text-[0.98rem]">Nous traitons les logements classés F ou G avec une lecture complète de l&apos;enveloppe et du renouvellement d&apos;air.</p>
              <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
                Isolation, menuiseries, ventilation mécanique contrôlée, carottage de traversée et démarches auprès du
                syndic lorsque l&apos;immeuble ne dispose pas d&apos;une installation conforme.
              </p>
              <Link href="/renovation-energetique" className="inline-block mt-2 font-semibold text-orange-deep hover:underline text-[0.92rem]">Rénovation énergétique et traitement des passoires →</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <MqFig
              src="/photos/maquette/schema-mur-porteur.jpg"
              alt="Schéma en coupe d'une ouverture de mur porteur : poutre métallique IPN, poteaux d'appui, étaiement provisoire et descente de charges vers les fondations"
              caption="Ouverture de mur porteur : la reprise de charges, les appuis et l'étaiement provisoire se décident avant tout devis de finition."
            />
            <MqFig
              src="/photos/maquette/schema-deperditions.jpg"
              alt="Schéma des déperditions thermiques d'un logement classé passoire énergétique : toiture, murs, fenêtres, plancher bas et ponts thermiques avec pourcentages indicatifs"
              caption="Déperditions thermiques : l'ordre des travaux se déduit des postes de perte, pas des offres commerciales du moment."
            />
          </div>
        </div>
      </MqSection>

      <MqSection kicker="Modèle économique" title="Une méthode issue du secteur des foncières" lead="Notre modèle vient de la gestion d'actifs immobiliers : le prix se construit en amont, par la précision du chiffrage et la maîtrise des achats, jamais par la négociation de dernière minute." wide>
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 items-start">
          <MqNumbered
            cols={2}
            items={[
              { title: "Achats de matériaux en direct", text: "Le client achète ses matériaux au prix fournisseur. Les marges en cascade disparaissent du budget, les références restent traçables et le niveau de gamme reste maîtrisé." },
              { title: "Rigueur d'ancien expert en chiffrage", text: "Chaque devis est relu ligne à ligne : quantités, unités, hypothèses, exclusions, prestations manquantes et doublons entre lots." },
              { title: "Architectes DPLG et ingénieurs structure", text: "Pour les dossiers lourds, nous nous faisons accompagner par des architectes DPLG et des bureaux d'études structure partenaires indépendants." },
              { title: "Transparence des rôles", text: "Les missions de pilotage, d'accompagnement ou d'apport d'affaires sont distinguées. Les entreprises partenaires exécutent et facturent leurs travaux." },
              { title: "Suivi quotidien documenté", text: "Photos datées transmises sur WhatsApp, comptes rendus écrits, journal des décisions et de leur impact budgétaire." },
              { title: "Pilotage de A à Z", text: "De la première lecture du bien à la levée des réserves, un interlocuteur unique conserve le fil du projet." },
            ]}
          />
          <MqFig
            src="/photos/chantiers/chPlacagesNoyerEnAttente.jpeg"
            alt="Panneaux de placage noyer achetés en direct par le client, réceptionnés et stockés dans l'appartement en chantier avant la pose des menuiseries sur mesure"
            caption="Matériaux achetés en direct par le client, réceptionnés sur site avant la pose : traçabilité des références, marges en cascade supprimées. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqDark kicker="Méthode" title="Les huit étapes du pilotage" lead="Chaque étape produit un livrable écrit. Le projet avance sur des décisions documentées, pas sur des intentions." cta={{ href: "/notre-methode", label: "Détail complet de la méthode" }}>
        <MqDarkSteps steps={[
          { title: "Comprendre le besoin réel", text: "Usage du logement, durée de détention, contraintes de vie, budget disponible et niveau d'exigence. Ce cadrage évite de payer pour des travaux que le projet n'exige pas." },
          { title: "Lire le bâti avant les finitions", text: "Structure, planchers, réseaux, ventilation, humidité, état des menuiseries. Le bâti impose ses règles : la décoration se décide après, jamais avant." },
          { title: "Séparer indispensable, souhaitable et optionnel", text: "Chaque poste est classé. L'arbitrage devient possible sans casser la cohérence technique du projet." },
          { title: "Construire un chiffrage lisible", text: "Descriptif détaillé, quantités, hypothèses, exclusions. Un devis comparable ligne à ligne remplace les forfaits opaques." },
          { title: "Identifier les compétences nécessaires", text: "Entreprises partenaires contractantes, architecte DPLG ou ingénieur structure lorsque le dossier l'exige. Chacun dans son périmètre de responsabilité." },
          { title: "Verrouiller les interfaces entre lots", text: "Le risque n'est pas dans le lot, il est entre les lots : ouverture structurelle qui déplace un réseau, isolation qui modifie la ventilation, cuisine dessinée avant l'électricité." },
          { title: "Suivre les décisions et les changements", text: "Compte rendu de chantier, photos datées transmises quotidiennement sur WhatsApp, journal des modifications et de leur impact budgétaire." },
          { title: "Documenter la fin du projet", text: "Réserves, levées de réserves, notices, garanties et justificatifs d'assurance des entreprises exécutantes réunis dans un dossier unique." },
        ]} />
      </MqDark>

      <MqSection kicker="Pour quels projets" title="Des situations très différentes, une même discipline">
        <MqChecklist items={[
          "Rénovation complète d'appartement à Paris et en proche couronne.",
          "Rénovation de maison ou de pavillon en Île-de-France.",
          "Restructuration avec interventions lourdes et reprise de structure.",
          "Extension ou surélévation avec autorisations d'urbanisme.",
          "Sortie de passoire énergétique classée F ou G.",
          "Projet d'investisseur, de bailleur ou de professionnel.",
        ]} />
      </MqSection>

      <MqSection kicker="Sur le terrain" title="Les grandes étapes d'un chantier de rénovation" lead="Trois étapes-types illustrées par des chantiers réels de nos équipes partenaires — projets distincts, même exigence à chaque étape." wide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/chantiers/chDemolitionGravatsChantier.jpeg"
            alt="Démolition d'une cloison ancienne mettant à nu le lattis bois et plâtre, gravats au sol, avant reprise de structure"
            caption="Démolition : mise à nu des cloisons anciennes avant toute reprise de structure. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chPoutreAcierSoudure.jpeg"
            alt="Assemblage soudé entre poutre et poteau acier de reprise de charge, autre chantier"
            caption="Structure : assemblage soudé d'une poutre de reprise de charge, sur un autre chantier. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineBlanchePendantsFinie.jpeg"
            alt="Cuisine blanche laquée livrée avec plan de travail bois, suspensions et sol en marbre et parquet"
            caption="Livraison : cuisine et pièce de vie finies, prêtes à l'usage. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqSection kicker="Confiance" title="Ce que disent les clients accompagnés" wide>
        <MqQuotes items={[
          { quote: "Les devis sont enfin devenus comparables. Nous avons compris ce que nous achetions, poste par poste.", author: "Propriétaires, 92 — Rénovation complète d'un appartement de 78 m²" },
          { quote: "Les photos quotidiennes ont supprimé l'angoisse du chantier à distance.", author: "Investisseur, Paris — Remise en état avant mise en location" },
          { quote: "Le dossier transmis au syndic a été accepté en assemblée générale.", author: "Copropriétaire, 78 — Mise en place d'une ventilation en immeuble ancien" },
        ]} />
        <p className="text-muted text-[0.82rem] mt-5 max-w-2xl">
          Témoignages issus de projets accompagnés, publiés avec l&apos;accord des clients. Les références détaillées sont
          communiquées lors de l&apos;étude de projet.
        </p>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes avant tout engagement">
        <MqFaq items={[
          { q: "ARCHI PILOTE RÉNOVATION est-il un cabinet d'architecture ?", a: "Non. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Lorsque le dossier l'exige, un architecte DPLG ou un ingénieur structure partenaire indépendant est mobilisé sous sa propre responsabilité professionnelle. Les travaux sont exécutés et facturés par les entreprises partenaires contractantes." },
          { q: "Comment obtenez-vous jusqu'à 20 % d'économies sur un budget travaux ?", a: "Par un modèle issu du secteur des foncières : achat des matériaux en direct par le client au prix fournisseur, suppression des marges en cascade, chiffrage analysé ligne à ligne par un ancien expert en chiffrage, mise en concurrence documentée et arbitrages décidés avant le démarrage plutôt qu'en cours de chantier." },
          { q: "Intervenez-vous sur les logements classés passoire énergétique ?", a: "Oui. C'est l'une de nos spécialités : lecture du diagnostic de performance énergétique, hiérarchisation des postes de déperdition, isolation, remplacement des menuiseries, ventilation mécanique contrôlée et cohérence entre étanchéité à l'air et renouvellement d'air." },
          { q: "Que faites-vous lorsqu'un immeuble n'a pas de ventilation mécanique contrôlée ?", a: "Nous documentons la situation, constituons le dossier technique et engageons les démarches auprès du syndic de copropriété : demande d'inscription à l'ordre du jour de l'assemblée générale, pièces justificatives, solutions individuelles ou collectives et, lorsque nécessaire, carottage de traversée après validation." },
          { q: "Sur quel territoire intervenez-vous ?", a: "Paris, les Hauts-de-Seine et l'ensemble de l'Île-de-France, depuis le siège de La Garenne-Colombes, selon la nature et la taille des projets." },
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
        { href: "/notre-methode", label: "Notre méthode", sub: "Les huit étapes et leurs livrables" },
        { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Achats en direct et transparence" },
        { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un chiffrage" },
      ]} />
    </main>
  );
}
