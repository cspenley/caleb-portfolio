// Grid of project cards. Data comes from src/data/projects.js.
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-[var(--container)] px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="label-mono"><span className="text-accent-red">03</span> / Selected work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Projects.</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted md:block">
            A mix of vehicle, tooling, and process work. Hover a card for a preview, click for the full story.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
