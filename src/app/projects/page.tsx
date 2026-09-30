import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SubpageHeader } from "@/components/layout/subpage-header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Backend, full-stack, AI/ML, and IoT projects by Yenugula Surya Naga Sivaram.",
};

export default function ProjectsIndex() {
  const sorted = [...projects].sort((a, b) => a.priority - b.priority);
  return (
    <>
      <SubpageHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            All projects
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            A complete list of my work across backend, full-stack, AI/ML, and
            IoT.
          </p>
          <div className="mt-10 grid gap-4">
            {sorted.map((p) => (
              <Link key={p.id} href={`/projects/${p.slug}`}>
                <Card className="group flex flex-col gap-2 p-5 transition-colors hover:border-accent/50 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                      {p.category}
                    </span>
                    <h2 className="text-lg font-semibold text-foreground">
                      {p.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.tagline}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 5).map((t) => (
                        <Badge key={t} mono className="text-[10px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
