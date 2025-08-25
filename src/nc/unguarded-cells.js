function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    /*
    create a seen set
    create a grid filled with dots
    iterate through guards and walls and populate them into the grid
    iterate through guards again
        dfs through the grid
            base case is out of bounds, hits a wall, or hits a cell inside of the seen set

            going through four directions, call dfs on the updated position and add the current cell to the seen set

    return m * n - guards.length - walls.length - size?
    */
    const grid = [...Array(m)].map(() => Array(n).fill('.'));
    const seen = new Set();
        
    for (const [x,y] of guards) {
        grid[x][y] = 'X';
    }

    for (const [x,y] of walls) {
        grid[x][y] = 'X'
    }

    for (const guard of guards) {
        for (const dir of DIRS) {
            let row = guard[0];
            let col = guard[1];
            while (true) {
                row += dir[0];
                col += dir[1];
                if (
                    row < 0 || 
                    row >= m || 
                    col < 0 || 
                    col >= n || 
                    grid[row][col] === 'X'
                    ) {
                    break;
                }
                seen.add(`${row},${col}`)                
            }
        }
    }
    return m * n - guards.length - walls.length - seen.size;
};

const DIRS = [[1,0], [-1,0], [0,1], [0,-1]];