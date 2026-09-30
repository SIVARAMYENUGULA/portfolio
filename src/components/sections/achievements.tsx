import { Trophy, Users, Medal, BookOpen, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { achievements } from "@/data/achievements";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Users,
  Medal,
  BookOpen,
  Code2,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Achievements & involvement"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = iconMap[a.icon] ?? Trophy;
          return (
            <Reveal key={a.id} delay={(i % 3) * 0.06}>
              <Card className="h-full p-5 transition-colors hover:border-accent/50">
                <span className="flex size-10 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {a.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
