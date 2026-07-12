// One project card. Shows image + overlay on hover.
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group block"
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-border">
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="label-mono text-accent-red">View project →</p>
            <p className="mt-2 text-sm text-foreground">{project.tagline}</p>
          </div>

          {/* Red corner accent */}
          <div className="absolute left-0 top-0 h-8 w-px bg-accent-red" />
          <div className="absolute left-0 top-0 h-px w-8 bg-accent-red" />
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </div>
          <span className="label-mono shrink-0 pt-1">0{index + 1}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
