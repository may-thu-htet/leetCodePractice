function isAnagram(s, t) {
  // Step 1: If the lengths are different, return false immediately
  if (s.length !== t.length) return false;

  // Step 2: Create a frequency map for the characters in string `s`
  const frequencyMap = {};

  // Step 3: Count frequency of each character in string `s`
  for (let char of s) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Step 4: Decrease frequency count for characters in string `t`
  for (let char of t) {
    if (!frequencyMap[char]) return false; // If char is not in map or frequency is zero
    frequencyMap[char]--;
  }

  // Step 5: Return true, as all characters must match
  return true;
}

// My solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const originalStringMap = new Map();
  const newStringMap = new Map();

  for (let i = 0; i < t.length; i++) {
    const charS = s[i];
    const charT = t[i];
    originalStringMap.set(
      charS,
      originalStringMap.has(charS) ? originalStringMap.get(charS) + 1 : 1
    );
    newStringMap.set(
      charT,
      newStringMap.has(charT) ? newStringMap.get(charT) + 1 : 1
    );
  }
  for (let char of t) {
    console.log(newStringMap.get(char));
    if (originalStringMap.get(char) !== newStringMap.get(char)) {
      return false;
    }
  }
  return true;
};
