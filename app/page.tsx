import type { Metadata } from "next";
import Link from "next/link";
import { MqKicker, MqSection, MqProse, MqFig, MqChecklist, MqDark, MqDarkSteps, MqQuotes, MqFaq, MqCta, MqReadNext } from "./components/mq";

export const metadata: Metadata = {
  title: "Rénovation complète et chantiers complexes | ARCHI PILOTE RÉNOVATION",
  description:
    "Rénovation complète, extension, surélévation, immeuble haussmannien, périmètre ABF : dossier chiffré avant devis, démarches syndic et urbanisme portées, chantier suivi. Paris et Île-de-France.",
  alternates: { canonical: "/" },
};

/*
  Accueil réécrite le 03/09/2026 d'après le dossier T5 remis par le client.

  Ce qui a été retiré, et pourquoi :
  — « 20 % d'économies » (3 occurrences) : le client avait gelé le 31/08 toute publication
    de pourcentage tant que le différentiel de TVA n'est pas chiffré par son comptable.
    L'argument reste, sans le chiffre : il est porté par le bandeau de preuve et par le
    bloc « Notre modèle ».
  — « IA RENOV SASU (RCS Nanterre 889 976 387) » du chapô : la dénomination et
    l'immatriculation restent obligatoires en mentions légales et dans les documents
    contractuels, mais n'ont rien à faire au-dessus de la ligne de flottaison.
  — la numérotation des six points du modèle économique : ce n'était pas une séquence.
    La numérotation ne subsiste que sur le déroulé en six étapes, où elle est justifiée.

  Réserve à lever avant publication définitive : les seuils de surface (20 m², 40 m²,
  150 m²), les délais d'instruction et les régimes d'autorisation cités plus bas relèvent
  du régime général et comportent des exceptions locales. Le dossier T5 demande
  explicitement de les faire confirmer par l'architecte partenaire ou le service urbanisme
  avant mise en ligne. La mention de prudence sous le tableau le dit au lecteur.

  Reste à fournir par le client : le bloc « trois chantiers réels » (surface, durée,
  contrainte, décision, photos) et un numéro de téléphone propre à la marque.
*/

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.archipiloterenovation.com/#organisation",
  name: "ARCHI PILOTE RÉNOVATION",
  url: "https://www.archipiloterenovation.com/",
  description:
    "Structuration, chiffrage et accompagnement de projets de rénovation à Paris et en Île-de-France : chantiers complexes, périmètre ABF, surélévation, extension, copropriété.",
  telephone: "+33652798089",
  email: "archipiloterenovation@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 bis rue Gabriel Péri",
    postalCode: "92250",
    addressLocality: "La Garenne-Colombes",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Paris" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
    { "@type": "AdministrativeArea", name: "Yvelines" },
    { "@type": "AdministrativeArea", name: "Val-de-Marne" },
  ],
  knowsAbout: [
    "rénovation complète",
    "chantier en périmètre ABF",
    "surélévation",
    "extension de maison",
    "ouverture de mur porteur",
    "autorisation de travaux en copropriété",
    "immeuble haussmannien",
    "achat de matériaux en direct",
  ],
};

const DEMARCHES: [string, string][] = [
  [
    "Modification de l'aspect extérieur : menuiseries, volets, garde-corps, ravalement",
    "Déclaration préalable, et avis de l'architecte des Bâtiments de France en périmètre protégé",
  ],
  [
    "Extension au-delà des seuils de surface, surélévation, changement de destination avec travaux sur la façade ou la structure",
    "Permis de construire",
  ],
  [
    "Surface de plancher totale supérieure à 150 m² après travaux, pour un particulier",
    "Recours obligatoire à un architecte inscrit à l'Ordre",
  ],
  [
    "Travaux touchant une partie commune ou l'aspect extérieur de l'immeuble",
    "Autorisation votée en assemblée générale des copropriétaires",
  ],
  [
    "Ouverture, dépose ou percement d'un élément porteur",
    "Étude d'un ingénieur structure et note de calcul, avant tout devis de finition",
  ],
  [
    "Échafaudage, benne, camion-grue, emprise sur trottoir",
    "Autorisation d'occupation du domaine public auprès de la commune",
  ],
];

