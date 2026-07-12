// Contact section — email + social links.
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-[var(--container)] px-6 py-24">
        <p className="label-mono"><span className="text-accent-red">05</span> / Contact</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Let's build <span className="text-accent-red">something.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">
          I'm looking for full-time automotive engineering roles starting December 2026, and open to summer 2026 internships in the meantime.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="border border-accent-red bg-accent-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
          >
            LinkedIn ↗
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
