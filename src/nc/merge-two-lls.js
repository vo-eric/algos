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
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    let curr1 = list1;
    let curr2 = list2;
    const head = new ListNode(-1);
    let curr = head;

    while (curr1 && curr2) {
      if (curr1.val < curr2.val) {
        curr.next = new ListNode(curr1.val);
        curr1 = curr1.next;
      } else {
        curr.next = new ListNode(curr2.val);
        curr2 = curr2.next;
      }
      curr = curr.next;
    }

    if (curr1) {
      curr.next = curr1;
    }

    if (curr2) {
      curr.next = curr2;
    }

    return head.next;
  }
}
