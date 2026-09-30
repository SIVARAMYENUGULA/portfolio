import { ArrowDown } from "lucide-react";

export function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex w-full flex-col items-center gap-2">
          <div className="w-full max-w-xs rounded-lg border border-border bg-muted/40 px-4 py-3 text-center font-mono text-sm text-foreground">
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowDown className="size-4 text-accent" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
