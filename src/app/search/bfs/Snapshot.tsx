import clsx from "clsx";

export default function Snapshot({
  grid,
  currentCell,
  queue,
}: {
  grid: string[][];
  currentCell: [number, number] | null;
  queue: string[];
}) {
  return (
    <div
      className={`grid grid-cols-${grid[0].length} grid-rows-${grid.length}`}
    >
      {grid.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((cell, j) => {
              return (
                <div
                  className={clsx(
                    "flex h-30 w-30 items-center justify-center border border-gray-300 bg-cover bg-center bg-no-repeat",
                    {
                      "bg-[url('/land.jpeg')]":
                        cell === "1" && !queue.includes(`${i},${j}`),
                    },
                    {
                      "bg-[url('/fire.jpeg')]":
                        queue.includes(`${i},${j}`) ||
                        (i === currentCell?.[0] && j === currentCell?.[1]),
                    },
                    // {
                    //   "bg-[url('/tidal-wave.jpeg')]":
                    //     i === currentCell?.[0] &&
                    //     j === currentCell?.[1] &&
                    //     grid[i][j] === "1",
                    // },
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
