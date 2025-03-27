/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // if s1 is longer than s2 return false;
  // create a hash table for s1
  // loop s2 using two pointers, check if current char in hash table > requiredLength, reduce that length, reduce no of char in hashmap as well, increase the right ptr
  // if requiredL is zero, return true
  // if window length is equal to s1.length, we need to update the left pointer left++, before that we have to check if the char at left ptr is already in hashmap, if it does, reduce requiredL and increment left ptr

  if (s1.length > s2.length) return false;
  let s1Map = new Map();
  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let requiredLength = s1.length;

  while (right < s2.length) {
    if (s1Map.get(s2[right]) > 0) requiredLength--;
    s1Map.set(s2[right], s1Map.get(s2[right]) - 1);
    right++;

    if (requiredLength === 0) return true;

    if (right - left === s1.length) {
      if (s1Map.get(s2[left]) >= 0) requiredLength++;
      s1Map.set(s2[left], s1Map.get(s2[left]) + 1);
      left++;
    }
  }

  return false;
};
