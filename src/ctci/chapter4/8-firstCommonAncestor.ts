/**
 * First Common Ancestor:
 *
 * Design an algorithm and write code to find the first common ancestor
 * of two nodes in a binary tree. Avoid storing additional nodes in a data structure.
 * NOTE: This is not necessarily a binary search tree.
 *
 */

import { TreeNode } from "./utils/index.ts";

/**
 * Time: O(n)
 * Space: O(h)
 */
const firstCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode,
): TreeNode | null => {
  if (!root) {
    return null;
  }

  if (root.value === p.value || root.value === q.value) {
    return root;
  }

  const left = firstCommonAncestor(root.left, p, q);
  const right = firstCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ?? right;
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8);
const node9 = new TreeNode(9);

node1.left = node2;
node2.left = node4;
node2.right = node5;
node5.left = node8;
node5.right = node9;
node1.right = node3;
node3.left = node6;
node3.right = node7;

// const root1 = new TreeNode(
//   1,
//   new TreeNode(
//     2,
//     new TreeNode(4),
//     new TreeNode(5, new TreeNode(8, new TreeNode(9))),
//   ),
//   new TreeNode(3, new TreeNode(6), new TreeNode(7)),
// );

console.log(firstCommonAncestor(node1, node7, node9));
