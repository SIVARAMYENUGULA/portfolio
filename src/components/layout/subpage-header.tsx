import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Github } from "@/components/shared/brand-icons";
import { config } from "@/lib/constants";
import { personal } from "@/data/personal";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export function SubpageHeader() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to portfolio
        </Link>
        <div className="flex items-center gap-1">
          <a
            href={config.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="rounded-md p-2 text-muted-foreground hover:text-foreground"
          >
            <Github className="size-[1.15rem]" />
          </a>
          <ThemeToggle />
          <Button asChild variant="accent" size="sm" className="ml-1">
            <a href={config.resume} target="_blank" rel="noreferrer noopener">
              Resume
            </a>
          </Button>
        </div>
      </div>
      <span className="sr-only">{personal.name} — project details</span>
    </header>
  );
}
