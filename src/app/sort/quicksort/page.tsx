"use client";

import { useState } from "react";
import Snapshot from "./Snapshot";
import { quickSort } from "./quicksort";
import ReturnedSnapshot from "./ReturnedSnapshot";

/*
DISPLAY THE CURRENT ARRAY WE ARE WORKING ON FROM 1 TO THE END
DISPLAY THE PIVOT
DISPLAY THE LEFT AND RIGHT ARRAY AT EACH ITERATION
*/

export default function QuickSort() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const nums = [3, 5, 1, 8, 4, 2, -1, 9];
  // const nums = [5, 3, 8, 4, 2, -1];
  const { snapshots, sorted } = quickSort(nums);
  const MAX_INDEX = snapshots.length * 2;

  const handleClick = (direction: "increment" | "decrement") => {
    if (direction === "increment") {
      setCurrentIndex(Math.min(MAX_INDEX, currentIndex + 1));
    } else {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth", // optional for animated scroll
      });
    }, 500);
  };

  // Create a reversed copy for display
  const reversedSnapshots = [...snapshots].reverse();

  return (
    <div className="mx-auto w-[60%]">
      <div className="flex items-center">
        <div className="flex w-full flex-col items-center gap-10">
          <h1 className="text-4xl font-bold">Quick Sort</h1>
          <p>Current Index:{currentIndex}</p>
          <div className="flex flex-col gap-10">
            {/* need to reverse the snapshots to show the correct order */}
            {reversedSnapshots.map((snapshot, index) => {
              if (currentIndex > index) {
                console.log("snapshot", snapshot);
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
            {currentIndex > (MAX_INDEX - 1) / 2 &&
              snapshots.map((snapshot, i) => {
                // Calculate the adjusted index for results (subtract the halfway point)
                const resultIndex = i + Math.floor((MAX_INDEX - 1) / 2) + 2;
                // Only show results for snapshots that have been processed after the halfway point
                if (currentIndex >= resultIndex) {
                  console.log("snapshot.result", snapshot.result);
                  return <ReturnedSnapshot key={i} snapshot={snapshot} />;
                }
                return null;
              })}
          </div>
        </div>
      </div>
      <div className="fixed bottom-[5%] left-[50%] flex translate-x-[-50%] gap-5">
        <button
          className="h-[40px] rounded-sm border border-black px-4 py-2"
          onClick={() => handleClick("decrement")}
        >
          Previous
        </button>
        <button
          className="h-[40px] rounded-sm border border-black px-4 py-2"
          onClick={() => handleClick("increment")}
        >
          Next
        </button>
      </div>
    </div>
  );
}
