/**
 * Zero Matrix:
 *
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column are set to 0.
 *
 */

/**
 * Time: O(n * m)
 * Space: O(1)
 */

const zeroMatrix = (matrix: number[][]): number[][] => {
  /*
    check to see if column and row 0 have a zero in them.
      set these values to a boolean

    treat the first row and column as the 0s
    iterate through the rows starting at 1
      if there is a zero, set the first element of the column and row to 0

    iterate through the matrix
      if there is a zero, set the first element of the column and row to 0

    iterate through the rows starting at 1 again
      if a zero exists in that row, set every element in that row to 0

    do the same for the columns

    if rowHasZero or colHasZero is true, set the first column and row to 0
  */

  let rowHasZero = false;
  let colHasZero = false;

  //row 0 check
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[0][i] === 0) {
      rowHasZero = true;
      break;
    }
  }

  //col 0 check
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[i][0] === 0) {
      colHasZero = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullRow(matrix, i);
    }
  }

  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      nullCol(matrix, i);
    }
  }

  if (rowHasZero) {
    nullRow(matrix, 0);
  }

  if (colHasZero) {
    nullCol(matrix, 0);
  }

  return matrix;
};

const nullRow = (matrix: number[][], row: number): void => {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
};

const nullCol = (matrix: number[][], col: number): void => {
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
};

const g1 = [
  [1, 2, 3],
  [4, 0, 5],
  [6, 7, 8],
  [9, 1, 2],
];

console.log(zeroMatrix(g1));
