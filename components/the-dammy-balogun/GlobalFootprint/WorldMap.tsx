"use client";

import { ComposableMap, Geographies, Geography, Line } from "react-simple-maps";
import { footprintLocations } from "../data";
import MapMarker from "./MapMarker";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Nigeria as the connecting hub, per the brief's visual impression of
// Lagos as home base with lines fanning out to each documented location.
const hub = footprintLocations.find((l) => l.id === "nigeria")!;
const spokes = footprintLocations.filter((l) => l.id !== "nigeria");

export default function WorldMap() {
  return (
    <div className="relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 140, center: [10, 20] }}
        className="h-auto w-full"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "transparent",
                    stroke: "rgba(255,255,255,0.18)",
                    strokeWidth: 0.6,
                    outline: "none",
                  },
                  hover: {
                    fill: "transparent",
                    stroke: "rgba(255,255,255,0.18)",
                    strokeWidth: 0.6,
                    outline: "none",
                  },
                  pressed: {
                    fill: "transparent",
                    stroke: "rgba(255,255,255,0.18)",
                    strokeWidth: 0.6,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* Static connecting lines. Draw-in animation is a later phase. */}
        {spokes.map((spoke) => (
          <Line
            key={spoke.id}
            from={hub.coordinates}
            to={spoke.coordinates}
            stroke="#C59A43"
            strokeWidth={1}
            strokeOpacity={0.5}
            strokeLinecap="round"
          />
        ))}

        {footprintLocations.map((location) => (
          <MapMarker key={location.id} location={location} />
        ))}
      </ComposableMap>
    </div>
  );
}