/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    //advance fast and slow until they meet
    //when they meet, slow will be n nodes from head
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        //once fast and slow meet, reset slow to head
        if (slow === fast) {
            slow = head;

            //advance fast and slow until they meet at the beginning of the cycle
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
        return slow;
        }
    }
    return null;
};