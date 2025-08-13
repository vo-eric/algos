class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = Infinity;

    while (left <= right) {
      if (nums[left] < nums[right]) {
        result = Math.min(nums[left], result);
      }

      const mid = Math.floor((left + right) / 2);
      result = Math.min(nums[mid], result);

      if (nums[mid] >= nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }
}
