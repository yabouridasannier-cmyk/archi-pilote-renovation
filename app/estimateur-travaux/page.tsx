import type { Metadata } from "next";
import { MqHero, MqSection, MqChecklist, MqFig, MqFaq, MqCta, MqReadNext } from "../components/mq";
import { Estimateur } from "./estimateur";

export const metadata: Metadata = {
  title: "Estimateur de travaux de rénovation : budget indicatif en une minute | ARCHI PILOTE RÉNOVATION",
  description:
    "Fourchette de budget travaux à partir de la surface, du niveau de rénovation, du type de bien et des postes techniques structurants — valeurs constatées en Île-de-France.",
  alternates: { canonical: "/estimateur-travaux" },
};

export default function EstimateurPage() {
  return (
    <main>
      <MqHero
        kicker="Outil — budget indicatif"
        title="Estimateur de travaux : obtenir une fourchette de budget réaliste avant tout devis"
        lead="Cet estimateur calcule une fourchette de budget travaux à partir de la surface, du niveau de rénovation visé, du type de bien et des postes techniques les plus structurants. Les valeurs utilisées proviennent des fourchettes constatées en Île-de-France. Le résultat est un ordre de grandeur destiné à cadrer un projet, jamais un engagement de prix : celui-ci relève du chiffrage détaillé et des entreprises qui exécutent les travaux."
      />

      <MqSection kicker="Simulation" title="Renseigner le projet" lead="Quatre paramètres suffisent pour obtenir un ordre de grandeur exploitable." wide>
        <Estimateur />
      </MqSection>

      <MqSection kicker="Lecture des résultats" title="Ce que cette fourchette contient et ce qu'elle ne contient pas" wide>
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 items-start">
          <MqChecklist cols={1} items={[
            "Travaux, main-d'œuvre, dépose et évacuation des gravats sont inclus dans les fourchettes de base.",
            "Le mobilier, l'électroménager et la décoration ne sont pas comptés.",
            "Les honoraires d'un architecte DPLG ou d'un ingénieur structure partenaire sont hors périmètre.",
            "Les aléas structurels découverts après dépose peuvent déplacer le budget vers le haut de la fourchette.",
            "L'achat direct des matériaux par le client s'applique ensuite, avec un objectif pouvant atteindre 20 % d'économies.",
          ]} />
          <MqFig
            src="/photos/maquette/schema-repartition-budget.jpg"
            alt="Répartition indicative d'un budget de rénovation complète par poste de travaux en pourcentage"
            caption="Répartition indicative d'un budget de rénovation complète par poste : ordres de grandeur, à confirmer par un chiffrage détaillé."
          />
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ce que les propriétaires demandent sur cette estimation">
        <MqFaq items={[
          { q: "Cet estimateur remplace-t-il un devis ?", a: "Non. Il fournit une fourchette indicative construite sur les prix constatés en Île-de-France. Seule une visite du bien et un chiffrage poste par poste engagent des montants réels, établis par les entreprises partenaires qui exécutent et facturent les travaux." },
          { q: "Sur quelles données reposent les fourchettes affichées ?", a: "Sur les fourchettes agrégées de l'observatoire des prix, alimentées par les projets accompagnés à Paris, dans les Hauts-de-Seine et en Île-de-France, hors mobilier et hors honoraires éventuels d'architecte ou d'ingénieur partenaire." },
          { q: "Pourquoi l'estimation est-elle affichée sous forme de fourchette ?", a: "Parce que l'état des réseaux, la qualité des supports et le niveau de finition font varier le coût réel d'un même projet dans un rapport de un à deux. Afficher un montant unique donnerait une fausse précision." },
          { q: "L'économie annoncée est-elle incluse dans le calcul ?", a: "Non. La fourchette correspond à un budget travaux de marché. L'optimisation par achat direct des matériaux, qui vise jusqu'à 20 % d'économies, s'applique ensuite lors du chiffrage détaillé." },
        ]} />
        <p className="text-[0.82rem] text-muted mt-6 max-w-3xl border-t border-line pt-4">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta title="Passer de l'ordre de grandeur au budget réel" lead="Étude de projet gratuite sous 48 heures : lecture du bien, hiérarchisation des travaux et budget chiffré poste par poste." />

      <MqReadNext items={[
        { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes par poste" },
        { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un devis reçu" },
        { href: "/blog", label: "Magazine de la rénovation", sub: "Analyses techniques détaillées" },
      ]} />
    </main>
  );
}