const PREUVES: [string, string][] = [
  ["Avant le premier devis", "Le projet est écrit, chiffré poste par poste et arbitré avant toute consultation d'entreprise."],
  ["Démarches portées", "Syndic, urbanisme, périmètre ABF, occupation de voirie : nous montons les dossiers et suivons leur instruction."],
  ["Chantier documenté", "Photos datées transmises chaque jour, journal des décisions et de leur effet sur le budget."],
];

const lien = "font-semibold text-orange-deep hover:underline";

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      {/* ── 1 · OUVERTURE ─────────────────────────────────────────────── */}
      <header className="pt-32 md:pt-40 pb-10 md:pb-14">
        <div className="container-site grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 items-start">
          <div>
            <MqKicker>Paris · Hauts-de-Seine · Île-de-France</MqKicker>
            <h1 className="display text-[clamp(2.4rem,5.2vw,3.9rem)] text-ivoire text-balance mt-4">
              Rénovation complète et chantiers complexes à Paris et en Île-de-France
            </h1>
            <p className="mt-4 font-semibold text-ivoire text-[1.05rem]">
              Immeuble haussmannien, périmètre ABF, surélévation, extension, transformation de plateau. Le projet est
              écrit et chiffré avant d&apos;être un chantier.
            </p>
            <p className="lead mt-4 max-w-2xl">
              ARCHI PILOTE RÉNOVATION accompagne les propriétaires, les investisseurs et les professionnels de
              l&apos;immobilier sur des projets de rénovation, du simple rafraîchissement à la transformation lourde. Nous
              traitons volontiers les chantiers ordinaires, et nous sommes surtout appelés sur ceux que les entreprises
              hésitent à chiffrer : un mur porteur dans un immeuble en pierre de taille, une extension soumise à
              l&apos;avis de l&apos;architecte des Bâtiments de France, une surélévation qui doit d&apos;abord passer en
              assemblée générale. Sur ces dossiers, ce qui coûte cher n&apos;est presque jamais le geste technique.
              C&apos;est l&apos;ordre dans lequel les décisions ont été prises.
            </p>
            <p className="mt-4 max-w-2xl text-muted text-[0.95rem] leading-relaxed">
              Notre travail commence avant les devis. Nous lisons le bien, identifions les contraintes structurelles et
              administratives, hiérarchisons les travaux poste par poste, montons les dossiers d&apos;autorisation avec
              les hommes de l&apos;art quand la loi les impose, et suivons le chantier jusqu&apos;à la levée des réserves.
              Le client achète ses matériaux en direct, au prix fournisseur. Les entreprises partenaires exécutent et
              facturent leurs travaux sous leur propre responsabilité.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Décrire mon projet</Link>
              <Link href="/notre-methode" className="btn btn-ghost">Voir la méthode</Link>
            </div>
          </div>
          <MqFig
            src="/photos/chantiers/chHdgSalonBoucleAppliquesBronze.jpeg"
            alt="Salon d'un appartement ancien parisien livré : murs panneautés et corniche ornée, grande glace à cadre sculpté, persiennes closes derrière la fenêtre et parquet chêne à chevrons"
            caption="Salon livré dans un appartement ancien parisien : panneautage mouluré repris sur tout le pourtour jusque sur les portes, grande glace à cadre sculpté encastrée dans le panneautage, persiennes closes derrière la fenêtre et parquet chêne posé à chevrons. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
        </div>

        {/* ── 2 · BANDEAU DE PREUVE (remplace les trois chiffres) ──────── */}
        <div className="container-site mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 border-t border-line pt-8">
            {PREUVES.map(([titre, texte]) => (
              <div key={titre} className="flex flex-col gap-1.5">
                <h2 className="display text-[1.05rem] text-ivoire">{titre}</h2>
                <p className="text-muted text-[0.92rem] leading-relaxed">{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── 3 · LE RISQUE EST ENTRE LES LOTS ──────────────────────────── */}
      <MqSection kicker="Le risque est entre les lots" title="Un projet lisible avant de devenir un chantier">
        <MqProse>
          <p>
            Une rénovation complète ne se résume pas à additionner des corps de métier. Le risque apparaît entre les
            lots : une ouverture structurelle qui déplace un réseau, une isolation qui modifie la ventilation, une
            cuisine dessinée avant les contraintes électriques, un budget qui dérive parce que les arbitrages arrivent
            trop tard. Chaque entreprise peut avoir parfaitement raison dans son lot et rendre le suivant impossible.
          </p>
        </MqProse>
        <div className="mt-7">
          <MqChecklist items={[
            "Analyse du besoin et lecture du bien existant.",
            "Identification des contraintes techniques, structurelles et réglementaires.",
            "Hiérarchisation des travaux, poste par poste.",
            "Lecture et comparaison des chiffrages ligne à ligne.",
            "Aide à la sélection des entreprises partenaires.",
            "Suivi d'ensemble et journal des décisions.",
          ]} />
        </div>
      </MqSection>

      {/* ── 4 · CHANTIERS COMPLEXES (cœur de la différenciation) ───────── */}
      <MqSection
        kicker="Chantiers complexes"
        title="Les projets où le dossier compte autant que le chantier"
        lead="Un chantier complexe n'est pas un chantier difficile à réaliser. C'est un chantier dont la faisabilité dépend d'une autorisation, d'un vote, d'un avis ou d'une contrainte de structure. Tant que ces points ne sont pas réglés, chiffrer les finitions ne sert à rien. ARCHI PILOTE RÉNOVATION prend les dossiers par cet endroit-là."
      >
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Immeuble haussmannien et pierre de taille</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
              Murs de refend porteurs, planchers bois sur solives, hauteurs sous plafond, gaines techniques
              inexistantes, façade en pierre de taille dont la modification relève de la copropriété et souvent de
              l&apos;urbanisme. Dans ce bâti, la question n&apos;est jamais « peut-on abattre ce mur » mais «
              qu&apos;est-ce que cette ouverture déplace, qui doit l&apos;autoriser, et dans quel ordre ». Nous faisons
              intervenir un ingénieur structure partenaire indépendant avant de dessiner, pas après.
            </p>
          </div>

          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Périmètre ABF et abords de monument historique</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
              Dans un périmètre de protection, toute modification de l&apos;aspect extérieur — menuiseries, garde-corps,
              volets, ravalement, verrière, sortie de toiture — est soumise à l&apos;architecte des Bâtiments de France.
              Deux régimes coexistent : un avis simple, que l&apos;autorité peut écarter, et un avis conforme, qui
              s&apos;impose. Le délai d&apos;instruction est majoré, en pratique d&apos;un mois de plus qu&apos;un dossier
              ordinaire. Nous préparons le dossier dans le sens de ce que ces services acceptent habituellement, plutôt
              que de déposer et d&apos;espérer.
            </p>
          </div>

          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Surélévation et création de surface</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
              Une surélévation cumule presque toutes les difficultés d&apos;un coup : capacité portante de
              l&apos;existant, règles du PLU sur la hauteur et l&apos;emprise, permis de construire, accord de la
              copropriété lorsque le projet touche les parties communes, et parfois cession de droit à surélever. La
              faisabilité se tranche sur trois documents — le PLU, le règlement de copropriété et une note de structure
              — avant toute étude d&apos;aménagement.{" "}
              <Link href="/surelevation" className={lien}>Surélever : les trois documents à lire avant tout</Link>
            </p>
          </div>

          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Extension, combles, garage, véranda</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
              Le régime dépend de la surface créée et de la zone : au-delà de 20 m², le permis de construire est en
              principe requis, seuil porté à 40 m² pour une extension en zone urbaine couverte par un PLU. Au-delà de
              150 m² de surface de plancher totale après travaux, un particulier a l&apos;obligation de recourir à un
              architecte. Ces seuils décident du calendrier avant de décider du budget : nous les vérifions au PLU
              applicable dès la première visite.{" "}
              <Link href="/extension-maison" className={lien}>Extension : les seuils qui décident du calendrier</Link>
            </p>
          </div>

          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Copropriété : ce qui doit passer en assemblée générale</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
              Modifier une partie commune, percer une façade, sortir un conduit, poser un climatiseur, déposer un mur
              porteur : ces travaux nécessitent une autorisation votée en assemblée générale, à une majorité qui dépend
              de leur nature. Nous préparons la demande, la note technique qui l&apos;accompagne et les pièces attendues
              par le syndic, et nous suivons l&apos;instruction jusqu&apos;au procès-verbal. Un dossier présenté
              correctement passe en une assemblée. Un dossier improvisé en coûte deux, soit une année.{" "}
              <Link href="/demarches-administratives-renovation" className={lien}>Faire voter des travaux en assemblée générale</Link>
            </p>
          </div>

          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Transformation d&apos;usage et plateaux</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
              Local commercial transformé en logement, plateau à diviser, immeuble à repositionner : la lecture se fait
              autant dans le règlement d&apos;urbanisme et le règlement de copropriété que dans le bâti. C&apos;est le
              terrain sur lequel nous travaillons depuis quinze ans auprès d&apos;investisseurs et de marchands de biens.
            </p>
          </div>
        </div>
      </MqSection>

      {/* ── 5 · LES DÉMARCHES ─────────────────────────────────────────── */}
      <MqSection kicker="Démarches" title="Les démarches, nous les préparons et nous les suivons" wide>
        <MqProse>
          <p>
            Un dossier administratif mal monté ne se traduit pas par un refus, la plupart du temps. Il se traduit par une
            demande de pièces complémentaires, un délai qui repart, une entreprise qui a repris un autre chantier et une
            saison perdue. Nous montons les dossiers, nous les déposons au nom du propriétaire, et nous suivons leur
            instruction jusqu&apos;à la décision.
          </p>
        </MqProse>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-[0.92rem]">
            <thead>
              <tr>
                <th className="border border-line bg-surface px-4 py-3 text-left font-semibold text-ivoire">Situation</th>
                <th className="border border-line bg-surface px-4 py-3 text-left font-semibold text-ivoire">Ce qu&apos;elle déclenche</th>
              </tr>
            </thead>
            <tbody>
              {DEMARCHES.map(([situation, effet]) => (
                <tr key={situation}>
                  <td className="border border-line px-4 py-3 align-top text-ivoire/85">{situation}</td>
                  <td className="border border-line px-4 py-3 align-top text-muted">{effet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 max-w-3xl border border-line bg-surface rounded-[2px] px-5 py-4 text-[0.85rem] leading-relaxed text-muted">
          Les seuils et les délais indiqués sont ceux du régime général. Ils se vérifient au cas par cas dans le PLU
          applicable et dans le règlement de copropriété. Lorsque la loi impose un architecte ou un bureau d&apos;études,
          le dossier est signé par ce professionnel, qui intervient sous sa propre responsabilité.
        </p>
      </MqSection>

      {/* ── 6 · LE CHARME DE L'ANCIEN ─────────────────────────────────── */}
      <MqSection kicker="Bâti ancien" title="Ce qui fait la valeur d'un appartement ancien ne se refabrique pas">
        <MqProse>
          <p>
            Une corniche déposée est perdue. Un parquet point de Hongrie poncé une fois de trop ne se rattrape pas. Une
            cheminée démontée sans relevé ne se remonte jamais tout à fait à sa place. Dans un immeuble ancien, une part
            importante de la valeur tient à des éléments qu&apos;aucun budget ne reconstitue à l&apos;identique.
          </p>
          <p>
            Avant la démolition, nous faisons un inventaire de ce qui se conserve, de ce qui se complète et de ce qui se
            remplace. Les moulures se dégagent, se raccordent ou se remoulent selon leur état. Les parquets anciens se
            jugent à l&apos;épaisseur restante avant ponçage. Les menuiseries à petits bois se restaurent souvent mieux
            qu&apos;elles ne se remplacent, et c&apos;est parfois la seule solution acceptée en périmètre protégé.
          </p>
          <p>
            Le reste — isolation, ventilation, électricité aux normes, salle de bain contemporaine, cuisine ouverte —
            s&apos;installe autour de ces éléments, et non à leur place. C&apos;est plus exigeant à organiser. C&apos;est
            ce qui distingue une rénovation d&apos;un remplacement.{" "}
            <Link href="/savoir-faire-ancien" className={lien}>Ce qui se conserve dans un appartement ancien</Link>
          </p>
        </MqProse>
      </MqSection>

      {/* ── 7 · NOTRE MODÈLE (sans pourcentage, sans numérotation) ─────── */}
      <MqSection
        kicker="Modèle économique"
        title="Un modèle venu de la gestion d'actifs immobiliers"
        lead="Le prix d'une rénovation se construit en amont, par la précision du chiffrage et la maîtrise des achats. Jamais par la négociation de dernière minute, qui ne fait que déplacer la perte vers la qualité d'exécution."
      >
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="display text-[1.15rem] text-ivoire">Le client achète ses matériaux en direct</h3>
            <p className="mt-1.5 text-muted text-[0.95rem] leading-relaxed">
              Carrelage, parquet, robinetterie, appareillage électrique, cuisine : les références sont choisies avec
              nous, commandées par le client au prix fournisseur, et restent traçables. Les marges en cascade sortent du
              budget, le niveau de gamme reste maîtrisé.
            </p>
          </div>
          <div>
            <h3 className="display text-[1.15rem] text-ivoire">Chaque devis est relu ligne à ligne</h3>
            <p className="mt-1.5 text-muted text-[0.95rem] leading-relaxed">
              Quantités, unités, hypothèses, exclusions, prestations manquantes, doublons entre lots. Un devis moins cher
              qui a oublié trois postes n&apos;est pas moins cher, il est incomplet.
            </p>
          </div>
          <div>
            <h3 className="display text-[1.15rem] text-ivoire">Les rôles sont écrits</h3>
            <p className="mt-1.5 text-muted text-[0.95rem] leading-relaxed">
              Les entreprises partenaires exécutent et facturent leurs travaux sous leur propre responsabilité, avec
              leurs propres assurances. Notre mission d&apos;accompagnement est distincte de la leur, et son mode de
              rémunération est indiqué par écrit avant tout engagement.
            </p>
          </div>
          <div>
            <h3 className="display text-[1.15rem] text-ivoire">Les hommes de l&apos;art interviennent quand le dossier l&apos;exige</h3>
            <p className="mt-1.5 text-muted text-[0.95rem] leading-relaxed">
              Architecte inscrit à l&apos;Ordre, ingénieur structure, bureau d&apos;études : ils interviennent en leur
              nom, sous leur propre responsabilité, et leur intervention est budgétée dès le départ plutôt que découverte
              en cours de route.{" "}
              <Link href="/modele-economique-transparence" className={lien}>Comment le budget se construit</Link>
            </p>
          </div>
        </div>
      </MqSection>

      {/* ── 8 · COMMENT ÇA SE PASSE (seule numérotation justifiée) ─────── */}
      <MqDark
        kicker="Déroulé"
        title="De la première visite à la levée des réserves"
        lead="Six étapes, dans cet ordre. Chacune produit un livrable écrit."
        cta={{ href: "/notre-methode", label: "Détail complet de la méthode" }}
      >
        <MqDarkSteps steps={[
          { title: "Premier échange", text: "Vous décrivez le bien, l'usage visé et l'ordre de budget envisagé. Nous vous disons dès cet échange si le projet relève d'une déclaration, d'un permis, d'un vote en assemblée, ou de rien de tout cela." },
          { title: "Visite technique", text: "Lecture du bâti, relevé, repérage des éléments porteurs, état des réseaux, contraintes de copropriété et d'urbanisme. Nous repartons avec les documents utiles : règlement de copropriété, derniers procès-verbaux, diagnostics, plans existants." },
          { title: "Programme et arbitrages", text: "Le projet est écrit poste par poste, avec les scénarios et ce que chacun coûte. C'est le moment où les décisions se prennent, pendant qu'elles sont encore gratuites." },
          { title: "Dossiers et autorisations", text: "Montage des demandes, association des hommes de l'art lorsque la loi l'impose, dépôt et suivi de l'instruction jusqu'à la décision." },
          { title: "Consultation et achats", text: "Consultation des entreprises partenaires sur une base identique, lecture comparée des chiffrages ligne à ligne, planification des commandes de matériaux selon les délais réels d'approvisionnement." },
          { title: "Chantier et réception", text: "Suivi sur place, photos datées transmises, journal des décisions et de leur effet sur le budget, jusqu'à la réception et la levée des réserves." },
        ]} />
      </MqDark>

      {/* ── 9 · CE QUE NOUS NE FAISONS PAS ────────────────────────────── */}
      <MqSection kicker="Périmètre" title="Ce que nous ne faisons pas">
        <MqProse>
          <p>Nous n&apos;exécutons pas les travaux nous-mêmes. Les entreprises partenaires les réalisent, les facturent et les garantissent sous leurs propres assurances.</p>
          <p>Nous ne prenons pas de marge sur les matériaux que vous achetez.</p>
          <p>Nous ne promettons pas un budget ou un délai avant d&apos;avoir lu le bien, les autorisations nécessaires et les chiffrages.</p>
          <p>Nous ne déposons pas un dossier d&apos;urbanisme dont nous savons qu&apos;il sera refusé pour gagner du temps sur le calendrier commercial.</p>
          <p>Nous ne prenons pas un chantier dont la faisabilité dépend d&apos;une autorisation que nous jugeons improbable, sans vous l&apos;avoir dit par écrit.</p>
        </MqProse>
      </MqSection>

      {/* ── 10 · NOS DOMAINES (version courte, renvoie aux pages) ──────── */}
      <MqSection kicker="Nos domaines" title="Gros œuvre, second œuvre et lots techniques">
        <div className="flex flex-col gap-7">
          <div>
            <h3 className="display text-[1.2rem] text-ivoire">Gros œuvre et structure</h3>
            <p className="mt-1.5 text-muted text-[0.95rem] leading-relaxed">
              Un mur porteur, un plancher, une extension ou une surélévation ne se traitent pas comme un lot de
              finition. Ouverture de mur porteur, création de trémie, reprise en sous-œuvre, poutre métallique, appuis
              et descente de charges : chaque décision engage la stabilité de l&apos;ouvrage.{" "}
              <Link href="/gros-oeuvre-structure" className={lien}>Gros œuvre et structure</Link>
            </p>
          </div>
          <div>
            <h3 className="display text-[1.2rem] text-ivoire">Second œuvre technique</h3>
            <p className="mt-1.5 text-muted text-[0.95rem] leading-relaxed">
              Électricité, plomberie, cloisons, isolation, ventilation, chauffage et revêtements doivent être organisés
              autour des mêmes plans. L&apos;objectif n&apos;est pas de multiplier les intervenants, mais de réduire les
              contradictions entre leurs travaux.{" "}
              <Link href="/second-oeuvre" className={lien}>Second œuvre technique</Link>
            </p>
          </div>
          <div>
            <h3 className="display text-[1.2rem] text-ivoire">Performance énergétique</h3>
            <p className="mt-1.5 text-muted text-[0.95rem] leading-relaxed">
              Logements classés F ou G : lecture complète de l&apos;enveloppe et du renouvellement d&apos;air, isolation,
              menuiseries, ventilation mécanique contrôlée, carottage de traversée, démarches auprès du syndic lorsque
              l&apos;immeuble ne dispose pas d&apos;une installation conforme. L&apos;ordre des travaux se déduit des
              postes de déperdition, pas des offres commerciales du moment.{" "}
              <Link href="/renovation-energetique" className={lien}>Rénovation énergétique</Link>
            </p>
          </div>
        </div>
      </MqSection>

      {/*
        BLOC 11 — « Trois dossiers, trois contraintes » : volontairement absent.
        Le dossier T5 en fournit le gabarit mais précise que ce bloc n'a de valeur que
        rempli avec des chantiers vrais, datés, chiffrés et photographiés par le client.
        Rien de tout cela n'a été fourni. Inventer une surface, une durée ou une contrainte
        aurait produit exactement la fausse preuve que le reste du dossier dénonce.
        À insérer ici dès que les trois dossiers réels seront transmis.
      */}

      {/* ── 12 · ZONES ────────────────────────────────────────────────── */}
      <MqSection kicker="Territoire" title="Où nous intervenons">
        <MqProse>
          <p>
            Nous sommes établis à La Garenne-Colombes, dans les Hauts-de-Seine, et intervenons dans Paris et en proche
            couronne : Paris intra-muros, Neuilly-sur-Seine, Levallois-Perret, Courbevoie, Asnières-sur-Seine,
            Boulogne-Billancourt, Issy-les-Moulineaux, Nanterre, Rueil-Malmaison, Saint-Cloud, ainsi que dans les
            Yvelines et le Val-de-Marne.
          </p>
          <p>
            Le bâti n&apos;est pas le même d&apos;un secteur à l&apos;autre, et les règles non plus : un immeuble
            haussmannien du 16e arrondissement, un pavillon meulière des Hauts-de-Seine et un immeuble des années 1970
            ne posent ni les mêmes questions de structure, ni les mêmes contraintes d&apos;urbanisme. C&apos;est une des
            raisons pour lesquelles nous restons sur un territoire que nous connaissons.{" "}
            <Link href="/renovation-ile-de-france" className={lien}>Notre zone d&apos;intervention en Île-de-France</Link>
          </p>
        </MqProse>
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

      {/* ── 13 · QUESTIONS FRÉQUENTES ─────────────────────────────────── */}
      <MqSection kicker="Questions fréquentes" title="Questions fréquentes">
        <MqFaq items={[
          { q: "Est-ce que vous êtes une entreprise de travaux ?", a: "Non. ARCHI PILOTE RÉNOVATION structure, chiffre et accompagne le projet. Les travaux sont exécutés et facturés par les entreprises partenaires, sous leur propre responsabilité et leurs propres assurances." },
          { q: "Mon immeuble est en périmètre ABF. Qu'est-ce que ça change concrètement ?", a: "Toute modification visible depuis l'espace public passe par l'avis de l'architecte des Bâtiments de France. Selon la protection, cet avis est simple ou conforme, et dans le second cas il s'impose. Le délai d'instruction est majoré, comptez en pratique un mois de plus. En revanche, l'intérieur du logement n'est pas concerné, sauf protection particulière du bâtiment." },
          { q: "Puis-je abattre un mur porteur dans un immeuble en copropriété ?", a: "C'est souvent possible, jamais automatique. Il faut une étude d'un ingénieur structure avec note de calcul, puis une autorisation votée en assemblée générale, le mur porteur relevant des parties communes. L'étude se fait avant, parce que c'est elle qui détermine ce qui sera présenté au vote." },
          { q: "Combien de temps avant de pouvoir commencer les travaux ?", a: "Sans autorisation à obtenir, quelques semaines de préparation suffisent. Avec une déclaration préalable, comptez un à deux mois d'instruction. Avec un permis de construire, deux à quatre mois selon la nature du projet et la présence d'un périmètre protégé. Avec un vote en assemblée générale, le calendrier dépend de la date de l'assemblée annuelle, et c'est souvent le vrai facteur limitant." },
          { q: "Dois-je obligatoirement prendre un architecte ?", a: "Pour un particulier, le recours à un architecte est obligatoire dès que la surface de plancher totale dépasse 150 m² après travaux. En dessous, ce n'est pas une obligation, mais cela reste souvent utile sur les projets qui touchent la structure ou l'aspect extérieur." },
          { q: "Pourquoi le client achète-t-il lui-même les matériaux ?", a: "Parce que les matériaux représentent une part importante du budget et qu'ils traversent parfois plusieurs intermédiaires avant d'arriver sur le chantier. En achetant en direct, le client paie le prix fournisseur, connaît les références exactes posées chez lui et garde la maîtrise du niveau de gamme." },
          { q: "Comment êtes-vous rémunérés ?", a: "Le mode de rémunération dépend de la mission et vous est indiqué par écrit avant tout engagement. Certaines missions d'accompagnement sont facturées au client, d'autres relèvent d'un apport d'affaires auprès des entreprises partenaires. Dans tous les cas, c'est écrit avant de commencer." },
          { q: "Travaillez-vous sur des petits projets ?", a: "Oui. Une salle de bain, une cuisine, un rafraîchissement complet entrent dans notre champ. Nous vous le disons simplement si le projet ne justifie pas un accompagnement structuré : dans ce cas, une mise en relation directe vous coûtera moins cher." },
          { q: "Intervenez-vous pour des professionnels de l'immobilier ?", a: "Oui. Marchands de biens, investisseurs, foncières, agences et gestionnaires : chiffrage avant compromis, arbitrage de scénarios de travaux, cadencement de plusieurs lots, travaux en site occupé." },
          { q: "Que se passe-t-il si un devis est plus élevé que prévu ?", a: "Nous le reprenons ligne à ligne avec l'entreprise, en cherchant d'abord ce qui explique l'écart : une quantité, une hypothèse, une prestation absente ailleurs. La négociation ne vient qu'après, quand on compare des choses comparables." },
        ]} />
      </MqSection>

      {/* ── 14 · PRENDRE CONTACT ──────────────────────────────────────── */}
      <MqCta
        title="Décrivez votre projet"
        lead="Dites-nous ce que vous avez, ce que vous voulez en faire et sous quel délai. Nous vous répondons avec une première lecture du projet : ce qui relève d'une autorisation, ce qui touche la structure, et ce qui doit être tranché en premier."
      />

      <MqReadNext items={[
        { href: "/notre-methode", label: "Notre méthode", sub: "Les étapes et leurs livrables" },
        { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un chiffrage ligne à ligne" },
        { href: "/realisations", label: "Réalisations", sub: "Chantiers documentés des équipes partenaires" },
      ]} />
    </main>
  );
}
