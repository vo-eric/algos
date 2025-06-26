export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export interface Snapshot {
  activeNode: string;
  visitedNodes: string[];
}
