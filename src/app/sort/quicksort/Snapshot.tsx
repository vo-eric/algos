"use client";

import { motion, useAnimate } from "motion/react";
import type { Snapshot } from "./quicksort";
import NumberCard from "~/components/NumberCard";
import { useEffect } from "react";

export default function Snapshot({
  snapshot: { left, right, pivot, array },
  currentIndex,
  elementIndex,
}: {
  snapshot: Snapshot;
  currentIndex: number;
  elementIndex: number;
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    //Set up the sequential animation
    //Fade in the snapshot
    animate(scope.current, { opacity: 1 }, { duration: 1, delay: 0 });

    //Separate the pivot from the array
    animate(
      "#pivot",
      { x: -100 },
      { duration: 1, delay: 1, ease: "easeInOut" },
    );
    animate("#array", { x: 100 }, { duration: 1, delay: 1, ease: "easeInOut" });

    //Go through each number in the array and place it in the correct section
    let leftCount = 0;
    let rightCount = 0;
    let updatedDelay;
    array.forEach((number, i) => {
      if (number < pivot) {
        animate(
          `#array-${i}`,
          { y: 100, x: -300 - i * 65 + leftCount * 80 },

          { duration: 1, delay: 2 + i * 0.5, ease: "easeInOut" },

          //translate the element to roughly 0 and then to its correct position
        );
        leftCount++;
      } else {
        animate(
          `#array-${i}`,
          { y: 100, x: 300 - i * 65 + rightCount * 60 },
          { duration: 1, delay: 2 + i * 0.5, ease: "easeInOut" },
        );
        rightCount++;
      }
    });
  }, [animate, scope]);

  /*

  PLAN
  have the steps be invisible
  when the step is active, have it fade in, and then run the following animation
    first element of the array will be removed and then placed into the pivot section
    from there highlight each element in the sliced (1 to end) array and have each element
      be placed into the corresponding section
  */

  return (
    <motion.div
      ref={scope}
      className="flex h-[200px] flex-col gap-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: elementIndex > currentIndex ? 0 : 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="flex gap-10">
        <div className="flex gap-5 text-red-700">
          <motion.div id="pivot" className="text-teal-500">
            <NumberCard id="pivot-card" number={pivot} />
          </motion.div>
          <motion.div id="array" className="flex gap-5">
            {array.map((number, i) => {
              return <NumberCard id={`array-${i}`} key={i} number={number} />;
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
