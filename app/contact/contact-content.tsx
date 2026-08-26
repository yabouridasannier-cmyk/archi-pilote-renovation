"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SITE } from "../data";
import { Reveal } from "../components/reveal";
import { PHOTOS } from "../lib-photos";

const PROJETS = [
  "Rafraîchissement",
  "Rénovation partielle",
  "Rénovation complète",
  "Cuisine sur-mesure",
  "Salle de bain",
  "Isolation & DPE",
  "Gros œuvre / surélévation",
  "Autre projet",
];

/* Qualification en tranches fermées (jamais de champ libre pour le budget) —
   chaque réponse change le traitement du lead, cf. dossier ads §2. */
const BUDGETS = ["Moins de 10 000 €", "10 000 – 50 000 €", "50 000 – 100 000 €", "100 000 – 200 000 €", "Plus de 200 000 €", "Je ne sais pas encore"];
const HORIZONS = ["Dans le mois", "Dans les 3 mois", "Dans les 6 mois", "Je me renseigne encore"];

const EASE = [0.22, 1, 0.36, 1] as const;
const N_STEPS = 4;

function Chips({ items, value, onPick }: { items: string[]; value: string | null; onPick: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((p) => (
        <button key={p} onClick={() => onPick(p)} className={`px-5 py-3 text-[0.92rem] font-medium border transition-all duration-300 cursor-pointer ${value === p ? "border-orange bg-orange/15 text-orange" : "border-line-strong text-ivoire hover:border-orange/60"}`}>
          {p}
        </button>
      ))}
    </div>
  );
}

