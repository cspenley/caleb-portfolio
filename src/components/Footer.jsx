import { site } from "../data/site";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-[var(--container)] flex-wrap items-center justify-between gap-4 px-6 py-8">
        <p className="label-mono">© {new Date().getFullYear()} {site.name}</p>
        <p className="label-mono">Built with React · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
