import { useState } from "react";
import Logo from "./Logo";

const columns = [
  {
    title: "House",
    links: [
      { href: "#experience", label: "The 3D atelier" },
      { href: "#collection", label: "Collection" },
      { href: "#atelier", label: "Method" },
      { href: "#pricing", label: "Acquire" },
    ],
  },
  {
    title: "Compositions",
    links: [
      { href: "#collection", label: "Nocturne 01" },
      { href: "#collection", label: "Aether 02" },
      { href: "#collection", label: "Solstice 03" },
      { href: "#pricing", label: "Discovery set" },
    ],
  },
  {
    title: "Care",
    links: [
      { href: "#faq", label: "Shipping" },
      { href: "#faq", label: "Refills" },
      { href: "#faq", label: "Returns" },
      { href: "#faq", label: "Ingredients" },
    ],
  },
];

export default function Footer() {
  const [joined, setJoined] = useState(false);

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone">
              The first 3D-mapped fragrance house. Scent, sculpted in space —
              composed in the atelier, worn in the world.
            </p>
            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
              aria-label="Journal subscription"
            >
              <label htmlFor="journal-email" className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">
                The journal
              </label>
              {joined ? (
                <p className="mt-3 text-sm text-gold-soft" role="status">
                  Welcome to the atelier. A first note is on its way.
                </p>
              ) : (
                <div className="mt-3 flex gap-2">
                  <input
                    id="journal-email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-full bg-ink-3 px-4 py-2.5 text-sm text-ivory outline-none hairline placeholder:text-stone"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-gold px-4 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-ink uppercase"
                  >
                    Join
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-ivory-dim transition-colors hover:text-gold-soft">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-rule my-10" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs tracking-[0.14em] text-stone uppercase sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ORVAN Atelier. All rights reserved.</p>
          <p>Crafted in space · Worn on skin</p>
        </div>
      </div>
    </footer>
  );
}
