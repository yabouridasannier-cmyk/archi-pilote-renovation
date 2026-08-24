import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  title: "Sols et finitions | ARCHI PILOTE",
  description: "Parquet, carrelage, béton ciré ou peinture ne compensent pas un support instable, humide ou mal préparé.",
};

export default function Page() {
  return (
    <SpecialtyPage
      slug="/sols-finitions-renovation"
      eyebrow="Second œuvre"
      segments={[{ text: "Sols et finitions :" }, { text: "la qualité dépend d'abord des supports.", serif: true, gradient: true }]}
      lead="Parquet, carrelage, béton ciré ou peinture ne compensent pas un support instable, humide ou mal préparé."
      photo="parquetGros"
      photoAlt="Détail de pose de parquet"
      sections={[
        { titre: "Planéité et humidité", texte: "Mesurer avant de choisir la finition — un support mal préparé se rappelle toujours au bout de quelques mois." },
        { titre: "Compatibilité des systèmes", texte: "Primaire, colle, ragréage, support et finition doivent fonctionner ensemble, pas être choisis indépendamment les uns des autres." },
        { titre: "Protection en fin de chantier", texte: "Les finitions posées trop tôt sont souvent abîmées par les derniers lots — le séquencement protège aussi le travail déjà fait." },
      ]}
    />
  );
}
