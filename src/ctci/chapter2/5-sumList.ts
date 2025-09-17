/**
 *
 * Sum Lists: You have two numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list.
 * Write a function that adds the two numbers and returns the sum as a linked list.
 *
 * EXAMPLE
 * Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
 * Output: 2 -> 1 -> 9. That is, 912.
 *
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat the above problem.
 *
 * EXAMPLE
 * lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
 * Output: 9 -> 1 -> 2. That is, 912.
 */

import { ListNode, listToArray } from "./utils/index.ts";

const sumList = (
  list1: null | ListNode,
  list2: null | ListNode,
): ListNode | null => {
  let curr1: null | ListNode = list1;
  let curr2: null | ListNode = list2;
  let carryover = 0;
  const dummy = new ListNode(-1);
  let curr = dummy;

  while (curr1 || curr2 || carryover) {
    const val1 = curr1 ? curr1.value : 0;
    const val2 = curr2 ? curr2.value : 0;
    const total = val1 + val2 + carryover;
    const newNode = new ListNode(total % 10);
    carryover = Math.floor(total / 10);
    curr.next = newNode;

    if (curr1) {
      curr1 = curr1.next;
    }

    if (curr2) {
      curr2 = curr2.next;
    }

    curr = curr.next;
  }

  return reverseLinkedList(dummy.next);
};

const reverseLinkedList = (head: ListNode | null): ListNode | null => {
  let prev: null | ListNode = null;
  let curr: null | ListNode = head;
  let temp: null | ListNode = null;

  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev ?? null;
};

/**
 * * Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
 */

const node1 = new ListNode(7);
const node2 = new ListNode(1);
const node3 = new ListNode(6);

const node4 = new ListNode(5);
const node5 = new ListNode(9);
const node6 = new ListNode(2);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;

console.log(listToArray(sumList(node1, node4)));
