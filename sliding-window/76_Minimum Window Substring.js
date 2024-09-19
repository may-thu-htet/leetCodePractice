function minWindow(s, t) {
  if (s.length < t.length) return "";

  // Create a map to count characters in t
  let tCount = {};
  for (let char of t) {
    tCount[char] = (tCount[char] || 0) + 1;
  }

  let windowCount = {};
  let have = 0; // How many characters we currently have matching t
  const need = Object.keys(tCount).length; // Number of distinct characters needed
  let result = [-1, -1]; // Stores the start and end of the minimum window
  let resultLen = Infinity; // Length of the minimum window found
  let left = 0; // Left pointer

  // Expand the window by moving right pointer
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    windowCount[char] = (windowCount[char] || 0) + 1;

    // If current character count matches its count in t
    if (tCount[char] && windowCount[char] === tCount[char]) {
      have++;
    }

    // While we have a valid window, try to contract it by moving left pointer
    while (have === need) {
      // Check if this window is smaller than previously found minimum window
      if (right - left + 1 < resultLen) {
        result = [left, right];
        resultLen = right - left + 1;
      }

      // Shrink the window
      windowCount[s[left]]--;
      if (tCount[s[left]] && windowCount[s[left]] < tCount[s[left]]) {
        have--; // Lost a valid character
      }
      left++; // Move left pointer to shrink the window
    }
  }

  // Return the minimum window or empty string if no valid window found
  return resultLen === Infinity ? "" : s.slice(result[0], result[1] + 1);
}
