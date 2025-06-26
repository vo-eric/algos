export default function numIslands(
  grid: string[][],
): { grid: string[][]; currentCell: [number, number] | null }[] {
  const snapshots: {
    grid: string[][];
    currentCell: [number, number] | null;
  }[] = [];

  const traverse = (x: number, y: number) => {
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[0].length ||
      grid[x][y] === "0"
    ) {
      return;
    }

    // Take snapshot before marking current cell as visited
    snapshots.push({
      grid: grid.map((row) => row.slice()),
      currentCell: [x, y],
    });

    // Mark current cell as visited
    grid[x][y] = "0";

    // Recursively traverse in all four directions
    traverse(x + 1, y);
    traverse(x - 1, y);
    traverse(x, y + 1);
    traverse(x, y - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        // Take snapshot before starting to traverse this island
        snapshots.push({
          grid: grid.map((row) => row.slice()),
          currentCell: [i, j],
        });
        traverse(i, j);
      }
    }
  }

  // Add final snapshot showing the completed state
  snapshots.push({
    grid: grid.map((row) => row.slice()),
    currentCell: null,
  });

  return snapshots;
}
