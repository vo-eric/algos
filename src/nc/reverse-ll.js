/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let curr = head;
    let prev = null;
    let temp = null;

    // n  1 -> 2 -> 3 -> 4
    //    c
    // p
    //    t

    while (curr) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  }
}
