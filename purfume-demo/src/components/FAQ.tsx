import { useState } from "react";
import { faqs } from "../data";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">Questions</p>
          <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">
            Before you enter.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">
            The atelier is designed to remove doubt. If anything remains, it is here.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 40}>
                  <div>
                    <h3>
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : i)}
                      >
                        <span className="font-display text-xl text-ivory sm:text-2xl">
                          {item.q}
                        </span>
                        <span
                          className={cn(
                            "mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gold hairline transition-transform duration-300",
                            isOpen && "rotate-45"
                          )}
                          aria-hidden
                        >
                          +
                        </span>
                      </button>
                    </h3>
                    <div className={cn("faq-grid", isOpen && "open")}>
                      <div>
                        <p className="pb-5 pr-12 text-sm leading-relaxed text-stone">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
