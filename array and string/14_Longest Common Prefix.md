### 14. Longest Common Prefix

Sure, let's break this problem down thoroughly.

### 1. Repeat the question:

You want me to write a function that finds the **longest common prefix** among an array of strings. If there is no common prefix, I should return an empty string `""`.

### 2. Examples and Edge Cases:

Before solving the problem, let's think about some example inputs and edge cases.

**Examples:**

- Input: `["flower", "flow", "flight"]`  
  Output: `"fl"`  
  (The longest common prefix among these strings is "fl".)

- Input: `["dog", "racecar", "car"]`  
  Output: `""`  
  (There is no common prefix in this case.)

**Edge Cases:**

- Input: `["", "flow", "flight"]`  
  Output: `""`  
  (One of the strings is empty, so the common prefix is also empty.)

- Input: `["flower"]`  
  Output: `"flower"`  
  (Only one string, so the prefix is the entire string.)

- Input: `["a", "b", "c"]`  
  Output: `""`  
  (Completely different characters.)

- Input: `["abc", "abc", "abc"]`  
  Output: `"abc"`  
  (All strings are identical, so the prefix is the entire string.)

### 3. Approach and Thought Process:

The goal is to identify the longest substring that all the strings in the array start with.

**Approach 1: Horizontal Scanning**  
Start by assuming the first string is the common prefix and compare it with the next string, shrinking the prefix if necessary. Keep comparing with each subsequent string until we find the common prefix.

- Initialize the prefix to the first string.
- Compare the prefix with the second string, and reduce the prefix if necessary.
- Continue until the prefix either becomes empty or we have checked all strings.

#### Time Complexity:

- Let `n` be the number of strings and `m` be the length of the shortest string.
- In the worst case, we'll compare every character of each string. The time complexity would be **O(n \* m)**, where `n` is the number of strings and `m` is the length of the first string or the shortest string.

#### Pseudo Code:

```pseudo
1. Start with the first string as the initial prefix.
2. For each string in the array:
   a. Compare the current prefix with the string.
   b. If the current string does not start with the prefix, shorten the prefix.
   c. If the prefix becomes empty, return an empty string.
3. After checking all strings, return the final prefix.
```

### 4. Code in JavaScript with comments:

```javascript
function longestCommonPrefix(strs) {
  // Step 1: Handle the edge case of an empty array
  if (strs.length === 0) return ""; // If no strings, return empty string

  // Step 2: Start by assuming the first string is the common prefix
  let prefix = strs[0];

  // Step 3: Iterate through the remaining strings
  for (let i = 1; i < strs.length; i++) {
    // Check if the current string starts with the current prefix
    while (strs[i].indexOf(prefix) !== 0) {
      // If not, shorten the prefix by removing the last character
      prefix = prefix.slice(0, -1);

      // If the prefix becomes an empty string, return it
      if (prefix === "") return "";
    }
  }

  // Step 4: Return the longest common prefix after checking all strings
  return prefix;
}
```

### 5. Dry Run the Code:

Let’s dry run the code with the input: `["flower", "flow", "flight"]`.

- Initial prefix = `"flower"`

1. Compare prefix `"flower"` with `"flow"`:

   - `"flower"` does not start with `"flow"`, so we shorten the prefix to `"flow"`.

2. Compare prefix `"flow"` with `"flight"`:
   - `"flow"` does not start with `"flight"`, so we shorten it to `"flo"`.
   - `"flo"` does not start with `"flight"`, so we shorten it to `"fl"`.
   - `"fl"` starts with `"flight"`, so we continue.

- Final prefix = `"fl"`
- Output: `"fl"`

### 6. Optimizations and Alternative Methods:

**Alternative 1: Vertical Scanning**

Instead of checking the entire prefix at once, we can check each character in each string column by column. If any character doesn't match, we stop.

#### Approach:

- Compare characters at each position across all strings.
- If all strings have the same character at the current position, add it to the prefix.
- Stop as soon as a mismatch is found.

#### Time Complexity:

- This approach is also **O(n \* m)**, where `n` is the number of strings and `m` is the length of the shortest string.

#### Pseudo Code:

```pseudo
1. Take the first string.
2. For each character in the first string:
   a. Compare it with the corresponding character in all other strings.
   b. If there's a mismatch, return the prefix up to this point.
3. If no mismatch, return the entire first string.
```

Here is the optimized code for this method:

```javascript
function longestCommonPrefixVertical(strs) {
  if (strs.length === 0) return ""; // Handle empty input case

  // Step 1: Iterate over characters in the first string
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i]; // Take character at position 'i' from the first string

    // Step 2: Compare this character with the corresponding character in all other strings
    for (let j = 1; j < strs.length; j++) {
      // If we reach the end of any string or find a mismatch
      if (i >= strs[j].length || strs[j][i] !== char) {
        // Return the prefix up to this point
        return strs[0].slice(0, i);
      }
    }
  }

  // If no mismatch found, return the full first string
  return strs[0];
}
```

#### Dry run of the vertical scanning approach:

Input: `["flower", "flow", "flight"]`

1. Compare the 1st character (`'f'`) across all strings:

   - All strings start with `'f'`.

2. Compare the 2nd character (`'l'`) across all strings:

   - All strings have `'l'` at the second position.

3. Compare the 3rd character (`'o'`) across all strings:
   - The third string has `'i'` instead of `'o'`.

So, the common prefix is `"fl"`.

Both methods have similar time complexities, but **vertical scanning** can be more efficient in practice if there's an early mismatch.
