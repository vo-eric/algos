class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    // create a character map
    const charMap = {};
    // set result to 0
    let result = 0;
    // set left and right to 0
    let left = 0;
    let right = 0;
    // while right is less than the length of s
    while (right < s.length) {
      //     add s[right] to the character map
      charMap[s[right]] = (charMap[s[right]] || 0) + 1;

      //     while right - left + 1- max > k
      while (right - left + 1 - Math.max(...Object.values(charMap)) > k) {
        //     decrement the left count
        charMap[s[left]]--;
        //         increment left by 1
        left++;
      }
      //     set result to max of result or right - left + 1
      result = Math.max(result, right - left + 1);
      right++;
    }

    return result;
  }
}
