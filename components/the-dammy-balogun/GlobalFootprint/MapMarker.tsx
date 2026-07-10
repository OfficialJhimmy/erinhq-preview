"use client";

import { Marker } from "react-simple-maps";
import type { FootprintLocation } from "../data";

export default function MapMarker({ location }: { location: FootprintLocation }) {
  return (
    <Marker coordinates={location.coordinates}>
      <circle r={5} fill="#C59A43" stroke="#0D1014" strokeWidth={1.5} />
      <text
        textAnchor="start"
        x={10}
        y={2}
        className="font-damilola-sans"
        style={{ fill: "#F7F5F2", fontSize: 9, fontWeight: 600 }}
      >
        {location.country.toUpperCase()}
      </text>
      <text
        textAnchor="start"
        x={10}
        y={13}
        className="font-damilola-sans"
        style={{ fill: "rgba(247,245,242,0.6)", fontSize: 8 }}
      >
        {location.city}
      </text>
    </Marker>
  );
}