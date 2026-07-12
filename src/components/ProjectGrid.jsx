// Horizontal scrolling project rail.
// - Shows 3 cards on screen at desktop widths; the next card "peeks" from the right
//   so viewers know there are more projects to scroll to.
// - Scroll with mouse wheel / trackpad / touch, or use the arrow buttons.
// - Data comes from src/data/projects.js.
import { useRef } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    // Scroll roughly one card width at a time.
    const card = el.querySelector("[data-project-card]");
    const step = card ? card.getBoundingClientRect().width + 40 /* gap */ : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-[var(--container)] px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="label-mono"><span className="text-accent-red">03</span> / Selected work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Projects.</h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <p className="hidden max-w-sm text-sm text-muted lg:block">
              Scroll horizontally for more.
            </p>
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous projects"
              className="grid h-10 w-10 place-items-center border border-border text-foreground transition-colors hover:border-accent-red hover:text-accent-red"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next projects"
              className="grid h-10 w-10 place-items-center border border-border text-foreground transition-colors hover:border-accent-red hover:text-accent-red"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroller.
          - Left/right padding matches the container gutter, so the first card
            lines up with the section heading above and the 3 visible cards
            stay centered on the page.
          - Scroll snapping uses the same padding so cards snap flush with
            that left margin instead of jumping to the viewport edge.
          - The 4th card peeks in from the right to signal there's more. */}
      <div
        ref={scrollerRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-10 overflow-x-auto pb-16 pl-6 pr-6 [scroll-padding-left:1.5rem] md:pl-[max(1.5rem,calc((100vw-var(--container))/2))] md:pr-[max(1.5rem,calc((100vw-var(--container))/2))] md:[scroll-padding-left:max(1.5rem,calc((100vw-var(--container))/2))]"
      >
        {projects.map((p, i) => (
          <div
            key={p.slug}
            data-project-card
            className="snap-start shrink-0 basis-[80%] sm:basis-[55%] md:basis-[42%] lg:basis-[calc((var(--container)-5rem)/3)]"
          >
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>

    </section>
  );
}
