import type { Metadata } from "next";
import { DM_Serif_Display, Sora, Space_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "./components/lenis-provider";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { ThemeSwitcher } from "./components/theme-switcher";
import { WhatsappButton } from "./components/whatsapp-button";
import { SITE_OFFLINE } from "./site-config";
import { OfflineScreen } from "./components/offline-screen";

const dmSerif = DM_Serif_Display({ variable: "--font-dm-serif", subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], display: "swap" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Global Rénovation — Rénovation d'appartement à Paris & Île-de-France",
  description:
    "Second œuvre tous corps d'état, cuisine sur-mesure, salle de bain étanche, isolation DPE, gros œuvre. Un seul interlocuteur, devis détaillé sous 48h, estimation en ligne immédiate.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
      </head>
      <body className="min-h-screen bg-carbone text-ivoire antialiased">
        {SITE_OFFLINE ? (
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
