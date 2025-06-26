"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { data } from "~/lib/tree";
import { generateSnapshots } from "./dfs";

const Tree = dynamic(() => import("react-d3-tree").then((mod) => mod.Tree), {
  ssr: false,
  loading: () => <div className="text-center text-xl">Loading tree...</div>,
});

export default function DfsGraph() {
  const [index, setIndex] = useState<number>(0);
  const snapshots = generateSnapshots(data);
  const [activeNodes, setActiveNodes] = useState<string>(
    snapshots[0].activeNode,
  );
  const [visitedNodes, setVisitedNodes] = useState<string[]>(
    snapshots[0].visitedNodes,
  );

  const handleClick = (direction: "previous" | "next") => {
    const updatedIndex =
      direction === "previous"
        ? Math.max(0, index - 1)
        : Math.min(snapshots.length - 1, index + 1);
    setIndex(updatedIndex);
    const snapshot = snapshots[updatedIndex];
    setActiveNodes(snapshot.activeNode);
    setVisitedNodes(snapshot.visitedNodes);
  };

  return (
    <div className="mx-auto flex w-[80%] flex-col items-center justify-center">
      <h1>DfsGraph</h1>
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
            if (
              activeNodes === node.nodeDatum.name ||
              visitedNodes.includes(node.nodeDatum.name)
            ) {
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
