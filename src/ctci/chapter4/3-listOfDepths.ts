/**
 * List of Depths:
 *
 * Given a binary tree, design an algorithm which creates a linked list of all the nodes
 * at each depth (e.g., if you have a tree with depth D, you'll have D linked lists)
 */

import { TreeNode } from "./utils/index.ts";

export class ListNode {
  value: TreeNode;
  next: TreeNode | null;

  constructor(value: TreeNode, next: TreeNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

const listOfDepths = (root: TreeNode): ListNode[] => {
  const result = [];
  const queue = [root];
  let head = 0;

  while (head < queue.length) {
    const levelLength = queue.length - head;
    const dummy = new ListNode(new TreeNode(-1));
    let curr = dummy;

    for (let i = 0; i < levelLength; i++) {
      const treeNode = queue[head];
      const newNode = new ListNode(treeNode);
      curr.next = newNode;
      curr = curr.next;

      if (treeNode.left) {
        queue.push(treeNode.left);
      }

      if (treeNode.right) {
        queue.push(treeNode.right);
      }
      head++;
    }

    result.push(dummy.next);
  }

  return result;
};

const node1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7)),
);

console.log(JSON.stringify(listOfDepths(node1)));
