import { benefits, steps } from "../data";
import Reveal from "./Reveal";

export default function Benefits() {
  return (
    <section id="atelier" className="relative bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">How it works</p>
          <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">
            From map to skin, in three movements.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 90}>
              <article className="relative h-full rounded-3xl p-7 hairline">
                <span className="font-display text-5xl text-gold/25">{s.number}</span>
                <h3 className="mt-4 font-display text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{s.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 space-y-20">
          {benefits.map((b, i) => (
            <Reveal key={b.title}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[1.8rem]">
                  <img
                    src={b.image}
                    alt={b.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">{b.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ivory-dim">{b.copy}</p>
                  <div className="gold-rule mt-8 max-w-xs" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
