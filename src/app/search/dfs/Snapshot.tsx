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
      className={`grid grid-cols-${snapshot[0].length} grid-rows-${snapshot.length}`}
    >
      {snapshot.map((row, i) => {
        return (
          // <div key={i}>
          <div key={i} className="flex">
            {row.map((cell, j) => {
              return (
                <div
                  className={clsx(
                    "flex h-30 w-30 items-center justify-center border border-gray-300 bg-cover bg-center bg-no-repeat",
                    {
                      "bg-[url('/land.jpeg')]": cell === "1",
                    },
                    {
                      "bg-[url('/tidal-wave.jpeg')]":
                        i === currentCell?.[0] && j === currentCell?.[1],
                    },
                  )}
                  key={`${i}-${j}`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
