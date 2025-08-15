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
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    let curr1 = l1;
    let curr2 = l2;
    let dummy = new ListNode(-1);
    let curr = dummy;
    let leftover = 0;

    while (curr1 || curr2 || leftover) {
      const val1 = curr1 ? curr1.val : 0;
      const val2 = curr2 ? curr2.val : 0;
      const sum = val1 + val2 + leftover;
      leftover = Math.floor(sum / 10);
      const newNode = new ListNode(sum % 10);
      curr.next = newNode;
      curr = curr.next;
      curr1 = curr1 ? curr1.next : null;
      curr2 = curr2 ? curr2.next : null;
    }

    return dummy.next;
  }
}
