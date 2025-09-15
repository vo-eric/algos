/**
 * One Away: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 *
 * EXAMPLE
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
 */

/**
 * Time: O(max(n,m))
 * Space: O(1)
 */
const oneAway = (s1: string, s2: string): boolean => {
  if (Math.abs(s1.length - s2.length) > 1) {
    return false;
  }

  let hasEdited = false;

  for (let i = 0, j = 0; i < s1.length && j < s2.length; i++, j++) {
    if (s1[i] !== s2[j]) {
      if (hasEdited) {
        return false;
      }

      if (s1.length > s2.length) {
        j--;
      }

      if (s2.length > s1.length) {
        i--;
      }
      hasEdited = true;
    }
  }

  return true;
};

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));
