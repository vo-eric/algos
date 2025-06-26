"use client";

import { useState } from "react";
import numIslands from "./algo";
import Snapshot from "./Snapshot";

export default function BFS() {
  const snapshots = numIslands([
    ["1", "1", "0", "0", "0", "1", "0", "0"],
    ["1", "1", "1", "1", "0", "0", "0", "0"],
    ["1", "0", "1", "0", "0", "0", "0", "1"],
    ["1", "0", "1", "0", "1", "0", "0", "0"],
    ["0", "0", "1", "1", "1", "1", "1", "0"],
    ["1", "0", "0", "0", "0", "0", "1", "0"],
    ["0", "0", "0", "0", "0", "1", "1", "0"],
    ["0", "0", "1", "0", "0", "0", "0", "0"],
  ]);

  const [index, setIndex] = useState(0);

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/ocean.jpeg')" }}
    >
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-10">
          <div className="flex justify-center">
            <Snapshot
              grid={snapshots[index].grid}
              currentCell={snapshots[index].currentCell}
              queue={snapshots[index].stringifiedQueue}
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIndex(Math.max(0, index - 1))}
              className="cursor-pointer rounded-md bg-blue-500 p-2 text-white"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setIndex(Math.min(snapshots.length - 1, index + 1))
              }
              className="cursor-pointer rounded-md bg-blue-500 p-2 text-white"
            >
              Next
            </button>
          </div>
        </div>
        <div className="w-[300px] rounded-md bg-white/10 p-4 text-lg text-white">
          <h4>Algorithm Explanation: </h4>
          <section>
            There is a scary fire that is spreading through every island until
            it reaches the water and fizzles out. Somehow every island is being
            targeted by spontaneous fires. Don&apos;t ask me how that works - it
            just does.
          </section>
        </div>
      </div>
    </div>
  );
}
