"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Wrench,
  GraduationCap,
  Trophy,
  Mail,
  FileText,
  SunMoon,
  Search,
  CornerDownLeft,
} from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { config } from "@/lib/constants";

interface CommandItem {
  id: string;
  label: string;
  group: string;
  icon: React.ElementType;
  action: () => void;
  keywords?: string;
}

export function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const { setTheme, theme } = useTheme();
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const go = React.useCallback(
    (hash: string) => {
      setOpen(false);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    },
    [setOpen]
  );

  const openLink = React.useCallback(
    (url: string) => {
      setOpen(false);
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [setOpen]
  );

  const commands = React.useMemo<CommandItem[]>(
    () => [
      { id: "home", label: "Go to Home", group: "Navigation", icon: Home, action: () => go("home") },
      { id: "about", label: "Go to About", group: "Navigation", icon: User, action: () => go("about") },
      { id: "experience", label: "Go to Experience", group: "Navigation", icon: Briefcase, action: () => go("experience") },
      { id: "projects", label: "Go to Projects", group: "Navigation", icon: FolderGit2, action: () => go("projects") },
      { id: "skills", label: "Go to Skills", group: "Navigation", icon: Wrench, action: () => go("skills") },
      { id: "education", label: "Go to Education", group: "Navigation", icon: GraduationCap, action: () => go("education") },
      { id: "achievements", label: "Go to Achievements", group: "Navigation", icon: Trophy, action: () => go("achievements") },
      { id: "contact", label: "Go to Contact", group: "Navigation", icon: Mail, action: () => go("contact") },
      { id: "resume", label: "Download Resume", group: "Actions", icon: FileText, action: () => openLink(config.resume) },
      { id: "github", label: "Open GitHub", group: "Actions", icon: Github, action: () => openLink(config.github) },
      { id: "linkedin", label: "Open LinkedIn", group: "Actions", icon: Linkedin, action: () => openLink(config.linkedin) },
      {
        id: "theme",
        label: "Toggle Theme",
        group: "Actions",
        icon: SunMoon,
        keywords: "dark light mode",
        action: () => {
          setTheme(theme === "dark" ? "light" : "dark");
          setOpen(false);
        },
      },
    ],
    [go, openLink, setTheme, theme, setOpen]
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q) ||
        c.keywords?.toLowerCase().includes(q)
    );
  }, [query, commands]);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveIndex(0);
  }, [query, open]);

  React.useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(
        (i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1)
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.action();
    }
  };

  const groups = Array.from(new Set(filtered.map((c) => c.group)));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center p-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="size-4 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a command or search…"
                className="h-12 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                aria-label="Command search"
              />
              <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:block">
                ESC
              </kbd>
            </div>
            <div className="max-h-[52vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                  No results found.
                </p>
              )}
              {groups.map((group) => (
                <div key={group} className="mb-1">
                  <p className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {group}
                  </p>
                  {filtered
                    .filter((c) => c.group === group)
                    .map((c) => {
                      const globalIndex = filtered.indexOf(c);
                      const isActive = globalIndex === activeIndex;
                      const Icon = c.icon;
                      return (
                        <button
                          key={c.id}
                          onMouseEnter={() => setActiveIndex(globalIndex)}
                          onClick={c.action}
                          className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                            isActive
                              ? "bg-muted text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          <Icon className="size-4" />
                          <span className="flex-1">{c.label}</span>
                          {isActive && (
                            <CornerDownLeft className="size-3.5 opacity-60" />
                          )}
                        </button>
                      );
                    })}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
