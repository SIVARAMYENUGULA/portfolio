import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  mono = false,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { mono?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs text-muted-foreground transition-colors",
        mono && "font-mono",
        className
      )}
      {...props}
    />
  );
}
