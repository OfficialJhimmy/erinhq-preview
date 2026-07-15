export interface Experience {
  id: string;
  name: string;
  description: string;
  duration: string;
  durationMinutes: number;
  image: string;
  alt: string;
}

export const experiences: Experience[] = [
  {
    id: "hair",
    name: "Hair",
    description: "Luxury styling, treatments & care",
    duration: "75 mins",
    durationMinutes: 75,
    image: "/images/rotii-salon/booking-hair.jpg",
    alt: "A luxury hair styling session at Rotii Salon & Spa",
  },
  {
    id: "nails",
    name: "Nails",
    description: "Manicure and nail artistry",
    duration: "60 mins",
    durationMinutes: 60,
    image: "/images/rotii-salon/rotti-nails.jpeg",
    alt: "An elegant manicure close-up at Rotii Salon & Spa",
  },
  {
    id: "lashes",
    name: "Lashes",
    description: "Lash extensions & enhancement",
    duration: "60 mins",
    durationMinutes: 60,
    image: "/images/rotii-salon/rotti-lashes.jpeg",
    alt: "An editorial eye portrait showing lash work at Rotii Salon & Spa",
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description: "Relaxing pedicure & foot care",
    duration: "60 mins",
    durationMinutes: 60,
    image: "/images/rotii-salon/service-pedicure.jpeg",
    alt: "A luxury foot spa at Rotii Salon & Spa",
  },
  {
    id: "spa",
    name: "Spa",
    description: "Massage & wellness treatment",
    duration: "90 mins",
    durationMinutes: 90,
    image: "/images/rotii-salon/rotti-spa.jpeg",
    alt: "A massage treatment at Rotii Salon & Spa",
  },
];

export type Period = "Morning" | "Afternoon" | "Evening";

export const timeSlotsByPeriod: Record<Period, string[]> = {
  Morning: ["09:00", "09:30", "10:30", "11:30"],
  Afternoon: ["12:00", "13:00", "14:30", "15:30"],
  Evening: ["16:00", "17:00", "17:30", "18:00"],
};