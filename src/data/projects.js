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
      "First time designing for strength, I expected topology optimization to hand me a finished part, but designing for CNC manufacturability mattered more than the optimized shape.",
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
      "Bolts were hand-tightened by feel. The standard read 'screw in four rotations,' no fixture or verification. Under-tightened bolts loosened down the line, and hitches would drop, occasionally onto a team member below a lifted car.",
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
      "A finished prototype isn't a finished job. I got pulled onto other work and let rollout slide; before it shipped, a loose hitch swung into a team member's shoulder. \n\nAlso realized my tool treated a symptom: the real fix was moving torque-down earlier in the line, which I told my manager and it’s now in progress with the plant expansion.",
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
      "Cross-team process restructuring aimed at bringing an overloaded station back down to a sustainable utilization rate.",
    overviewImage: "/images/projects/mbusi-can-process/connection.png",
    problem:
      "A new vehicle model launch pushed the CAN-tool window-up/window-down station to 115% utilization, unsustainable for the team members working it",
    problemImage: "/images/projects/mbusi-can-process/can-flow.png",
    constraints: [
      "Coordinate the fix across R&D, electrical, production, and series planning without disrupting an active launch",
      "Hard time window: the new model was only running at 5 cars a week for 3 weeks, so every idea had to be tested and validated inside that window or it missed its shot",
    ],
    process:
      "Video-timed trials of proposed restructurings to compare against each other. Worked with R&D to isolate why the new CAN connection took longer, then managed contractors relocating overhead rails/lighting/fans to extend tool reach, enabling process to be split between two stations.",
    processImage: "/images/projects/mbusi-can-process/on-line.png",
    solution:
      "Splitting the connection process across two stations, made possible by the extended overhead rail reach, absorbed the extra CAN connection time the new model required without adding headcount.",
    solutionImage: "/images/projects/mbusi-can-process/contractor.png",
    results: [
      "Utilization dropped from 115% to 97%",
      "Gained direct experience mapping five teams' competing constraints and building a solution that worked for everyone",
    ],
    resultsImage: "/images/projects/mbusi-can-process/util.png",
    lessons:
      "You can't make everyone happy, and trying to is how you end up with no solution at all. Working across that many teams with different goals means someone always has an issue with whatever you propose. We went through several ideas, and each one upset a different team for a different reason. The job wasn't finding an idea everyone loved, it was finding the one everyone could live with.",
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
      "A one-semester capstone covering problem definition, concept development, prototyping, full parametric design, testing, and a final presentation to a judging panel.",
    overviewImage: "/images/projects/capstone/umd.png",
    myRole:
      "Owned the leg-lift subsystem. The team landed on an inflatable bladder as the concept; I took it from there.",
    myRoleBullets: [
      "Prototyped with hand-pump wedge bags and heat-sealed trash bags to nail down feasibility and confirm the bladder's shape and size",
      "Calculated the inflation height needed to lift a 95th-percentile male's legs 6 inches and checked that against physical test data",
      "Ran a materials analysis in ANSYS to select the bladder material",
      "Designed and manufactured (in SOLIDWORKS) the clamp that attaches the bladder to the swivel seat",
      "Built the final air bladder used in the Design Expo presentation",
    ],
    myRoleImage: "",
    problem:
      "Existing stand-assist devices are built for in-home use. Sedans' low seat height puts elderly users at a mechanical disadvantage when standing, and nothing on the market addressed vehicle egress without requiring a permanent modification to the car.",
    problemImage: "",
    constraints: [
      "Raise the user's feet at least 6 inches to clear the door frame",
      "Fit a 17.32 in. × 16 in. × 2 in. stowed envelope on a Camry seat",
      "Support up to 300 lb (95th-percentile male)",
      "Require under 25 lbf from the user to rotate",
      "Weigh under 15 lb",
      "Run off a 12V car outlet",
      "Get the user out of the seat in under 30 seconds"
    ],
    process:
      "Iterated separately on three subsystems, the swivel bearing/base plate, the air bladder, and the cushion, then integrated them into one prototype. Validated with a user swivel pull test, an assisted pull test, and a 47-person lift-clearance test run live at Design Expo.",
    processImage: "",
    solution:
      "A turntable-bearing swivel cushion paired with an inflatable quarter-torus air bladder, powered through the vehicle's 12V outlet and controlled by a single switch.",
    solutionImage: "",
    results: [
      "Cut user rotation force by 47.6% (41.19 to 27.72 lbf average, statistically significant)",
      "Bladder performance (the subsystem I owned): tested across 47 users, 17 female (5'1–6'0) and 30 male (5'9–6'6), spanning a realistic adult range. Clearance margin, measured as ankle height minus the 5.5 in. door sill, ranged from -0.3 in. to +2.7 in. across all users, with a mean of 1.015 in. and a standard deviation of 0.812 in.",
      "Final device weighed 14 lb",
      "Full exit sequence took 45 seconds in testing, almost entirely bladder inflation time on a $5 pump. A higher-quality pump would likely bring that under the 30-second target",
    ],
    lessons:
      "There's an engineering design process for a reason. Early on, the team kept skipping to whatever solution sounded most efficient, then finding a flaw in it and starting over. That happened more than once. Once we actually followed the process, defined the problem first, let that definition set the real requirements, then brainstormed a concept against those requirements instead of against our gut, the rest of the semester moved fast. The slow part wasn't the engineering. It was skipping the step that tells you what you're actually engineering for.",
    lessonsImage: "",
    gallery: [],
  },
  {
    slug: "door-cover",
    title: "Mutilation Jigs",
    tagline: "Mutilation covers for Mercedes-Benz US International, Inc. (MBUSI) assembly line.",
    cover: "/images/projects/door-cover/on-car.png",
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
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}