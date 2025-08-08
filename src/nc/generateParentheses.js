class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    /*

        set up result variable
        create a backtracking helper function (open, closed, current)
            if open and closed are n
                push current to result
            call backtrack on '(' and ')' aka open + 1 / closed + 1 with
                updated current

        */
    const result = [];

    const backtrack = (open, closed, current) => {
      if (open === n && closed === n) {
        result.push(current);
        return current;
      }

      if (open < n) {
        backtrack(open + 1, closed, current + "(");
      }

      if (closed < open) {
        backtrack(open, closed + 1, current + ")");
      }

      return;
    };
    backtrack(0, 0, "");
    return result;
  }
}
