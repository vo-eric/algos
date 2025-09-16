/**
 * Partition: Write code to partition a linked list around a value x, such that all
 * nodes less than x come before all nodes greater than or equal to x. If x is
 * contained within the list, the values of x only need to be after the elements less
 * than x (see below). The partition element x can appear anywhere in the "right
 * partition"; it does not need to appear between the left and right partitions.
 *
 * EXAMPLE
 * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
 * Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */

import { ListNode, listToArray } from "./utils/index.ts";

const partition = (
  head: ListNode | null,
  partition: number,
): ListNode | null => {
  const left = new ListNode(-1);
  const right = new ListNode(-1);
  let curr: null | ListNode = head;
  let currLeft = left;
  let currRight = right;

  while (curr) {
    if (curr.value < partition) {
      currLeft.next = new ListNode(curr.value);
      currLeft = currLeft.next;
    } else {
      currRight.next = new ListNode(curr.value);
      currRight = currRight.next;
    }

    curr = curr.next;
  }

  currLeft.next = right.next;
  return left.next ?? null;
};

const node1 = new ListNode(3);
const node2 = new ListNode(5);
const node3 = new ListNode(8);
const node4 = new ListNode(5);
const node5 = new ListNode(10);
const node6 = new ListNode(2);
const node7 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(listToArray(partition(node1, 5)));
console.log(listToArray(partition(null, 5)));

//  -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
