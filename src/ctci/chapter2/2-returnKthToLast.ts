import { listToArray, ListNode } from "./utils/index.ts";

/**
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 */

/**
 * Time: O(n)
 * Space: O(1)
 */

const returnKthToLast = (head: ListNode, k: number): ListNode | null => {
  const dummy = new ListNode(-1, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let i = 0; i < k; i++) {
    if (!fast) {
      throw new Error("k is longer than the length of the list");
    }
    fast = fast.next;
  }

  while (fast?.next) {
    if (slow) {
      slow = slow.next;
      fast = fast.next;
    }
  }

  if (slow?.next) {
    slow.next = slow.next.next ?? null;
  }

  return dummy.next;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// console.log(listToArray(returnKthToLast(node1, 1)));

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(listToArray(returnKthToLast(node1, 3)));
