/**
 * String Rotation:
 * 
 * Assume you have a method isSubstring which checks if one word is a substring of another. 
 * Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
 * call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

 */

/*

brute force
  sliding window
    while substring of s1 from left to right is in s2
      increase right by 1

    if the substring is no longer in there, do the check
      substring.slice(index) + substring(0, index) === s2 or whatever

  TC O(n^2)


maybe faster?
  get the first character of s2
  find all instances of s2 inside of s1

  iterate through all instances
    create substrings for these and test
      if the strings are the same, return true

  
  return false  


*/

/**
 * Time Complexity: O(n^2)
 * Space: O(n)
 */

const stringRotation = (s1: string, s2: string): boolean => {
  const indices = [];

  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[0]) {
      indices.push(i);
    }
  }

  for (const index of indices) {
    const stringToTest = s1.slice(index) + s1.slice(0, index);
    if (stringToTest === s2) {
      return true;
    }
  }

  return false;
};

console.log(stringRotation("erbottlewat", "waterbottle"));
console.log(stringRotation("almmaterm", "matermalm"));
