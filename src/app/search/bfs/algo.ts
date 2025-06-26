export default function numIslands(grid: string[][]): {
  stringifiedQueue: string[];
  grid: string[][];
  currentCell: [number, number] | null;
  queue: [number, number][];
}[] {
  const snapshots: {
    grid: string[][];
    currentCell: [number, number] | null;
    queue: [number, number][];
    stringifiedQueue: string[];
  }[] = [];

  // const traverse = (x: number, y: number) => {
  //   if (
  //     x < 0 ||
  //     x >= grid.length ||
  //     y < 0 ||
  //     y >= grid[0].length ||
  //     grid[x][y] === "0"
  //   ) {
  //     return;
  //   }

  //   // Take snapshot before marking current cell as visited
  //   snapshots.push({
  //     grid: grid.map((row) => row.slice()),
  //     currentCell: [x, y],
  //   });

  //   // Mark current cell as visited
  //   grid[x][y] = "0";

  //   // Recursively traverse in all four directions
  //   traverse(x + 1, y);
  //   traverse(x - 1, y);
  //   traverse(x, y + 1);
  //   traverse(x, y - 1);
  // };

  const bfs = (queue: [number, number][]) => {
    let currentCell = queue[0];
    while (queue.length > 0) {
      const length = queue.length;

      // snapshots.push({
      //   grid: grid.map((row) => row.slice()),
      //   currentCell,
      //   queue: [...queue],
      // });

      for (let i = 0; i < length; i++) {
        const [x, y] = queue.shift()!;
        currentCell = [x, y];

        if (
          x < 0 ||
          x >= grid.length ||
          y < 0 ||
          y >= grid[0].length ||
          grid[x][y] === "0"
        ) {
          continue;
        }
        grid[x][y] = "0";

        if (x + 1 < grid.length && grid[x + 1][y] === "1") {
          queue.push([x + 1, y]);
        }
        if (x - 1 >= 0 && grid[x - 1][y] === "1") {
          queue.push([x - 1, y]);
        }
        if (y + 1 < grid[0].length && grid[x][y + 1] === "1") {
          queue.push([x, y + 1]);
        }
        if (y - 1 >= 0 && grid[x][y - 1] === "1") {
          queue.push([x, y - 1]);
        }
      }

      snapshots.push({
        grid: grid.map((row) => row.slice()),
        currentCell,
        queue: [...queue],
        stringifiedQueue: queue.map(([x, y]) => `${x},${y}`),
      });
    }
    return snapshots;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        const queue: [number, number][] = [[i, j]];
        // Take snapshot before starting to traverse this island
        snapshots.push({
          grid: grid.map((row) => row.slice()),
          currentCell: [i, j],
          queue: [...queue],
          stringifiedQueue: queue.map(([x, y]) => `${x},${y}`),
        });
        bfs(queue);
      }
    }
  }

  // Add final snapshot showing the completed state
  snapshots.push({
    grid: grid.map((row) => row.slice()),
    currentCell: null,
    queue: [],
    stringifiedQueue: [],
  });

  // console.log("snapshots", snapshots);
  return snapshots;
}
