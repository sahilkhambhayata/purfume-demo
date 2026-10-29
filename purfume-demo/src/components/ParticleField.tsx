import { useEffect, useRef } from "react";
import { cn } from "../utils/cn";

type Props = {
  className?: string;
  density?: number;
};

export default function ParticleField({ className, density = 64 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;

    const count = reduce ? Math.min(18, density) : density;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      r: Math.random() * 1.5 + 0.25,
      s: Math.random() * 0.22 + 0.04,
      a: Math.random() * 0.42 + 0.08,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    let t = 0;
    const draw = () => {
      if (!running) return;
      t += 0.0035;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (!reduce) {
          p.y -= p.s * 0.0018;
          p.x += Math.sin(t + p.z * 12) * 0.00028;
          if (p.y < -0.03) p.y = 1.03;
          if (p.x < -0.03) p.x = 1.03;
          if (p.x > 1.03) p.x = -0.03;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(228, 210, 168, ${p.a})`;
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };

    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={cn("pointer-events-none", className)} aria-hidden />;
}
