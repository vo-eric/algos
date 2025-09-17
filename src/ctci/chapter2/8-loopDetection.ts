/**
 * Loop Detection:
 *
 * Given a circular linked list, implement an algorithm that returns the node at the beginning
 * of the loop.
 *
 * DEFINITION
 *
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points to an
 * earlier node, so as to make a loop in the linked list.
 *
 * EXAMPLE
 *
 * Input: A -> B -> C -> D -> E -> C [the same C as earlier]
 * Output: C
 */

import { ListNode } from "./utils/index.ts";

/**
 * Time: O(n)
 * Space: O(1)
 */
const loopDetection = (head: ListNode | null): ListNode | null => {
  let slow = head;
  let fast = head;

  while (true) {
    slow = slow.next;
    fast = fast!.next!.next;

    if (slow === fast) {
      break;
    }
  }

  slow = head;

  while (slow !== fast) {
    slow = slow?.next;
    fast = fast?.next;
  }

  return fast;
};

const node1 = new ListNode("A");
const node2 = new ListNode("B");
const node3 = new ListNode("C");
const node4 = new ListNode("D");
const node5 = new ListNode("E");

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3;

console.log(loopDetection(node1));
