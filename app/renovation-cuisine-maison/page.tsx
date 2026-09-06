import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { MaillageInterne } from "../components/local-page";
import { CtaFinal } from "../components/cta-final";
import { MqSection, MqFig } from "../components/mq";

/* 06/09 : cette page n'utilise plus le gabarit `SpecialtyPage`.
   Motif : le gabarit n'expose aucun emplacement pour des photos hors de l'unique visuel
   d'en-tête, et son prop `sections` rend son texte dans un <p> — y glisser une <figure>
   produirait du HTML invalide. Le client reprochait à cette page de n'avoir qu'une seule
   image ; neuf cuisines de chantier étaient disponibles et inutilisées.
   Tout le reste du gabarit est conservé à l'identique : en-tête, fil d'Ariane, JSON-LD
   Service + BreadcrumbList, FAQ commune (texte inchangé), maillage propre à la page, CTA.
   Si un emplacement « galerie » est un jour ajouté à `SpecialtyPage`, cette page doit y
   revenir. */

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-cuisine-maison" },
  title: "Rénovation de cuisine | ARCHI PILOTE RÉNOVATION",
  description: "La cuisine combine ergonomie, électricité, plomberie, ventilation, menuiserie et électroménager. Les cotes finales arrivent après validation des supports.",
};

const EYEBROW = "Second œuvre";
const LEAD =
  "La cuisine combine ergonomie, électricité, plomberie, ventilation, menuiserie et électroménager. Les cotes finales arrivent après validation des supports.";
const TITRE = "Cuisine : décider les réseaux avant les façades.";

const SECTIONS = [
  {
    titre: "Plan fonctionnel",
    texte: "Circulations, hauteurs, points d'eau, cuisson et éclairage — l'implantation se décide avant le style.",
  },
  {
    titre: "Standard et sur-mesure",
    texte: "Des caissons standards peuvent être habillés de façades spécifiques pour arbitrer entre budget et rendu, sans sacrifier l'un pour l'autre.",
  },
  {
    titre: "Commandes longues",
    texte: "Plan de travail, façades, électroménager et menuiseries doivent être intégrés au planning tôt — ce sont souvent les délais les plus longs du chantier.",
  },
];

