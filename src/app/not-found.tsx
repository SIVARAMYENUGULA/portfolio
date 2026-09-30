import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center px-5">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-30" />
      <div className="text-center">
        <p className="font-mono text-7xl font-semibold text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild variant="accent">
            <Link href="/">
              <Home className="size-4" /> Go home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#projects">
              <ArrowLeft className="size-4" /> View projects
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
