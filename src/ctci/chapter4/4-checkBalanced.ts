/**
 * Check Balanced:
 *
 * Implement a function to check if a binary tree is balanced. For the purposes of this
 * question, a balanced tree is defined to be a tree such that the heights of the two subtrees
 * of any node never differ by more than one
 */

import { TreeNode } from "./utils/index.ts";

/**
 * Time: O(n)
 * Space: O(h) where h is the height of the tree
 */
const checkBalanced = (head: TreeNode): boolean => {
  const dfs = (head: TreeNode | null): number => {
    if (!head) {
      return 0;
    }

    const leftDepth = dfs(head.left);
    const rightDepth = dfs(head.right);

    if (
      leftDepth === -1 ||
      rightDepth === -1 ||
      Math.abs(leftDepth - rightDepth) > 1
    ) {
      return -1;
    }

    return Math.max(leftDepth, rightDepth) + 1;
  };

  return dfs(head) !== -1;
};

const head1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7)),
);

const head2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);

const head3 = new TreeNode(
  1,
  null,
  new TreeNode(
    2,
    new TreeNode(3, new TreeNode(4, new TreeNode(5), new TreeNode(6))),
    new TreeNode(7),
  ),
);

console.log(checkBalanced(head1), true);
console.log(checkBalanced(head2), true);
console.log(checkBalanced(head3), false);
