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

// Vérifié à chaque requête (pas au build) pour que la péremption
// à 48h s'applique sans redéploiement.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ARCHI PILOTE RÉNOVATION — Rénovation tous corps d'état en Île-de-France",
  description:
    "Pilotage de travaux de rénovation en Île-de-France : gros œuvre, second œuvre, cuisine sur-mesure, salle de bain étanche, isolation DPE. Un seul interlocuteur, devis des entreprises sous 48h.",
  // Blocage volontaire tant que le site reste en phase de maquette (demande explicite,
  // 21/08/2026) : à lever avant toute mise en production réelle, sans quoi les 26 pages
  // et le travail éditorial du dossier SEO restent invisibles pour Google et les IA.
  robots: { index: false, follow: false, nocache: true, noarchive: true, nosnippet: true, noimageindex: true },
};

export const JSONLD_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ARCHI PILOTE RÉNOVATION",
  alternateName: "IA RENOV",
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
