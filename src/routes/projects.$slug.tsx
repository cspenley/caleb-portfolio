import type { ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects, getProject } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Caleb Penley` },
          { name: "description", content: loaderData.project.tagline },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.tagline },
          { property: "og:image", content: loaderData.project.cover },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="label-mono">Project not found. <Link to="/" className="text-accent-red">Back home →</Link></p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="label-mono">Something went wrong: {error.message}</p>
    </div>
  ),
  component: ProjectPage,
});

function Section({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <div className="grid gap-6 border-t border-border py-12 md:grid-cols-[1fr_2fr]">
      <div>
        <p className="label-mono text-accent-red">{label}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="text-lg leading-relaxed text-muted">{children}</div>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen">
      <Navbar />

      <article>
        {/* Hero */}
        <div className="relative h-[60vh] w-full overflow-hidden border-b border-border">
          <motion.img
            initial={{ scale: 1.05, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-[var(--container)] px-6 pb-12">
              <Link to="/" className="label-mono hover:text-foreground">← Back</Link>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
              <p className="mt-3 max-w-2xl text-lg text-muted">{project.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span key={t} className="border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-[var(--container)] px-6 py-16">
          <Section label="Overview" title="What it is">
            <p>{project.overview}</p>
          </Section>

          <Section label="Problem" title="What we were solving">
            <p>{project.problem}</p>
          </Section>

          <Section label="Constraints" title="Boundaries of the design">
            <ul className="space-y-2">
              {project.constraints.map((c: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent-blue">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section label="Process" title="How I got there">
            <p>{project.process}</p>
          </Section>

          <Section label="Solution" title="What I shipped">
            <p>{project.solution}</p>
          </Section>

          <Section label="Results" title="Outcomes">
            <ul className="space-y-2">
              {project.results.map((r: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent-red">→</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section label="Lessons" title="What I'd do differently">
            <p>{project.lessons}</p>
          </Section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="border-t border-border py-12">
              <p className="label-mono text-accent-red">Gallery</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((src: string, i: number) => (
                  <img key={i} src={src} alt="" className="aspect-[4/3] w-full object-cover" />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Next project */}
        <div className="border-t border-border">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group mx-auto flex max-w-[var(--container)] items-center justify-between gap-6 px-6 py-16"
          >
            <div>
              <p className="label-mono">Next project</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight transition-colors group-hover:text-accent-red">
                {next.title}
              </p>
            </div>
            <span className="text-4xl transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
