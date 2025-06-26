"use client";

import { useEffect, useState } from "react";
import { Tree } from "react-d3-tree";

export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const data: TreeNode = {
  name: "A",
  children: [
    {
      name: "B",
      children: [
        {
          name: "D",
          children: [
            {
              name: "H",
              children: [],
            },
            {
              name: "I",
              children: [],
            },
          ],
        },
        {
          name: "E",
          children: [
            {
              name: "J",
              children: [],
            },
            {
              name: "K",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "C",
      children: [
        {
          name: "F",
          children: [
            {
              name: "L",
              children: [],
            },
            {
              name: "M",
              children: [],
            },
          ],
        },
        {
          name: "G",
          children: [
            {
              name: "N",
              children: [],
            },
            {
              name: "O",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export interface Snapshot {
  activeNode: string;
  visitedNodes: string[];
}

const generateSnapshots = (
  root: TreeNode,
): { activeNode: string; visitedNodes: string[] }[] => {
  const snapshots: Snapshot[] = [];

  const dfs = (node: TreeNode | null | undefined, visitedNodes: string[]) => {
    if (!node) return;

    const snapshot = {
      activeNode: node.name,
      visitedNodes,
    };

    snapshots.push(snapshot);
    if (node.children?.length === 0) {
      return;
    }
    dfs(node.children?.[0], [...snapshot.visitedNodes, node.name]);

    snapshots.push(snapshot);
    dfs(node.children?.[1], [...snapshot.visitedNodes, node.name]);
  };

  dfs(root, []);
  return snapshots;
};

export default function DfsGraph() {
  const [index, setIndex] = useState<number>(0);
  const [activeNodes, setActiveNodes] = useState<string>();
  const [visitedNodes, setVisitedNodes] = useState<string[]>([]);
  const snapshots = generateSnapshots(data);

  useEffect(() => {
    const snapshot = snapshots[index];

    setActiveNodes(snapshot.activeNode);
    setVisitedNodes(snapshot.visitedNodes);
  }, [index, snapshots]);

  return (
    <div className="mx-auto flex w-[80%] flex-col items-center justify-center">
      <h1>DfsGraph</h1>
      <div>
        <button
          onClick={() => setIndex(Math.max(index - 1, 0))}
          className="text-whites rounded-md bg-blue-500 px-4 py-2"
        >
          Previous
        </button>
        <button
          onClick={() => setIndex(Math.min(index + 1, snapshots.length - 1))}
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
