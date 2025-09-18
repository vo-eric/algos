/**
 * Route Between Nodes:
 *
 * Given a directed graph, design an algorithm to find out whether there is a
 * route between two nodes.
 */

import { GraphNode } from "./utils/index.ts";

const routeBetweenNodes = (nodeA: GraphNode, nodeB: GraphNode): boolean => {
  const visited = new Set<GraphNode>();
  const queue = [nodeA];
  let index = 0;

  while (index < queue.length) {
    const node = queue[index];
    index++;

    if (visited.has(node)) {
      continue;
    }

    if (node === nodeB) {
      return true;
    }

    visited.add(node);

    for (const neighbor of node.adjacencyList) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return false;
};

const routeBetweenNodesDFS = (nodeA: GraphNode, nodeB: GraphNode): boolean => {
  const visited = new Set<GraphNode>();

  const dfs = (node: GraphNode): boolean => {
    if (visited.has(node)) {
      return false;
    }

    if (node === nodeB) {
      return true;
    }

    visited.add(node);

    for (const child of node.adjacencyList) {
      if (dfs(child)) {
        return true;
      }
    }
    return false;
  };

  return dfs(nodeA);
};

const node1 = new GraphNode("A");
const node2 = new GraphNode("B");
const node3 = new GraphNode("C");
const node4 = new GraphNode("D");

node1.adjacencyList = [node2, node3];
node3.adjacencyList = [node2, node4];
node2.adjacencyList = [node1];
console.log(routeBetweenNodesDFS(node1, node4));
console.log(routeBetweenNodesDFS(node2, node4));
