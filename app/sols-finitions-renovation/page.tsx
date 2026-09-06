import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/sols-finitions-renovation" },
  title: "Sols et finitions | ARCHI PILOTE RÉNOVATION",
  description: "Parquet, carrelage, béton ciré ou peinture ne compensent pas un support instable, humide ou mal préparé.",
};

/*
  02/09/2026 — Photos réelles « Parquet et boiseries » envoyées par le client
  (chParquetChevronsCacheRadiateur.jpeg, chParquetChevronsCouloirDeuxTeintes.jpeg) :
  NON placées ici, et ce n'est pas un oubli.

  1) Cette page ne rend qu'UNE image, le visuel d'en-tête de <SpecialtyPage>, déjà occupé par
     chParquetVitrifie — photo réelle, exacte (parquet ancien poncé et vitrifié, cheminée
     conservée) et pleinement dans le sujet « sols et finitions ». Rien à corriger.
  2) La prop `photo` est typée `keyof typeof PHOTOS` : y placer un nouveau fichier suppose de
     l'enregistrer dans app/lib-photos.ts, et afficher une seconde image suppose de modifier
     app/components/specialty-page.tsx — deux fichiers partagés avec quatre autres pages
     (électricité-plomberie, cuisine, salle de bain, toiture-charpente), donc hors périmètre.
  3) Les deux photos ont donc été placées sur /savoir-faire-ancien, sous l'ouvrage
     « Parquets et boiseries », qui reprend mot pour mot la consigne du client.

  06/09/2026 — Même conclusion pour les photos inédites de l'export WhatsApp (ossatures de
  cloisons, doublage devant mur d'origine, isolation de rampant, fenêtre de toit) : aucune ne
  traite de sols ni de finitions, et le seul emplacement de cette page reste l'en-tête, déjà
  occupé par une photo réelle et exacte. Les quatre fichiers sont posés sur /second-oeuvre et
  /renovation-energetique, où le texte parle de l'ouvrage qu'ils montrent. Rien n'est détourné
  ici pour remplir une case.

  À noter pour qui reprendra ces fichiers partagés : <SpecialtyPage> suffixe systématiquement la
  légende par « — Illustration, non contractuelle », y compris quand la photo vient de
  /photos/chantiers/ et est donc bien réelle. Le rendu actuel de cette page est
  « … — chantier réel des équipes partenaires — Illustration, non contractuelle ».
*/
export default function Page() {
  return (
    <SpecialtyPage
      slug="/sols-finitions-renovation"
      eyebrow="Second œuvre"
      segments={[{ text: "Sols et finitions :" }, { text: "la qualité dépend d'abord des supports.", serif: true, gradient: true }]}
      lead="Parquet, carrelage, béton ciré ou peinture ne compensent pas un support instable, humide ou mal préparé."
      photo="chParquetVitrifie"
      photoAlt="Parquet ancien poncé et vitrifié, cheminée conservée — chantier réel des équipes partenaires"
      sections={[
        { titre: "Planéité et humidité", texte: "Mesurer avant de choisir la finition — un support mal préparé se rappelle toujours au bout de quelques mois." },
        { titre: "Compatibilité des systèmes", texte: "Primaire, colle, ragréage, support et finition doivent fonctionner ensemble, pas être choisis indépendamment les uns des autres." },
        { titre: "Protection en fin de chantier", texte: "Les finitions posées trop tôt sont souvent abîmées par les derniers lots — le séquencement protège aussi le travail déjà fait." },
      ]}
      maillage={{
        intro:
          "Le revêtement de sol arrive en fin de séquence, mais il dépend de décisions prises bien plus tôt : support, chape, réseaux encastrés et menuiseries.",
        groupes: [
          {
            titre: "Ce qui conditionne la pose",
            liens: [
              { href: "/second-oeuvre", label: "Enchaînement des lots de second œuvre" },
              { href: "/expertise-carrelage-zellige-travertin", label: "Carrelage, zellige et travertin" },
              { href: "/detail-invisible", label: "Les ouvrages qui disparaissent sous la finition" },
            ],
          },
          {
            titre: "Choisir et budgéter",
            liens: [
              { href: "/achat-direct-materiaux", label: "Acheter son revêtement en direct" },
              { href: "/observatoire-prix-renovation", label: "Repères de prix par poste" },
              { href: "/menuiserie-agencement-sur-mesure", label: "Raccords avec la menuiserie sur mesure" },
            ],
          },
          {
            titre: "Zone d'intervention",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine" },
              { href: "/renovation-ile-de-france", label: "Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
