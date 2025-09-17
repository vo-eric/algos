/**
 * Palindrome Permutation:
 *
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 *
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat", "atco eta", etc.)
 */

/**
 * Time: O(n)
 * Space: O(n)
 */
const palindromePermutation = (str: string): boolean => {
  const charMap = new Map();

  for (const char of str) {
    if (char === " ") {
      continue;
    }
    charMap.set(char, (charMap.get(char) ?? 0) + 1);
  }

  return [...charMap.values()].filter((v) => v % 2 === 1).length <= 1;
};

console.log(palindromePermutation("tact coa"));
console.log(palindromePermutation("act"));
