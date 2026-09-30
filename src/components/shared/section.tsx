import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-20 sm:py-28", className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", containerClassName)}>
        <Reveal>
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            )}
            <h2
              id={`${id}-heading`}
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
