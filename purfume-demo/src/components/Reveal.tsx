import { type ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useReveal<HTMLDivElement>(delay);

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}
