/**
 * Is Unique: Implement an algorithm to determine if a string has all
 * unique characters.
 * What if you cannot use additional data structures?
 */

/**
 * Time: O(n)
 * Space: O(n)
 */
const isUniqueNSpace = (str: string): boolean => {
  return new Set(str).size === str.length;
};

/**
 * Time: O(logn)
 * Space: O(1);
 */

const isUniqueConstantSpace = (str: string): boolean => {
  str = str.split("").sort().join("");

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }

  return true;
};

console.log(isUniqueNSpace("abcdefa"));
console.log(isUniqueConstantSpace("abcdefa"));
