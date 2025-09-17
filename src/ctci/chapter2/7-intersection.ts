/**
 * Intersection:
 *
 * Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting
 * node. Note that the intersection is defined based on reference, not value. That is, if the kth
 * node of the first linked list is the exact same node (by reference) as the jth node of the second
 * linked list, then they are intersecting
 */

import { ListNode } from "./utils/index.ts";

/**
 * Time: O(n)
 * Space: O(n)
 */
const intersection = (
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null => {
  let currA: ListNode | null = headA;
  let currB: ListNode | null = headB;
  const lengthA = getListLength(headA);
  const lengthB = getListLength(headB);
  const difference = Math.abs(lengthA - lengthB);

  if (lengthA < lengthB) {
    currA = padList(headA, difference);
  } else if (lengthB > lengthA) {
    currB = padList(headB, difference);
  }

  while (currA && currB) {
    if (currA === currB) {
      return currA;
    }

    currA = currA.next;
    currB = currB.next;
  }

  return null;
};

const getListLength = (head: ListNode | null): number => {
  let length = 0;
  let curr = head;

  while (curr) {
    length++;
    curr = curr.next;
  }

  return length;
};

const padList = (head: ListNode | null, n: number): ListNode | null => {
  let curr = head;
  for (let i = 0; i < n; i++) {
    const dummy = new ListNode(-1, curr);
    curr = dummy;
  }
  return curr ?? null;
};

const node1 = new ListNode(1);
const intersectingNode = new ListNode(4);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = intersectingNode;
node2.next = node3;
node3.next = intersectingNode;

console.log(intersection(node1, node2));
