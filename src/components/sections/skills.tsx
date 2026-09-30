"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { skillGroups, engineeringStack, problemSolving } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

function SkillExplorer() {
  const [active, setActive] = React.useState(skillGroups[0].category);
  const group = skillGroups.find((g) => g.category === active)!;

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-col gap-6 md:flex-row">
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-row flex-wrap gap-1.5 md:w-56 md:flex-col md:flex-nowrap"
        >
          {skillGroups.map((g) => (
            <button
              key={g.category}
              role="tab"
              aria-selected={active === g.category}
              onClick={() => setActive(g.category)}
              className={cn(
                "rounded-md px-3 py-2 text-left text-sm transition-colors",
                active === g.category
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              {g.category}
            </button>
          ))}
        </div>

        <div className="flex-1 md:border-l md:border-border md:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Card>
  );
}

function EngineeringStack() {
  return (
    <div className="mt-8">
      <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Engineering Stack
      </h3>
      <div className="grid gap-3">
        {engineeringStack.map((layer, i) => (
          <React.Fragment key={layer.layer}>
            <Reveal delay={i * 0.05}>
              <Card className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-40 shrink-0 font-mono text-xs uppercase tracking-wider text-accent">
                  {layer.layer}
                </span>
                <div className="flex flex-wrap gap-2">
                  {layer.skills.map((s) => (
                    <Badge key={s} mono className="text-[11px]">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
            {i < engineeringStack.length - 1 && (
              <div className="flex justify-center text-border">
                <ArrowDown className="size-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ProblemSolving() {
  return (
    <Reveal>
      <Card className="mt-8 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="sm:border-r sm:border-border sm:pr-8">
            <p className="font-mono text-4xl font-semibold text-foreground">
              {problemSolving.count}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {problemSolving.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {problemSolving.platforms.map((p) => (
                <Badge key={p} mono className="text-[10px]">
                  {p}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Focus Areas
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {problemSolving.focusAreas.map((f) => (
                <span
                  key={f}
                  className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-sm text-foreground"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      description="Organized by domain — explore each area, or trace the full engineering stack from frontend to AI/ML."
    >
      <SkillExplorer />
      <EngineeringStack />
      <ProblemSolving />
    </Section>
  );
}
