# Caleb Penley — Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Run locally

```bash
bun install
bun run dev
```

Then open the URL shown in the terminal.

## Where things live

```
src/
├─ components/     Reusable UI pieces (Navbar, Hero, About, ...)
├─ data/           EDIT HERE — your content
│  ├─ site.js         Name, title, bio, links, résumé path
│  ├─ projects.js     Project list (each object = one project)
│  ├─ experience.js   Timeline entries
│  └─ skills.js       Skills grouped by category
├─ routes/         Pages (TanStack Router, file-based)
│  ├─ index.tsx       Home page (composes the sections)
│  └─ projects.$slug.tsx  Individual project page (auto-generated per project)
└─ styles.css      Design tokens (colors, fonts, spacing)
```

## How to add a project

1. Open `src/data/projects.js`.
2. Copy one of the existing objects and paste it at the top or bottom of the list.
3. Change `slug` to something unique (this becomes the URL: `/projects/your-slug`).
4. Fill in the other fields. Any array (`constraints`, `results`, `gallery`) can be empty.
5. Save. The homepage grid and the project page update automatically.

## How to change colors

Open `src/styles.css` and edit the values under `:root` at the top. The main ones:

- `--background` — page background
- `--foreground` — main text color
- `--accent-red` — primary accent (buttons, highlights)
- `--accent-blue` — secondary accent

Colors use `oklch(...)`. You can paste any oklch value or use a tool like [oklch.com](https://oklch.com).

## How to change fonts

1. Pick fonts on [Google Fonts](https://fonts.google.com) and grab the `<link>` URL.
2. Open `src/routes/__root.tsx` and swap the `fonts.googleapis.com` URL with your new one.
3. Open `src/styles.css` and change `--font-sans` and/or `--font-mono` to the new family names.

## How to add images

- Small assets: drop them into `src/assets/images/` and import them in a component: `import photo from "../assets/images/photo.jpg"` then `<img src={photo} />`.
- Larger assets or images referenced by URL: put them in `public/` and reference as `/filename.jpg`.
- Your profile photo lives in `src/components/Hero.jsx` — search for the `<img` tag and swap the `src`.

## How to add your résumé

Drop your PDF into `public/resume.pdf`. The download button already points there.
To rename it, update `resumeUrl` in `src/data/site.js`.

## How to edit the navigation bar

Edit the `navLinks` array in `src/data/site.js`. Each entry has a `label` (what shows) and an `href` (a `#section-id` to scroll to).

## How to create a new project page

You don't have to. The file `src/routes/projects.$slug.tsx` renders every project in `projects.js` automatically. Just add the project data — the page appears.

## Deploying

This project uses TanStack Start (SSR-capable). The easiest paths:

**Vercel** — connect the GitHub repo and deploy. No config needed.

**Lovable** — click Publish in the top-right.

**GitHub Pages** — GitHub Pages serves static files only, so you'd need to configure a static build. For a simple SPA build, run `bun run build` and deploy the output directory to Pages. Vercel is the recommended path if you want zero config.
