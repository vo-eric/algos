/**
 * Minimal Tree:
 *
 * Given a sorted (increasing order) array with unique integer elements, write an algorithm
 * to create a binary search tree with minimal height.
 */

import { TreeNode } from "./utils/index.ts";

/**
 * Time: O(n)
 * Space: O(logn)
 */
const minimalTree = (nums: number[]) => {
  /*
    get the middle element and that will be the root
    the left will be all elements left of that
    the right will be all elements right of that  
  */
  const buildTree = (start: number, end: number): TreeNode | null => {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);

    const root = new TreeNode(
      nums[mid],
      buildTree(start, mid - 1),
      buildTree(mid + 1, end),
    );

    return root;
  };

  return buildTree(0, nums.length - 1);
};

const nums1 = [1, 2, 3, 4, 5, 6];

console.log(minimalTree(nums1));
