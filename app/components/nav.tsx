"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS, NAV_STANDALONE } from "./mq-nav-data";

/* Navigation reprise de la maquette Lovable : 4 menus déroulants
   (Expertise / Travaux / Preuves / Ressources) + CTA. */
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMenu(null); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-line bg-[oklch(98.5%_0.008_85/0.94)] backdrop-blur-[8px]" : "border-transparent bg-[oklch(98.5%_0.008_85)]"}`}>
        <div className="container-site flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 text-ivoire">
            <img src="/photos/maquette/monogramme-archi-pilote.png" alt="" aria-hidden width={38} height={38} className="size-[38px] object-contain" />
            <div className="leading-tight">
              <span className="display block text-[1.02rem] tracking-tight">ARCHI PILOTE</span>
              <span className="block text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-muted">Rénovation</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {NAV_GROUPS.map((g) => (
              <div key={g.label} className="relative" onMouseEnter={() => setMenu(g.label)} onMouseLeave={() => setMenu(null)}>
                <button
                  className={`px-3 py-2 text-[0.9rem] font-medium transition-colors cursor-pointer ${menu === g.label ? "text-ivoire" : "text-muted hover:text-ivoire"}`}
                  aria-expanded={menu === g.label}
                  onClick={() => setMenu(menu === g.label ? null : g.label)}
                >
                  {g.label}
                </button>
                {menu === g.label && (
                  <div className="absolute top-full left-0 pt-2 w-[17rem]">
                    <div className="border border-line bg-surface rounded-[2px] shadow-[0_18px_50px_-24px_rgba(40,35,25,0.3)] p-1.5">
                      {g.links.map((l) => (
                        <Link key={l.href} href={l.href} className={`block rounded-[2px] px-3 py-2 text-[0.88rem] transition-colors ${pathname === l.href ? "text-orange-deep bg-surface-2" : "text-ivoire/85 hover:bg-surface-2 hover:text-ivoire"}`}>
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {NAV_STANDALONE.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-[0.9rem] font-medium transition-colors ${pathname === l.href ? "text-ivoire" : "text-muted hover:text-ivoire"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn btn-primary !py-2.5 !px-4 hidden sm:inline-flex">Étudier mon projet</Link>
            <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="lg:hidden size-10 border border-line bg-surface rounded-[2px] flex items-center justify-center">
              <span className="flex flex-col gap-[5px]">
                <span className={`block h-[1.5px] w-5 bg-ivoire transition-transform duration-300 ${open ? "rotate-45 translate-y-[3.25px]" : ""}`} />
                <span className={`block h-[1.5px] w-5 bg-ivoire transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed z-40 inset-x-0 top-[61px] bottom-0 overflow-y-auto bg-carbone border-t border-line lg:hidden">
          <nav className="container-site py-6 flex flex-col gap-7" aria-label="Navigation mobile">
            {NAV_GROUPS.map((g) => (
              <div key={g.label}>
                <p className="eyebrow mb-2.5">{g.label}</p>
                <div className="flex flex-col">
                  {g.links.map((l) => (
                    <Link key={l.href} href={l.href} className={`py-2 text-[1.02rem] border-b border-line ${pathname === l.href ? "text-orange-deep" : "text-ivoire"}`}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col">
              {NAV_STANDALONE.map((l) => (
                <Link key={l.href} href={l.href} className={`py-2 text-[1.02rem] border-b border-line ${pathname === l.href ? "text-orange-deep" : "text-ivoire"}`}>
                  {l.label}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="btn btn-primary w-full">Étudier mon projet</Link>
            <a href="tel:+33652798089" className="btn btn-ghost w-full">06 52 79 80 89</a>
          </nav>
        </div>
      )}
    </>
  );
}
