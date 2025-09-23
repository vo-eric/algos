/**
 * Check Subtree:
 *
 * T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an
 * algorithm to determine if T2 is a subtree of T1. A tree T2 is a subtree of T1 if
 * there exists a node n in T1 such that the subtree of n is identical to T2.
 * That is, if you cut off the tree at node n, the two trees would be identical.
 */

import { TreeNode } from "./utils/index.ts";

/**
 * Time: O(n)
 * Space: O(h)
 */
const checkSubtree = (root1: TreeNode, root2: TreeNode): boolean => {
  //find the node in root1 that corresponds to the root in node2
  const rootNode = findNode(root1, root2);

  if (!rootNode) {
    return false;
  }

  //if node is found, check to see if both trees are the same
  return isSameTree(rootNode, root2);
};

const findNode = (root1: TreeNode | null, root2: TreeNode): TreeNode | null => {
  if (!root1) {
    return null;
  }

  if (root1 === root2) {
    return root1;
  }

  return findNode(root1.left, root2) ?? findNode(root1.left, root2);
};

const isSameTree = (
  root1: TreeNode | null,
  root2: TreeNode | null,
): boolean => {
  if (!root1 && !root2) {
    return true;
  }

  const val1 = root1 ? root1.value : -Infinity;
  const val2 = root2 ? root2.value : -Infinity;

  if (val1 !== val2) {
    return false;
  }

  return (
    isSameTree(root1?.left, root2.left) && isSameTree(root1?.left, root2.left)
  );
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

console.log(checkSubtree(node1, node8));
