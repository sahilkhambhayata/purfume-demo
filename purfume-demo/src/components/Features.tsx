import { features } from "../data";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <svg
                viewBox="0 0 64 64"
                className="mb-6 h-12 w-12 text-gold/70 animate-spin-slower"
                fill="none"
                aria-hidden
              >
                <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" stroke="currentColor" strokeWidth="1.2" />
                <path d="M32 4v56M8 18l48 28M56 18 8 46" stroke="currentColor" strokeWidth="0.7" opacity="0.7" />
              </svg>
              <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">The method</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
                Fragrance,
                <br />
                <em className="text-gold-soft">rendered in space.</em>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory-dim sm:text-base">
                Perfume has always been described as a pyramid. We compose it as a building —
                with depth, duration, and rooms of air.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {features.map((f, i) => (
              <Reveal key={f.number} delay={i * 90}>
                <article className="group h-full rounded-3xl bg-ink-3/80 p-7 hairline transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-(--shadow-gold)">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-display text-2xl text-gold/70">{f.number}</span>
                    <span className="h-px w-10 bg-gold/30 transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-ivory">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{f.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
