/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
/**
 * Time Complexity: O(n) where n is the length of nodes
 * Space Complexity: O(1)
 */
class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    const newHead = new ListNode(-1, head);
    let slow = newHead;
    let fast = newHead;

    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    slow.next = slow.next.next;

    return newHead.next;

    /*

        n -> 1 -> 2
             f
        s

        n -> 1 -> 2 -> 3 -> 4
                       f
                 s


        n -> 5

             f
        s

        */
  }
}
