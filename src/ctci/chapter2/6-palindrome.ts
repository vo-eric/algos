/**
 * Palindrome: Implement a function to check if a linked list is a palindrome.
 */

import { ListNode } from "./utils/index.ts";

/*
reverse the linked list and go through the lists at the same time
*/

/**
 * Time: O(n)
 * Space: O(n)
 */
const isPalindrome = (head: null | ListNode): boolean => {
  const copy = copyLinkedList(head);
  const reversed = reverseLinkedList(copy);

  let currReversed = reversed;
  let curr = head;

  while (curr && currReversed) {
    if (currReversed.value !== curr.value) {
      return false;
    }

    currReversed = currReversed.next;
    curr = curr.next;
  }

  return true;
};

const copyLinkedList = (head: null | ListNode): ListNode | null => {
  const dummy = new ListNode(-1);
  let currDummy = dummy;
  let curr = head;

  while (curr) {
    currDummy.next = new ListNode(curr.value);
    currDummy = currDummy.next;
    curr = curr.next;
  }

  return dummy.next ?? null;
};

const reverseLinkedList = (head: null | ListNode): null | ListNode => {
  let temp: ListNode | null = null;
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(3);
const node5 = new ListNode(2);
const node6 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(isPalindrome(node1));
