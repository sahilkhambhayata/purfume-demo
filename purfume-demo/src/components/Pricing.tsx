import { plans } from "../data";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

type Props = {
  onReserve: (plan: string) => void;
};

export default function Pricing({ onReserve }: Props) {
  return (
    <section id="pricing" className="relative bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">Acquire</p>
          <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl md:text-6xl">
            Begin in 3D.
            <em className="text-gold-soft"> Commit on skin.</em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ivory-dim sm:text-base">
            Explore thoroughly. Then choose the volume that belongs on your dressing table.
            Discovery credit applies to Signature.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[1.8rem] p-8 transition-transform duration-500 hover:-translate-y-1.5",
                  p.featured
                    ? "bg-gradient-to-b from-gold/15 to-ink-3 shadow-(--shadow-gold) ring-1 ring-gold/50"
                    : "bg-ink-3 hairline hover:border-gold/35"
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-ink uppercase">
                    Most chosen
                  </span>
                )}
                <h3 className="font-display text-3xl text-ivory">{p.name}</h3>
                <p className="mt-2 text-sm text-stone">{p.blurb}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl text-gold-soft">${p.price}</span>
                  <span className="mb-1.5 text-xs tracking-[0.16em] text-stone uppercase">
                    {p.unit}
                  </span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ivory-dim">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onReserve(p.name)}
                  className={cn(
                    "gold-btn mt-8 w-full rounded-full py-3.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase transition-transform duration-300 hover:-translate-y-0.5",
                    p.featured
                      ? "bg-gold text-ink"
                      : "text-ivory hairline hover:border-gold hover:text-gold-soft"
                  )}
                >
                  {p.cta}
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-xs tracking-[0.16em] text-stone uppercase">
            Explore in 3D first — or return your sealed Discovery within 14 days.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
