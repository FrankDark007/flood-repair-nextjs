export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "vienna-va-water-damage-first-24-hours",
    title: "Vienna, VA: What to Do in the First 24 Hours After Water Damage",
    description:
      "A practical checklist for homeowners responding to water damage in Vienna, VA.",
    date: "2026-02-01",
    readTime: "5 min read",
    category: "Emergency Response",
    intro:
      "Fast action limits damage. Here’s a clear 24-hour plan to stabilize your home and prepare for restoration.",
    sections: [
      {
        heading: "Shut off the source",
        body:
          "Stop the water supply if safe. If the leak is inside walls or ceilings, call a professional immediately.",
      },
      {
        heading: "Document the damage",
        body:
          "Take photos and short videos before moving items. This helps with insurance documentation.",
      },
      {
        heading: "Call for professional drying",
        body:
          "Water in walls or subfloors needs professional drying to prevent mold and structural issues.",
      },
    ],
  },
  {
    slug: "northern-virginia-flood-cleanup-safety",
    title: "Flood Cleanup Safety Tips for Northern Virginia Properties",
    description:
      "Key safety steps to take before and during flood cleanup in Northern Virginia.",
    date: "2026-02-02",
    readTime: "4 min read",
    category: "Safety",
    intro:
      "Floodwater can be hazardous. Use these safety precautions before re-entering and cleaning up.",
    sections: [
      {
        heading: "Assume contamination",
        body:
          "Floodwater often contains contaminants. Wear protective gear and keep children and pets away.",
      },
      {
        heading: "Power and electrical hazards",
        body:
          "If water reached outlets or panels, shut off power and contact an electrician before cleanup.",
      },
      {
        heading: "Ventilation matters",
        body:
          "Open windows when possible and use dehumidification to reduce humidity quickly.",
      },
    ],
  },
  {
    slug: "burst-pipe-cleanup-winter-prep",
    title: "Burst Pipe Cleanup and Winter Prep in Vienna, VA",
    description:
      "How to respond to a burst pipe and steps to prevent winter water damage.",
    date: "2026-02-03",
    readTime: "6 min read",
    category: "Prevention",
    intro:
      "Frozen pipes are a common cause of winter damage. Here’s how to respond and prevent repeat issues.",
    sections: [
      {
        heading: "Immediate response",
        body:
          "Shut off the water, move valuables, and call for extraction and drying as soon as possible.",
      },
      {
        heading: "Inspect hidden cavities",
        body:
          "Water travels quickly inside walls. Moisture mapping can reveal hidden damage.",
      },
      {
        heading: "Prevent the next freeze",
        body:
          "Insulate vulnerable pipes and keep cabinets open to allow warm air circulation.",
      },
    ],
  },
  {
    slug: "mold-remediation-warning-signs",
    title: "Mold Warning Signs After Water Damage",
    description:
      "How to spot early mold risks after a leak or flood event.",
    date: "2026-02-04",
    readTime: "5 min read",
    category: "Mold",
    intro:
      "Mold can start within 24–48 hours. These early signs help you act fast.",
    sections: [
      {
        heading: "Musty odors",
        body:
          "Persistent musty smells often indicate moisture trapped behind walls or under floors.",
      },
      {
        heading: "Visible discoloration",
        body:
          "Spots on drywall, baseboards, or ceilings can signal mold growth or moisture staining.",
      },
      {
        heading: "Humidity above normal",
        body:
          "If indoor humidity stays high after drying, additional dehumidification may be needed.",
      },
    ],
  },
  {
    slug: "insurance-claims-restoration-docs",
    title: "What Insurance Adjusters Need After Water Damage",
    description:
      "Documentation steps that help claims move faster after restoration events.",
    date: "2026-02-05",
    readTime: "4 min read",
    category: "Insurance",
    intro:
      "Clear documentation speeds claims. Here’s the information adjusters typically request.",
    sections: [
      {
        heading: "Photos and scope",
        body:
          "Before and after photos plus a written scope clarify what was affected and why work was needed.",
      },
      {
        heading: "Moisture readings",
        body:
          "Drying logs help prove the space was properly restored to safe standards.",
      },
      {
        heading: "Invoices and timelines",
        body:
          "Itemized invoices and a timeline of work keep the claim transparent.",
      },
    ],
  },
  {
    slug: "commercial-water-damage-minimize-downtime",
    title: "Minimizing Downtime After Commercial Water Damage",
    description:
      "A phased recovery approach for commercial facilities in Northern Virginia.",
    date: "2026-02-06",
    readTime: "6 min read",
    category: "Commercial",
    intro:
      "Business interruption can be costly. A phased plan keeps critical areas open while restoration runs.",
    sections: [
      {
        heading: "Prioritize critical zones",
        body:
          "Identify high-impact areas and stabilize them first to protect operations.",
      },
      {
        heading: "Containment strategy",
        body:
          "Use containment and negative air to keep clean zones operational.",
      },
      {
        heading: "Stakeholder communication",
        body:
          "Daily updates help align facilities teams, tenants, and insurers.",
      },
    ],
  },
  {
    slug: "storm-damage-restoration-checklist",
    title: "Storm Damage Restoration Checklist for Northern Virginia",
    description:
      "A concise checklist for storm cleanup and restoration planning.",
    date: "2026-02-07",
    readTime: "4 min read",
    category: "Storm Response",
    intro:
      "Storms can cause hidden water damage. This checklist helps you confirm safety and start recovery.",
    sections: [
      {
        heading: "Stabilize and secure",
        body:
          "Address roof breaches and broken windows quickly to prevent further intrusion.",
      },
      {
        heading: "Check for hidden moisture",
        body:
          "Moisture can travel far from the visible entry point. Moisture mapping helps locate it.",
      },
      {
        heading: "Document everything",
        body:
          "Photos and notes help with insurance and contractor coordination.",
      },
    ],
  },
  {
    slug: "basement-flooding-prevention",
    title: "Basement Flooding Prevention Tips for Vienna, VA",
    description:
      "Practical ways to reduce basement flood risks in Northern Virginia homes.",
    date: "2026-02-08",
    readTime: "5 min read",
    category: "Prevention",
    intro:
      "Basement floods are common in heavy rains. Small upgrades can reduce the risk.",
    sections: [
      {
        heading: "Inspect drainage",
        body:
          "Keep gutters clear and extend downspouts away from foundations.",
      },
      {
        heading: "Sump pump readiness",
        body:
          "Test pumps, add backups, and verify discharge lines are clear.",
      },
      {
        heading: "Seal and monitor",
        body:
          "Seal cracks and monitor humidity to detect moisture early.",
      },
    ],
  },
  {
    slug: "structural-drying-why-it-matters",
    title: "Why Structural Drying Standards Matter",
    description:
      "How verified drying protects your property after water damage.",
    date: "2026-02-09",
    readTime: "4 min read",
    category: "Restoration",
    intro:
      "Drying isn’t just about equipment—it’s about measurable standards and monitoring.",
    sections: [
      {
        heading: "Moisture baselines",
        body:
          "We compare readings to dry standards so we know when materials are ready.",
      },
      {
        heading: "Monitoring saves time",
        body:
          "Daily readings allow equipment adjustments and faster completion.",
      },
      {
        heading: "Prevents secondary damage",
        body:
          "Verified drying reduces mold risk and protects finishes.",
      },
    ],
  },
  {
    slug: "odor-removal-after-smoke-damage",
    title: "Odor Removal After Smoke Damage",
    description:
      "What it takes to eliminate smoke odors from a property.",
    date: "2026-02-10",
    readTime: "4 min read",
    category: "Cleanup",
    intro:
      "Smoke odors can linger without proper cleaning and deodorization. Here’s how to address them.",
    sections: [
      {
        heading: "Remove the source",
        body:
          "Cleaning soot and residue from surfaces is the first step toward odor control.",
      },
      {
        heading: "Air scrubbing",
        body:
          "HEPA air scrubbers reduce airborne particles and odors.",
      },
      {
        heading: "Deodorization",
        body:
          "Professional deodorization neutralizes remaining odor molecules.",
      },
    ],
  },
];
