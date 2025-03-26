/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // check the char and add it to the map, count the char freq
  // find the char count that need to be replaced and compare it to k value
  // if the replaced char count is greater than k, shift the window toward the end
  // move the left pointer
  //  calculate the max res and return

  let charCount = new Map();
  let res = 0;
  let left = 0;
  let maxF = 0;

  for (let r = 0; r < s.length; r++) {
    charCount.set(s[r], (charCount.get(s[r]) || 0) + 1);
    maxF = Math.max(charCount.get(s[r]), maxF);

    if (r - left + 1 - maxF > k) {
      charCount.set(s[left], charCount.get(s[left]) - 1);
      left++;
    }
    res = Math.max(res, r - left + 1);
  }
  return res;
};
