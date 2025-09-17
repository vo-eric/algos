export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

export const listToArray = (head: ListNode | null): number[] => {
  const result = [];
  let curr: ListNode | null = head;

  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }

  return result;
};
