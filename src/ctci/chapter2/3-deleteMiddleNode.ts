/**
 * Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
 * the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
 * that node.
 *
 * EXAMPLE
 * Input:the node c from the linked lista->b->c->d->e->f
 * Result: nothing is returned, but the new linked list looks like a->b->d->e->f
 */

import { ListNode, listToArray } from "./utils/index.ts";

/**
 * Time: O(n)
 * Space: O(1)
 */
const deleteMiddleNode = (head: ListNode): ListNode => {
  const dummy = new ListNode(-1, head);
  let slow: null | ListNode = dummy;
  let fast: null | ListNode = dummy;
  let prev: null | ListNode = null;

  while (fast?.next) {
    prev = slow;
    if (slow) {
      slow = slow.next;
    }
    fast = fast.next.next;
  }

  if (slow && prev) {
    prev.next = slow?.next;
  }

  return head;
};

/*

d -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
              s
                            f



d -> 1 -> 2 -> 3 -> 4 -> 5
              s
                           f
*/

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// console.log(listToArray(deleteMiddleNode(node1)));

node5.next = node6;

console.log(listToArray(deleteMiddleNode(node1)));
