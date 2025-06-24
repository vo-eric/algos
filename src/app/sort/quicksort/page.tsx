"use client";

import Snapshot from "./Snapshot";

export interface Snapshot {
  left: number[];
  right: number[];
  pivot: number;
  array: number[];
  id: string;
  result?: number[];
}

interface QuickSortResult {
  snapshots: Snapshot[];
  sorted: number[];
}

enum Direction {
  left,
  right,
  root,
}

const quickSort = (array: number[]): QuickSortResult => {
  const snapshots: Snapshot[] = [];

  const sort = (
    array: number[],
    depth: number,
    direction: Direction = Direction.root,
  ): number[] => {
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

    snapshots.push({
      array: array.slice(1),
      left,
      pivot,
      right,
      id: `${depth}-${direction}`,
    });

    const sortedLeft = sort(left, depth + 1, Direction.left);
    const sortedRight = sort(right, depth + 1, Direction.right);

    const result = [...sortedLeft, pivot, ...sortedRight];

    const snapshot = snapshots.find(
      (snapshot) => snapshot.id === `${depth}-${direction}`,
    );

    if (snapshot) {
      snapshot.result = result;
    }

    return result;
  };
  const sorted = sort(array, 0, Direction.root);
  return { snapshots, sorted };
};

/*
DISPLAY THE CURRENT ARRAY WE ARE WORKING ON FROM 1 TO THE END
DISPLAY THE PIVOT
DISPLAY THE LEFT AND RIGHT ARRAY AT EACH ITERATION


*/

export default function QuickSort() {
  const nums = [5, 3, 8, 4, 2, -1];
  const { snapshots, sorted } = quickSort(nums);
  console.log("sorted", sorted);
  console.log("shots", snapshots);

  return (
    <div className="mx-auto flex w-[50%] flex-col items-center gap-10">
      <h1 className="text-4xl font-bold">Quick Sort</h1>
      <div className="flex gap-5 text-red-700">
        {nums.map((num, i) => (
          <div key={i}>{num}</div>
        ))}
      </div>
      <div className="flex flex-col gap-10">
        {snapshots.map((snapshot, index) => (
          <Snapshot key={index} snapshot={snapshot} />
        ))}
      </div>
      {/* results */}
      <div>
        {snapshots.reverse().map((snapshot, i) => {
          return <div key={i}>{snapshot?.result?.join(", ")}</div>;
        })}
      </div>
    </div>
  );
}
