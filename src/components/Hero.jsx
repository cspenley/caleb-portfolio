// Landing / hero section.
import { motion } from "framer-motion";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-[var(--container)] gap-12 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-mono mb-6">
            <span className="text-accent-red">/</span> Portfolio — 2026
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {site.name}.
            <br />
            <span className="text-muted">{site.title}.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center border border-accent-red bg-accent-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent"
            >
              View projects →
            </a>
            <a
              href={site.resumeUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              Download resume
            </a>
          </div>
        </motion.div>

        {/* ============================================================
            PROFILE PHOTO — swap the `src` URL below with your own photo.
            Options:
              1. Drop an image into src/assets/images/ and import it:
                   import photo from "../assets/images/me.jpg";
                 then use  src={photo}
              2. Or put it in public/ and use  src="/me.jpg"
              3. Or paste any absolute image URL.
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 border border-border" />
          <div className="absolute -right-3 -top-3 h-full w-full border border-accent-red/50" />
          <img
            src="public/images/BW Profile.jpg"
            alt="Caleb Penley"
            className="relative h-full w-full object-cover grayscale"
          />
        </motion.div>
      </div>
    </section>
  );
}
