// ============================================================
// SITE CONFIG — your name, links, and top-level copy live here.
// ============================================================

import { withBase } from "../lib/utils";
export const site = {
  name: "Caleb Penley",
  title: "Automotive Engineer",
  intro:
    "Mechanical engineering student at the University of Maryland building cars, tools, and processes for the shop floor.",
  bio:
    "I'm a mechanical engineering student at the University of Maryland (Dec 2026) focused on automotive design and manufacturing. I balance design, fabrication, and clear communication to turn user needs into engineering solutions. I enjoy working on projects that require both technical and creative problem-solving.",
  education: "B.S. Mechanical Engineering, University of Maryland (December 2026)",
  interests: "Motorsport, digital photography, camping & hiking, and basketball.",
  email: "cpenley@umd.edu",
  linkedin: "https://www.linkedin.com/in/caleb-penley",
  resumeUrl: withBase("/caleb-penley-resume.pdf"), // Replace public/resume.pdf with your file.
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
