/**
 * Validate BST:
 *
 * Implement a function to check if a binary tree is a binary search tree.
 */

import { TreeNode } from "./utils/index.ts";

/**
 * Time: O(n)
 * Space: O(h), where h is the height of the tree
 */
const validateBST = (root: TreeNode): boolean => {
  const dfs = (root: TreeNode | null, min: number, max: number): boolean => {
    if (!root) {
      return true;
    }

    if (root.value <= min || root.value >= max) {
      return false;
    }

    const left = dfs(root.left, min, root.value);
    const right = dfs(root.right, root.value, max);

    return left && right;
  };

  return dfs(root, -Infinity, Infinity);
};

const root1 = new TreeNode(
  8,
  new TreeNode(
    3,
    new TreeNode(1),
    new TreeNode(6, new TreeNode(4), new TreeNode(7)),
  ),
  new TreeNode(10, null, new TreeNode(14, new TreeNode(13))),
);

const root2 = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(2, new TreeNode(1))),
);

const root3 = new TreeNode(
  8,
  new TreeNode(1),
  new TreeNode(7, null, new TreeNode(14, new TreeNode(13))),
);

console.log(validateBST(root1), true);
console.log(validateBST(root2), true);
console.log(validateBST(root3), false);
