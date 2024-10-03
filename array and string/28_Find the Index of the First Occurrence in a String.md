### 28. Find the Index of the First Occurrence in a String

To solve the problem of finding the first occurrence of a substring (`needle`) in another string (`haystack`), we can use a few different approaches.

### 1. Problem Restatement

You are given two strings, `needle` and `haystack`. You need to find the **index** of the first occurrence of `needle` in `haystack`. If `needle` is not part of `haystack`, return `-1`.

### 2. Examples and Edge Cases

#### Examples:

1. **Example 1**:

   - **Input**: `needle = "ll"`, `haystack = "hello"`
   - **Output**: `2` (The substring `"ll"` starts at index 2 of `"hello"`)

2. **Example 2**:

   - **Input**: `needle = "bba"`, `haystack = "aaaaa"`
   - **Output**: `-1` (The substring `"bba"` is not found in `"aaaaa"`)

3. **Example 3**:
   - **Input**: `needle = ""`, `haystack = "abc"`
   - **Output**: `0` (An empty needle should return index `0` by definition)

#### Edge Cases:

1. **Empty Needle**: If `needle` is an empty string, return `0`. (This is often specified as a corner case in substring search problems).
   - **Input**: `needle = ""`, `haystack = "anything"`
   - **Output**: `0`
2. **Empty Haystack**: If `haystack` is an empty string and `needle` is non-empty, return `-1`.

   - **Input**: `needle = "a"`, `haystack = ""`
   - **Output**: `-1`

3. **Needle Larger Than Haystack**: If `needle` is longer than `haystack`, return `-1`.
   - **Input**: `needle = "abcd"`, `haystack = "abc"`
   - **Output**: `-1`

### 3. Approach and Thought Process

This problem is essentially asking to perform a substring search. In JavaScript, we can use the built-in `indexOf()` method, which provides an optimal solution in many cases. Alternatively, we can implement a manual approach (like a sliding window) to search for the first occurrence of the substring.

#### Approach 1: Using `indexOf` Method

The `indexOf()` method is a built-in string method that returns the first index at which a given substring can be found within a string, or `-1` if it is not found.

#### Approach 2: Sliding Window (Manual Implementation)

We can manually implement a sliding window search by comparing the characters in `needle` with `haystack` as we move a window of size `needle.length` across `haystack`.

#### Complexity:

- **Time Complexity**: O(n \* m), where `n` is the length of `haystack` and `m` is the length of `needle` (if manually implemented).
- **Space Complexity**: O(1), as no additional data structures are used apart from variables.

### Pseudocode

#### Using `indexOf()`:

```plaintext
function strStr(haystack, needle):
    if needle is empty:
        return 0
    return haystack.indexOf(needle)
```

#### Sliding Window Approach:

```plaintext
function strStr(haystack, needle):
    if needle is empty:
        return 0

    for i from 0 to (length of haystack - length of needle):
        if substring of haystack starting at i is equal to needle:
            return i
    return -1
```

### 4. JavaScript Code Implementation

#### Approach 1: Using `indexOf()` (Simple and Efficient)

```javascript
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
```

#### Approach 2: Sliding Window (Manual Implementation)

```javascript
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
```

### 5. Dry Run the Code

Let’s dry run the function with an example:

#### Input: `haystack = "hello"`, `needle = "ll"`

1. **Initialization**:
   - `haystackLen = 5`, `needleLen = 2`.
2. **First iteration** (`i = 0`):
   - `haystack.substring(0, 2) = "he"`, not equal to `"ll"`.
3. **Second iteration** (`i = 1`):
   - `haystack.substring(1, 3) = "el"`, not equal to `"ll"`.
4. **Third iteration** (`i = 2`):
   - `haystack.substring(2, 4) = "ll"`, equal to `"ll"`.
5. **Return 2** (index of first occurrence).

#### Output: `2`

### 6. Optimizations and Alternatives

- **KMP Algorithm**: If `needle` and `haystack` are very large, you can use the **Knuth-Morris-Pratt (KMP)** algorithm, which can improve the time complexity to O(n + m) by avoiding re-checking already matched characters. However, for most general cases, `indexOf()` and sliding window solutions are efficient.

#### Conclusion:

- The **`indexOf()`** method is the simplest and most efficient approach in most cases.
- The **Sliding Window** method gives you more control and is useful if you want to avoid built-in methods or handle additional logic.
