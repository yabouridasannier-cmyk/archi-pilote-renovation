"use client";

type MarqueeProps = {
  items: string[];
  speed?: number;
  className?: string;
};

/** Bande défilante infinie — contenu doublé pour la boucle CSS. */
export function Marquee({ items, speed = 40, className = "" }: MarqueeProps) {
  const content = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="marquee-track items-center gap-14 md:gap-20"
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        {content.map((item, i) => (
          <div key={i} className="flex items-center gap-14 md:gap-20 shrink-0">
            <span className="display text-2xl md:text-3xl text-ivoire/25 uppercase tracking-tight whitespace-nowrap">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-orange/50 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
