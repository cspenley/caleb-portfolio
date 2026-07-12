// Skills grid. Data comes from src/data/skills.js.
import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-[var(--container)] px-6 py-24">
        <p className="label-mono"><span className="text-accent-red">02</span> / Toolkit</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Skills.</h2>

        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background p-6"
            >
              <p className="label-mono mb-4 text-accent-blue">{group.category}</p>
              <ul className="space-y-2">
                {group.items.map((s) => (
                  <li key={s} className="text-sm">{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
