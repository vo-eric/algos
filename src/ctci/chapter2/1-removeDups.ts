import { listToArray } from "./utils/index.ts";

/**
 * Remove Dups:
 *
 *  Write code to remove duplicates from an unsorted linked list.
 *
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 *
 */

class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Time: O(n)
 * Space: O(n)
 */
const removeDups = (head: ListNode): ListNode => {
  const set = new Set();
  let curr: null | ListNode = head;
  let prev: null | ListNode = null;

  while (curr) {
    if (set.has(curr.value)) {
      if (prev) {
        prev.next = curr.next;
      }
    } else {
      set.add(curr.value);
    }

    prev = curr;
    curr = curr.next;
  }

  return head;
};

/**
 * Time: O(n^2)
 * Space: O(1)
 */

const removeDupsConstantSpace = (head: ListNode): ListNode => {
  let curr: null | ListNode = head;
  let prev: null | ListNode = null;
  let fast: null | ListNode = null;

  while (curr) {
    prev = curr;
    fast = curr.next;

    while (fast) {
      if (fast.value === curr.value) {
        if (prev) {
          prev.next = fast.next;
          fast = prev.next;

          continue;
        }
      }

      prev = prev!.next;
      fast = fast.next;
    }

    curr = curr.next;
  }

  return head;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(1);
const node6 = new ListNode(1);
const node7 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(listToArray(removeDupsConstantSpace(node1)));
