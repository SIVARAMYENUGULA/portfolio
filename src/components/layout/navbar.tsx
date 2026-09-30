"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Command } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { cn } from "@/lib/utils";
import { navLinks, config } from "@/lib/constants";
import { personal } from "@/data/personal";
import { useActiveSection } from "@/lib/use-active-section";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar({ onOpenCommand }: { onOpenCommand: () => void }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const active = useActiveSection(sectionIds);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border" : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-14" : "h-16"
        )}
        aria-label="Primary"
      >
        <Link
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          {config.profileImage ? (
            <span className="relative size-8 shrink-0 overflow-hidden rounded-md border border-border">
              <Image
                src={config.profileImage}
                alt={personal.name}
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </span>
          ) : (
            <span className="flex size-8 items-center justify-center rounded-md border border-border bg-muted text-accent">
              {personal.initials}
            </span>
          )}
          <span className="hidden text-foreground sm:inline">
            {personal.shortName}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-1.5 text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-muted"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onOpenCommand}
            aria-label="Open command palette"
            className="hidden items-center gap-2 rounded-md border border-border bg-muted/50 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            <Command className="size-3.5" />
            <span className="font-mono">⌘K</span>
          </button>
          <a
            href={config.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            <Github className="size-[1.15rem]" />
          </a>
          <a
            href={config.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            <Linkedin className="size-[1.15rem]" />
          </a>
          <ThemeToggle />
          <Button
            asChild
            variant="accent"
            size="sm"
            className="ml-1 hidden sm:inline-flex"
          >
            <a href={config.resume} target="_blank" rel="noreferrer noopener">
              <FileText className="size-4" /> Resume
            </a>
          </Button>
          <button
            className="rounded-md p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-b border-border lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm transition-colors",
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 flex items-center gap-3">
                <Button asChild variant="accent" size="sm" className="flex-1">
                  <a
                    href={config.resume}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FileText className="size-4" /> Resume
                  </a>
                </Button>
                <a
                  href={config.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href={config.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
