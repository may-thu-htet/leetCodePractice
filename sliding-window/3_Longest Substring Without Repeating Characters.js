function lengthOfLongestSubstring(s) {
  // Set to track the characters in the current window
  let charSet = new Set();

  // Initialize two pointers for the sliding window
  let start = 0;
  let maxLength = 0;

  // Iterate through the string with the 'end' pointer
  for (let end = 0; end < s.length; end++) {
    // If the character at 'end' is already in the set, move the 'start' pointer to shrink the window
    while (charSet.has(s[end])) {
      // Remove the character at 'start' from the set and move 'start' forward
      charSet.delete(s[start]);
      start++;
    }

    // Add the character at 'end' to the set
    charSet.add(s[end]);

    // Update maxLength to be the maximum of current length and the longest so far
    maxLength = Math.max(maxLength, end - start + 1);
  }

  // Return the maximum length of substring found
  return maxLength;
}

// Alternative solution
function lengthOfLongestSubstring(s) {
  let map = {};
  let start = 0,
    maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If the character is in the map and its index is within the current window
    if (map[char] !== undefined && map[char] >= start) {
      // Move the start pointer to the right of the last occurrence
      start = map[char] + 1;
    }

    // Update the character's index in the map
    map[char] = end;

    // Update the max length of substring found
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
