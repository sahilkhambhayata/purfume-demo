import { press, stats } from "../data";
import Reveal from "./Reveal";

export default function SocialProof() {
  return (
    <section id="proof" className="relative border-y border-line bg-ink-2 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-10 text-center text-[0.68rem] tracking-[0.32em] text-stone uppercase">
            As seen in
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
          {press.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <span className="font-display text-xl tracking-[0.22em] text-ivory/70 sm:text-2xl">
                {p.name}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="gold-rule my-14" />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="font-display text-4xl text-gold-soft sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-[0.68rem] tracking-[0.22em] text-stone uppercase">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <blockquote className="mx-auto mt-14 max-w-3xl text-center">
            <p className="font-display text-2xl italic leading-snug text-ivory sm:text-3xl">
              “ORVAN does for scent what spatial audio did for sound.”
            </p>
            <footer className="mt-4 text-[0.68rem] tracking-[0.28em] text-gold uppercase">
              Wired
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
