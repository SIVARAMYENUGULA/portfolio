"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react";
import { personal } from "@/data/personal";
import { config } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/sections/hero-visual";
import { Metrics } from "@/components/sections/metrics";

function RotatingRole() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % personal.roles.length),
      2600
    );
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-accent"
        >
          {personal.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_70%)] blur-2xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {personal.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {personal.headline[0]}
            <br />
            <span className="text-gradient">{personal.headline[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 font-mono text-sm text-muted-foreground sm:text-base"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="accent" size="lg">
              <a href="#projects">
                View My Work <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={config.resume} target="_blank" rel="noreferrer noopener">
                <FileText className="size-4" /> Download Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">
                <Mail className="size-4" /> Let&apos;s Connect
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div className="mb-5 flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="size-3.5 text-accent" />
          <span className="font-mono uppercase tracking-[0.2em]">
            Highlights
          </span>
        </div>
        <Metrics metrics={personal.metrics} />
      </div>
    </section>
  );
}
