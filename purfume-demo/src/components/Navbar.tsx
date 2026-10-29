import { useEffect, useState } from "react";
import { navLinks } from "../data";
import { cn } from "../utils/cn";
import Logo from "./Logo";

type Props = {
  onReserve: () => void;
};

export default function Navbar({ onReserve }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "glass-strong" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 sm:h-[4.75rem] sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.72rem] font-medium tracking-[0.22em] text-ivory-dim uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-gold-soft hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReserve}
            className="gold-btn hidden rounded-full bg-gold px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.2em] text-ink uppercase transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Reserve
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full hairline text-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 h-px w-5 bg-ivory transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-5 bg-ivory transition-opacity duration-300",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-5 bg-ivory transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 pb-8 pt-2" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-3xl text-ivory"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onReserve();
            }}
            className="mt-6 rounded-full bg-gold py-3.5 text-sm font-semibold tracking-[0.2em] text-ink uppercase"
          >
            Reserve a flacon
          </button>
        </nav>
      </div>
    </header>
  );
}
