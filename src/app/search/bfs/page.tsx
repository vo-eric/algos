"use client";

import { useState } from "react";
import numIslands from "./algo";
import Snapshot from "./Snapshot";

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
  const snapshots = numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]);

  console.log(snapshots);

  const [index, setIndex] = useState(0);

  return (
    <>
      <div
        className="bg-url-[/ocean.jpeg] min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ocean.jpeg')" }}
      >
        {/* {snapshots.map((snapshot, i) => { */}
        <Snapshot
          snapshot={snapshots[index].grid}
          currentCell={snapshots[index].currentCell}
        />
        {/* })} */}
      </div>
      <div>
        <button
          onClick={() => setIndex(Math.max(0, index - 1))}
          className="cursor-pointer rounded-md bg-blue-500 p-2 text-white"
        >
          Previous
        </button>
        <button
          onClick={() => setIndex(Math.min(snapshots.length - 1, index + 1))}
          className="cursor-pointer rounded-md bg-blue-500 p-2 text-white"
        >
          Next
        </button>
      </div>
    </>
  );
}
