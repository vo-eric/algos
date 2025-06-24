export interface Snapshot {
  left: number[];
  right: number[];
  pivot: number;
  array: number[];
  result?: number[];
}

interface QuickSortResult {
  snapshots: Snapshot[];
  sorted: number[];
}

export const quickSort = (array: number[]): QuickSortResult => {
  const snapshots: Snapshot[] = [];

  const sort = (array: number[]): number[] => {
    if (array.length <= 1) {
      return array;
    }

    const pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    const sortedLeft = sort(left);
    const sortedRight = sort(right);

    const result = [...sortedLeft, pivot, ...sortedRight];

    snapshots.push({
      array: array.slice(1),
      left,
      pivot,
      right,
      result,
    });

    return result;
  };
  const sorted = sort(array);
  return { snapshots, sorted };
};
