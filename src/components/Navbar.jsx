// Sticky top navigation with a mobile hamburger menu.
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { site } from "../data/site";
import { projects } from "../data/projects";

// Renders a section-link ("About", "Experience", "Contact", ...).
// If we're already on "/", a plain hash anchor is enough (native browser
// scroll). If we're on any other route (e.g. a project page), we have to
// route back to "/" first and then scroll to the hash — a plain <a href="#..">
// can't do that, it just tacks the hash onto the current URL and does nothing.
function SectionLink({ href, label, className, onClick }) {
  const { pathname } = useLocation();
  const hash = href.replace("#", "");

  if (pathname === "/") {
    return (
      <a href={href} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link to="/" hash={hash} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [projectsOpen, setProjectsOpen] = useState(false); // desktop dropdown
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false); // mobile accordion
  const dropdownRef = useRef(null);

  // Close the desktop dropdown on outside click.
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProjectsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
          {site.navLinks.map((l) =>
            l.label === "Projects" ? (
              <div key={l.href} ref={dropdownRef} className="relative flex items-center gap-1">
                <SectionLink
                  href={l.href}
                  label={l.label}
                  className="label-mono transition-colors hover:text-foreground"
                />
                <button
                  type="button"
                  aria-label="Show project list"
                  aria-expanded={projectsOpen}
                  onClick={() => setProjectsOpen((v) => !v)}
                  className="label-mono px-1 transition-colors hover:text-foreground"
                >
                  <span className={`inline-block transition-transform ${projectsOpen ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>

                {projectsOpen && (
                  <div className="absolute right-0 top-full mt-3 w-64 border border-border bg-background shadow-lg">
                    {projects.map((p) => (
                      <Link
                        key={p.slug}
                        to="/projects/$slug"
                        params={{ slug: p.slug }}
                        onClick={() => setProjectsOpen(false)}
                        className="block border-b border-border px-4 py-3 text-sm transition-colors last:border-b-0 hover:bg-surface hover:text-accent-red"
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <SectionLink
                key={l.href}
                href={l.href}
                label={l.label}
                className="label-mono transition-colors hover:text-foreground"
              />
            ),
          )}
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
          {site.navLinks.map((l) =>
            l.label === "Projects" ? (
              <div key={l.href}>
                <div className="flex items-center justify-between">
                  <SectionLink
                    href={l.href}
                    label={l.label}
                    className="label-mono"
                    onClick={() => setOpen(false)}
                  />
                  <button
                    type="button"
                    aria-label="Show project list"
                    aria-expanded={mobileProjectsOpen}
                    onClick={() => setMobileProjectsOpen((v) => !v)}
                    className="label-mono px-1"
                  >
                    <span className={`inline-block transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>
                </div>

                {mobileProjectsOpen && (
                  <div className="mt-3 flex flex-col gap-3 border-l border-border pl-4">
                    {projects.map((p) => (
                      <Link
                        key={p.slug}
                        to="/projects/$slug"
                        params={{ slug: p.slug }}
                        onClick={() => setOpen(false)}
                        className="text-sm text-muted transition-colors hover:text-accent-red"
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <SectionLink
                key={l.href}
                href={l.href}
                label={l.label}
                className="label-mono"
                onClick={() => {
                  setOpen(false);
                  setMobileProjectsOpen(false);
                }}
              />
            ),
          )}
        </nav>
      )}
    </header>
  );
}