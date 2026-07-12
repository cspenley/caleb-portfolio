// About section — bio, education, interests.
import { motion } from "framer-motion";
import { site } from "../data/site";

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-[var(--container)] gap-12 px-6 py-24 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="label-mono"><span className="text-accent-red">01</span> / About</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Building things that get made.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-lg leading-relaxed text-muted"
        >
          <p>{site.bio}</p>

          <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <p className="label-mono mb-2">Education</p>
              <p className="text-foreground">{site.education}</p>
            </div>
            <div>
              <p className="label-mono mb-2">Interests</p>
              <p className="text-foreground">{site.interests}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
