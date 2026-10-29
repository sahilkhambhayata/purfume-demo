import Reveal from "./Reveal";
import ParticleField from "./ParticleField";
import { images } from "../assets/images";

type Props = {
  onReserve: () => void;
};

export default function CTA({ onReserve }: Props) {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <img
        src={images.atelier}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <ParticleField className="absolute inset-0 h-full w-full" density={40} />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">Private access</p>
          <h2 className="mt-5 font-display text-4xl text-ivory sm:text-6xl">
            Step inside the architecture.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ivory-dim">
            Reserve a flacon, or begin with Discovery. Either way, you leave with a scent
            you have already walked through.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onReserve}
              className="gold-btn rounded-full bg-gold px-8 py-3.5 text-[0.72rem] font-semibold tracking-[0.22em] text-ink uppercase shadow-(--shadow-gold) transition-transform duration-300 hover:-translate-y-0.5"
            >
              Reserve now
            </button>
            <a
              href="#experience"
              className="rounded-full px-8 py-3.5 text-[0.72rem] font-semibold tracking-[0.22em] text-ivory uppercase hairline transition-colors hover:border-gold hover:text-gold-soft"
            >
              Return to the atelier
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
