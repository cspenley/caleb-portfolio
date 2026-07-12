// ============================================================
// PROJECTS — add / remove / reorder projects by editing this list.
// To add a new project:
//   1. Copy an object below.
//   2. Give it a unique `slug` (used in the URL).
//   3. Fill in the fields. Leave any array empty if you don't have content yet.
//   4. Save. The site rebuilds automatically.
// ============================================================

export const projects = [
  {
    slug: "fsae-bellcranks",
    title: "FSAE Bellcranks",
    tagline: "Suspension actuation redesign for Terps Racing.",
    cover: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=1600&q=80",
    tech: ["SolidWorks", "FEA", "CNC Machining", "Aluminum 7075"],
    overview:
      "Redesigned front and rear bellcranks for the 2026 Formula SAE car to reduce mass while maintaining a target factor of safety under peak cornering load.",
    problem:
      "The previous bellcranks were over-built for the loads they saw, adding unsprung and rotating inertia to the suspension.",
    constraints: [
      "Factor of safety > 2.0 under 3G bump + cornering",
      "Machinable on 3-axis CNC in a single setup",
      "Interface with existing pushrod and damper geometry",
    ],
    process:
      "Load cases were pulled from Adams Car simulations, translated into SolidWorks Simulation, and iterated across five topology revisions before settling on a pocketed 7075-T6 design.",
    solution:
      "Final part is a pocketed monolithic bellcrank with press-fit bearing races and integrated damper clevis.",
    results: [
      "38% mass reduction vs. previous season",
      "FoS 2.4 under worst-case load",
      "Reduced setup time on the CNC by ~40%",
    ],
    lessons:
      "Topology optimization is a starting point, not the answer. Manufacturing constraints shaped the final geometry more than the FEA did.",
    gallery: [],
  },
  {
    slug: "mbusi-trailer-hitch-tool",
    title: "MBUSI Trailer Hitch Tool",
    tagline: "Ergonomic assembly fixture for the GLE production line.",
    cover: "https://images.unsplash.com/photo-1581092918484-8313e0f8f9b3?w=1600&q=80",
    tech: ["CATIA V5", "Sheet Metal", "Pneumatics", "Ergonomics"],
    overview:
      "Designed a line-side tool that reduced operator strain when installing the trailer hitch subassembly on the Mercedes-Benz GLE.",
    problem:
      "Operators were lifting a ~25 lb subassembly overhead multiple times per shift, creating an ergonomic red-flag on the standard work analysis.",
    constraints: [
      "Fit within existing station footprint",
      "Cycle time neutral or better",
      "Compliant with MBUSI ergonomic scoring",
    ],
    process:
      "Time-studied the existing station, prototyped three fixture concepts in CATIA, reviewed with production and safety, then built and iterated on the shop floor.",
    solution:
      "Pneumatically-assisted balancer arm with a custom end effector that locates on two datum pins and clamps the hitch bracket.",
    results: [
      "Ergonomic score moved from red to green",
      "Cycle time reduced by 6 seconds per unit",
      "Zero related incidents since deployment",
    ],
    lessons:
      "Operators know more about the station than any drawing does. Every fixture I shipped got better after the first shift of feedback.",
    gallery: [],
  },
  {
    slug: "mbusi-can-tool-restructure",
    title: "MBUSI CAN Tool Process Restructure",
    tagline: "Rebuilt the diagnostic workflow for end-of-line vehicle testing.",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&q=80",
    tech: ["CAN Bus", "Python", "Vector CANoe", "Process Design"],
    overview:
      "Restructured the end-of-line CAN diagnostic process to cut redundant test steps and standardize how failures were escalated.",
    problem:
      "The existing CAN tooling workflow had grown organically over years — steps were duplicated across stations and failures took multiple hand-offs to resolve.",
    constraints: [
      "No changes to certified test coverage",
      "Rollout with no line stop",
      "Training material for three shifts",
    ],
    process:
      "Mapped the current process, interviewed operators and engineers on every shift, identified redundant reads, and rewrote the standard work.",
    solution:
      "Consolidated 14 diagnostic steps into 9, added a single escalation path, and wrote Python helpers for the two most common failure modes.",
    results: [
      "~30% reduction in average diagnostic time",
      "Fewer repeat visits from the same vehicle",
      "Adopted as the standard across the plant",
    ],
    lessons:
      "Process work is engineering. The tool didn't change — how people used it did, and that was the whole win.",
    gallery: [],
  },
  {
    slug: "senior-capstone",
    title: "Senior Capstone Project",
    tagline: "Year-long interdisciplinary design project.",
    cover: "https://images.unsplash.com/photo-1581091012184-5c58aa0f0f4b?w=1600&q=80",
    tech: ["SolidWorks", "Prototyping", "Team Lead", "Testing"],
    overview:
      "Senior capstone project bringing together mechanical design, analysis, and manufacturing into a single year-long deliverable.",
    problem:
      "Placeholder problem statement — replace with the real capstone problem once the team scope is locked in.",
    constraints: [
      "Budget cap set by the department",
      "Deliverable demo at end-of-year showcase",
      "Must integrate work from all four team members",
    ],
    process:
      "Placeholder process description. Update with concept selection, CAD iteration, and testing milestones as the project progresses.",
    solution:
      "Placeholder solution description — swap in the final design once built.",
    results: [
      "Placeholder result 1",
      "Placeholder result 2",
    ],
    lessons:
      "Placeholder lessons — fill in after the final review.",
    gallery: [],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
