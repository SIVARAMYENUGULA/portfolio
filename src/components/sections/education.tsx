import { GraduationCap, School } from "lucide-react";
import { education } from "@/data/education";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";

export function Education() {
  const primary = education.find((e) => e.level === "primary")!;
  const secondary = education.filter((e) => e.level === "secondary");

  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Card className="relative h-full overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_70%)] blur-xl" />
            <div className="relative flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
                <GraduationCap className="size-5" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {primary.degree}
                  </h3>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                    {primary.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-foreground">{primary.field}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {primary.institution}
                </p>
                <div className="mt-4 inline-flex items-baseline gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2">
                  <span className="font-mono text-2xl font-semibold text-foreground">
                    {primary.score}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {primary.scoreLabel}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-4">
          {secondary.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <Card className="flex items-start gap-3 p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground">
                  <School className="size-4" />
                </span>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground">
                    {item.degree}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.institution}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                    <span className="font-mono text-sm text-foreground">
                      {item.score} {item.scoreLabel}
                    </span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
