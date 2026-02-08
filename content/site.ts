export const business = {
  name: "Flood Doctor",
  address: "8466D Tyco Rd., Vienna, VA 22182",
  phone: "1(877) 497-0007",
  email: "info@flood.doctor",
  domain: "https://flood.repair",
  primaryColor: "#1a73e8",
  serviceArea: "Northern Virginia, including Vienna, VA and surrounding communities",
};

export const siteMeta = {
  title: "Flood Doctor | Emergency Water, Flood & Storm Restoration",
  description:
    "24/7 emergency water damage restoration, flood cleanup, and specialty drying across Northern Virginia. Rapid response, clear communication, and proven results.",
};

export type ServiceAudience = "residential" | "commercial";
export type ServiceCategory =
  | "restoration-services"
  | "cleanup-services"
  | "specialty-services"
  | "technical-services";

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  definition: string;
  scope: string[];
  whenToCall: string[];
  whatToExpect: string[];
  process: string[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
  relatedResources: string[];
  audience: ServiceAudience;
  category: ServiceCategory;
};

export type ServiceCategoryGroup = {
  title: string;
  slug: ServiceCategory;
  description: string;
  items: ServiceContent[];
};

export type ServiceHub = {
  title: string;
  slug: ServiceAudience;
  description: string;
  categories: ServiceCategoryGroup[];
};

const commonResidentialFaqs: ServiceFAQ[] = [
  {
    question: "How fast can you respond in Vienna, VA?",
    answer:
      "We staff local crews for 24/7 dispatch. Call anytime to confirm the fastest ETA for your address.",
  },
  {
    question: "Will you help with insurance paperwork?",
    answer:
      "Yes. We document moisture, photos, and scope details so you have what you need for your claim.",
  },
  {
    question: "Do I need to move out during the work?",
    answer:
      "Not always. We’ll advise if safety, air quality, or access require temporary relocation.",
  },
  {
    question: "What happens during the first visit?",
    answer:
      "We inspect, take moisture readings, stop active damage, and outline the next steps in writing.",
  },
];

const commonCommercialFaqs: ServiceFAQ[] = [
  {
    question: "Can you work after hours or in phases?",
    answer:
      "Yes. We build phased plans to minimize downtime and coordinate with facility schedules.",
  },
  {
    question: "Do you provide documentation for compliance?",
    answer:
      "We provide detailed logs, moisture data, and reports to support compliance and insurance needs.",
  },
  {
    question: "How do you protect occupied spaces?",
    answer:
      "We use containment, negative air, and staged work zones to keep operations safe and clean.",
  },
  {
    question: "What is your typical response time?",
    answer:
      "We prioritize emergency dispatch and confirm ETAs quickly after your call.",
  },
];

const defaultResources = [
  "/resources/faq/",
  "/resources/emergency-checklists/",
  "/resources/insurance-guide/",
];

