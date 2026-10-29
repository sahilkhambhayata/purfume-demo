import { useEffect, useRef, useState, type PointerEvent } from "react";
import ParticleField from "./ParticleField";
import { images } from "../assets/images";

type Props = {
  onExplore: () => void;
  onReserve: () => void;
};

export default function Hero({ onExplore, onReserve }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(t);
  }, []);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: y * -10, y: x * 16 });
  };

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink pt-[4.75rem]"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={images.mist}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      </div>
      <ParticleField className="absolute inset-0 h-full w-full" density={80} />

      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[120px] animate-pulse-glow"
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-4.75rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:py-0">
        <div className="lg:col-span-6 lg:pb-10">
          <p
            className="mb-6 text-[0.68rem] font-medium tracking-[0.38em] text-gold uppercase"
            style={{ animation: ready ? "rise 1s both" : undefined }}
          >
            The first 3D-mapped fragrance house
          </p>
          <h1
            className="font-display text-[3.15rem] leading-[0.92] tracking-tight text-ivory sm:text-6xl md:text-7xl lg:text-[5.35rem]"
            style={{ animation: ready ? "rise 1.1s 0.08s both" : undefined }}
          >
            Scent, sculpted
            <br />
            <em className="text-gold-gradient animate-shimmer not-italic sm:italic">in three dimensions.</em>
          </h1>
          <p
            className="mt-7 max-w-md text-base leading-relaxed text-ivory-dim sm:text-lg"
            style={{ animation: ready ? "rise 1.1s 0.16s both" : undefined }}
          >
            ORVAN renders every note as architecture you can explore — then wear.
            A fragrance you inhabit, not merely apply.
          </p>
          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animation: ready ? "rise 1.1s 0.24s both" : undefined }}
          >
            <button
              type="button"
              onClick={onExplore}
              className="gold-btn rounded-full bg-gold px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.22em] text-ink uppercase shadow-(--shadow-gold) transition-transform duration-300 hover:-translate-y-0.5"
            >
              Enter the 3D atelier
            </button>
            <button
              type="button"
              onClick={onReserve}
              className="rounded-full px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.22em] text-ivory uppercase hairline transition-colors duration-300 hover:border-gold hover:text-gold-soft"
            >
              Reserve a flacon
            </button>
          </div>
          <div
            className="mt-10 flex items-center gap-4 text-[0.68rem] tracking-[0.18em] text-stone uppercase"
            style={{ animation: ready ? "rise 1.1s 0.32s both" : undefined }}
          >
            <span className="h-px w-10 bg-gold/50" />
            Extrait · Refillable · Mapped in space
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div
            ref={stageRef}
            onPointerMove={onMove}
            onPointerLeave={() => setTilt({ x: 0, y: 0 })}
            className="perspective-stage relative mx-auto aspect-[4/5] w-full max-w-[520px] cursor-grab touch-none active:cursor-grabbing"
          >
            <div
              className="absolute inset-8 rounded-full bg-gold/10 blur-3xl animate-pulse-glow"
              aria-hidden
            />
            <div
              className="relative h-full w-full"
              style={{ animation: ready ? "rise 1.3s 0.18s both" : undefined }}
            >
            <div
              className="preserve-3d relative h-full w-full transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <img
                src={images.heroBottle}
                alt="ORVAN signature crystal flacon with champagne gold cap"
                width={800}
                height={1000}
                fetchPriority="high"
                className="relative z-10 h-full w-full rounded-[2rem] object-cover shadow-(--shadow-lift) animate-float-slow"
              />
              <div className="pointer-events-none absolute -right-2 top-16 z-20 hidden rounded-full glass px-3.5 py-2 text-[0.65rem] tracking-[0.18em] text-gold-soft uppercase sm:block">
                Rotate me
              </div>
              <div className="pointer-events-none absolute -left-1 bottom-24 z-20 hidden rounded-full glass px-3.5 py-2 text-[0.65rem] tracking-[0.18em] text-gold-soft uppercase md:block">
                Depth · 12h
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#proof"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.62rem] tracking-[0.28em] text-stone uppercase md:flex"
      >
        Scroll
        <span className="block h-10 w-px overflow-hidden bg-line">
          <span className="block h-full w-px origin-top animate-pulse-glow bg-gold" />
        </span>
      </a>
    </section>
  );
}
