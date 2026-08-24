import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Guide des aides à la rénovation énergétique | ARCHI PILOTE",
  description: "Les dispositifs changent. Cette page renvoie vers les sources officielles et évite toute promesse d'éligibilité avant étude du dossier.",
};

const FAQ = [
  { q: "Pourquoi cette page reste-t-elle prudente ?", r: "Les dispositifs d'aide (MaPrimeRénov', CEE) et leurs plafonds évoluent régulièrement. Aucune promesse d'éligibilité ne peut être faite avant l'étude réelle de votre dossier." },
  { q: "Qui monte le dossier d'aide ?", r: "L'accompagnement dans les démarches fait partie du pilotage de projet, mais l'éligibilité et le versement dépendent des organismes officiels — MaPrimeRénov', les CEE, votre revenu fiscal de référence." },
  { q: "Où vérifier les montants à jour ?", r: "Sur les sites officiels (maprimerenov.gouv.fr, service-public.fr) au moment de votre projet — les montants ici ne sont jamais garantis ni contractuels." },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Guide des aides"
        segments={[{ text: "Aides à la rénovation énergétique :" }, { text: "méthode de vérification.", serif: true, gradient: true }]}
        lead="Les dispositifs changent. Cette page renvoie vers les sources officielles, précise sa date de mise à jour et évite toute promesse d'éligibilité avant étude du dossier."
      />
      <section className="relative pb-16 md:pb-24">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-6 text-ivoire/85 text-[1.02rem] leading-relaxed">
          <p>
            Deux dispositifs concernent la plupart des projets de rénovation énergétique : MaPrimeRénov&apos;,
            calculée selon vos revenus et le gain énergétique obtenu, et les Certificats d&apos;Économie
            d&apos;Énergie (CEE), versés par les fournisseurs d&apos;énergie. Ils peuvent se cumuler selon les
            travaux engagés.
          </p>
          <p>
            Le gain de classe DPE ne sert à rien si le dossier d&apos;aide n&apos;aboutit pas : les demandes
            doivent généralement être déposées avant le début des travaux, avec des entreprises certifiées
            RGE pour les postes concernés. Nous vous aidons à identifier les pièces à réunir, mais l&apos;étude
            d&apos;éligibilité et le versement relèvent des organismes officiels.
          </p>
          <p className="text-muted text-[0.85rem] font-mono uppercase tracking-wider">Page mise à jour — août 2026</p>
        </div>
      </section>
      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-3xl mx-auto flex flex-col gap-4">
          {FAQ.map((f) => (
            <div key={f.q} className="card-e rounded-2xl p-6">
              <h3 className="display text-[1.05rem] text-ivoire normal-case mb-1.5">{f.q}</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">{f.r}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaFinal />
    </main>
  );
}
