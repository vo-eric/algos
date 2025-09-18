export class ListNode {
  value: number | string;
  next: ListNode | null;

  constructor(value: number | string, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

export const listToArray = (head: ListNode | null): (number | string)[] => {
  const result = [];
  let curr: ListNode | null = head;

  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }

  return result;
};
