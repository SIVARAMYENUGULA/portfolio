"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

/** Animates a number from 0 to `value` when `active` becomes true. */
export function useCountUp(value: number, active: boolean, duration = 1400) {
  const [count, setCount] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (!active) return;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(value);
      return;
    }
    let raf = 0;
    let start: number | null = null;

    const tick = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, active, duration, reduce]);

  return count;
}
