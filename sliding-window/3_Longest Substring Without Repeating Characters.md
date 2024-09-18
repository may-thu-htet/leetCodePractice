### 1. Repeat the question

You are given a string `s`, and the task is to find the length of the **longest substring** that contains **no repeating characters**. The substring must be contiguous, and we need to return its length.

### 2. Suggest examples and edge cases

#### Examples:

1. `s = "abcabcbb"`
   - Longest substring without repeating characters: `"abc"` (length = 3)
2. `s = "bbbbb"`

   - Longest substring without repeating characters: `"b"` (length = 1)

3. `s = "pwwkew"`

   - Longest substring without repeating characters: `"wke"` (length = 3)

4. `s = ""`
   - Empty string: return 0.

#### Edge Cases:

1. **Empty string (`s = ""`)**: The result should be `0`.
2. **String with one character (`s = "a"`)**: The result is `1`.
3. **String with all unique characters (`s = "abcdef"`)**: The result is the length of the entire string.
4. **String with all identical characters (`s = "aaaaa"`)**: The result is `1`.

### 3. Approach and thought process in detail

The goal is to find the length of the longest substring without repeating characters. This is a good candidate for the **sliding window** approach, where we move two pointers (or indices) over the string to track the current substring, and adjust the window when we encounter a repeating character.

#### Thought Process:

1. **Sliding Window Approach:**
   - Use two pointers: `start` and `end` to represent the current window of non-repeating characters.
   - Use a **set** or a **map** to track the characters in the current window.
   - As you expand the window by moving `end`, check if the character already exists in the window.
   - If it does, shrink the window by moving `start` until there are no repeating characters.
   - Keep track of the maximum length of the substring found at each step.

#### Time Complexity:

- Each character is visited at most twice: once by `end` when expanding the window, and once by `start` when shrinking it.
- Hence, the time complexity is **O(n)** where `n` is the length of the string.

#### Pseudo Code:

```text
1. Initialize two pointers: start = 0, end = 0.
2. Initialize a set or map to track unique characters in the current window.
3. Initialize maxLength = 0.
4. While end < length of string:
    a. If s[end] is not in the set:
        i. Add s[end] to the set.
        ii. Update maxLength to max(maxLength, end - start + 1).
        iii. Increment end.
    b. Else, if s[end] is already in the set:
        i. Remove s[start] from the set.
        ii. Increment start.
5. Return maxLength.
```

### 4. Code in JS with detailed comments

```js
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
```

### 5. Dry Run the Code

Let’s dry run the code with `s = "abcabcbb"`.

1. **Initial State:**

   - `charSet = {}`, `start = 0`, `maxLength = 0`

2. **Iteration 1 (`end = 0`, `s[end] = 'a'`):**

   - `'a'` is not in the set.
   - Add `'a'` to the set → `charSet = { 'a' }`.
   - Update `maxLength = 1`.

3. **Iteration 2 (`end = 1`, `s[end] = 'b'`):**

   - `'b'` is not in the set.
   - Add `'b'` to the set → `charSet = { 'a', 'b' }`.
   - Update `maxLength = 2`.

4. **Iteration 3 (`end = 2`, `s[end] = 'c'`):**

   - `'c'` is not in the set.
   - Add `'c'` to the set → `charSet = { 'a', 'b', 'c' }`.
   - Update `maxLength = 3`.

5. **Iteration 4 (`end = 3`, `s[end] = 'a'`):**

   - `'a'` is already in the set.
   - Shrink the window by moving `start`, remove `'a'` from the set → `charSet = { 'b', 'c' }`.
   - Move `start = 1`.
   - Add `'a'` to the set again → `charSet = { 'a', 'b', 'c' }`.

6. **Iterations continue similarly**, with the longest non-repeating substring found as `"abc"`.

Final result: `maxLength = 3`.

### 6. Optimize and suggest alternative methods

The sliding window approach is already optimized to **O(n)**, which is the best we can achieve for this problem. Each character is processed at most twice: once when expanding the window and once when shrinking it.

#### Alternative Approach:

- **Using a HashMap:**
  Instead of a `Set`, you can use a **HashMap** (or object) to track the index of each character. This allows you to directly jump the `start` pointer to the position right after the last occurrence of a repeating character, which can sometimes reduce unnecessary steps.

  Example:

  ```js
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
  ```

  The time complexity remains **O(n)**, but this method allows direct jumps when a repeating character is found, instead of incrementally moving the `start` pointer.
