"use client";

import { useRef, useState } from "react";
import { SITE } from "../data";

/* Formulaire de contact — mise en page maquette Lovable (une étape, 8 champs),
   branché sur /api/contact (envoi réel + protections anti-bot). */

const PROJETS = ["Rafraîchissement", "Rénovation partielle", "Rénovation complète", "Cuisine sur-mesure", "Salle de bain", "Isolation & DPE", "Gros œuvre / surélévation", "Autre projet"];
const BUDGETS = ["Moins de 10 000 €", "10 000 – 50 000 €", "50 000 – 100 000 €", "100 000 – 200 000 €", "Plus de 200 000 €", "Je ne sais pas encore"];
const HORIZONS = ["Dans le mois", "Dans les 3 mois", "Dans les 6 mois", "Je me renseigne encore", "Non précisé"];

export function ContactForm() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", commune: "", projet: "", surface: "", budget: "", horizon: "Non précisé", description: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedAt = useRef(Date.now());

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: "", startedAt: startedAt.current }),
      });
      const data = await r.json().catch(() => ({ ok: false }));
      if (r.ok && data.ok) setDone(true);
      else if (r.status === 422 && Array.isArray(data.errors) && data.errors.includes("tel")) setError("Vérifiez votre numéro de téléphone — il doit comporter 10 chiffres (ex. 06 12 34 56 78).");
      else if (r.status === 422 && Array.isArray(data.errors) && data.errors.includes("email")) setError("Vérifiez l'adresse e-mail saisie.");
      else if (r.status === 422) setError("Certains champs obligatoires sont incomplets — vérifiez le nom, le téléphone, la commune, le type de projet et le budget.");
      else setError(`Votre demande n'a pas pu être transmise. Appelez-nous directement au ${SITE.telAffiche} ou écrivez-nous sur WhatsApp.`);
    } catch {
      setError(`Votre demande n'a pas pu être transmise. Appelez-nous directement au ${SITE.telAffiche} ou écrivez-nous sur WhatsApp.`);
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="border border-line bg-surface rounded-[2px] p-8 text-center flex flex-col items-center gap-3">
        <h3 className="display text-[1.5rem] text-ivoire">Demande envoyée</h3>
        <p className="text-muted text-[0.95rem] max-w-md">
          {form.nom.split(" ")[0] || "Merci"}, votre demande d&apos;étude gratuite est bien transmise. Retour sous
          48&nbsp;heures ouvrées avec une première lecture de votre projet à {form.commune || "votre commune"}.
        </p>
      </div>
    );
  }

  const labelCls = "flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ivoire";

  return (
    <form onSubmit={submit} className="border border-line bg-surface rounded-[2px] p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <label className={labelCls}>Nom et prénom *
        <input required className="field" value={form.nom} onChange={set("nom")} autoComplete="name" />
      </label>
      <label className={labelCls}>Courriel
        <input type="email" className="field" value={form.email} onChange={set("email")} autoComplete="email" />
      </label>
      <label className={labelCls}>Téléphone *
        <input required type="tel" className="field" value={form.tel} onChange={set("tel")} autoComplete="tel" placeholder="06 12 34 56 78" />
      </label>
      <label className={labelCls}>Commune du bien *
        <input required className="field" value={form.commune} onChange={set("commune")} />
      </label>
      <label className={labelCls}>Type de projet *
        <select required className="field" value={form.projet} onChange={set("projet")}>
          <option value="" disabled>Choisir…</option>
          {PROJETS.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </label>
      <label className={labelCls}>Surface concernée
        <input className="field" value={form.surface} onChange={set("surface")} placeholder="ex. 75 m²" />
      </label>
      <label className={labelCls}>Budget envisagé *
        <select required className="field" value={form.budget} onChange={set("budget")}>
          <option value="" disabled>Choisir…</option>
          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </label>
      <label className={labelCls}>Vous pensez démarrer…
        <select className="field" value={form.horizon} onChange={set("horizon")}>
          {HORIZONS.map((h) => <option key={h} value={h}>{h}</option>)}
        </select>
      </label>
      <label className={`${labelCls} sm:col-span-2`}>Description du projet
        <textarea className="field min-h-[7rem] resize-none" value={form.description} onChange={set("description")} placeholder="Objectifs, état actuel, contraintes connues…" />
      </label>
      {error && <p className="sm:col-span-2 text-[0.9rem] leading-relaxed" style={{ color: "var(--c-orange-deep)" }}>{error}</p>}
      <div className="sm:col-span-2 flex flex-col gap-3">
        <button type="submit" disabled={sending} className={`btn btn-primary w-full sm:w-auto ${sending ? "opacity-50 pointer-events-none" : ""}`}>
          {sending ? "Envoi en cours…" : "Envoyer ma demande d'étude gratuite"}
        </button>
        <p className="text-muted text-[0.8rem]">Vos coordonnées servent uniquement à vous répondre au sujet de ce projet. Aucune donnée n&apos;est transmise à des tiers.</p>
      </div>
    </form>
  );
}
