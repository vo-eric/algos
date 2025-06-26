import { type Snapshot, type TreeNode } from "./page";

export const generateSnapshots = (
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
