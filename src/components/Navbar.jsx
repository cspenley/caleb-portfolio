// Sticky top navigation with a mobile hamburger menu.
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[var(--container)] items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-mono text-sm tracking-widest uppercase"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent-red">C.</span> Penley
        </Link>

        {/* Desktop links */}
        <nav className="hidden gap-8 md:flex">
          {site.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-mono transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-6 py-6 md:hidden">
          {site.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-mono"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
