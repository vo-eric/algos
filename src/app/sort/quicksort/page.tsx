"use client";

import { useState } from "react";
import Snapshot from "./Snapshot";
import { quickSort } from "./quicksort";

/*
DISPLAY THE CURRENT ARRAY WE ARE WORKING ON FROM 1 TO THE END
DISPLAY THE PIVOT
DISPLAY THE LEFT AND RIGHT ARRAY AT EACH ITERATION
*/

export default function QuickSort() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const nums = [1, 3, 8, 4, 2, -1, 9];
  // const nums = [5, 3, 8, 4, 2, -1];
  const { snapshots, sorted } = quickSort(nums);

  console.log(snapshots);

  return (
    <div className="mx-auto w-[60%]">
      <div className="flex items-center">
        <div className="mx-auto flex flex-col gap-10">
          <h1 className="text-4xl font-bold">Quick Sort</h1>
          <p>Current Index:{currentIndex}</p>
          <div className="flex gap-5 text-red-700">
            {nums.map((num, i) => (
              <div key={i}>{num}</div>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            {/* need to reverse the snapshots to show the correct order */}
            {snapshots.reverse().map((snapshot, index) => {
              if (currentIndex > index) {
                return (
                  <Snapshot
                    key={index}
                    snapshot={snapshot}
                    currentIndex={currentIndex}
                    elementIndex={index}
                  />
                );
              }
              return null;
            })}
          </div>
          {/* results */}
          <div>
            {snapshots.reverse().map((snapshot, i) => {
              return (
                <div key={i} className="animate-fadeIn">
                  {snapshot?.result?.join(", ")}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] flex translate-y-[-50%] gap-5">
        <button
          className="h-[40px] rounded-sm border border-black px-4 py-2"
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          Previous
        </button>
        <button
          className="h-[40px] rounded-sm border border-black px-4 py-2"
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
