// @ts-nocheck
class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    //create a results array and fill it with 0
    const results = new Array(temperatures.length).fill(0);
    //create a stack
    const stack = [];
    //iterate through the temperatures array
    for (let i = 0; i < temperatures.length; i++) {
      const temperature = temperatures[i];
      //while the temperature is greater than the temperature in the tuple
      while (stack.length && temperature > stack[stack.length - 1][0]) {
        const [_, index] = stack.pop();
        //add the difference between the current index and the index
        //inside of the tuple into the results array at the index inside
        //of the tuple
        results[index] = i - index;
      }
      stack.push([temperature, i]);
      //add the tuple of the current temperature and its index to the stack
    }
    return results;
  }
}
