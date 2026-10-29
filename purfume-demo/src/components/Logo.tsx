import { cn } from "../utils/cn";

type Props = {
  className?: string;
  markClassName?: string;
};

export default function Logo({ className, markClassName }: Props) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="ORVAN home">
      <svg
        viewBox="0 0 32 32"
        className={cn("h-7 w-7 text-gold-soft transition-transform duration-500 group-hover:rotate-12", markClassName)}
        fill="none"
        aria-hidden
      >
        <polygon
          points="16,3.5 27.2,10 27.2,22 16,28.5 4.8,22 4.8,10"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="16" cy="16" r="3.6" stroke="currentColor" strokeWidth="1.1" />
      </svg>
      <span className="font-display text-[1.35rem] font-medium tracking-[0.32em] text-ivory">
        ORVAN
      </span>
    </a>
  );
}
