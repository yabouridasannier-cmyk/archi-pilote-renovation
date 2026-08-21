import { LogoMark } from "./logo";

export function OfflineScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#f7f3ed] px-6">
      <div className="flex flex-col items-center text-center gap-7 max-w-md" style={{ animation: "offline-in 1s cubic-bezier(0.22,1,0.36,1) both" }}>
        <span className="text-[#20211d] opacity-90"><LogoMark size={56} /></span>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#20211d] text-2xl md:text-3xl font-medium tracking-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>Ce site n&apos;est plus disponible.</h1>
          <p className="text-[#6c6a60] text-[0.95rem] leading-relaxed">Cette maquette n&apos;était accessible que pendant <span className="text-[#20211d] font-medium">24&nbsp;heures</span>, dans le cadre de la présentation du projet.</p>
        </div>
        <span className="h-px w-24 bg-gradient-to-r from-transparent via-[#a9762c]/60 to-transparent" />
        <p className="font-mono text-[0.66rem] tracking-[0.28em] uppercase text-[#6c6a60]/60">Maquette — Logipro Web</p>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `@keyframes offline-in{from{opacity:0;transform:translateY(14px);filter:blur(8px)}to{opacity:1;transform:translateY(0);filter:blur(0)}}` }} />
    </div>
  );
}
