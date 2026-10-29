import { testimonials } from "../data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">Wearers</p>
          <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">
            Chosen with certainty.
            Worn as structure.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col justify-between rounded-[1.6rem] bg-ink-3 p-7 hairline transition-colors duration-500 hover:border-gold/35 sm:p-8">
                <blockquote className="font-display text-xl leading-snug text-ivory sm:text-[1.35rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-medium text-ivory">{t.name}</div>
                    <div className="text-xs tracking-wide text-stone">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
