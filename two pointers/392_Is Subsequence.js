/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // Check if s is longer than t
  if (s.length > t.length) return false; // If s is longer than t, s cannot be a subsequence of t.

  // If s is an empty string, it's always a subsequence
  if (s.length === 0) return true; // An empty string is a subsequence of any string.

  // Pointers for s and t
  let p1 = 0,
    p2 = 0;

  // Traverse both strings
  while (p1 < s.length && p2 < t.length) {
    // If characters match, move the pointer for s forward
    if (s[p1] === t[p2]) {
      p1++; // Move to the next character in s
    }
    // Always move the pointer for t forward
    p2++; // Move to the next character in t
  }

  // If we have traversed all of s, then it's a subsequence
  return p1 === s.length; // Check if we matched all characters in s
};
