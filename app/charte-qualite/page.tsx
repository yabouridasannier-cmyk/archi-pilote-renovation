import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Charte qualité rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Huit engagements vérifiables appliqués sur chaque projet piloté : devis lu ligne à ligne, assurances contrôlées, interfaces formalisées, points de réception documentés.",
  alternates: { canonical: "/charte-qualite" },
};

const M = "/photos/maquette";

export default function Page() {
  return (
    <main>
      <MqHero kicker="Charte qualité" title="Des engagements vérifiables, pas des promesses" lead="Une charte qualité n'a de valeur que si chaque engagement peut être vérifié : un document contrôlé, un point de réception réalisé, une réserve levée et constatée. Cette page détaille les huit engagements appliqués sur chaque projet piloté, les documents exigés des entreprises partenaires contractantes avant tout démarrage, et les points de réception qui protègent le client à chaque étape sensible du chantier." />

      <MqSection kicker="Pourquoi une charte" title="Une charte sert à distinguer l'engagement du slogan" wide>
        <MqProse>
          <p>Beaucoup d&apos;acteurs du bâtiment promettent le sérieux et la qualité. Notre charte se veut vérifiable : chaque engagement correspond à un document, une action datée ou un contrôle réalisable par le client lui-même.</p>
          <h3 className="display text-[1.15rem] text-ivoire mt-2">Un contrôle en amont, pas seulement en fin de chantier</h3>
          <p className="font-medium text-ivoire/90">La qualité se joue majoritairement avant le premier coup de perceuse.</p>
          <p>
            Vérifier les assurances d&apos;une entreprise, formaliser les interfaces entre lots et détailler un chiffrage
            évitent une grande partie des désordres qui apparaissent habituellement en fin de chantier, lorsqu&apos;il est
            trop tard pour les corriger simplement.
          </p>
        </MqProse>
        <div className="mt-6"><MqFig src={`${M}/hero-renovation.jpg`} alt="Contrôle de réception d'un chantier de rénovation avec liste de réserves et attestations d'assurance des entreprises" caption="Chaque point de réception s'appuie sur un document écrit, jamais sur une simple parole donnée." /></div>
      </MqSection>

      <MqSection kicker="Nos huit engagements" title="Ce que nous appliquons sur chaque projet piloté" wide>
        <MqNumbered items={[
          { title: "Devis lu ligne à ligne avant validation", text: "Aucun chiffrage n'est transmis au client sans vérification des quantités, hypothèses et exclusions." },
          { title: "Documents d'assurance vérifiés avant démarrage", text: "Attestation décennale et responsabilité civile professionnelle contrôlées pour chaque entreprise partenaire mobilisée." },
          { title: "Interfaces entre lots formalisées par écrit", text: "Un tableau des interfaces techniques est établi avant le premier coup de marteau." },
          { title: "Suivi quotidien par photos datées", text: "Transmission des photos de chantier sur WhatsApp, jour après jour, sans interruption non justifiée." },
          { title: "Points de réception documentés", text: "Chaque réception de lot fait l'objet d'un contrôle contradictoire et d'une liste de réserves écrite." },
          { title: "Dossier de fin de chantier complet", text: "Attestations, garanties, notices et factures réunis dans un dossier unique remis au client." },
          { title: "Séparation des missions et de la facturation", text: "Pilotage, accompagnement et travaux exécutés restent facturés séparément, sans confusion des rôles." },
          { title: "Réponse écrite à toute réserve signalée", text: "Chaque réserve fait l'objet d'un suivi jusqu'à sa levée effective, constatée par écrit." },
        ]} />
      </MqSection>

      <MqSection kicker="Documents exigés" title="Ce que nous demandons systématiquement aux entreprises partenaires" lead="Avant toute mobilisation sur un chantier piloté, chaque entreprise partenaire contractante doit transmettre un ensemble de documents permettant de vérifier son existence légale, ses assurances et ses références.">
        <MqChecklist cols={1} items={[
          "Attestation d'assurance décennale en cours de validité.",
          "Attestation de responsabilité civile professionnelle.",
          "Extrait Kbis ou équivalent pour vérifier l'existence légale de l'entreprise.",
          "Références de chantiers comparables réalisés récemment.",
          "Devis détaillé conforme au format exigé par notre méthode de chiffrage.",
          "Qualifications professionnelles pertinentes selon le lot concerné.",
        ]} />
      </MqSection>

      <MqSection kicker="Points de réception" title="Les contrôles réalisés à chaque étape sensible" wide>
        <MqFig src={`${M}/schema-etancheite-salle-eau.jpg`} alt="Coupe d'une salle d'eau montrant la natte d'étanchéité sous carrelage, la bande d'angle, la pente et le siphon" caption="Étanchéité sous carrelage : continuité de la natte entre murs et sol, bandes de renfort en angle et pente d'évacuation de 1 à 2 %." />
        <div className="mt-8"><MqNumbered cols={2} items={[
          { title: "Réception des lots de structure et de gros œuvre", text: "Contrôle de la conformité aux plans, des appuis, des niveaux et de l'absence de désordre visible avant fermeture des ouvrages." },
          { title: "Réception des réseaux avant fermeture", text: "Vérification électrique, plomberie et ventilation avant la pose des cloisons ou des revêtements qui les recouvriraient." },
          { title: "Réception intermédiaire des lots techniques", text: "Isolation, étanchéité à l'air et menuiseries contrôlées avant les finitions, car une non-conformité y est plus coûteuse à corriger ensuite." },
          { title: "Réception finale et levée des réserves", text: "Procès-verbal contradictoire, liste des réserves datée et suivi jusqu'à leur levée effective, documentée par photo." },
        ]} /></div>
      </MqSection>

      <MqSection kicker="Ce que cela change" title="Une charte vérifiable réduit le nombre de litiges, elle ne les supprime pas" wide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div><h3 className="display text-[1.05rem] text-ivoire">Ce que la charte démontre</h3><p className="text-muted text-[0.92rem] mt-2 leading-relaxed">Un cadre de contrôle documenté à chaque étape, opposable en cas de désaccord.</p></div>
          <div><h3 className="display text-[1.05rem] text-ivoire">Ce qu&apos;elle ne garantit pas</h3><p className="text-muted text-[0.92rem] mt-2 leading-relaxed">L&apos;absence totale d&apos;aléa technique, toujours possible sur un bâtiment existant.</p></div>
          <div><h3 className="display text-[1.05rem] text-ivoire">Ce que le client y gagne</h3><p className="text-muted text-[0.92rem] mt-2 leading-relaxed">Une traçabilité complète, du choix de l&apos;entreprise partenaire à la levée de la dernière réserve.</p></div>
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes sur nos engagements qualité">
        <MqFaq items={[
          { q: "La charte qualité s'applique-t-elle à toutes les entreprises partenaires ?", a: "Oui. Aucune entreprise n'est mobilisée sur un projet piloté sans que ses documents d'assurance et ses références aient été vérifiés au préalable." },
          { q: "Que se passe-t-il si une entreprise partenaire ne respecte pas un engagement de la charte ?", a: "L'écart est documenté et discuté avec l'entreprise concernée. Selon la gravité, cela peut conduire à une mise en demeure ou à un remplacement pour la suite du chantier, toujours sous la responsabilité contractuelle de l'entreprise concernée." },
          { q: "Puis-je consulter les attestations d'assurance des entreprises avant le démarrage ?", a: "Oui, ces documents font partie du dossier transmis avant le démarrage des travaux, dans le cadre de la transparence exigée par notre charte." },
          { q: "Comment sont gérées les réserves constatées à la réception ?", a: "Chaque réserve est consignée par écrit avec une date et une photo. Elle est suivie jusqu'à sa levée effective, elle-même documentée avant la clôture du dossier de fin de chantier." },
          { q: "La charte qualité garantit-elle l'absence de tout désordre de chantier ?", a: "Non. Elle garantit un cadre de contrôle et de traçabilité rigoureux, pas l'absence totale d'aléa. Un aléa documenté et traité reste néanmoins très différent d'un désordre découvert tardivement sans suivi." },
          { q: "Les photos datées transmises quotidiennement font-elles partie du dossier final ?", a: "Oui, elles sont archivées et peuvent être intégrées au dossier de fin de chantier pour constituer un historique visuel complet du déroulement des travaux." },
        ]} />
        <p className="text-[0.82rem] text-muted mt-6 max-w-3xl border-t border-line pt-4">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta title="Demandez le détail de la charte qualité appliquée à votre projet" lead="Nous transmettons les documents des entreprises partenaires envisagées avant tout engagement." />

      <MqReadNext items={[
        { href: "/notre-methode", label: "Notre méthode", sub: "Les huit étapes du pilotage" },
        { href: "/reseau-partenaires", label: "Réseau de partenaires", sub: "Comment les entreprises sont sélectionnées" },
        { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un chiffrage reçu" },
      ]} />
    </main>
  );
}
