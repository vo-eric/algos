/**
 * Minimal Tree:
 *
 * Given a sorted (increasing order) array with unique integer elements, write an algorithm
 * to create a binary search tree with minimal height.
 */

import { TreeNode } from "./utils/index.ts";

const minimalTree = (nums: number[]) => {
  /*
    get the middle element and that will be the root
    the left will be all elements left of that
    the right will be all elements right of that  
  */
  const buildTree = (nums: number[]): TreeNode | null => {
    if (!nums.length) {
      return null;
    }
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid + 1);

    const root = new TreeNode(nums[mid], buildTree(left), buildTree(right));

    return root;
  };

  return buildTree(nums);
};

const nums1 = [1, 2, 3, 4, 5, 6];

console.log(minimalTree(nums1));
