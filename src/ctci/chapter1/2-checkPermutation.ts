/**
 * Check Permutation:
 *
 * Given two strings, write a method to decide if
 * one is a permutation of the other.
 */

/**
 * Time: O(n + m)
 * Space: O(n)
 */
const checkPermutation = (s1: string, s2: string): boolean => {
  const s1Map = new Map();

  for (const char of s1) {
    s1Map.set(char, (s1Map.get(char) ?? 0) + 1);
  }

  for (const char of s2) {
    if (!s1Map.has(char)) {
      return false;
    }

    s1Map.set(char, s1Map.get(char) - 1);

    if (s1Map.get(char) === 0) {
      s1Map.delete(char);
    }
  }

  return s1Map.size === 0;
};

console.log(checkPermutation("abcdef", "abefcd"));
