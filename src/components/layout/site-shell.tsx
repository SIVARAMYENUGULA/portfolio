"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { CommandPalette } from "@/components/layout/command-palette";
import { EasterEgg } from "@/components/layout/easter-egg";
import { ScrollProgress, BackToTop } from "@/components/layout/scroll-widgets";

export function SiteShell() {
  const [cmdOpen, setCmdOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar onOpenCommand={() => setCmdOpen(true)} />
      <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
      <BackToTop />
      <EasterEgg />
    </>
  );
}
