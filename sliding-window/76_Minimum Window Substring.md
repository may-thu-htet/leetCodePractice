### 76. Minimum Window Substring

### Problem Restatement

You are given two strings `s` and `t`. You need to find the minimum window substring in `s` that contains all characters from `t` (including duplicates). If no such window exists, return an empty string `""`.

### Plan for Solving:

1. **Repeat the Question**:
   Find the smallest substring in `s` that contains all characters of string `t`, including their frequencies. If no such substring exists, return an empty string.

2. **Examples and Edge Cases**:

   - **Example 1**:
     - Input: `s = "ADOBECODEBANC"`, `t = "ABC"`
     - Output: `"BANC"`
   - **Example 2**:
     - Input: `s = "a"`, `t = "a"`
     - Output: `"a"`
   - **Example 3**:
     - Input: `s = "a"`, `t = "aa"`
     - Output: `""` (Not enough `a`s in `s` to satisfy `t`)

   **Edge Cases**:

   - `t` is longer than `s`: No substring can exist.
   - Characters in `t` not present in `s`: Return `""`.

3. **Approach and Thought Process**:
   The problem can be efficiently solved using the **sliding window** technique. We will try to find the smallest substring by moving two pointers, `left` and `right`, across the string `s`. Here's the approach:

   1. **Initialize Data**:

      - We need a hashmap (`tCount`) to store the frequency of each character in `t`.
      - Another hashmap (`windowCount`) will track the characters within the current sliding window of `s`.

   2. **Expand Window (Right Pointer)**:

      - Move the `right` pointer across `s` to include characters in the current window.
      - Each time, update `windowCount` to reflect the current window's character frequencies.

   3. **Contract Window (Left Pointer)**:

      - Once we have a valid window (i.e., the window contains all characters of `t`), try to minimize it by moving the `left` pointer.

   4. **Track the Minimum Window**:

      - Every time a valid window is found, compare its length to the previously found minimum window, and update the minimum if it's smaller.

   5. **Return the Minimum Window**:
      - Once the entire string is processed, return the smallest valid window or an empty string if no valid window is found.

4. **Pseudo Code**:

```text
function minWindow(s, t):
  if s.length < t.length, return ""

  Create a frequency map for t (tCount)
  Initialize windowCount to store counts for the current window in s
  Initialize two pointers: left and right at 0
  Initialize variables: formed = 0, required = tCount's size, minWindow = (infinity)

  while right < s.length:
    Expand window by adding s[right] to windowCount
    If the count of s[right] matches the count in tCount, increment formed

    While window is valid (formed == required):
      Update the minimum window if the current window is smaller
      Shrink the window by moving left pointer and update windowCount
      If a character count no longer matches tCount, decrement formed

    Move right pointer forward

  Return the minimum window or "" if no valid window is found
```

5. **Code in JavaScript**:

```javascript
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
```

6. **Dry Run**:

For `s = "ADOBECODEBANC"`, `t = "ABC"`:

- **Initialize**: `tCount = {A: 1, B: 1, C: 1}`, `windowCount = {}`, `have = 0`, `need = 3`, `left = 0`, `right = 0`.

- **Right Pointer Moves**: Expand the window and check:

  - `"A"`: valid (`have = 1`).
  - `"D"`, `"O"`, `"B"`: valid (`have = 2`).
  - `"E"`, `"C"`: valid (`have = 3`).

- **Left Pointer Moves**: Minimize the window:

  - `"ADOBEC"` is a valid window.
  - Shrink: `"DOBEC"`.

- **Continue Expanding**: Right pointer moves, and we find `"BANC"` is the smallest window.

### 7. **Complexity**:

- **Time Complexity**: `O(m + n)` where `m` is the length of `s` and `n` is the length of `t`. Each character is processed at most twice (once by `left` and once by `right`).
- **Space Complexity**: `O(m + n)` due to the hashmaps storing character frequencies.
