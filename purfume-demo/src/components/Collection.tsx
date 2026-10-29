import { scents } from "../data";
import Reveal from "./Reveal";

type Props = {
  onReserve: (scent?: string) => void;
};

export default function Collection({ onReserve }: Props) {
  return (
    <section id="collection" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">The collection</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl text-ivory sm:text-5xl md:text-6xl">
              Three complete worlds.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone">
            Not a wardrobe of ten. Three architectures, fully resolved. Night. Light. Warmth.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {scents.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-ink-3 hairline transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-(--shadow-gold)">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.name} — ${s.tagline}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-3 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full glass px-3 py-1 text-[0.62rem] tracking-[0.22em] text-gold-soft uppercase">
                    {s.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-3xl text-ivory">{s.name}</h3>
                  <p className="mt-1 text-sm italic text-gold-soft">{s.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">{s.description}</p>
                  <div className="mt-5 text-[0.68rem] tracking-[0.18em] text-ivory-dim uppercase">
                    {s.volume}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href="#experience"
                      className="text-[0.68rem] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-soft"
                    >
                      Explore in 3D
                    </a>
                    <button
                      type="button"
                      onClick={() => onReserve(s.name)}
                      className="rounded-full bg-ivory/5 px-4 py-2 text-[0.68rem] tracking-[0.18em] text-ivory uppercase hairline transition-colors hover:border-gold hover:text-gold-soft"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
