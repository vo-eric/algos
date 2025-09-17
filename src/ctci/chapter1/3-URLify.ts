/**
 * URLify:
 *
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string
 * has sufficient space at the end to hold the additional characters, and that you are given the "true"
 * length of the string. (Note: If implementing in Java, please use a character array so that you can
 * perform this operation in place.)
 *
 * EXAMPLE
 * Input: "Mr John Smith ", 13
 * Output: "Mr%20John%20Smith"
 */

/**
 * Time: O(n)
 * Space: O(n)
 */

const URLify = (str: string): string => {
  const split = str.split("");

  for (let i = 0; i < split.length; i++) {
    const char = split[i];

    if (char === " ") {
      split[i] = "%20";
    }
  }

  return split.join("");
};

console.log(URLify("Mr John Smith"));
