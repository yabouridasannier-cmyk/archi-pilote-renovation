import { SITE } from "../data";

/* BADGE TRUSTPILOT.

   Deux règles tiennent tout ce fichier, et elles pèsent plus que l'apparence.

   1. L'URL n'est écrite qu'à un seul endroit, dans SITE, et elle a été VÉRIFIÉE en la
      chargeant (réponse 200, titre « Evaluer Archipiloterenovation », identifyingName
      correspondant). Le lien précédent avait été DÉDUIT du nom de la marque et envoyait
      les visiteurs noter une fiche inexistante.

   2. AUCUNE NOTE N'EST AFFICHÉE, ET C'EST DÉLIBÉRÉ. La fiche compte zéro avis au
      05/09/2026. En particulier, ce badge ne montre PAS la rangée de cinq étoiles vertes
      du badge Trustpilot classique : sur une page commerciale, cinq étoiles pleines se
      lisent comme une note de 5/5, ce qui serait faux aujourd'hui. On affiche la marque
      Trustpilot et une invitation, pas une réputation.

   POUR AFFICHER LA VRAIE NOTE LE JOUR OÙ DES AVIS EXISTENT :
   ne pas saisir un chiffre à la main — il serait figé et deviendrait faux. Employer le
   composant officiel, qui lit les données réelles de la fiche :

       <div className="trustpilot-widget"
            data-locale="fr-FR"
            data-template-id="<id du modèle choisi dans Trustpilot → Widgets>"
            data-businessunit-id="6a9bdfd6294e62e75676d053"
            data-style-height="52px" data-style-width="100%">
         <a href={SITE.trustpilotAvis} target="_blank" rel="noopener noreferrer">Trustpilot</a>
       </div>
       <script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async />

   L'identifiant 6a9bdfd6294e62e75676d053 est celui de la fiche du client, relevé sur la
   page publique de dépôt d'avis. Le data-template-id, lui, dépend du modèle de widget
   retenu et se copie depuis le tableau de bord Trustpilot (Integrations → Widgets) : il
   n'est pas devinable, ne pas l'inventer. */

const VERT_TRUSTPILOT = "#00B67A";

/* Marque Trustpilot : l'étoile blanche sur pastille verte, puis le mot-symbole.
   `aria-hidden` sur le dessin, le texte du lien porte déjà l'information. */
function MarqueTrustpilot({ taille = 20 }: { taille?: number }) {
  return (
    <span className="inline-flex items-center gap-2 shrink-0">
      <span
        aria-hidden
        className="inline-flex items-center justify-center rounded-[3px]"
        style={{ background: VERT_TRUSTPILOT, width: taille, height: taille }}
      >
        <svg width={taille * 0.72} height={taille * 0.72} viewBox="0 0 24 24" fill="#fff" focusable="false">
          <path d="M12 1.9l2.94 7.35 7.9.5-6.06 5.09 1.94 7.68L12 18.3l-6.72 4.22 1.94-7.68L1.16 9.75l7.9-.5z" />
        </svg>
      </span>
      <span className="font-semibold tracking-tight" style={{ color: "inherit" }}>Trustpilot</span>
    </span>
  );
}

/* Variante « discret » : une ligne dans le pied de page. Elle hérite de la couleur du
   pied de page pour ne pas trouer la maquette, seule la pastille reste verte. */
export function TrustpilotBouton({ variante = "principal" }: { variante?: "principal" | "discret" }) {
  if (variante === "discret") {
    return (
      <a
        href={SITE.trustpilotAvis}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <MarqueTrustpilot taille={16} />
        <span className="hidden sm:inline">— donner votre avis</span>
        <span className="sm:hidden">— votre avis</span>
      </a>
    );
  }
  return (
    <a
      href={SITE.trustpilotAvis}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary inline-flex items-center gap-2.5"
    >
      <span
        aria-hidden
        className="inline-flex items-center justify-center rounded-[3px]"
        style={{ background: VERT_TRUSTPILOT, width: 18, height: 18 }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" focusable="false">
          <path d="M12 1.9l2.94 7.35 7.9.5-6.06 5.09 1.94 7.68L12 18.3l-6.72 4.22 1.94-7.68L1.16 9.75l7.9-.5z" />
        </svg>
      </span>
      Déposer un avis sur Trustpilot
    </a>
  );
}

/* Encart complet, pour les pages où la preuve est le sujet.
   Le texte dit explicitement que la plateforme est indépendante et que nous n'avons pas
   la main sur le contenu : c'est ce qui donne sa valeur à un avis, et cela évite de
   laisser croire que les retours seraient filtrés avant publication. */
export function TrustpilotEncart() {
  return (
    <div className="border border-line bg-surface rounded-[2px] overflow-hidden">
      <div aria-hidden style={{ background: VERT_TRUSTPILOT, height: 3 }} />
      <div className="p-6 md:p-8 flex flex-col gap-5">
        <div className="flex items-center gap-3 text-ivoire">
          <MarqueTrustpilot taille={26} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="display text-[1.35rem] text-ivoire">Vous avez fait appel à nous&nbsp;?</h3>
          <p className="text-muted text-[0.95rem] leading-relaxed max-w-2xl">
            Votre retour aide les prochains propriétaires à savoir à qui ils confient leur chantier. L&apos;avis est
            déposé et publié sur Trustpilot, une plateforme indépendante&nbsp;: nous n&apos;avons pas la main sur son
            contenu, et nous ne pouvons ni le modifier ni le supprimer.
          </p>
        </div>
        <div>
          <TrustpilotBouton />
        </div>
        {/* Dit franchement où en est la fiche. Un badge sans note fait naître la question ;
            mieux vaut y répondre que laisser le visiteur supposer qu'on cache une note. */}
        <p className="text-muted text-[0.8rem] leading-relaxed border-t border-line pt-4">
          Notre fiche vient d&apos;être ouverte et ne comporte pas encore d&apos;avis. Aucune note n&apos;est donc
          affichée&nbsp;: nous préférons une page vide à une réputation empruntée.
        </p>
      </div>
    </div>
  );
}