const FAQ_COMMUNE = [
  { q: "ARCHI PILOTE RÉNOVATION exécute-t-il ce lot ?", r: "Non. La marque structure et suit le projet ; l'entreprise partenaire spécialisée réalise et facture le lot, sous sa propre responsabilité." },
  { q: "Une visite technique est-elle nécessaire ?", r: "Oui, pour tout chiffrage sérieux : l'existant et l'accès changent fortement les hypothèses de chantier." },
  { q: "Les prix affichés sont-ils garantis ?", r: "Non. Les fourchettes éventuellement publiées sont datées et indicatives ; le prix contractuel reste celui du devis remis par l'entreprise." },
  { q: "Intervenez-vous depuis La Garenne-Colombes ?", r: "Oui, avec une zone d'intervention plus large en Île-de-France selon la nature du projet." },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITRE,
    description: LEAD,
    areaServed: ["Hauts-de-Seine", "Yvelines", "Essonne", "Val-d'Oise", "Seine-et-Marne", "Île-de-France"],
    provider: { "@type": "ProfessionalService", name: "ARCHI PILOTE RÉNOVATION" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.archipiloterenovation.com/" },
      { "@type": "ListItem", position: 2, name: EYEBROW, item: "https://www.archipiloterenovation.com/services" },
      { "@type": "ListItem", position: 3, name: TITRE, item: "https://www.archipiloterenovation.com/renovation-cuisine-maison" },
    ],
  },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      {JSON_LD.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <PageHeader
        eyebrow={EYEBROW}
        segments={[{ text: "Cuisine :" }, { text: "décider les réseaux avant les façades.", serif: true, gradient: true }]}
        lead={LEAD}
      />

      <nav aria-label="Fil d'Ariane" className="container-site max-w-4xl mx-auto -mt-6 mb-8">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] tracking-[0.12em] uppercase text-muted">
          <li><Link href="/" className="hover:text-orange transition-colors">Accueil</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/services" className="hover:text-orange transition-colors">{EYEBROW}</Link></li>
          <li aria-hidden>›</li>
          <li className="text-ivoire/70">{TITRE}</li>
        </ol>
      </nav>

      {/* 06/09 : l'en-tête affichait chCuisineSauge, un fichier PORTRAIT (1350 × 1600) recadré
          dans un cadre 16/8 — plus de la moitié de la pièce était perdue. Remplacée par une
          photo native paysage, dans un cadre 3/2 qui la recoupe à peine. chCuisineSauge reste
          publiée dans la galerie de /realisations. */}
      <section className="relative pb-10">
        <div className="container-site max-w-4xl mx-auto">
          <MqFig
            src="/photos/chantiers/chCuisineNoirMatIlotStratifie.jpeg"
            alt="Cuisine ouverte sur séjour en fin de second œuvre : caissons bas et îlot noir mat, meubles hauts et plans de travail en décor bois, parquet à chevrons côté séjour et carrelage effet marbre noir côté cuisine"
            caption="Cuisine ouverte sur le séjour, en fin de second œuvre : caissons et îlot noir mat, meubles hauts et plans en décor bois, bandeau noir cintré en tête de meubles. La plaque et le four sont posés mais non raccordés, les robinets d'arrêt restent apparents et l'ampoule pend au bout de son fil. Chantier réel des équipes partenaires."
            ratio="aspect-[3/2]"
          />
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-7 text-ivoire/85 text-[1.02rem] leading-relaxed">
          {SECTIONS.map((s) => (
            <div key={s.titre} className="flex flex-col gap-2">
              <h2 className="display text-2xl text-ivoire normal-case">{s.titre}</h2>
              <p>{s.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <MqSection
        kicker="CUISINES LIVRÉES"
        title="Trois cuisines rendues à leurs occupants"
        lead="Trois implantations, trois budgets, la même méthode : relevé du volume, arbitrage des façades, puis pose et raccordements par les entreprises partenaires."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/chantiers/chCuisineLCheneGrisFonce.jpeg"
            alt="Petite cuisine en L à façades décor chêne gris foncé sans poignée, plan de travail et crédence blancs légèrement veinés, four encastré, retour formant bar, sol en parquet posé à chevrons"
            caption="Cuisine en L livrée et occupée : façades sans poignée en décor chêne gris foncé, colonnes toute hauteur intégrant le réfrigérateur, plan de travail et crédence blancs légèrement veinés, retour formant bar et spots noirs encastrés. Chantier réel des équipes partenaires."
            ratio="aspect-[9/16]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineLBlancLaqueDoubleFour.jpeg"
            alt="Cuisine en L blanc laqué brillant sans poignée, colonne toute hauteur intégrant deux fours superposés, plan de travail et crédence en décor bois, sol en grands carreaux polis effet marbre"
            caption="Cuisine en L livrée : façades blanc laqué brillant sans poignée, colonne toute hauteur intégrant deux fours superposés, plan de travail et crédence en décor bois, plan-repas en retour au-dessus du radiateur et sol en grands carreaux polis effet marbre blanc veiné. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineBleuVifPoigneesCoquille.jpeg"
            alt="Cuisine linéaire à façades bleu vif brillantes et poignées coquille noires, plan de travail et crédence en décor marbre noir veiné, table de cuisson gaz et four encastré"
            caption="Cuisine linéaire dans un logement ancien : façades bleu vif brillantes à poignées coquille noires, colonnes toute hauteur, plan de travail et crédence en décor marbre noir veiné, table de cuisson gaz et évier noir. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="AVANT LA RÉCEPTION"
        title="À quoi ressemble une cuisine juste avant la fin"
        lead="Ces cinq vues sont prises avant les derniers raccordements. C'est le moment où l'on vérifie ce que la page décrit plus haut : les réseaux sont arrêtés, les façades sont posées, il reste l'électricité, l'eau et les luminaires."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/chantiers/chCuisineBleuCielIlotLaque.jpeg"
            alt="Cuisine ouverte en fin de chantier : linéaire de façades bleu ciel brillantes toute hauteur, four et micro-ondes en colonne, îlot blanc coiffé d'un plan de travail en bois foncé assemblé à chevrons"
            caption="Linéaire de façades bleu ciel brillantes toute hauteur, four et micro-ondes en colonne, îlot blanc coiffé d'un plan de travail en bois foncé assemblé à chevrons. Les plans de pose sont encore scotchés sur la crédence, deux sorties de fils attendent leurs suspensions et l'aspirateur de chantier est resté au fond. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineCouloirNoirMatHotte.jpeg"
            alt="Cuisine en couloir : deux linéaires face à face, façades basses noir mat sans poignée, meubles hauts blanc et noir mat, plans de travail en bois clair, fenêtre donnant sur les toits parisiens"
            caption="Cuisine en couloir, deux linéaires face à face : façades basses noir mat sans poignée, meubles hauts blanc et noir mat, plans de travail en bois clair, évier noir à égouttoir et sol en grès cérame gris grand format. L'ampoule pend encore au plafond. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineLBlancMatLaveLinge.jpeg"
            alt="Cuisine en L blanc mat sans poignée, plan de travail et crédence gris anthracite, lave-linge glissé sous le plan à côté de l'évier inox, réfrigérateur dans une niche en plaques de plâtre"
            caption="Cuisine en L blanc mat, plan de travail et crédence gris anthracite : le lave-linge est glissé sous le plan à côté de l'évier, l'étiquette du constructeur est encore collée sur le four et deux douilles de suspension pendent sans luminaire. Le réfrigérateur occupe une niche en plaques de plâtre non habillée. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineLBleuVifColonnes.jpeg"
            alt="Cuisine en L à façades bleu vif brillantes aux chants blancs apparents, colonnes toute hauteur avec micro-ondes encastré, plan de travail noir, évier inox, sol en grès cérame anthracite"
            caption="Cuisine en L à façades bleu vif brillantes, chants blancs apparents : colonnes toute hauteur avec micro-ondes encastré, plan de travail noir, évier inox à égouttoir et four encastré. La douille pend encore au plafond et la sortie de ventilation reste apparente. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chCuisineLineaireBlancPanneauBleu.jpeg"
            alt="Cuisine linéaire blanc mat en fin de pose, colonne habillée d'un panneau bleu, étagères murales en bois clair, plan-bar en bois au premier plan, sol couvert de panneaux de protection"
            caption="Cuisine linéaire en fin de pose : caissons blanc mat sans poignée, colonne habillée d'un panneau bleu, étagères murales en bois clair, plan de travail en décor bois, évier blanc à égouttoir et réglette allumée sous les meubles hauts. Le sol est encore couvert de ses panneaux de protection. Chantier réel des équipes partenaires."
            ratio="aspect-[4/3]"
          />
        </div>
        <p className="text-muted text-[0.85rem] leading-relaxed max-w-2xl mt-8">
          Les façades, les plans de travail et l&apos;électroménager visibles sur ces photos ont été
          choisis chantier par chantier : les modalités d&apos;achat sont décrites sur la page{" "}
          <Link href="/achat-direct-materiaux" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            achat direct des matériaux
          </Link>
          , et l&apos;arbitrage entre caissons standards et sur-mesure sur la page{" "}
          <Link href="/menuiserie-agencement-sur-mesure" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            menuiserie et agencement sur mesure
          </Link>
          .
        </p>
      </MqSection>

      <section className="relative py-16 md:py-24">
        <div className="container-site max-w-3xl mx-auto flex flex-col gap-4">
          {FAQ_COMMUNE.map((f) => (
            <div key={f.q} className="card-e rounded-none p-6">
              <h3 className="display text-[1.05rem] text-ivoire normal-case mb-1.5">{f.q}</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">{f.r}</p>
            </div>
          ))}
        </div>
      </section>

      <MaillageInterne
        intro="Une cuisine se dessine avant les réseaux, pas après. Ces pages détaillent l'implantation, la fabrication sur mesure et les postes où l'achat direct change le budget."
        groupes={[
          {
            titre: "Concevoir et fabriquer",
            liens: [
              { href: "/menuiserie-agencement-sur-mesure", label: "Menuiserie et agencement sur mesure" },
              { href: "/expertise-carrelage-zellige-travertin", label: "Crédence : carrelage, zellige, pierre" },
              { href: "/sols-finitions-renovation", label: "Revêtements de sol" },
            ],
          },
          {
            titre: "Ce qui doit être arrêté avant",
            liens: [
              { href: "/electricite-plomberie-renovation", label: "Électricité et plomberie" },
              { href: "/second-oeuvre", label: "Ordre d'intervention des lots" },
              { href: "/ouverture-mur-porteur", label: "Ouvrir sur le séjour : mur porteur" },
            ],
          },
          {
            titre: "Budget et réalisations",
            liens: [
              { href: "/achat-direct-materiaux", label: "Achat direct des éléments de cuisine" },
              { href: "/realisations", label: "Cuisines livrées" },
              { href: "/renovation-ile-de-france", label: "Île-de-France" },
            ],
          },
        ]}
      />

      <CtaFinal />
    </main>
  );
}
