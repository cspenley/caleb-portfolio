// ============================================================
// PROJECTS — add / remove / reorder projects by editing this list.
// To add a new project:
//   1. Copy an object below.
//   2. Give it a unique `slug` (used in the URL).
//   3. Fill in the fields. Leave any array empty if you don't have content yet.
//   4. Save. The site rebuilds automatically.
//
// SECTION IMAGES (new):
//   Each of overview / problem / process / solution / lessons has an
//   optional matching "...Image" field (e.g. overviewImage). Fill one in
//   with an image path and that section renders as image + text side by
//   side; leave it "" (empty string) and it stays text-only, same as before.
//   The side (left/right) alternates automatically between whichever
//   sections actually have an image — you don't set that yourself.
// ============================================================

export const projects = [
  {
    slug: "fsae-bellcranks",
    title: "FSAE Bellcranks",
    tagline: "Suspension actuation redesign for Terps Racing.",
    cover: "/images/projects/fsae-bellcranks/comp.png",
    tech: ["SolidWorks", "FEA", "CNC Machining", "Aluminum 7075"],
    overview:
      "Designed for the TR25 car, University of Maryland's 2025 Formula SAE entry.",
    overviewImage: "",
    problem:
      "Geometry change removed the moment about the bellcrank's axis, which meant material that used to be doing structural work wasn't needed anymore. The old bellcranks were bulky relative to what the new geometry actually demanded.",
    problemImage: "/images/projects/fsae-bellcranks/old-fbc.jpg",
    constraints: [
      "CNC-machinable",
      "Front bellcrank: 1,500+ lbf capacity from pushrod, FOS 1.8",
      "Rear bellcrank: 900+ lbf capacity from pushrod, FOS 2.0, with more off-plane loading tolerance than the front",
      "Geometry and motion ratio were locked in by Lotus Shark work done earlier in the season (team effort)",
    ],
    constraintsImage: "/images/projects/fsae-bellcranks/lotus-graph.png",
    process:
      "Iterative CAD and FEA cycles aimed at cutting weight without giving up strength. Front bellcrank went through 15 CAD iterations and 12 FEA studies across 3 load cases. Rear went through 9 iterations and 15 FEA studies to account for the off-plane loading.",
    processImage: "/images/projects/fsae-bellcranks/fbc-fea-fos.png",
    solution:
      "Two distinct bellcrank geometries, one front and one rear, each cut down to the minimum material the load case would allow and built for CNC machinability.",
    solutionImage: "/images/projects/fsae-bellcranks/fbc-cad.png",
    results: [
      {
        heading: "Bellcranks",
        items: [
          "Front: 28.35% mass reduction, 13.8% cost reduction, fatigue life of 11,960 cycles at max load",
          "Rear: 27.36% mass reduction, 9.93% cost reduction, fatigue life of 12,100 cycles at max load",
        ],
      },
      {
        heading: "Team",
        items: [
          "Weight: 223.6 kg in 2024 --> 213.2 kg in 2025",
          "Autocross: 43rd in 2024 --> 25th in 2025",
          "Overall: 43rd in 2024 --> 25th in 2025",
        ],
      },
    ],
    resultsImage: "/images/projects/fsae-bellcranks/fbc-car-3.jpg",
    lessons:
      "This was my first time designing a part for strength; I thought topology optimization would just generate how the lightest part would look and then we’d manufacture. It was cool to see an optimized part and use it to reference what material could be removed, but designing for CNC was much more important. Also learned to set up FEA correctly the hard way. Made incorrect assumptions early on, mixed kg and lbf more than once, and it caused me to rerun simulations and reiterate a few times.",
    lessonsImage: "/images/projects/fsae-bellcranks/topology.png",
    gallery: ["/videos/projects/fsae-bellcranks/testing.mp4", "/videos/projects/fsae-bellcranks/testing-2.mp4", "/videos/projects/fsae-bellcranks/testing-3.mp4"
    ],
  },
  {
    slug: "mbusi-trailer-hitch-tool",
    title: "MBUSI Trailer Hitch Tool",
    tagline: "Ergonomic assembly fixture for the GLE production line.",
    cover: "/images/projects/mbusi-hitch/cad-front.png",
    tech: ["CATIA V5", "Sheet Metal", "Pneumatics", "Ergonomics"],
    overview:
      "A battery-powered tool attachment built to standardize trailer hitch installation on the line, aimed at eliminating a repeated safety hazard.",
    overviewImage: "",
    problem:
      "The written instruction for the trailer hitch was 'insert [bolt] and screw in by four rotations.' That's it. No fixture, no verification, just a team member's judgment on the line. Bolts installed short of four rotations would come loose as the car traveled down the line, and trailer hitches would drop. Occasionally, with the car in a lifted position, a dropped hitch would come down on a team member's head.",
    problemImage: "/images/projects/mbusi-hitch/dropped.png",
    constraints: [
      "Synchronize two bolt outputs from a single input shaft",
      "Stop threading at exactly four rotations so thread locker wouldn't engage prematurely and cause problems when the bolts were torqued down later",
      "Standardize the process so the outcome didn't depend on a team member remembering to count to four",
    ],
    constraintsImage: "/images/projects/mbusi-hitch/bolt.png",
    process:
      "Designed and 3D printed a prototype using both SOLIDWORKS and NX to validate the mechanism before committing to manufacture. The final mechanism uses a socket sleeve that contacts the hitch; the bolt screws itself out of the socket once it's seated, so there's no way to under- or over-thread it.",
    processImage: "/images/projects/mbusi-hitch/fitment.png",
    solution:
      "A multi-spindle hand-start tool that converts one input rotation into two synchronized outputs, removing error from the four-rotation count entirely.",
    solutionImage: "/images/projects/mbusi-hitch/cad-exploded.png",
    results: [
      "Once implemented, eliminated the drop incidents",
      "Cut process time from 7 to 3 seconds (57%)",
      "Cut attachment’s per-unit cost from $11,800 to $3,600 (70%) and lead time from 10 to 2 weeks (80%) by designing in-house instead of paying supplier design fees",
    ],
    resultsImage: "/images/projects/mbusi-hitch/hitch-test.png",

    lessons:
      "Finishing the prototype isn't finishing the job. I got pulled onto other projects toward the end of my co-op term and let implementation slide. In my last week, a trailer hitch came loose and swung into a team member, hitting their shoulder. They were okay, but the incident happened after the fix already existed and just hadn't been rolled out. Lesson: implement as fast as the solution allows, because a working prototype sitting on a shelf is no good. \n\nAlso, sometimes the real fix isn't the one you're building. The trailer hitch gets hand-tightened at the start of the assembly line and torqued down at the end, because there's no room early on for a high-torque assist device. That sequence is the actual root cause, and my tool is a band-aid, not a cure. I recommended to my manager that the process get restructured so the hitch is torqued down early instead of late. That's expensive and disruptive, but it's in progress as the plant expansion is currently under construction.",
    lessonsImage: "/images/projects/mbusi-hitch/melted-gear.png",
    gallery: [],
  },
  {
    slug: "mbusi-can-tool-restructure",
    title: "MBUSI CAN Tool Process Restructure",
    tagline: "Rebuilt the diagnostic workflow for end-of-line vehicle testing.",
    cover: "/images/projects/mbusi-can-process/on-line.png",
    tech: ["CAN Bus", "Python", "Vector CANoe", "Process Design"],
    overview:
      "Restructured the end-of-line CAN diagnostic process to cut redundant test steps and standardize how failures were escalated.",
    overviewImage: "",
    problem:
      "The existing CAN tooling workflow had grown organically over years — steps were duplicated across stations and failures took multiple hand-offs to resolve.",
    problemImage: "/images/projects/mbusi-can-process/can-flow.png",
    constraints: [
      "No changes to certified test coverage",
      "Rollout with no line stop",
      "Training material for three shifts",
    ],
    process:
      "Mapped the current process, interviewed operators and engineers on every shift, identified redundant reads, and rewrote the standard work.",
    processImage: "",
    solution:
      "Consolidated 14 diagnostic steps into 9, added a single escalation path, and wrote Python helpers for the two most common failure modes.",
    solutionImage: "",
    results: [
      "~30% reduction in average diagnostic time",
      "Fewer repeat visits from the same vehicle",
      "Adopted as the standard across the plant",
    ],
    lessons:
      "Process work is engineering. The tool didn't change — how people used it did, and that was the whole win.",
    lessonsImage: "",
    gallery: [],
  },
  {
    slug: "senior-capstone",
    title: "Senior Capstone Project",
    tagline: "Year-long interdisciplinary design project.",
    cover: "/images/projects/capstone/group.jpg",
    tech: ["SolidWorks", "Prototyping", "Team Lead", "Testing"],
    overview:
      "Senior capstone project bringing together mechanical design, analysis, and manufacturing into a single year-long deliverable.",
    overviewImage: "/images/projects/capstone/umd.png",
    problem:
      "Placeholder problem statement — replace with the real capstone problem once the team scope is locked in.",
    problemImage: "",
    constraints: [
      "Budget cap set by the department",
      "Deliverable demo at end-of-year showcase",
      "Must integrate work from all four team members",
    ],
    process:
      "Placeholder process description. Update with concept selection, CAD iteration, and testing milestones as the project progresses.",
    processImage: "",
    solution:
      "Placeholder solution description — swap in the final design once built.",
    solutionImage: "",
    results: [
      "Placeholder result 1",
      "Placeholder result 2",
    ],
    lessons:
      "Placeholder lessons — fill in after the final review.",
    lessonsImage: "",
    gallery: [],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}