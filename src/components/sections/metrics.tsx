"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useCountUp } from "@/lib/use-count-up";
import type { Metric } from "@/types";

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  const value = useCountUp(metric.value, inView);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="rounded-xl border border-border bg-card p-4"
    >
      <p className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
        {metric.prefix}
        {value}
        {metric.suffix}
      </p>
      <p className="mt-1 text-xs leading-snug text-muted-foreground">
        {metric.label}
      </p>
    </motion.div>
  );
}

export function Metrics({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {metrics.map((m, i) => (
        <MetricCard key={m.label} metric={m} index={i} />
      ))}
    </div>
  );
}

export function useReduced() {
  return useReducedMotion();
}
