### 58. Length of Last Word

Sure! Let's tackle the problem step by step as you've outlined.

### 1. **Repeat the Question**

The problem asks us to find the length of the last word in a given string `s`, which consists of words and spaces. A word is defined as a maximal substring consisting of non-space characters only.

### 2. **Examples and Edge Cases**

Here are some examples to consider:

- **Example 1**:

  - Input: `"Hello World"`
  - Output: `5` (The last word is "World")

- **Example 2**:

  - Input: `"   fly me   to   the moon  "`
  - Output: `4` (The last word is "moon")

- **Example 3**:

  - Input: `"luffy is still joyboy"`
  - Output: `6` (The last word is "joyboy")

- **Example 4**:

  - Input: `""` (Empty string)
  - Output: `0` (No words)

- **Example 5**:

  - Input: `"     "` (String with spaces only)
  - Output: `0` (No words)

- **Example 6**:
  - Input: `"   Hello  "`
  - Output: `5` (The last word is "Hello")

### 3. **Approach and Thought Process**

To solve the problem, the following steps can be taken:

1. **Trim the String**: Remove leading and trailing spaces to avoid counting them as part of a word.
2. **Iterate from the End**: Start from the end of the trimmed string and count characters until we hit a space or reach the beginning of the string.
3. **Count Non-space Characters**: Maintain a counter that increments for each non-space character encountered until a space is found.
4. **Return the Count**: The count at the point where a space is encountered (or the beginning of the string) will be the length of the last word.

### **Complexity Analysis**

- **Time Complexity**: O(n), where n is the length of the string `s`. In the worst case, we may have to traverse the entire string.
- **Space Complexity**: O(1), since we are using only a constant amount of extra space (for the counter and index).

### **Alternative Approaches**

1. **Using Split**: Split the string by spaces and get the last element.

   - **Time Complexity**: O(n) for splitting the string and O(k) for getting the length of the last word (where k is the length of the last word). However, this could lead to an overall complexity of O(n).
   - **Space Complexity**: O(n) for storing the split array.

2. **Using Regular Expressions**: Use regex to match the last word.
   - **Time Complexity**: O(n).
   - **Space Complexity**: O(n) due to storing the match results.

### **Pseudocode**

```plaintext
function lengthOfLastWord(s):
    modifiedS = trim(s)
    n = length of modifiedS - 1
    count = 0

    while n >= 0:
        if modifiedS[n] is not space:
            count += 1
            n -= 1
        else:
            break

    return count
```

### 4. **Code in JavaScript**

```javascript
/**
 * Returns the length of the last word in a given string.
 * @param {string} s - The input string containing words and spaces.
 * @return {number} - The length of the last word.
 */
var lengthOfLastWord = function (s) {
  // Step 1: Trim the string to remove leading and trailing spaces
  let modifiedS = s.trim();

  // Step 2: Start from the end of the string
  let n = modifiedS.length - 1; // Last character index
  let count = 0; // Counter for the last word length

  // Step 3: Iterate backwards through the string
  while (n >= 0) {
    if (modifiedS[n] !== " ") {
      count++; // Increment the count for each non-space character
      n--; // Move to the previous character
    } else {
      break; // Break the loop if a space is encountered
    }
  }

  // Step 4: Return the length of the last word
  return count;
};
```

### 5. **Dry Run the Code Step by Step**

Let’s dry run the function with the input `"   fly me   to   the moon  "`:

1. **Trim the Input**:
   - `modifiedS` = `"fly me   to   the moon"`
2. **Initialization**:
   - `n` = `20` (index of 'n' in "moon")
   - `count` = `0`
3. **Iteration**:
   - `n = 20`: modifiedS[20] = 'n' (not a space) → `count = 1`, `n = 19`
   - `n = 19`: modifiedS[19] = 'o' → `count = 2`, `n = 18`
   - `n = 18`: modifiedS[18] = 'o' → `count = 3`, `n = 17`
   - `n = 17`: modifiedS[17] = 'm' → `count = 4`, `n = 16`
   - `n = 16`: modifiedS[16] = ' ' (space) → break the loop
4. **Return Value**: `count = 4`

The output is `4`, which is correct.

### 6. **Optimize and Suggest Alternative Methods**

The current implementation is already quite efficient with O(n) time and O(1) space complexity. However, if we were to consider alternative methods:

1. **Using Split**:

   - This is simpler but uses O(n) space for the array of words.
   - Implementation:

   ```javascript
   var lengthOfLastWord = function (s) {
     let words = s.trim().split(" ");
     return words.length > 0 ? words[words.length - 1].length : 0;
   };
   ```

   - This approach is less efficient in terms of space.

2. **Using Regular Expressions**:
   - You could also use a regex to find the last word, but that’s more complex and doesn’t offer significant performance benefits over the current solution.

In conclusion, the original approach you’ve written is optimal for this problem and correctly handles various edge cases.
