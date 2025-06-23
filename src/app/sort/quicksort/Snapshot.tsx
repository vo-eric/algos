"use client";

import type { Snapshot } from "./page";

export default function Snapshot({
  snapshot: { left, right, pivot, array },
}: {
  snapshot: Snapshot;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-10">
        <p className="text-teal-500">{pivot}</p>
        <div className="flex gap-5 text-red-700">
          [
          {array.map((number, i) => {
            return <div key={i}>{number}</div>;
          })}
          ]
        </div>
      </div>
      <div className="flex gap-10">
        <div>{left.length > 0 && `Left: [${left.join(", ")}]`}</div>
        <p> {pivot}</p>
        <div>{right.length > 0 && `Right: [${right.join(", ")}]`}</div>
      </div>
    </div>
  );
}
