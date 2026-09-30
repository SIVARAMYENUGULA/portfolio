"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Subtle developer easter egg: typing "matrix" or "sudo" triggers a brief
 * matrix-style rain overlay. Respects reduced-motion via short duration.
 */
export function EasterEgg() {
  const [active, setActive] = React.useState(false);
  const bufferRef = React.useRef("");

  React.useEffect(() => {
    const triggers = ["matrix", "sudo"];
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      )
        return;
      if (e.key.length !== 1 || !/[a-z]/i.test(e.key)) return;
      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-8);
      if (triggers.some((t) => bufferRef.current.endsWith(t))) {
        setActive(true);
        bufferRef.current = "";
        window.setTimeout(() => setActive(false), 3200);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
          aria-hidden="true"
        >
          <MatrixRain />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-lg border border-emerald-500/40 bg-black/70 px-6 py-3 font-mono text-sm text-emerald-400 shadow-lg"
            >
              $ access granted — welcome, engineer.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MatrixRain() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = new Array(columns).fill(0);
    const chars = "01</>{}[]=+*abcdefλπΣ";

    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "#34d399";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full opacity-70" />;
}
