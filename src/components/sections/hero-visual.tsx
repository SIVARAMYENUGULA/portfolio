"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { label: "Java", x: 50, y: 12 },
  { label: "Spring Boot", x: 82, y: 30 },
  { label: "REST API", x: 84, y: 62 },
  { label: "SQL", x: 60, y: 84 },
  { label: "Kafka", x: 30, y: 86 },
  { label: "ActiveMQ", x: 12, y: 60 },
  { label: "React", x: 16, y: 28 },
  { label: "Python", x: 50, y: 50 },
  { label: "AI/ML", x: 74, y: 48 },
];

const edges: [number, number][] = [
  [7, 0],
  [7, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
  [7, 8],
  [0, 1],
  [1, 2],
  [2, 3],
  [8, 2],
];

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-2xl border border-border bg-card/40 bg-dot" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_65%)]" />

      <div className="absolute left-3 top-3 flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-yellow-400/70" />
        <span className="size-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 font-mono text-[10px] text-muted-foreground">
          system.architecture
        </span>
      </div>

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--border)"
            strokeWidth={0.4}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduce ? 0 : 1, delay: 0.2 + i * 0.06 }}
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: reduce ? 0 : [0, i % 2 === 0 ? -5 : 5, 0],
          }}
          transition={{
            opacity: { delay: 0.3 + i * 0.05 },
            scale: { delay: 0.3 + i * 0.05, type: "spring", stiffness: 200 },
            y: {
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span
            className={`whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10px] shadow-sm sm:text-[11px] ${
              node.label === "Python" || node.label === "Java"
                ? "border-accent/50 bg-accent/15 text-foreground"
                : "border-border bg-card text-muted-foreground"
            }`}
          >
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