export function ContactContent() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [projet, setProjet] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [horizon, setHorizon] = useState<string | null>(null);
  const [details, setDetails] = useState({ commune: "", description: "" });
  const [coords, setCoords] = useState({ nom: "", tel: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const startedAt = useRef(Date.now());

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const canNext =
    step === 0 ? projet !== null
    : step === 1 ? budget !== null && horizon !== null
    : step === 2 ? details.commune.length > 1
    : coords.nom.length > 1 && coords.tel.length > 5;

  const submit = async () => {
    setSending(true);
    setError(null);
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projet, budget, horizon,
          commune: details.commune, description: details.description,
          nom: coords.nom, tel: coords.tel,
          website: "", startedAt: startedAt.current,
        }),
      });
      const data = await r.json().catch(() => ({ ok: false }));
      if (r.ok && data.ok) {
        setDone(true);
      } else if (r.status === 422 && Array.isArray(data.errors) && data.errors.includes("tel")) {
        setError("Vérifiez votre numéro de téléphone — il doit comporter 10 chiffres (ex. 06 12 34 56 78).");
      } else if (r.status === 422) {
        setError("Certains champs sont incomplets — vérifiez vos réponses puis renvoyez.");
      } else {
        setError(`Votre demande n'a pas pu être transmise. Appelez-nous directement au ${SITE.telAffiche} ou écrivez-nous sur WhatsApp.`);
      }
    } catch {
      setError(`Votre demande n'a pas pu être transmise. Appelez-nous directement au ${SITE.telAffiche} ou écrivez-nous sur WhatsApp.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative pb-28 md:pb-40">
      <div className="container-site grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-6 lg:gap-8 items-start">
        <Reveal variant="scale" className="card-e rounded-none p-7 md:p-10 overflow-hidden relative">
          {!done ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[0.66rem] tracking-[0.22em] uppercase text-muted">Étape {step + 1} / {N_STEPS}</span>
                <div className="flex-1 max-w-[10rem] h-1 rounded-full bg-surface-2 ml-4 overflow-hidden">
                  <motion.div animate={{ width: `${((step + 1) / N_STEPS) * 100}%` }} transition={{ duration: 0.6, ease: EASE }} className="h-full rounded-full bg-gradient-to-r from-ambre to-orange-deep" />
                </div>
              </div>

              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 46, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: dir * -46, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="flex flex-col gap-6 min-h-[19rem]"
                >
                  {step === 0 && (
                    <>
                      <h2 className="display text-2xl md:text-3xl text-ivoire">Quel est votre projet&nbsp;?</h2>
                      <Chips items={PROJETS} value={projet} onPick={setProjet} />
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <h2 className="display text-2xl md:text-3xl text-ivoire">Budget et calendrier&nbsp;?</h2>
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[0.66rem] tracking-[0.18em] uppercase text-muted">Budget envisagé</span>
                        <Chips items={BUDGETS} value={budget} onPick={setBudget} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[0.66rem] tracking-[0.18em] uppercase text-muted">Vous pensez démarrer…</span>
                        <Chips items={HORIZONS} value={horizon} onPick={setHorizon} />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <h2 className="display text-2xl md:text-3xl text-ivoire">Où, et en quelques mots&nbsp;?</h2>
                      <input className="field" placeholder="Commune du projet" value={details.commune} onChange={(e) => setDetails({ ...details, commune: e.target.value })} />
                      <textarea className="field min-h-[8rem] resize-none" placeholder="Décrivez votre projet — surface approximative, état actuel, ce que vous imaginez…" value={details.description} onChange={(e) => setDetails({ ...details, description: e.target.value })} />
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <h2 className="display text-2xl md:text-3xl text-ivoire">Où peut-on vous joindre&nbsp;?</h2>
                      <input className="field" placeholder="Votre nom" value={coords.nom} onChange={(e) => setCoords({ ...coords, nom: e.target.value })} />
                      <input className="field" placeholder="Votre téléphone" type="tel" value={coords.tel} onChange={(e) => setCoords({ ...coords, tel: e.target.value })} />
                      <p className="text-muted text-[0.82rem]">Vos coordonnées servent uniquement à vous rappeler au sujet de ce projet.</p>
                      {error && <p className="text-[0.88rem] leading-relaxed" style={{ color: "var(--c-orange-deep)" }}>{error}</p>}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8">
                <button onClick={() => go(Math.max(0, step - 1))} className={`btn btn-ghost !py-2.5 !px-3.5 sm:!px-5 text-sm ${step === 0 ? "invisible" : ""}`}>Retour</button>
                <button
                  onClick={() => (step === N_STEPS - 1 ? submit() : go(step + 1))}
                  disabled={!canNext || sending}
                  className={`btn btn-primary !py-2.5 !px-3.5 sm:!px-6 text-sm ${!canNext || sending ? "opacity-40 pointer-events-none" : ""}`}
                >
                  {step === N_STEPS - 1 ? (sending ? "Envoi en cours…" : "Envoyer ma demande") : "Continuer"}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ type: "spring", stiffness: 120, damping: 16 }} className="flex flex-col items-center text-center gap-5 py-14">
              <span className="size-16 bg-orange/15 border border-orange/40 flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--c-orange)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <h2 className="display text-3xl text-ivoire">Demande envoyée&nbsp;!</h2>
              <p className="lead max-w-sm">{coords.nom.split(" ")[0] || "Merci"}, un chargé de projet vous rappelle au sujet de votre projet à {details.commune || "votre commune"}.</p>
            </motion.div>
          )}
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal variant="slide-up" delay={0.1} className="relative rounded-none overflow-hidden card-e h-[15rem] group">
            <img src={PHOTOS.sejourApres} alt="Séjour lumineux au mobilier clair — visuel d'illustration" className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <span className="text-white/90 text-lg font-medium">{SITE.zone}</span>
              <p className="text-white/60 text-[0.85rem]">Visite technique gratuite, devis des entreprises sous 48 h</p>
            </div>
          </Reveal>

          <Reveal variant="slide-up" delay={0.2}>
            <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="card-e rounded-none p-7 flex flex-col gap-2 group transition-transform duration-500 hover:-translate-y-1.5">
              <span className="eyebrow">Par téléphone</span>
              <span className="display text-[1.35rem] text-ivoire group-hover:text-orange transition-colors normal-case">{SITE.telAffiche}</span>
              <span className="text-muted text-[0.85rem]">Du lundi au vendredi, 8h30 – 19h</span>
            </a>
          </Reveal>

          <Reveal variant="slide-up" delay={0.3}>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="card-e rounded-none p-7 flex items-center justify-between gap-4 group transition-transform duration-500 hover:-translate-y-1.5">
              <div className="flex flex-col gap-1">
                <span className="eyebrow">Le plus rapide</span>
                <span className="display text-[1.2rem] text-ivoire group-hover:text-orange transition-colors normal-case">Écrire sur WhatsApp</span>
                <span className="text-muted text-[0.85rem]">Photos du projet, réponse rapide</span>
              </div>
              <span className="size-11 rounded-full bg-black/45 border border-white/25 flex items-center justify-center text-white group-hover:text-[#25d366] transition-colors shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.33 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.45 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Z" /></svg>
              </span>
            </a>
          </Reveal>

          <Reveal variant="slide-up" delay={0.4}>
            <div className="card-e rounded-none p-7 flex flex-col gap-3">
              <span className="eyebrow">Ce qui est toujours inclus</span>
              {["Visite technique sous 5 jours", "Devis des entreprises sous 48 h", "Attestations décennales vérifiées"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-ivoire/85 text-[0.95rem]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--c-orange)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
