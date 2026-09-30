import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications & credentials"
      className="py-16 sm:py-20"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={(i % 3) * 0.06}>
            <Card className="group flex h-full items-start gap-3 p-5 transition-colors hover:border-accent/50">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-accent">
                <BadgeCheck className="size-4" />
              </span>
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-snug text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-flex items-center gap-1 text-xs text-accent hover:opacity-80"
                  >
                    View credential <ExternalLink className="size-3" />
                  </a>
                ) : null}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
