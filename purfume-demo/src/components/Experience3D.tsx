import { useMemo, useRef, useState, type PointerEvent } from "react";
import { scents } from "../data";
import Reveal from "./Reveal";
import ParticleField from "./ParticleField";
import { images } from "../assets/images";

export default function Experience3D() {
  const [activeId, setActiveId] = useState(scents[0].id);
  const [frame, setFrame] = useState(0);
  const [rotation, setRotation] = useState(18);
  const dragging = useRef(false);
  const lastX = useRef(0);

  const scent = scents.find((s) => s.id === activeId) ?? scents[0];
  const moment = scent.timeline[frame];

  const orbitNotes = useMemo(() => {
    const all = [...scent.notes.top, ...scent.notes.heart, ...scent.notes.base];
    return all;
  }, [scent]);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    lastX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    setRotation((r) => r + dx * 0.45);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section id="experience" className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <img src={images.scentCloud} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink-2/80" />
      </div>
      <ParticleField className="absolute inset-0 h-full w-full opacity-70" density={48} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">Interactive atelier</p>
          <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl md:text-6xl">
            Rotate the sculpture.
            <br />
            <em className="text-gold-soft">Watch time pass through it.</em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ivory-dim sm:text-base">
            Drag the flacon. Scrub twelve hours. Isolate every note. This is how ORVAN is composed —
            and how you choose.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {scents.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setActiveId(s.id);
                setFrame(0);
              }}
              className={`rounded-full px-5 py-2.5 text-[0.68rem] tracking-[0.22em] uppercase transition-all duration-300 ${
                activeId === s.id
                  ? "bg-gold text-ink"
                  : "text-ivory-dim hairline hover:text-gold-soft"
              }`}
              aria-pressed={activeId === s.id}
            >
              {s.number} {s.name}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-4">
            <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase" aria-live="polite">
              {scent.number} · {scent.name}
            </p>
            <h3 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">{scent.tagline}</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone">{scent.description}</p>

            <div className="mt-8 space-y-5">
              {(
                [
                  ["Top · near field", scent.notes.top],
                  ["Heart · mid-field", scent.notes.heart],
                  ["Base · depth", scent.notes.base],
                ] as const
              ).map(([label, notes]) => (
                <div key={label}>
                  <div className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">{label}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {notes.map((n) => (
                      <span
                        key={n}
                        className="rounded-full bg-ink-3 px-3 py-1 text-xs text-ivory-dim hairline"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <div
              className="perspective-stage relative mx-auto aspect-square max-w-md cursor-grab touch-none select-none active:cursor-grabbing"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              tabIndex={0}
              aria-label={`${scent.name} bottle. Drag or use arrow keys to rotate in 3D.`}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  setRotation((r) => r - 12);
                }
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  setRotation((r) => r + 12);
                }
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-700"
                style={{ background: scent.glow }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-[8%] left-1/2 h-10 w-[72%] -translate-x-1/2 rounded-[100%] border border-gold/25 bg-gold/10 blur-[0.5px]"
                aria-hidden
              />
              <div
                className="preserve-3d absolute inset-0"
                style={{ transform: `rotateY(${rotation}deg)` }}
              >
                {orbitNotes.map((note, i) => {
                  const angle = (360 / orbitNotes.length) * i;
                  return (
                    <div
                      key={note + i}
                      className="preserve-3d absolute top-1/2 left-1/2 hidden md:block"
                      style={{ transform: `rotateY(${angle}deg) translateZ(168px)` }}
                    >
                      <span className="block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full glass px-2.5 py-1 text-[0.62rem] tracking-[0.14em] text-gold-soft uppercase">
                        {note}
                      </span>
                    </div>
                  );
                })}
              </div>
              <img
                src={scent.image}
                alt={`${scent.name} perfume bottle`}
                className="relative z-10 mx-auto h-[86%] w-auto max-h-[460px] rounded-[1.6rem] object-cover shadow-(--shadow-lift) transition-transform duration-200"
                style={{ transform: `rotateY(${Math.sin((rotation * Math.PI) / 180) * 16}deg)` }}
                draggable={false}
              />
              <p className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 text-[0.62rem] tracking-[0.22em] text-stone uppercase">
                Drag to rotate
              </p>
            </div>
          </div>

          <Reveal className="order-3 lg:col-span-3">
            <div className="rounded-3xl bg-ink-3/70 p-6 glass">
              <p className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">Time</p>
              <div className="mt-2 font-display text-3xl text-ivory">{moment.at}</div>
              <div className="mt-1 text-sm text-gold-soft">{moment.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-stone">{moment.copy}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {moment.notes.map((n) => (
                  <span key={n} className="text-xs tracking-wide text-ivory-dim">
                    · {n}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <label htmlFor="timeline" className="mb-3 flex items-center justify-between text-[0.62rem] tracking-[0.22em] text-stone uppercase">
            <span>Scent over time</span>
            <span className="text-gold">{moment.at}</span>
          </label>
          <input
            id="timeline"
            type="range"
            min={0}
            max={scent.timeline.length - 1}
            step={1}
            value={frame}
            onChange={(e) => setFrame(Number(e.target.value))}
            className="w-full accent-gold"
            aria-valuetext={moment.at}
          />
          <div className="mt-2 flex justify-between text-[0.62rem] tracking-[0.16em] text-stone uppercase">
            {scent.timeline.map((t) => (
              <span key={t.at}>{t.at}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
