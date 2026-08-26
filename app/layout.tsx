import type { Metadata } from "next";
import { DM_Serif_Display, Sora, Space_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "./components/lenis-provider";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { ThemeSwitcher } from "./components/theme-switcher";
import { WhatsappButton } from "./components/whatsapp-button";
import { SITE_OFFLINE, EXPIRES_AT } from "./site-config";
import { OfflineScreen } from "./components/offline-screen";

const dmSerif = DM_Serif_Display({ variable: "--font-dm-serif", subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], display: "swap" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://archipiloterenovation.fr"),
  title: "ARCHI PILOTE RÉNOVATION — Rénovation tous corps d'état en Île-de-France",
  description:
    "Pilotage de travaux de rénovation en Île-de-France : gros œuvre, second œuvre, cuisine sur-mesure, salle de bain étanche, isolation DPE. Un seul interlocuteur, devis des entreprises sous 48h.",
  alternates: { canonical: "/" },
  // Blocage levé le 25/08/2026 — le site est en phase de visibilité SEO réelle.
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARCHI PILOTE RÉNOVATION",
    url: "https://archipiloterenovation.fr",
    title: "ARCHI PILOTE RÉNOVATION — Rénovation tous corps d'état en Île-de-France",
    description:
      "Pilotage de travaux de rénovation en Île-de-France. Un seul interlocuteur, des entreprises partenaires qui contractent directement avec vous.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Séjour rénové, niveau de finition visé — visuel d'illustration" }],
  },
};

export const JSONLD_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://archipiloterenovation.fr/#organization",
  name: "ARCHI PILOTE RÉNOVATION",
  legalName: "IA RENOV",
  url: "https://archipiloterenovation.fr",
  telephone: "+33652798089",
  email: "archipiloterenovation@gmail.com",
  description: "Pilotage de travaux de rénovation tous corps d'état en Île-de-France, priorité maison et pavillon.",
  areaServed: ["Hauts-de-Seine", "Yvelines", "Essonne", "Val-d'Oise", "Seine-et-Marne", "Île-de-France"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 rue Gabriel Péri",
    postalCode: "92250",
    addressLocality: "La Garenne-Colombes",
    addressCountry: "FR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const expired = SITE_OFFLINE || Date.now() > new Date(EXPIRES_AT).getTime();
  return (
    <html
      lang="fr"
      data-theme="pierre"
      suppressHydrationWarning
      className={`${dmSerif.variable} ${sora.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('gr-theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_ORGANIZATION) }}
        />
      </head>
      <body className="min-h-screen bg-carbone text-ivoire antialiased">
        {expired ? (
          <OfflineScreen />
        ) : (
          <>
            <LenisProvider>
              <Nav />
              {children}
              <Footer />
            </LenisProvider>
            <ThemeSwitcher />
            <WhatsappButton />
          </>
        )}
      </body>
    </html>
  );
}
