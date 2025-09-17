/**
 * String Compression: Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
 * "compressed" string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */

/**
 * Time: O(n)
 * Space: O(n)
 */

const stringCompression = (str: string): string => {
  const compressed = [];
  let currentCandidate = str[0];
  let currentCount = 1;

  for (let i = 1; i < str.length; i++) {
    const char = str[i];

    if (char !== currentCandidate) {
      compressed.push(currentCandidate);
      compressed.push(currentCount);
      currentCandidate = char;
      currentCount = 1;
    } else {
      currentCount++;
    }
  }

  compressed.push(currentCandidate);
  compressed.push(currentCount);

  const compressedString = compressed.join("");

  return compressedString.length < str.length ? compressedString : str;
};

console.log(stringCompression("aabcccccaaa"));
