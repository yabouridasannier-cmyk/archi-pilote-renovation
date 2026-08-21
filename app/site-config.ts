/* ============================================================
   Interrupteur de visibilité de la maquette.

   SITE_OFFLINE = true  -> tout le site est remplacé par l'écran
                           « site non disponible » (le code reste intact).
   SITE_OFFLINE = false -> le site redevient visible normalement.

   Pour basculer : changer la valeur ci-dessous puis
   `npx next build && vercel deploy --prod --yes`
   ============================================================ */

export const SITE_OFFLINE = false;
