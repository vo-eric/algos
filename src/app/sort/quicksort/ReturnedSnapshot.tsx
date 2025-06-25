import { useEffect } from "react";
import type { Snapshot } from "./quicksort";
import { motion, useAnimate } from "motion/react";
import NumberCard from "~/components/NumberCard";

export default function ReturnedSnapshot({
  snapshot,
  currentIndex,
  resultIndex,
}: {
  snapshot: Snapshot;
  currentIndex: number;
  resultIndex: number;
}) {
  const { sortedRight, sortedLeft, pivot } = snapshot;
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (sortedLeft?.length) {
      animate("#left", { x: 0 }, { duration: 1, delay: 1 });
    }
    if (sortedRight?.length) {
      animate("#right", { x: 0 }, { duration: 1, delay: 1 });
    }
  }, []);

  console.log("sortedLeft", sortedLeft);
  console.log("sortedRight", sortedRight);
  console.log("pivot", pivot);

  return (
    <motion.div
      className="flex w-full flex-col items-center gap-4"
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: resultIndex > currentIndex ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex gap-5">
        <motion.div
          id="left"
          className="flex gap-5 text-red-500"
          initial={{ x: -300 }}
        >
          {sortedLeft?.map((number, i) => (
            <motion.div key={i} className="flex gap-5">
              <NumberCard number={number} id={`left-${i}`} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div id="pivot" className="flex gap-5 text-teal-500">
          <NumberCard number={pivot} id="pivot-card" />
        </motion.div>
        <motion.div
          className="flex gap-5 text-blue-700"
          id="right"
          initial={{ x: 300 }}
        >
          {sortedRight?.map((number, i) => (
            <motion.div key={i} className="flex gap-5">
              <NumberCard number={number} id={`right-${i}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
