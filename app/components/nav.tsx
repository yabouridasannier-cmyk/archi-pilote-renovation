"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { SITE, SERVICES } from "../data";
import { LogoMark } from "./logo";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services", dropdown: "services" as const },
  { href: "/realisations", label: "Réalisations", dropdown: "realisations" as const },
  { href: "/blog", label: "Blog" },
  { href: "/devis", label: "Estimer mon budget" },
];

const REALISATIONS_LINKS = [
  { href: "/realisations/pavillon-annees-30-hauts-de-seine/", label: "Pavillon des années 30, Hauts-de-Seine" },
  { href: "/realisations/extension-yvelines/", label: "Extension de plain-pied, Yvelines" },
  { href: "/realisations", label: "Toutes nos réalisations" },
];

const SERVICES_LINKS: Record<string, string> = {
  "second-oeuvre": "/electricite-plomberie-renovation",
  "cuisine-sur-mesure": "/renovation-cuisine-maison",
  "salle-de-bain": "/renovation-salle-de-bain-maison",
  "beton-cire": "/sols-finitions-renovation",
  "isolation-dpe": "/renovation-energetique-maison",
  "gros-oeuvre": "/renovation-complete-maison",
};

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<"services" | "realisations" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <div
          className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? "mt-3 w-[min(100%-1.5rem,68rem)] rounded-full glass-pill shadow-[0_18px_50px_-24px_rgba(32,33,29,0.25)]"
              : "mt-0 w-full glass-pill !rounded-none border-x-0 border-t-0"
          }`}
        >
          <div className={`flex items-center justify-between ${scrolled ? "px-5 py-2.5" : "container-site py-3.5"}`}>
            <Link href="/" className="flex items-center gap-2.5 group text-ivoire shrink-0">
              <LogoMark className="transition-transform duration-500 group-hover:scale-110" />
              <div className="leading-none">
                <span className="display block text-[1.1rem] tracking-tight">ARCHI PILOTE</span>
                <span className="font-mono text-[0.54rem] tracking-[0.2em] text-muted uppercase whitespace-nowrap">Rénovation TCE — Île-de-France</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setHoverMenu(link.dropdown)}
                  onMouseLeave={() => link.dropdown && setHoverMenu(null)}
                >
                  <Link
                    href={link.href}
                    data-active={pathname === link.href}
                    className={`nav-link text-[0.9rem] font-medium px-2.5 py-2 inline-block ${pathname === link.href ? "text-ivoire" : "text-muted hover:text-ivoire"}`}
                  >
                    {link.label}
                  </Link>

                  <AnimatePresence>
                    {link.dropdown === "services" && hoverMenu === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                        transition={{ duration: 0.22 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[19rem]"
                      >
                        <div className="card-e rounded-2xl p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
                          {SERVICES.map((s) => (
                            <Link key={s.slug} href={SERVICES_LINKS[s.slug] ?? `/services#${s.slug}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-surface-2 transition-colors group">
                              <span className="font-serif italic text-orange/80 text-[0.9rem] w-4 shrink-0">{s.marque}</span>
                              <span className="text-ivoire/90 text-[0.88rem] group-hover:text-orange transition-colors">{s.titre}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {link.dropdown === "realisations" && hoverMenu === "realisations" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                        transition={{ duration: 0.22 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[20rem]"
                      >
                        <div className="card-e rounded-2xl p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
                          {REALISATIONS_LINKS.map((r) => (
                            <Link key={r.href} href={r.href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-surface-2 transition-colors group">
                              <span className="text-ivoire/90 text-[0.88rem] group-hover:text-orange transition-colors">{r.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="hidden xl:inline-flex font-mono text-[0.8rem] text-muted hover:text-ivoire transition-colors">
                {SITE.telAffiche}
              </a>
              <Link href="/contact" className="btn btn-primary hidden md:inline-flex !py-2.5 !px-5 text-sm">
                Étudier mon projet
              </Link>
              <button
                onClick={() => setOpen(!open)}
                aria-label="Menu"
                className="lg:hidden relative size-10 rounded-full glass-pill flex items-center justify-center"
              >
                <div className="flex flex-col gap-1.5">
                  <span className={`block h-[1.5px] w-5 bg-ivoire transition-all duration-400 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                  <span className={`block h-[1.5px] w-5 bg-ivoire transition-all duration-400 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-40 top-20 inset-x-3 rounded-2xl card-e p-6 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i, duration: 0.4 }}>
                  <Link href={link.href} className={`block py-3 text-lg display tracking-tight border-b border-line ${pathname === link.href ? "text-orange" : "text-ivoire"}`}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/devis" className="btn btn-primary mt-5 w-full">Estimer mon budget</Link>
              <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="btn btn-ghost mt-2 w-full">{SITE.telAffiche}</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
