import { SITE } from "../data";

/* Invitation à déposer un avis Trustpilot.

   Deux règles tenues ici, et elles comptent plus que l'apparence du bouton.

   1. L'URL n'est écrite qu'à un seul endroit, dans SITE. Le lien précédent avait été
      DÉDUIT du nom de la marque (…/archipiloterenovation.fr) et envoyait les visiteurs
      noter une fiche inexistante. Une URL d'avis se vérifie en la chargeant.

   2. Rien n'est affirmé sur la réputation. La fiche compte zéro avis au 05/09/2026 :
      pas d'étoiles, pas de note, pas de nombre d'avis, et surtout pas de données
      structurées AggregateRating — un balisage annonçant une note inexistante est une
      fausse déclaration auprès de Google autant qu'auprès du visiteur. Le jour où de
      vrais avis existent, l'affichage d'une note devra venir du widget officiel
      Trustpilot, qui lit les données réelles, jamais d'une valeur saisie à la main.

   `rel="noopener"` est nécessaire avec target="_blank" : sans lui, la page ouverte
   garde une référence exploitable vers celle-ci. */

const LOGO = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
    <path d="M12 1.5l2.9 8.05h8.1l-6.55 4.97 2.5 8.03L12 17.6l-6.95 4.95 2.5-8.03L1 9.55h8.1z" />
  </svg>
);

export function TrustpilotBouton({ variante = "principal" }: { variante?: "principal" | "discret" }) {
  if (variante === "discret") {
    return (
      <a
        href={SITE.trustpilotAvis}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:underline"
      >
        {LOGO}
        Donner votre avis sur Trustpilot
      </a>
    );
  }
  return (
    <a
      href={SITE.trustpilotAvis}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary inline-flex items-center gap-2"
    >
      {LOGO}
      Déposer un avis sur Trustpilot
    </a>
  );
}

/* Encart complet, pour les pages où l'avis est le sujet (témoignages, contact).
   Le texte dit explicitement que la page d'avis est hébergée par Trustpilot et que
   nous n'y avons pas la main : c'est ce qui donne sa valeur à un avis indépendant,
   et cela évite de laisser croire que les avis seraient filtrés avant publication. */
export function TrustpilotEncart() {
  return (
    <div className="border border-line bg-surface rounded-[2px] p-6 md:p-8 flex flex-col gap-4">
      <h3 className="display text-[1.25rem] text-ivoire">Vous avez fait appel à nous&nbsp;?</h3>
      <p className="text-muted text-[0.95rem] leading-relaxed max-w-2xl">
        Votre retour aide les prochains propriétaires à savoir à qui ils confient leur chantier. L&apos;avis est déposé
        et publié sur Trustpilot, une plateforme indépendante : nous n&apos;avons pas la main sur son contenu, et nous
        ne pouvons ni le modifier ni le supprimer.
      </p>
      <div>
        <TrustpilotBouton />
      </div>
    </div>
  );
}
