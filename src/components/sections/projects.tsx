"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ExternalLink, ArrowUpRight, X, Star } from "lucide-react";
import { Github } from "@/components/shared/brand-icons";
import { projects, projectCategories } from "@/data/projects";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { cn } from "@/lib/utils";

const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50"
    >
      {project.featured && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
          <Star className="size-3" /> Featured
        </span>
      )}
      <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
        {project.category}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.tagline}
      </p>

      {project.keyAchievement && (
        <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-muted/60 px-2.5 py-1 font-mono text-xs text-foreground">
          <ArrowUpRight className="size-3.5 text-accent" />
          {project.keyAchievement}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((t) => (
          <Badge key={t} mono className="text-[10px]">
            {t}
          </Badge>
        ))}
        {project.technologies.length > 5 && (
          <Badge mono className="text-[10px]">
            +{project.technologies.length - 5}
          </Badge>
        )}
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
        <Button size="sm" variant="subtle" onClick={() => onOpen(project)}>
          Quick view
        </Button>
        <Button asChild size="sm" variant="ghost">
          <Link href={`/projects/${project.slug}`}>
            Details <ArrowUpRight className="size-3.5" />
          </Link>
        </Button>
        <div className="ml-auto flex items-center gap-1">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} GitHub`}
              className="rounded-md p-1.5 text-muted-foreground hover:text-foreground"
            >
              <Github className="size-4" />
            </a>
          ) : null}
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} live demo`}
              className="rounded-md p-1.5 text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function QuickView({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[85] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="size-5" />
            </button>
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <h3 className="mt-1 text-2xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Key Features
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Tech Stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <Badge key={t} mono className="text-[11px]">
                  {t}
                </Badge>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <Button asChild variant="accent" size="sm">
                <Link href={`/projects/${project.slug}`}>
                  View full case study <ArrowUpRight className="size-3.5" />
                </Link>
              </Button>
              {project.github && (
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Github className="size-4" /> GitHub
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Projects() {
  const [category, setCategory] = React.useState<string>("All");
  const [tech, setTech] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState<Project | null>(null);

  const sorted = React.useMemo(
    () => [...projects].sort((a, b) => a.priority - b.priority),
    []
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchTech = !tech || p.technologies.includes(tech);
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchTech && matchQuery;
    });
  }, [sorted, category, tech, query]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected projects"
      description="Backend, full-stack, AI/ML, and IoT work. Filter by category or technology, or search to explore."
    >
      <div className="mb-6 flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="h-10 w-full rounded-md border border-border bg-muted/40 pl-9 pr-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs transition-colors",
                category === c
                  ? "border-accent bg-accent/15 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Tech
          </span>
          {tech && (
            <button
              onClick={() => setTech(null)}
              className="rounded-full border border-accent bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] text-foreground"
            >
              {tech} ✕
            </button>
          )}
          {!tech &&
            allTechs.map((t) => (
              <button
                key={t}
                onClick={() => setTech(t)}
                className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                {t}
              </button>
            ))}
        </div>
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No projects match your filters.
        </p>
      )}

      <QuickView project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
