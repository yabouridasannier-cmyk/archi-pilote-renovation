"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const THEMES = [
  { id: "pierre", label: "Pierre", dot: "#a9762c", bg: "#f7f3ed" },
  { id: "ardoise", label: "Ardoise", dot: "#c08a34", bg: "#17181a" },
  { id: "sauge", label: "Sauge", dot: "#5f7458", bg: "#f0f2ed" },
];

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("pierre");

  useEffect(() => {
    const saved = localStorage.getItem("gr-theme");
    if (saved) setTheme(saved);
  }, []);

  const apply = (id: string) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    localStorage.setItem("gr-theme", id);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(6px)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="card-e rounded-none p-3 flex flex-col gap-1.5"
          >
            <span className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-muted px-2 pt-1">Ambiance</span>
            {THEMES.map((t) => (
              <button key={t.id} onClick={() => apply(t.id)} className={`flex items-center gap-3 px-3 py-2 rounded-none transition-colors ${theme === t.id ? "bg-surface-2" : "hover:bg-surface-2/60"}`}>
                <span className="size-5 rounded-full border border-line-strong shrink-0" style={{ background: `linear-gradient(135deg, ${t.bg} 55%, ${t.dot} 55%)` }} />
                <span className="text-sm text-ivoire">{t.label}</span>
                {theme === t.id && <span className="size-1.5 rounded-full bg-orange ml-auto" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)} aria-label="Changer d'ambiance" className="size-12 rounded-full glass-pill flex items-center justify-center group shadow-[0_14px_40px_-12px_rgba(32,33,29,0.3)]">
        <span className="size-5 rounded-full transition-transform duration-500 group-hover:rotate-180" style={{ background: "conic-gradient(from 0deg, #c08a34, #3a4a3e, #f7f3ed, #c08a34)" }} />
      </button>
    </div>
  );
}
