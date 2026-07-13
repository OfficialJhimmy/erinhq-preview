export interface ReviewPlaceholder {
  id: string;
  name: string;
  text: string;
}

// SAMPLE CONTENT, NOT REAL REVIEWS. Written at the client's explicit
// request as representative placeholder text for this preview, using
// first names only rather than full identities. Spick & Span will
// provide real client reviews to replace this array before the site
// goes live; same shape, real names and real quotes.
export const reviews: ReviewPlaceholder[] = [
  {
    id: "1",
    name: "Ngozi",
    text: "My hair has never felt this healthy. The whole visit felt calm and unhurried.",
  },
  {
    id: "2",
    name: "Tolu",
    text: "Booked a massage on a whim and left feeling completely reset. Already planning my next visit.",
  },
  {
    id: "3",
    name: "Chiamaka",
    text: "The nail work was neat and lasted for weeks. Small details, done properly.",
  },
  {
    id: "4",
    name: "Fatima",
    text: "First time getting lashes done and they explained everything clearly beforehand. Very comfortable experience.",
  },
  {
    id: "5",
    name: "Ada",
    text: "Consistent, professional, and the studio itself is beautiful. Worth the trip to Ikoyi.",
  },
  {
    id: "6",
    name: "Emeka",
    text: "Brought my daughter in for a haircut and the staff were patient with her the whole time.",
  },
];