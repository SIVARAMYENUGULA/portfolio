import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { config, navLinks } from "@/lib/constants";
import { personal } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="#home"
              className="font-mono text-sm font-semibold text-foreground"
            >
              {personal.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {personal.tagline}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={config.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
              </a>
              <a
                href={config.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`mailto:${config.email}`}
                aria-label="Email"
                className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="font-mono">
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
