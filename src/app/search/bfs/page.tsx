"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ResponsiveTreeCanvas } from "@nivo/tree";

const ADJACENCIES = {
  name: "A",
  children: [
    {
      name: "B",
      children: [
        {
          name: "D",
          loc: 100,
        },
        {
          name: "E",
          loc: 200,
        },
      ],
    },
    {
      name: "C",
      children: [
        {
          name: "F",
          loc: 5212,
        },
        {
          name: "G",
          loc: 147016,
        },
      ],
    },
  ],
};
// const ADJACENCIES = {
//   A: ["B", "C"],
//   B: ["D", "E"],
//   C: ["F", "G"],
//   D: ["H", "I"],
//   E: ["J", "K"],
//   F: ["L", "M"],
//   G: ["N", "O"],
//   H: ["P", "Q"],
//   I: ["R", "S"],
//   J: ["T", "U"],
//   K: ["V", "W"],
//   L: ["X", "Y"],
//   M: ["Z", "AA"],
//   N: ["AB", "AC"],
//   O: ["AD", "AE"],
// };

export default function BFS() {
  const [activeNodes, setActiveNodes] = useState<string[]>(["B", "C"]);
  return (
    <>
      <div>hi</div>
      <div style={{ height: "600px", width: "100%" }}>
        <ResponsiveTreeCanvas /* or TreeCanvas for fixed dimensions */
          data={ADJACENCIES}
          mode="tree"
          layout="top-to-bottom"
          identity="name"
          activeNodeSize={24}
          inactiveNodeSize={12}
          nodeColor={{ scheme: "tableau10" }}
          fixNodeColorAtDepth={1}
          linkThickness={2}
          activeLinkThickness={8}
          inactiveLinkThickness={2}
          linkColor={{ from: "target.color", modifiers: [["opacity", 0.4]] }}
          margin={{ top: 90, right: 90, bottom: 90, left: 90 }}
          motionConfig={{
            mass: 259,
            tension: 170,
            friction: 26,
            clamp: false,
            precision: 0.01,
            velocity: 0,
          }}
          meshDetectionRadius={80}
          pixelRatio={2}
        />
      </div>
    </>
  );
}
