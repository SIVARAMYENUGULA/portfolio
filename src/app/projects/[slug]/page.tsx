import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/shared/brand-icons";
import { projects } from "@/data/projects";
import { config } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SubpageHeader } from "@/components/layout/subpage-header";
import { Footer } from "@/components/layout/footer";
import { ArchitectureDiagram } from "@/components/shared/architecture-diagram";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm text-muted-foreground"
        >
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <SubpageHeader />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <Badge mono className="text-[11px]">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge mono className="border-accent/40 bg-accent/10 text-accent">
                Featured
              </Badge>
            )}
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.github ? (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Github className="size-4" /> View source
                </a>
              </Button>
            ) : (
              <span className="rounded-md border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground">
                Source link coming soon
              </span>
            )}
            {project.liveDemo && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <ExternalLink className="size-4" /> Live demo
                </a>
              </Button>
            )}
          </div>

          <Card className="mt-8 flex flex-wrap gap-2 p-5">
            {project.technologies.map((t) => (
              <Badge key={t} mono className="text-[11px]">
                {t}
              </Badge>
            ))}
          </Card>

          <div className="mt-10 space-y-8">
            {project.problem && (
              <Block title="Problem">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </Block>
            )}
            {project.solution && (
              <Block title="Solution">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </Block>
            )}
            {project.architecture && (
              <Block title="Architecture">
                <ArchitectureDiagram steps={project.architecture} />
              </Block>
            )}
            <Block title="Key Features">
              <div className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                <List items={project.features} />
              </div>
            </Block>
            {project.challenges && (
              <Block title="Technical Challenges">
                <List items={project.challenges} />
              </Block>
            )}
            {project.decisions && (
              <Block title="Engineering Decisions">
                <List items={project.decisions} />
              </Block>
            )}
            {project.results && (
              <Block title="Results">
                <List items={project.results} />
              </Block>
            )}
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            <Link
              href="/#projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← All projects
            </Link>
            <a
              href={config.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm text-accent hover:opacity-80"
            >
              More on GitHub <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
