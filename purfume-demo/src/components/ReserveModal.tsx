import { useEffect, useId, useState } from "react";
import { scents } from "../data";
import { cn } from "../utils/cn";

type Props = {
  open: boolean;
  preset?: string;
  onClose: () => void;
};

export default function ReserveModal({ open, preset, onClose }: Props) {
  const titleId = useId();
  const [sent, setSent] = useState(false);
  const [scent, setScent] = useState(preset || "Discovery");

  useEffect(() => {
    if (open) {
      setSent(false);
      setScent(preset || "Discovery");
    }
  }, [open, preset]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/70 backdrop-blur-md"
        aria-label="Close reservation"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-t-3xl bg-ink-3 shadow-(--shadow-lift) hairline sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <h2 id={titleId} className="font-display text-2xl text-ivory">
            {sent ? "You are on the list." : "Reserve a flacon"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ivory hairline"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {sent ? (
          <div className="px-6 py-10 text-center">
            <p className="font-display text-3xl text-gold-soft">The atelier will write.</p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-stone">
              A private note is on its way, with 3D atelier access and next steps for your
              reservation.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-gold px-6 py-3 text-[0.7rem] font-semibold tracking-[0.2em] text-ink uppercase"
            >
              Return
            </button>
          </div>
        ) : (
          <form
            className="space-y-4 px-6 py-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <p className="text-sm text-stone">
              Tell us where to send atelier access. Limited editions ship in 5–8 days.
            </p>
            <label className="block">
              <span className="text-[0.62rem] tracking-[0.2em] text-gold uppercase">Name</span>
              <input
                required
                name="name"
                className="mt-2 w-full rounded-xl bg-ink px-4 py-3 text-sm text-ivory outline-none hairline"
              />
            </label>
            <label className="block">
              <span className="text-[0.62rem] tracking-[0.2em] text-gold uppercase">Email</span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl bg-ink px-4 py-3 text-sm text-ivory outline-none hairline"
              />
            </label>
            <fieldset>
              <legend className="text-[0.62rem] tracking-[0.2em] text-gold uppercase">
                Composition
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Discovery", ...scents.map((s) => s.name), "Signature", "Collector"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setScent(opt)}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-xs tracking-[0.14em] uppercase transition-colors",
                      scent === opt ? "bg-gold text-ink" : "text-ivory-dim hairline"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </fieldset>
            <button
              type="submit"
              className="gold-btn mt-2 w-full rounded-full bg-gold py-3.5 text-[0.72rem] font-semibold tracking-[0.2em] text-ink uppercase"
            >
              Confirm reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
