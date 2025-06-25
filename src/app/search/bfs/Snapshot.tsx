import clsx from "clsx";

export default function Snapshot({
  snapshot,
  currentCell,
}: {
  snapshot: string[][];
  currentCell: [number, number] | null;
}) {
  return (
    <div
      className={`grid grid-cols-${snapshot[0].length} grid-rows-${snapshot.length} gap-4`}
    >
      {snapshot.map((row, i) => {
        return (
          // <div key={i}>
          <div key={i} className="flex gap-2">
            {row.map((cell, j) => {
              return (
                <div
                  className={clsx(
                    "flex h-10 w-10 items-center justify-center border border-gray-300",
                    {
                      "bg-blue-500": cell === "1",
                    },
                    {
                      "border-red-800":
                        i === currentCell?.[0] && j === currentCell?.[1],
                    },
                  )}
                  key={`${i}-${j}`}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
