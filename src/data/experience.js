// ============================================================
// EXPERIENCE — edit / add entries here. Newest first.
//
// GALLERY (optional): add a `gallery` array of image paths to any entry
// to show a photo grid under its bullet list. Leave it as an empty array
// (or remove the field entirely) and no gallery renders for that entry —
// same behavior as the project galleries.
// ============================================================

export const experience = [
  {
    company: "Mercedes-Benz U.S. International (MBUSI)",
    position: "Process Engineer, Co-op",
    dates: "Aug 2025 - Dec 2025",
    location: "Vance, AL",
    bullets: [
      "Designed an ergonomic trailer-hitch assembly tool for the GLE line, moving the station from a red to a green ergonomic score.",
      "Restructured the end-of-line CAN diagnostic process, consolidating 14 steps to 9 and cutting average diagnostic time ~30%.",
      "Ran the shop-floor trials, trained operators across three shifts, and wrote the updated standard work.",
    ],
    gallery: [],
  },
  {
    company: "Terps Racing — Formula SAE",
    position: "Vehicle Dynamics Engineer",
    dates: "Aug 2024 — Oct 2025",
    location: "University of Maryland",
    bullets: [
      "Owned the bellcrank redesign for the 2026 car, achieving a 38% mass reduction at FoS 2.4.",
      "Ran FEA and hand calculations against Adams Car load cases to validate suspension components.",
      "Machined final parts in-house on 3-axis CNC.",
    ],
    gallery: [],
  },
  {
    company: "Terrapin Works",
    position: "Technician",
    dates: "Feb 2025 — Present",
    location: "University of Maryland",
    bullets: [
      "Supported design-for-manufacturing reviews for student and faculty projects across CNC, 3D printing, and laser services.",
      "Ran the additive manufacturing shop floor and trained new operators on print prep and post-processing.",
    ],
    // Example — add your real files to public/images/experience/terrapin-works/
    // and uncomment:
    // gallery: [
    //   "/images/experience/terrapin-works/shop-floor.jpg",
    //   "/images/experience/terrapin-works/print-farm.jpg",
    // ],
    gallery: [
      "/images/experience/tw/brain.png",
      "/images/experience/tw/skull.png",
    ],
  },
];