const makeService = (input: {
  slug: string;
  title: string;
  definition: string;
  scope: string[];
  whenToCall: string[];
  whatToExpect: string[];
  process: string[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
  audience: ServiceAudience;
  category: ServiceCategory;
}): ServiceContent => {
  const area = business.serviceArea;
  return {
    ...input,
    metaTitle: `${input.title} | Flood Doctor`,
    metaDescription: `${input.definition} Serving ${area}.`,
    heroHeadline: `${input.title}`,
    heroSubhead: `${input.definition} Serving ${area}.`,
    relatedResources: defaultResources,
  };
};

const restorationSteps = [
  "Rapid on-site response and safety stabilization",
  "Moisture mapping and damage assessment",
  "Water extraction and structural drying",
  "Dehumidification and air movement monitoring",
  "Verification, documentation, and rebuild planning",
];

const cleanupSteps = [
  "Containment and safety controls",
  "Removal, cleaning, and sanitation",
  "Deodorization and air scrubbing",
  "Clearance checks and restoration guidance",
];

const specialtySteps = [
  "Targeted inspection and moisture tracing",
  "Precision drying or removal of damaged materials",
  "Daily monitoring and adjustment",
  "Restoration-ready handoff",
];

const technicalSteps = [
  "Site survey and instrument setup",
  "Sampling or mapping with calibrated tools",
  "Data analysis and reporting",
  "Recommendations and next steps",
];

const residentialRestoration: ServiceContent[] = [
  makeService({
    slug: "water-damage-restoration",
    title: "Water Damage Restoration",
    definition:
      "Professional restoration for leaks, appliance failures, and sudden water intrusions.",
    scope: [
      "Emergency water extraction",
      "Moisture mapping and drying",
      "Material removal when needed",
      "Coordination with rebuild teams",
    ],
    whenToCall: [
      "Standing water or saturated floors",
      "Water stains spreading on ceilings or walls",
      "Suspected hidden moisture",
    ],
    whatToExpect: [
      "Clear assessment and scope",
      "Daily drying updates",
      "Documentation for insurance",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "How soon should drying begin?",
        answer:
          "Within 24 hours for best results. Fast drying reduces secondary damage and mold risk.",
      },
      {
        question: "Can you save hardwood floors?",
        answer:
          "Often, yes. We evaluate moisture content and use targeted drying when possible.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["structural-drying", "burst-pipe-cleanup"],
    audience: "residential",
    category: "restoration-services",
  }),
  makeService({
    slug: "flood-cleanup",
    title: "Flood Cleanup",
    definition:
      "Rapid removal of floodwater and contaminated materials with safe, documented cleanup.",
    scope: [
      "Pumping and extraction",
      "Debris and silt removal",
      "Sanitization and deodorization",
      "Drying and monitoring",
    ],
    whenToCall: [
      "Basement or ground-floor flooding",
      "Stormwater intrusion",
      "Sewage or contaminated water exposure",
    ],
    whatToExpect: [
      "Safety-first containment",
      "Clear communication of risks",
      "Restoration plan after cleanup",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Is floodwater always contaminated?",
        answer:
          "Often yes. We treat floodwater as potentially unsafe until testing confirms otherwise.",
      },
      {
        question: "Do you remove damaged belongings?",
        answer:
          "Yes. We can pack out, clean, or document items for restoration or disposal.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["basement-flooding", "sewage-cleanup"],
    audience: "residential",
    category: "restoration-services",
  }),
  makeService({
    slug: "storm-damage-restoration",
    title: "Storm Damage Restoration",
    definition:
      "Emergency recovery for wind-driven rain, roof breaches, and storm-related water damage.",
    scope: [
      "Emergency tarping coordination",
      "Water extraction and drying",
      "Damage containment",
      "Repair planning support",
    ],
    whenToCall: [
      "Roof leaks after storms",
      "Downed trees or impacted structures",
      "Multiple rooms affected by rainwater",
    ],
    whatToExpect: [
      "Fast stabilization",
      "Moisture tracking and updates",
      "A clear path to repairs",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Do you handle emergency board-up?",
        answer:
          "We coordinate emergency stabilization and protect openings until permanent repairs.",
      },
      {
        question: "Can you work with my roofer?",
        answer:
          "Yes. We align drying and repair schedules to avoid delays or rework.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["roof-leak-water-damage", "water-damage-restoration"],
    audience: "residential",
    category: "restoration-services",
  }),
  makeService({
    slug: "burst-pipe-cleanup",
    title: "Burst Pipe Cleanup",
    definition:
      "Fast extraction and drying after pipe failures to prevent structural damage.",
    scope: [
      "Shutoff coordination",
      "Water extraction",
      "Targeted structural drying",
      "Moisture monitoring",
    ],
    whenToCall: [
      "Sudden leaks with spreading water",
      "Ceiling collapse or bulging",
      "Wet insulation or walls",
    ],
    whatToExpect: [
      "Immediate containment",
      "Drying equipment placement",
      "Daily moisture checks",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Do you handle frozen pipe damage?",
        answer:
          "Yes. We extract water, dry materials, and document the damage.",
      },
      {
        question: "Will walls need to be opened?",
        answer:
          "Sometimes. We use moisture readings to decide the least-invasive approach.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["water-damage-restoration", "structural-drying"],
    audience: "residential",
    category: "restoration-services",
  }),
  makeService({
    slug: "structural-drying",
    title: "Structural Drying",
    definition:
      "Precision drying for framing, subfloors, and hidden cavities after water events.",
    scope: [
      "In-place drying strategies",
      "Dehumidification planning",
      "Daily moisture tracking",
      "Final dry standard verification",
    ],
    whenToCall: [
      "After leaks or flooding",
      "When materials feel damp days later",
      "When odor or humidity persists",
    ],
    whatToExpect: [
      "Targeted equipment setup",
      "Moisture goals and timelines",
      "Measured progress reports",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "How long does structural drying take?",
        answer:
          "Most projects take several days. We provide a timeline after inspection.",
      },
      {
        question: "Do you remove flooring?",
        answer:
          "Only if required. We prioritize in-place drying when feasible.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["water-damage-restoration", "hardwood-floor-drying"],
    audience: "residential",
    category: "restoration-services",
  }),
];

const residentialCleanup: ServiceContent[] = [
  makeService({
    slug: "sewage-cleanup",
    title: "Sewage Cleanup",
    definition:
      "Hazard-controlled cleanup and sanitation after sewage backups or overflows.",
    scope: [
      "Containment and PPE protocols",
      "Removal of contaminated materials",
      "Deep cleaning and disinfection",
      "Odor control",
    ],
    whenToCall: [
      "Any sewage backup",
      "Health concerns or strong odors",
      "Contaminated flooring or drywall",
    ],
    whatToExpect: [
      "Strict safety controls",
      "Clear disposal documentation",
      "Guidance on safe re-entry",
    ],
    process: cleanupSteps,
    faqs: [
      {
        question: "Is sewage cleanup safe to DIY?",
        answer:
          "No. Sewage can carry harmful pathogens. Professional cleanup is recommended.",
      },
      {
        question: "How do you control odors?",
        answer:
          "We use professional-grade deodorization and air scrubbing when needed.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["odor-removal", "water-damage-restoration"],
    audience: "residential",
    category: "cleanup-services",
  }),
  makeService({
    slug: "mold-remediation",
    title: "Mold Remediation",
    definition:
      "Targeted mold removal with containment, HEPA filtration, and clearance focus.",
    scope: [
      "Containment setup",
      "HEPA filtration",
      "Removal of impacted materials",
      "Post-remediation cleaning",
    ],
    whenToCall: [
      "Visible mold growth",
      "Persistent musty odors",
      "Post-leak moisture issues",
    ],
    whatToExpect: [
      "Clear remediation plan",
      "Containment to protect clean areas",
      "Moisture prevention guidance",
    ],
    process: cleanupSteps,
    faqs: [
      {
        question: "Do you test for mold?",
        answer:
          "We can coordinate testing and interpret results to guide remediation.",
      },
      {
        question: "Will mold return?",
        answer:
          "Controlling moisture is key. We address the source and drying to reduce risk.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["structural-drying", "odor-removal"],
    audience: "residential",
    category: "cleanup-services",
  }),
  makeService({
    slug: "fire-smoke-cleanup",
    title: "Fire & Smoke Cleanup",
    definition:
      "Soot removal, odor control, and cleanup after smoke or fire damage.",
    scope: [
      "Soot and residue cleaning",
      "Air scrubbing and filtration",
      "Odor neutralization",
      "Content cleaning coordination",
    ],
    whenToCall: [
      "Smoke odor after an event",
      "Visible soot on walls or ceilings",
      "HVAC contamination concerns",
    ],
    whatToExpect: [
      "Detailed cleaning plan",
      "Safe handling of affected items",
      "Documentation for insurance",
    ],
    process: cleanupSteps,
    faqs: [
      {
        question: "Can smoke odor be fully removed?",
        answer:
          "In most cases, yes. We combine cleaning with deodorization for best results.",
      },
      {
        question: "Do you clean HVAC systems?",
        answer:
          "We can coordinate HVAC cleaning or specialized duct remediation.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["odor-removal", "contents-cleaning-packout"],
    audience: "residential",
    category: "cleanup-services",
  }),
  makeService({
    slug: "odor-removal",
    title: "Odor Removal",
    definition:
      "Professional deodorization to eliminate persistent odors after damage events.",
    scope: [
      "Odor source identification",
      "Cleaning and deodorization",
      "Air scrubbing",
      "Verification and follow-up",
    ],
    whenToCall: [
      "Lingering odors after cleanup",
      "Pet or smoke odors in materials",
      "Humidity-related smells",
    ],
    whatToExpect: [
      "Root-cause approach",
      "Clear treatment options",
      "Ventilation guidance",
    ],
    process: cleanupSteps,
    faqs: [
      {
        question: "Will deodorization mask or remove odors?",
        answer:
          "We remove the source when possible and neutralize remaining odors.",
      },
      {
        question: "Is it safe to stay during treatment?",
        answer:
          "We’ll advise on occupancy based on the specific deodorization method.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["fire-smoke-cleanup", "mold-remediation"],
    audience: "residential",
    category: "cleanup-services",
  }),
  makeService({
    slug: "contents-cleaning-packout",
    title: "Contents Cleaning & Packout",
    definition:
      "Careful inventory, packout, and cleaning of belongings after damage events.",
    scope: [
      "Detailed inventory",
      "Packout and secure storage",
      "Item cleaning and restoration",
      "Return coordination",
    ],
    whenToCall: [
      "Personal belongings are wet or smoky",
      "You need space for restoration work",
      "Insurance requires item documentation",
    ],
    whatToExpect: [
      "Itemized inventory",
      "Secure handling and tracking",
      "Transparent restoration options",
    ],
    process: cleanupSteps,
    faqs: [
      {
        question: "How do you track my items?",
        answer:
          "We inventory items with tags and documentation for clear accountability.",
      },
      {
        question: "Can you restore photos or documents?",
        answer:
          "Some items can be restored depending on damage type. We evaluate each case.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["fire-smoke-cleanup", "water-damage-restoration"],
    audience: "residential",
    category: "cleanup-services",
  }),
];

const residentialSpecialty: ServiceContent[] = [
  makeService({
    slug: "basement-flooding",
    title: "Basement Flooding",
    definition:
      "Targeted cleanup and drying for basement floods and groundwater intrusion.",
    scope: [
      "Pumping and extraction",
      "Dehumidification",
      "Sanitization and odor control",
      "Drying of framing and floors",
    ],
    whenToCall: [
      "Standing water in basement",
      "Saturated insulation",
      "Persistent dampness or odor",
    ],
    whatToExpect: [
      "Rapid water removal",
      "Daily moisture checks",
      "Basement-safe restoration plan",
    ],
    process: specialtySteps,
    faqs: [
      {
        question: "Do you handle sump pump failures?",
        answer:
          "Yes. We respond to sump failures and coordinate mitigation strategies.",
      },
      {
        question: "Can you prevent future basement floods?",
        answer:
          "We can recommend drainage improvements and moisture control solutions.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["flood-cleanup", "structural-drying"],
    audience: "residential",
    category: "specialty-services",
  }),
  makeService({
    slug: "crawl-space-drying",
    title: "Crawl Space Drying",
    definition:
      "Controlled drying and moisture correction for crawl spaces.",
    scope: [
      "Moisture inspection",
      "Vapor barrier evaluation",
      "Drying equipment placement",
      "Odor and humidity control",
    ],
    whenToCall: [
      "Musty odor from crawl space",
      "Condensation or standing water",
      "Insulation or subfloor dampness",
    ],
    whatToExpect: [
      "Safe access planning",
      "Targeted drying setup",
      "Moisture prevention guidance",
    ],
    process: specialtySteps,
    faqs: [
      {
        question: "Do you replace vapor barriers?",
        answer:
          "We assess the barrier and recommend replacement or repairs as needed.",
      },
      {
        question: "Is crawl space humidity a mold risk?",
        answer:
          "Yes. We address moisture to reduce mold and wood decay risk.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["mold-remediation", "structural-drying"],
    audience: "residential",
    category: "specialty-services",
  }),
  makeService({
    slug: "hardwood-floor-drying",
    title: "Hardwood Floor Drying",
    definition:
      "Specialized drying techniques to restore hardwood floors after water exposure.",
    scope: [
      "Moisture testing",
      "In-place floor drying",
      "Controlled dehumidification",
      "Monitoring and follow-up",
    ],
    whenToCall: [
      "Cupping or buckling floors",
      "Spills or leaks on hardwood",
      "Moisture readings above normal",
    ],
    whatToExpect: [
      "Minimally invasive methods",
      "Moisture targets and updates",
      "Guidance on sanding/refinishing",
    ],
    process: specialtySteps,
    faqs: [
      {
        question: "Can hardwood floors be saved?",
        answer:
          "Often, yes. Early intervention gives the best chance of restoration.",
      },
      {
        question: "Will my floors still need refinishing?",
        answer:
          "Possibly. We’ll advise once moisture stabilizes and boards settle.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["structural-drying", "water-damage-restoration"],
    audience: "residential",
    category: "specialty-services",
  }),
  makeService({
    slug: "roof-leak-water-damage",
    title: "Roof Leak Water Damage",
    definition:
      "Interior drying and restoration after roof leaks and rain intrusion.",
    scope: [
      "Ceiling and wall drying",
      "Insulation removal when required",
      "Moisture tracing",
      "Repair coordination",
    ],
    whenToCall: [
      "Stains spreading on ceilings",
      "Active drips during storms",
      "Wet attic insulation",
    ],
    whatToExpect: [
      "Leak impact assessment",
      "Drying plan with timelines",
      "Collaboration with roofers",
    ],
    process: specialtySteps,
    faqs: [
      {
        question: "Should I call a roofer first?",
        answer:
          "Stop active leaks if possible, then call for drying to prevent hidden damage.",
      },
      {
        question: "Will insulation need replacement?",
        answer:
          "Wet insulation often needs removal. We’ll confirm during inspection.",
      },
      ...commonResidentialFaqs,
    ],
    relatedServices: ["storm-damage-restoration", "structural-drying"],
    audience: "residential",
    category: "specialty-services",
  }),
];

const commercialRestoration: ServiceContent[] = [
  makeService({
    slug: "commercial-water-damage",
    title: "Commercial Water Damage",
    definition:
      "Rapid water mitigation for offices, retail, and multi-tenant properties.",
    scope: [
      "Emergency extraction",
      "Containment and safety controls",
      "Structural drying",
      "Phased recovery planning",
    ],
    whenToCall: [
      "Operational disruption from water",
      "Leaks affecting multiple suites",
      "Wet equipment or inventory",
    ],
    whatToExpect: [
      "Minimized downtime plan",
      "Clear reporting",
      "Coordination with stakeholders",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Can you work around tenants?",
        answer:
          "Yes. We stage work zones and coordinate schedules to reduce disruption.",
      },
      {
        question: "Do you handle large square footage?",
        answer:
          "Yes. We scale equipment and staffing for commercial footprints.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["commercial-flood-cleanup", "large-loss-restoration"],
    audience: "commercial",
    category: "restoration-services",
  }),
  makeService({
    slug: "commercial-flood-cleanup",
    title: "Commercial Flood Cleanup",
    definition:
      "Floodwater removal and sanitation for commercial facilities.",
    scope: [
      "High-volume extraction",
      "Debris and silt removal",
      "Sanitization",
      "Drying and monitoring",
    ],
    whenToCall: [
      "Floodwater in commercial spaces",
      "Contaminated water exposure",
      "Multiple areas impacted",
    ],
    whatToExpect: [
      "Incident command approach",
      "Safety-first containment",
      "Documentation and reporting",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Can you handle after-hours work?",
        answer:
          "Yes. We plan for off-hours work to reduce business disruption.",
      },
      {
        question: "Do you provide industrial drying?",
        answer:
          "We deploy large-scale drying systems and monitoring as needed.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["commercial-water-damage", "large-loss-restoration"],
    audience: "commercial",
    category: "restoration-services",
  }),
  makeService({
    slug: "large-loss-restoration",
    title: "Large Loss Restoration",
    definition:
      "Enterprise-scale restoration for complex, multi-area losses.",
    scope: [
      "Command center coordination",
      "Phased mitigation plans",
      "Specialized equipment staging",
      "Detailed reporting",
    ],
    whenToCall: [
      "Multi-floor or multi-unit events",
      "Extended business interruption risk",
      "Complex stakeholder coordination",
    ],
    whatToExpect: [
      "Dedicated project leadership",
      "Daily reporting",
      "Milestone-based recovery",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Do you coordinate with adjusters and consultants?",
        answer:
          "Yes. We provide documentation and attend coordination meetings as needed.",
      },
      {
        question: "Can you scale crews quickly?",
        answer:
          "Yes. We maintain relationships for rapid staffing and equipment support.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["commercial-water-damage", "commercial-flood-cleanup"],
    audience: "commercial",
    category: "restoration-services",
  }),
];

const commercialCleanup: ServiceContent[] = [
  makeService({
    slug: "commercial-sewage-cleanup",
    title: "Commercial Sewage Cleanup",
    definition:
      "Hazard-controlled sewage cleanup for commercial facilities.",
    scope: [
      "Containment and safety protocols",
      "Removal of contaminated materials",
      "Sanitization and deodorization",
      "Compliance documentation",
    ],
    whenToCall: [
      "Sewage backup in occupied spaces",
      "Contaminated floors or fixtures",
      "Strong odors indicating hazards",
    ],
    whatToExpect: [
      "Clear safety plan",
      "Work zoning to keep operations running",
      "Documentation for stakeholders",
    ],
    process: cleanupSteps,
    faqs: [
      {
        question: "Do you provide clearance testing?",
        answer:
          "We can coordinate post-cleanup verification when required.",
      },
      {
        question: "Can you clean large restrooms or kitchens?",
        answer:
          "Yes. We handle high-use commercial environments with proper protocols.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["commercial-mold-remediation", "commercial-fire-smoke-cleanup"],
    audience: "commercial",
    category: "cleanup-services",
  }),
  makeService({
    slug: "commercial-mold-remediation",
    title: "Commercial Mold Remediation",
    definition:
      "Professional mold remediation for office, retail, and industrial spaces.",
    scope: [
      "Containment and negative air",
      "HEPA filtration",
      "Removal of impacted materials",
      "Moisture control guidance",
    ],
    whenToCall: [
      "Tenant complaints of odors",
      "Visible mold in common areas",
      "Post-leak dampness",
    ],
    whatToExpect: [
      "Scheduled remediation plan",
      "Clear communication with tenants",
      "Moisture prevention steps",
    ],
    process: cleanupSteps,
    faqs: [
      {
        question: "Do you coordinate with facility managers?",
        answer:
          "Yes. We communicate schedules, access, and safety procedures.",
      },
      {
        question: "Can you work in occupied buildings?",
        answer:
          "Yes. We use containment and air filtration to protect occupants.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["moisture-mapping-consulting", "indoor-air-quality"],
    audience: "commercial",
    category: "cleanup-services",
  }),
  makeService({
    slug: "commercial-fire-smoke-cleanup",
    title: "Commercial Fire & Smoke Cleanup",
    definition:
      "Soot and smoke cleanup for commercial properties with minimal downtime.",
    scope: [
      "Soot removal",
      "HVAC contamination control",
      "Deodorization",
      "Content cleaning coordination",
    ],
    whenToCall: [
      "Smoke odor in workspaces",
      "Soot on surfaces",
      "Post-fire cleanup needs",
    ],
    whatToExpect: [
      "Phased cleanup plan",
      "Air quality controls",
      "Detailed reporting",
    ],
    process: cleanupSteps,
    faqs: [
      {
        question: "Do you clean sensitive equipment areas?",
        answer:
          "Yes. We plan specialized cleaning for equipment-heavy spaces.",
      },
      {
        question: "Can you handle after-hours cleaning?",
        answer:
          "Yes. We often schedule work to reduce business disruption.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["commercial-sewage-cleanup", "odor-removal"],
    audience: "commercial",
    category: "cleanup-services",
  }),
];

const commercialTechnical: ServiceContent[] = [
  makeService({
    slug: "moisture-mapping-consulting",
    title: "Moisture Mapping & Consulting",
    definition:
      "Instrument-based moisture assessments for complex commercial environments.",
    scope: [
      "Infrared and non-invasive readings",
      "Moisture mapping reports",
      "Risk-area identification",
      "Guidance for mitigation",
    ],
    whenToCall: [
      "Unclear moisture sources",
      "Pre-construction verification",
      "Insurance documentation needs",
    ],
    whatToExpect: [
      "Clear, data-backed reporting",
      "Recommendations for next steps",
      "Coordination with consultants",
    ],
    process: technicalSteps,
    faqs: [
      {
        question: "Do you provide written reports?",
        answer:
          "Yes. We deliver moisture maps and summaries for stakeholders.",
      },
      {
        question: "Can you locate hidden leaks?",
        answer:
          "We use non-invasive tools to pinpoint probable moisture sources.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["commercial-water-damage", "environmental-testing"],
    audience: "commercial",
    category: "technical-services",
  }),
  makeService({
    slug: "indoor-air-quality",
    title: "Indoor Air Quality",
    definition:
      "Air quality assessments and guidance for healthier indoor environments.",
    scope: [
      "Air sampling and analysis",
      "Ventilation review",
      "Humidity and moisture review",
      "Recommendations report",
    ],
    whenToCall: [
      "Occupant health complaints",
      "Post-remediation verification",
      "Indoor odor concerns",
    ],
    whatToExpect: [
      "Clear testing scope",
      "Actionable results",
      "Follow-up guidance",
    ],
    process: technicalSteps,
    faqs: [
      {
        question: "Do you test for mold spores?",
        answer:
          "We can include mold spore sampling if required for your situation.",
      },
      {
        question: "Will you suggest remediation steps?",
        answer:
          "Yes. We provide targeted recommendations based on results.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["commercial-mold-remediation", "environmental-testing"],
    audience: "commercial",
    category: "technical-services",
  }),
  makeService({
    slug: "environmental-testing",
    title: "Environmental Testing",
    definition:
      "Targeted environmental testing to inform remediation decisions.",
    scope: [
      "Sampling strategy planning",
      "Lab coordination",
      "Results interpretation",
      "Recommendations",
    ],
    whenToCall: [
      "Before major remediation",
      "For compliance needs",
      "After a significant incident",
    ],
    whatToExpect: [
      "Clear test scope",
      "Accurate chain-of-custody",
      "Actionable reporting",
    ],
    process: technicalSteps,
    faqs: [
      {
        question: "Do you handle lab coordination?",
        answer:
          "Yes. We manage sampling and coordinate with certified labs.",
      },
      {
        question: "How long do results take?",
        answer:
          "Turnaround depends on lab schedules. We can request expedited service.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["indoor-air-quality", "moisture-mapping-consulting"],
    audience: "commercial",
    category: "technical-services",
  }),
];

const commercialSpecialty: ServiceContent[] = [
  makeService({
    slug: "healthcare-facilities",
    title: "Healthcare Facilities Restoration",
    definition:
      "Specialized restoration for healthcare environments with strict protocols.",
    scope: [
      "Infection-control coordination",
      "Containment and air quality control",
      "After-hours scheduling",
      "Detailed reporting",
    ],
    whenToCall: [
      "Water events impacting patient areas",
      "High-sensitivity environments",
      "Regulated compliance requirements",
    ],
    whatToExpect: [
      "Strict safety protocols",
      "Coordination with facility leadership",
      "Phased recovery plan",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Can you coordinate ICRA requirements?",
        answer:
          "We align work zones with infection-control procedures and facility policies.",
      },
      {
        question: "Do you work overnight?",
        answer:
          "Yes. We can schedule off-hours work to reduce disruption.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["commercial-water-damage", "indoor-air-quality"],
    audience: "commercial",
    category: "specialty-services",
  }),
  makeService({
    slug: "hospitality-multifamily",
    title: "Hospitality & Multifamily",
    definition:
      "Restoration services tailored to hotels, apartments, and mixed-use properties.",
    scope: [
      "Unit-by-unit drying",
      "Common area protection",
      "Tenant coordination",
      "Fast turnaround planning",
    ],
    whenToCall: [
      "Multi-unit leaks",
      "Guest or tenant complaints",
      "Elevated humidity issues",
    ],
    whatToExpect: [
      "Clear communication",
      "Minimal disruption strategy",
      "Detailed documentation",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Do you coordinate with property managers?",
        answer:
          "Yes. We keep managers informed with daily updates and action items.",
      },
      {
        question: "Can you handle multiple units at once?",
        answer:
          "Yes. We scale crews and equipment to match multi-unit needs.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["commercial-water-damage", "large-loss-restoration"],
    audience: "commercial",
    category: "specialty-services",
  }),
  makeService({
    slug: "municipal-education",
    title: "Municipal & Education",
    definition:
      "Restoration support for government buildings, schools, and campuses.",
    scope: [
      "Large-area drying",
      "After-hours scheduling",
      "Safety compliance",
      "Stakeholder reporting",
    ],
    whenToCall: [
      "Facility-wide water events",
      "Public space safety concerns",
      "Critical service disruptions",
    ],
    whatToExpect: [
      "Phased mitigation plan",
      "Clear documentation",
      "Coordination with facilities",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Can you coordinate with procurement requirements?",
        answer:
          "We align with procurement policies and provide required documentation.",
      },
      {
        question: "Do you handle after-hours work?",
        answer:
          "Yes. We often schedule work during off-hours to reduce disruption.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["large-loss-restoration", "commercial-water-damage"],
    audience: "commercial",
    category: "specialty-services",
  }),
  makeService({
    slug: "industrial-facilities",
    title: "Industrial Facilities",
    definition:
      "Specialized restoration for industrial plants and critical infrastructure.",
    scope: [
      "Safety-first protocols",
      "Equipment protection",
      "Large-loss coordination",
      "Operational continuity planning",
    ],
    whenToCall: [
      "Process interruption from water",
      "Hazardous area concerns",
      "Complex facility layouts",
    ],
    whatToExpect: [
      "Dedicated project lead",
      "Detailed reporting",
      "Coordination with safety teams",
    ],
    process: restorationSteps,
    faqs: [
      {
        question: "Do you coordinate with safety officers?",
        answer:
          "Yes. We follow site-specific safety protocols and reporting requirements.",
      },
      {
        question: "Can you handle heavy equipment areas?",
        answer:
          "Yes. We use specialized approaches for sensitive or heavy equipment zones.",
      },
      ...commonCommercialFaqs,
    ],
    relatedServices: ["large-loss-restoration", "moisture-mapping-consulting"],
    audience: "commercial",
    category: "specialty-services",
  }),
];

export const serviceHubs: ServiceHub[] = [
  {
    title: "Residential Services",
    slug: "residential",
    description:
      "Focused restoration and cleanup services for homes, condos, and residential properties.",
    categories: [
      {
        title: "Restoration Services",
        slug: "restoration-services",
        description:
          "Emergency response and full restoration for water and storm events.",
        items: residentialRestoration,
      },
      {
        title: "Cleanup Services",
        slug: "cleanup-services",
        description:
          "Specialized cleanup, sanitation, and recovery services.",
        items: residentialCleanup,
      },
      {
        title: "Specialty Services",
        slug: "specialty-services",
        description:
          "Targeted drying and restoration for high-risk residential areas.",
        items: residentialSpecialty,
      },
    ],
  },
  {
    title: "Commercial Services",
    slug: "commercial",
    description:
      "Scalable restoration, cleanup, and technical services for facilities and campuses.",
    categories: [
      {
        title: "Restoration Services",
        slug: "restoration-services",
        description:
          "Large-scale water mitigation and restoration for commercial sites.",
        items: commercialRestoration,
      },
      {
        title: "Cleanup Services",
        slug: "cleanup-services",
        description:
          "Sanitation and cleanup services for commercial facilities.",
        items: commercialCleanup,
      },
      {
        title: "Technical Services",
        slug: "technical-services",
        description:
          "Assessment and consulting services to support remediation decisions.",
        items: commercialTechnical,
      },
      {
        title: "Specialty Services",
        slug: "specialty-services",
        description:
          "Industry-focused restoration support for critical facilities.",
        items: commercialSpecialty,
      },
    ],
  },
];

export const getAllServices = (): ServiceContent[] =>
  serviceHubs.flatMap((hub) => hub.categories.flatMap((cat) => cat.items));

export const getServiceBySlug = (
  audience: ServiceAudience,
  category: ServiceCategory,
  slug: string
): ServiceContent | undefined => {
  const hub = serviceHubs.find((item) => item.slug === audience);
  const group = hub?.categories.find((cat) => cat.slug === category);
  return group?.items.find((item) => item.slug === slug);
};

export const getCategory = (
  audience: ServiceAudience,
  category: ServiceCategory
): ServiceCategoryGroup | undefined => {
  const hub = serviceHubs.find((item) => item.slug === audience);
  return hub?.categories.find((item) => item.slug === category);
};

export const getHub = (audience: ServiceAudience): ServiceHub | undefined =>
  serviceHubs.find((item) => item.slug === audience);

export const getServicePath = (service: ServiceContent): string =>
  `/services/${service.audience}/${service.category}/${service.slug}/`;

export const navigation = {
  primary: [
    { label: "Services", href: "/services/" },
    { label: "Resources", href: "/resources/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
};

export const ctas = {
  primary: { label: "Request Service", href: "/request/" },
  secondary: { label: "Call Now", href: `tel:${business.phone}` },
};

export const pages = {
  home: {
    title: "Flood Doctor | Emergency Water, Flood & Storm Restoration",
    description:
      "24/7 emergency water damage restoration and flood cleanup across Northern Virginia with fast response and verified drying.",
    headline: "Emergency restoration, handled with precision.",
    subhead:
      "Flood Doctor responds fast with documented drying, clear communication, and a proven recovery plan for homes and facilities.",
  },
  about: {
    title: "About Flood Doctor",
    description:
      "Meet the Flood Doctor team: emergency-ready restoration specialists serving Northern Virginia.",
    headline: "Restoration teams built for rapid recovery.",
    subhead:
      "We combine immediate response with disciplined documentation so property owners and insurers know exactly what’s happening.",
  },
  contact: {
    title: "Contact Flood Doctor",
    description:
      "Contact Flood Doctor for 24/7 emergency response across Northern Virginia.",
    headline: "Contact Flood Doctor",
    subhead: "Call anytime for immediate help. We’re ready to respond 24/7.",
  },
  reviews: {
    title: "Reviews | Flood Doctor",
    description:
      "Verified review placement for Flood Doctor. See our Google reviews and testimonials once published.",
    headline: "Reviews and reputation",
    subhead:
      "We will publish verified customer reviews here. For now, visit Google to see live feedback.",
  },
  locations: {
    title: "Locations | Flood Doctor",
    description:
      "Local service coverage across Northern Virginia. Explore city-specific pages for localized support.",
    headline: "Local service coverage",
    subhead:
      "We serve the region via city pages and dedicated response teams. Edit the list as new locations launch.",
  },
  request: {
    title: "Request Service | Flood Doctor",
    description:
      "Submit a fast service request to dispatch Flood Doctor’s emergency response teams.",
    headline: "Request service now",
    subhead:
      "Tell us what happened and we’ll dispatch the right crew. For emergencies, call 1(877) 497-0007.",
  },
  resources: {
    title: "Resources | Flood Doctor",
    description:
      "Guides, FAQs, and emergency checklists for property owners and facility managers.",
    headline: "Resource center",
    subhead:
      "Clear guidance for water emergencies, insurance documentation, and restoration planning.",
  },
  blog: {
    title: "Flood Doctor Blog",
    description:
      "Local restoration insights and emergency preparedness guidance for Northern Virginia.",
    headline: "Restoration insights and preparedness",
    subhead:
      "Practical guidance for homeowners and facility leaders navigating water damage recovery.",
  },
  nearme: {
    title: "Water Damage Restoration Near Me | Flood Doctor",
    description:
      "Conversion-focused landing page for water damage restoration near Vienna, VA and Northern Virginia.",
    headline: "Water damage restoration near you",
    subhead:
      "Rapid response teams across Northern Virginia with verified drying and clear communication.",
  },
  careers: {
    title: "Careers | Flood Doctor",
    description:
      "Join the Flood Doctor team. Explore restoration roles and training opportunities.",
    headline: "Build a career in emergency restoration",
    subhead:
      "We train for speed, safety, and empathy. See open roles and growth paths.",
  },
  privacy: {
    title: "Privacy Policy | Flood Doctor",
    description:
      "Plain-language privacy policy for Flood Doctor services and online interactions.",
    headline: "Privacy Policy",
    subhead: "Your information is handled with care and used only for service delivery.",
  },
  terms: {
    title: "Terms of Service | Flood Doctor",
    description:
      "Terms governing Flood Doctor services and website usage.",
    headline: "Terms of Service",
    subhead: "Clear terms for service requests, scheduling, and site usage.",
  },
};

export const resources = [
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    description: "Answers to the most common restoration questions.",
    bullets: [
      "Response timelines and dispatch",
      "Insurance documentation",
      "Drying timelines and equipment",
    ],
  },
  {
    slug: "technology",
    title: "Restoration Technology",
    description: "Tools and systems we use to verify drying and safety.",
    bullets: [
      "Moisture mapping",
      "HEPA filtration",
      "Dehumidification monitoring",
    ],
  },
  {
    slug: "communication",
    title: "Communication Standards",
    description: "How we keep property owners and adjusters aligned.",
    bullets: ["Daily updates", "Written scopes", "Photo documentation"],
  },
  {
    slug: "homeowner-guides",
    title: "Homeowner Guides",
    description: "What to do immediately after a water event.",
    bullets: ["Safety steps", "Shutoff guidance", "Documenting damage"],
  },
  {
    slug: "insurance-guide",
    title: "Insurance Guide",
    description: "How to document, file, and manage restoration claims.",
    bullets: ["Claim workflow", "Documentation checklist", "Restoration scope basics"],
  },
  {
    slug: "emergency-checklists",
    title: "Emergency Checklists",
    description: "Printable checklists for fast, safe response.",
    bullets: ["Water damage checklist", "Flood safety checklist", "After-hours contacts"],
  },
];
