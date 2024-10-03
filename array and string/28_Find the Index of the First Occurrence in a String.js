/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // If needle is empty, return 0
  if (needle === "") return 0;

  // Use the built-in indexOf method
  return haystack.indexOf(needle);
};

// Alternative sliding window approach
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Handle the case where the needle is an empty string
  if (needle === "") return 0;

  let haystackLen = haystack.length;
  let needleLen = needle.length;

  // If the needle is longer than the haystack, it can't be a substring
  if (needleLen > haystackLen) return -1;

  // Sliding window search through the haystack
  for (let i = 0; i <= haystackLen - needleLen; i++) {
    // Check if the substring of haystack matches the needle
    if (haystack.substring(i, i + needleLen) === needle) {
      return i;
    }
  }

  // If no match is found, return -1
  return -1;
};
