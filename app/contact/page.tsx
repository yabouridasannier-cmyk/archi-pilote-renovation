import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact & devis — Global Rénovation",
  description:
    "Racontez-nous votre projet de rénovation d'appartement : visite technique et devis détaillé gratuits, réponse sous 48 h.",
};

export default function ContactPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Contact"
        segments={[
          { text: "Parlons de votre projet," },
          { text: "concrètement.", serif: true, gradient: true },
        ]}
        lead="Trois questions suffisent pour lancer votre projet. On vous rappelle, on vient voir sur place, et vous recevez un devis précis sous 48 h — gratuit, sans engagement."
      />
      <ContactContent />
    </main>
  );
}
