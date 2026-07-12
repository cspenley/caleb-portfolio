import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectGrid from "../components/ProjectGrid";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caleb Penley — Automotive Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Caleb Penley — mechanical engineering student at the University of Maryland focused on automotive design, manufacturing, and shop-floor tooling.",
      },
      { property: "og:title", content: "Caleb Penley — Automotive Engineer" },
      {
        property: "og:description",
        content: "Automotive engineering portfolio: FSAE, MBUSI, and manufacturing projects.",
      },
    ],
  }),
  component: Home,
});

// ============================================================
// PAGE LAYOUT — reorder, add, or remove sections here.
// Each <Component /> below is a section of the home page.
// To hide a section: delete or comment out its line.
// To reorder: move the lines up/down.
// To add a new section: create a component in src/components/
// and drop it in wherever you want it to appear.
// ============================================================
function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectGrid />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
