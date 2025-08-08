class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    // set result to null
    let result = Infinity;
    // set left 1
    let left = 1;
    // set right to the maximum value of the piles
    let right = Math.max(...piles);

    // binary search
    // while left is less than or equal to right
    while (left <= right) {
      //     get the middle of the two values
      const middle = Math.floor((left + right) / 2);
      //     set a time variable to 0
      let time = 0;
      //     iterate through the array and get the amount of time it takes to eat - ceiling (num / time)
      for (const pile of piles) {
        //         add this value to our time variable
        time += Math.ceil(pile / middle);
      }

      if (time > h) {
        left = middle + 1;
      } else {
        result = Math.min(middle, result);
        right = middle - 1;
      }
      //     if the time is greater than h
      //         set left to middle + 1
      //     else
      //         set the result to the minimum of result and middle
      //         set right to middle - 1
    }

    return result;
  }
}
