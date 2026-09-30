import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { personal } from "@/data/personal";
import { config } from "@/lib/constants";
import { Compass, Layers, Terminal } from "lucide-react";
import Image from "next/image";

export function About() {
  const { about } = personal;
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer focused on systems that hold up in production"
      description={about.introduction}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Card className="h-full p-6 sm:p-8">
            <div className="flex items-center gap-2 text-accent">
              <Compass className="size-4" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em]">
                Engineering Philosophy
              </h3>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              &ldquo;{about.philosophy}&rdquo;
            </p>

            <div className="mt-8 flex items-center gap-2 text-accent">
              <Layers className="size-4" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em]">
                Areas of Interest
              </h3>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {about.interests.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="h-full p-6 sm:p-8">
            {config.profileImage && (
              <div className="mb-6 flex items-center gap-4">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-full border border-border">
                  <Image
                    src={config.profileImage}
                    alt={personal.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {personal.name}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {personal.role}
                  </p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2 text-accent">
              <Terminal className="size-4" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em]">
                Technical Strengths
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.strengths.map((s) => (
                <Badge key={s} mono className="text-[11px]">
                  {s}
                </Badge>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
