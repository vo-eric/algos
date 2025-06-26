"use client";

import { useState } from "react";
import { data } from "~/lib/tree";
import { generateSnapshots } from "./bfs";
import dynamic from "next/dynamic";

const Tree = dynamic(() => import("react-d3-tree").then((mod) => mod.Tree), {
  ssr: false,
  loading: () => <div className="text-center text-xl">Loading tree...</div>,
});

export default function BFSGraph() {
  const [index, setIndex] = useState(0);
  const snapshots = generateSnapshots(data);
  const [activeNode, setActiveNode] = useState<string>(snapshots[0].activeNode);
  const [queue, setQueue] = useState<string[] | undefined>(snapshots[0].queue);

  const handleClick = (direction: "previous" | "next") => {
    const updatedIndex =
      direction === "previous"
        ? Math.max(0, index - 1)
        : Math.min(snapshots.length - 1, index + 1);
    setIndex(updatedIndex);
    const snapshot = snapshots[updatedIndex];
    setActiveNode(snapshot.activeNode);
    setQueue(snapshot.queue);
  };

  return (
    <div className="mx-auto flex w-[80%] flex-col items-center justify-center">
      <h1>BFS Graph</h1>
      <div>
        <button
          onClick={() => handleClick("previous")}
          className="text-whites rounded-md bg-blue-500 px-4 py-2"
        >
          Previous
        </button>
        <button
          onClick={() => handleClick("next")}
          className="text-whites rounded-md bg-blue-500 px-4 py-2"
        >
          Next
        </button>
      </div>
      <div className="h-[800px] w-[800px]">
        <Tree
          data={data}
          translate={{ x: 400, y: 100 }}
          orientation="vertical"
          separation={{
            siblings: 0.5,
            nonSiblings: 1,
          }}
          onNodeClick={(node) => {
            console.log(node);
          }}
          renderCustomNodeElement={(node) => {
            if (activeNode === node.nodeDatum.name) {
              return (
                <g>
                  <circle r={20} stroke="red" strokeWidth={2} fill="white" />
                  <text
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="black"
                  >
                    {node.nodeDatum.name}
                  </text>
                </g>
              );
            } else if (queue?.includes(node.nodeDatum.name)) {
              return (
                <g>
                  <circle r={20} stroke="blue" strokeWidth={2} fill="white" />
                  <text
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="black"
                  >
                    {node.nodeDatum.name}
                  </text>
                </g>
              );
            }
            return (
              <g>
                <circle r={20} stroke="black" strokeWidth={2} fill="white" />
                <text
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="black"
                >
                  {node.nodeDatum.name}
                </text>
              </g>
            );
          }}
        />
      </div>
    </div>
  );
}
