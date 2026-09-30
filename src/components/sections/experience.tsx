"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sparkles, Zap } from "lucide-react";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import type { ExperienceItem } from "@/types";
import { cn } from "@/lib/utils";

function PrimaryExperience({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = React.useState(true);
  return (
    <Reveal>
      <Card className="relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_70%)] blur-xl" />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                <Sparkles className="size-3" /> Current · Featured
              </div>
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                {item.role}
              </h3>
              <p className="mt-1 text-base text-foreground">{item.company}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {item.department} · {item.organization}
              </p>
            </div>
            <span className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
              {item.period}
            </span>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {item.summary}
          </p>

          {item.modernization && (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.modernization.map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-border bg-muted/60 px-2.5 py-1 font-mono text-xs text-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
          >
            {open ? "Hide details" : "Show details"}
            <ChevronDown
              className={cn(
                "size-4 transition-transform",
                open && "rotate-180"
              )}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-5 grid gap-2.5">
                  {item.contributions?.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {c}
                    </li>
                  ))}
                </ul>

                {item.automation && (
                  <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-border bg-muted/40 p-4">
                    <Zap className="mt-0.5 size-4 shrink-0 text-accent" />
                    <p className="text-sm text-muted-foreground">
                      {item.automation}
                    </p>
                  </div>
                )}

                {item.contexts && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Context
                    </span>
                    {item.contexts.map((c) => (
                      <Badge key={c} mono>
                        {c}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
            {item.technologies.map((t) => (
              <Badge key={t} mono className="text-[11px]">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

function InternshipCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <div className="relative pl-8">
        <span className="absolute left-0 top-1.5 flex size-5 items-center justify-center rounded-full border border-border bg-card">
          <span className="size-2 rounded-full bg-accent/70" />
        </span>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="text-sm font-medium text-foreground">{item.role}</h4>
          <span className="font-mono text-xs text-muted-foreground">
            {item.period}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{item.company}</p>
        <p className="mt-1 text-sm text-muted-foreground/80">{item.summary}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.technologies.map((t) => (
            <Badge key={t} mono className="text-[10px]">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Experience() {
  const primary = experiences.find((e) => e.type === "primary")!;
  const internships = experiences.filter((e) => e.type === "internship");

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      description="Enterprise application modernization at Lumen Technologies, backed by focused internships across full-stack and AI/ML."
    >
      <PrimaryExperience item={primary} />

      <div className="mt-12">
        <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Earlier Internships
        </h3>
        <div className="relative grid gap-8 border-l border-border pl-0 sm:grid-cols-2 sm:gap-x-10 sm:border-l-0 sm:pl-0">
          {internships.map((item, i) => (
            <InternshipCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
