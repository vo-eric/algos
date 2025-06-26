import { type BFSSnapshot, type TreeNode } from "~/lib/types/searchTypes";

export const generateSnapshots = (root: TreeNode): BFSSnapshot[] => {
  const snapshots: BFSSnapshot[] = [];

  const bfs = (node: TreeNode) => {
    const queue: TreeNode[] = [node];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode?.children?.[0]) {
        queue.push(currentNode.children[0]);
      }

      if (currentNode?.children?.[1]) {
        queue.push(currentNode.children[1]);
      }

      snapshots.push({
        activeNode: currentNode?.name ?? "",
        queue: queue.map((node) => node.name),
      });
    }
  };

  bfs(root);
  return snapshots;
};
