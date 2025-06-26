export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export interface BFSSnapshot {
  activeNode: string;
  queue?: string[];
}

export interface DFSSnapshot {
  activeNode: string;
  visitedNodes: string[];
}
