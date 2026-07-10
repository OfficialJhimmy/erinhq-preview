export interface FootprintLocation {
  id: string;
  country: string;
  city: string;
  /** [longitude, latitude], matching react-simple-maps' coordinate order */
  coordinates: [number, number];
  date: string;
  title: string;
  description: string;
  // PLACEHOLDER: real landscape photo per location
  image: string;
}

// Only locations tied to verified, documented activity. No countries
// invented to pad out a "well-traveled" impression.
export const footprintLocations: FootprintLocation[] = [
  {
    id: "sweden",
    country: "Sweden",
    city: "Växjö",
    coordinates: [14.8091, 56.8777],
    date: "Aug 2023 – May 2025",
    title: "Linnaeus University",
    description:
      "MPhil in Entrepreneurship, Sustainability and Social Change, on a Swedish Institute Scholarship for Global Professionals.",
    image: "/images/the-dammy-balogun/sweden.jpg",
  },
  {
    id: "italy",
    country: "Italy",
    city: "Florence",
    coordinates: [11.2558, 43.7696],
    date: "Nov 2024 – Mar 2025",
    title: "University of Florence",
    description:
      "Blended Intensive Program on climate policy, sustainability, and international cooperation.",
    image: "/images/the-dammy-balogun/italy.jpg",
  },
  {
    id: "nigeria",
    country: "Nigeria",
    city: "Lagos",
    coordinates: [3.3792, 6.5244],
    date: "Ongoing",
    title: "Home Base",
    description:
      "Leading YSDN and the Powering Lagos SMEs clean energy initiative from Lagos.",
    image: "/images/the-dammy-balogun/nigeria.jpg",
  },
  {
    id: "usa",
    country: "United States",
    city: "Washington, DC",
    coordinates: [-77.0369, 38.9072],
    date: "March 2026",
    title: "Powering Africa Summit",
    description:
      "Collaborating with global leaders to advance sustainable energy, innovation, and inclusive growth across Africa.",
    image: "/images/the-dammy-balogun/usa.jpg",
  },
];

export interface TimelineNode {
  year: string;
  country: string;
  project: string;
  image: string;
}

// Matches the four documented milestones above, year by year. The 2025
// UN entry reflects the general "spoken at UN conferences" claim from
// the brief; no single specific 2025 UN event was independently listed.
export const timelineNodes: TimelineNode[] = [
  {
    year: "2023",
    country: "Sweden",
    project: "Linnaeus University Partnerships",
    image: "/images/the-dammy-balogun/sweden.jpg",
  },
  {
    year: "2024",
    country: "Italy",
    project: "University of Florence Climate Program",
    image: "/images/the-dammy-balogun/italy.jpg",
  },
  {
    year: "2025",
    country: "UN",
    project: "UN Conferences Global Engagement",
    image: "/images/the-dammy-balogun/un.jpg",
  },
  {
    year: "2026",
    country: "Washington DC",
    project: "Powering Africa Summit",
    image: "/images/the-dammy-balogun/usa.jpg",
  },
];