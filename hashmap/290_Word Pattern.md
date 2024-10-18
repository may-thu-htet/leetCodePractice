### 290. Word Pattern

### 1. Repeat the question

The problem is to determine if a given string `s` follows a given `pattern`. Specifically:

- Each character in the `pattern` must map to a unique word in `s`, and each word in `s` must map to a unique character in the `pattern`.
- We need to check if this bijection holds. If multiple characters map to the same word or multiple words map to the same character, we should return `false`.

### 2. Examples and edge cases

#### Example 1:

- **Pattern**: `"abba"`
- **String `s`**: `"dog cat cat dog"`
- **Output**: `true`  
  **Explanation**: The pattern matches. `'a'` → `"dog"`, `'b'` → `"cat"`, so it follows the pattern correctly.

#### Example 2:

- **Pattern**: `"abba"`
- **String `s`**: `"dog cat cat fish"`
- **Output**: `false`  
  **Explanation**: The pattern fails since `'a'` cannot map to both `"dog"` and `"fish"`.

#### Example 3:

- **Pattern**: `"aaaa"`
- **String `s`**: `"dog dog dog dog"`
- **Output**: `true`  
  **Explanation**: Every character in the pattern maps to the same word `"dog"`.

#### Example 4:

- **Pattern**: `"abba"`
- **String `s`**: `"dog constructor constructor dog"`
- **Output**: `true`  
  **Explanation**: The word `"constructor"` is treated as a regular string and there is no conflict.

#### Edge Cases:

- **Pattern and string length mismatch**:  
  If the number of characters in the pattern and the number of words in `s` differ, the output should be `false`.
- **Empty pattern or string**:  
  If either the pattern or the string is empty, and the other is not, return `false`.

### 3. Approach and thought process

#### Step-by-step breakdown of approach:

1. **Split the string `s` into an array of words**.
   - This will give us an array `sArray` where each element is a word from `s`.
2. **Check if the lengths of the `pattern` and `sArray` match**.
   - If they don't match, it is impossible for them to follow the same pattern, so return `false`.
3. **Create two mappings (hash maps)**:
   - `patternStringMap`: Maps characters in the `pattern` to words in `s`.
   - `stringPatternMap`: Maps words in `s` to characters in the `pattern`.
4. **Iterate over the pattern and the words simultaneously**:
   - For each character and word, check:
     - If the character in the `pattern` is already mapped to a word.
     - If the word is already mapped to a character.
     - If any mapping mismatch is found, return `false`.
   - If the character and word have not been seen before, create the corresponding mappings.
5. If all mappings are valid, return `true`.

#### Time Complexity:

- Splitting the string `s` into words takes **O(n)**, where `n` is the length of the string `s`.
- Iterating over both the `pattern` and `sArray` takes **O(m)**, where `m` is the length of the pattern (and number of words in `s`).
- Since we are using maps, the lookup and insertion operations take constant time **O(1)**.

Thus, the total time complexity is **O(n + m)**.

#### Alternative approaches:

- Using a single map to map tuples of characters and words together could save space, but it would add complexity to the code. Another approach could involve using arrays instead of maps, but this might lead to reduced efficiency.

### 4. Code in JS with comments

```javascript
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // Use Map to avoid issues with special keywords like "constructor"
  const patternStringMap = new Map();
  const stringPatternMap = new Map();

  // Step 1: Split the string 's' into an array of words
  const sArray = s.split(" ");

  // Step 2: If the lengths of the pattern and the words array don't match, return false
  if (pattern.length !== sArray.length) {
    return false;
  }

  // Step 3: Iterate through both the pattern and the words array
  for (let i = 0; i < pattern.length; i++) {
    const patternChar = pattern[i]; // Current character from the pattern
    const word = sArray[i]; // Corresponding word from the string s

    // Step 4: Check if the current pattern character is already mapped to a word
    if (
      patternStringMap.has(patternChar) &&
      patternStringMap.get(patternChar) !== word
    ) {
      return false;
    }

    // Step 5: Check if the current word is already mapped to a pattern character
    if (
      stringPatternMap.has(word) &&
      stringPatternMap.get(word) !== patternChar
    ) {
      return false;
    }

    // Step 6: If not already mapped, map the pattern character to the word and vice versa
    patternStringMap.set(patternChar, word);
    stringPatternMap.set(word, patternChar);
  }

  // Step 7: If all checks pass, return true (pattern matches)
  return true;
};
```

### 5. Dry run the code

#### Test case: `"abba", "dog constructor constructor dog"`

- **Step 1**: Split `s` into `sArray`: `["dog", "constructor", "constructor", "dog"]`.
- **Step 2**: Check if the lengths match. Pattern has 4 characters, `sArray` has 4 words. Continue.
- **Step 3**: Loop through each pattern character and word:
  - **Iteration 1** (`i = 0`): `'a' -> "dog"`
    - Mappings created: `'a' -> "dog"` and `"dog" -> 'a'`.
  - **Iteration 2** (`i = 1`): `'b' -> "constructor"`
    - Mappings created: `'b' -> "constructor"` and `"constructor" -> 'b'`.
  - **Iteration 3** (`i = 2`): `'b' -> "constructor"`
    - The mapping is consistent (both `'b'` and `"constructor"` are already mapped to each other).
  - **Iteration 4** (`i = 3`): `'a' -> "dog"`
    - The mapping is consistent (both `'a'` and `"dog"` are already mapped to each other).
- **Step 7**: All checks passed, return `true`.

### 6. Optimize and suggest alternative methods

The code is already efficient with **O(n + m)** complexity using two `Map` objects for constant-time lookups and insertions. Here are a few minor alternative methods:

#### 1. **Single Map or Tuple Mapping**:

- You could combine the two maps into a single map that stores tuples of pattern characters and words. This would reduce memory usage slightly but increase the complexity of the logic.

#### 2. **Array-based Approach**:

- Instead of using maps, we could use arrays to track which characters and words have been seen and mapped. This would be less efficient because of linear-time lookups in arrays but would work for small patterns.

#### Conclusion:

- Your current approach using two maps is already optimal and well-balanced in terms of both time and space complexity.
