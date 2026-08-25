import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact — ARCHI PILOTE RÉNOVATION",
  description:
    "Racontez-nous votre projet de rénovation de maison : visite technique gratuite, devis des entreprises sous 48 h.",
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
        lead="Trois questions suffisent pour lancer votre projet. On vous rappelle, on vient voir sur place, et vous recevez les devis des entreprises partenaires sous 48 h — visite gratuite, sans engagement."
      />
      <ContactContent />
    </main>
  );
}
