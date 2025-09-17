/**
 * Rotate Matrix:
 *
 * Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 */

/**
 * Time: O(n^2)
 * Space: O(1)
 */

const rotateMatrix = (matrix: number[][]): number[][] => {
  /*
    swap values along the diagonal
    swap columns at each row
  */

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (const row of matrix) {
    row.reverse();
  }

  return matrix;
};

const g1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateMatrix(g1));
