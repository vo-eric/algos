/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  const backtrack = (nums, current) => {
    result.push(current);

    for (let i = 0; i < nums.length; i++) {
      // current.push(nums[i])
      backtrack(nums.slice(i + 1), [...current, nums[i]]);
    }
  };

  backtrack(nums, []);
  return result;
};
