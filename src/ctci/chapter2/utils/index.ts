export type ListNode = {
  value: number;
  next: ListNode | null;
};

export const listToArray = (head: ListNode): number[] => {
  const result = [];
  let curr: ListNode | null = head;

  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }

  return result;
};
