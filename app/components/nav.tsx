"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { SITE } from "../data";
import { LogoMark } from "./logo";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/blog", label: "Blog" },
  { href: "/devis", label: "Estimer mon devis" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
              : "mt-0 w-full border-b border-transparent"
          }`}
        >
          <div className={`flex items-center justify-between ${scrolled ? "px-5 py-2.5" : "container-site py-4"}`}>
            <Link href="/" className="flex items-center gap-2.5 group text-ivoire">
              <LogoMark className="transition-transform duration-500 group-hover:scale-110" />
              <div className="leading-none">
                <span className="display block text-[1.1rem] tracking-tight">Archipilote</span>
                <span className="font-mono text-[0.56rem] tracking-[0.24em] text-muted uppercase">Paris &amp; Île-de-France</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={pathname === link.href}
                  className={`nav-link text-[0.9rem] font-medium ${pathname === link.href ? "text-ivoire" : "text-muted hover:text-ivoire"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="hidden xl:inline-flex font-mono text-[0.8rem] text-muted hover:text-ivoire transition-colors">
                {SITE.telAffiche}
              </a>
              <Link href="/devis" className="btn btn-primary hidden md:inline-flex !py-2.5 !px-5 text-sm">
                Devis gratuit
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
            className="fixed z-40 top-20 inset-x-3 rounded-2xl card-e p-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i, duration: 0.4 }}>
                  <Link href={link.href} className={`block py-3 text-lg display tracking-tight border-b border-line ${pathname === link.href ? "text-orange" : "text-ivoire"}`}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/devis" className="btn btn-primary mt-5 w-full">Estimer mon devis</Link>
              <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="btn btn-ghost mt-2 w-full">{SITE.telAffiche}</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
