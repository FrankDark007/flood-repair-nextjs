export type Location = {
  city: string;
  url: string;
  status?: "placeholder" | "live";
};

export const locations: Location[] = [
  { city: "Vienna", url: "https://vienna.flood.repair", status: "placeholder" },
  { city: "Tysons", url: "https://tysons.flood.repair", status: "placeholder" },
  { city: "Fairfax", url: "https://fairfax.flood.repair", status: "placeholder" },
  { city: "Arlington", url: "https://arlington.flood.repair", status: "placeholder" },
  { city: "Alexandria", url: "https://alexandria.flood.repair", status: "placeholder" },
  { city: "McLean", url: "https://mclean.flood.repair", status: "placeholder" },
  { city: "Falls Church", url: "https://fallschurch.flood.repair", status: "placeholder" },
  { city: "Reston", url: "https://reston.flood.repair", status: "placeholder" },
  { city: "Herndon", url: "https://herndon.flood.repair", status: "placeholder" },
  { city: "Springfield", url: "https://springfield.flood.repair", status: "placeholder" },
  { city: "Chantilly", url: "https://chantilly.flood.repair", status: "placeholder" },
  { city: "Oakton", url: "https://oakton.flood.repair", status: "placeholder" },
];
