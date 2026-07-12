// Experience timeline. Data from src/data/experience.js.
import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Timeline() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-[var(--container)] px-6 py-24">
        <p className="label-mono"><span className="text-accent-red">04</span> / Experience</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Where I've worked.
        </h2>

        <ol className="mt-12 space-y-12 border-l border-border pl-8 md:pl-12">
          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-accent-red md:-left-[calc(3rem+5px)]" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{job.position}</h3>
                <p className="label-mono">{job.dates}</p>
              </div>
              <p className="mt-1 text-accent-blue">{job.company}</p>
              <p className="text-sm text-muted">{job.location}</p>

              <ul className="mt-4 space-y-2 text-muted">
                {job.bullets.map((b, k) => (
                  <li key={k} className="flex gap-3">
                    <span className="text-accent-red">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Gallery — only renders if this entry has images. */}
              {job.gallery && job.gallery.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {job.gallery.map((src, k) => (
                    <img
                    key={k}
                    src={src}
                    alt=""
                    className="h-64 w-auto border border-border object-contain"
                    />
                    ))}
                    </div>
                  )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}