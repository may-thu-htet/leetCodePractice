### 242. Valid Anagram

### 1. Repeat the Question

The problem is:

Given two strings `s` and `t`, we need to return `true` if `t` is an **anagram** of `s`, and `false` otherwise. An anagram is defined as a rearrangement of the letters of a word or phrase. So, for two strings to be anagrams of each other, they must have the same characters with the exact same frequencies.

### 2. Examples and Edge Cases

Let's consider a few examples and edge cases:

#### Examples:

- Example 1:
  - `s = "listen"`, `t = "silent"` → **true** (They both contain the same characters.)
- Example 2:
  - `s = "anagram"`, `t = "nagaram"` → **true** (Both strings have the same characters and frequencies.)
- Example 3:
  - `s = "rat"`, `t = "car"` → **false** (They have different characters.)

#### Edge Cases:

- Edge Case 1:
  - `s = ""`, `t = ""` → **true** (Both strings are empty, which can be considered anagrams.)
- Edge Case 2:
  - `s = "a"`, `t = "ab"` → **false** (Different lengths cannot be anagrams.)
- Edge Case 3:
  - `s = "abcd"`, `t = "abcd"` → **true** (They are exactly the same, which makes them anagrams.)
- Edge Case 4:
  - `s = "abc"`, `t = "ab"` → **false** (Different lengths, so they can't be anagrams.)

### 3. Approach and Thought Process

#### Approach:

1. **String length check**:
   - If the lengths of `s` and `t` are different, they cannot be anagrams, so we return `false`.
2. **Character Frequency Count**:
   - We can use a **hashmap** (in the form of an object or dictionary in JavaScript) to count the frequency of each character in both strings.
   - Traverse through string `s` and count the occurrences of each character.
   - Then traverse through string `t`, and for each character, decrease the count in the hashmap.
3. **Check if all frequencies are zero**:
   - After traversing both strings, check if all the values in the hashmap are zero. If they are, then the strings are anagrams; otherwise, they are not.

#### Time Complexity:

- **O(n)**, where `n` is the length of the strings. This is because we traverse through both strings once, and accessing and updating the hashmap (object) takes constant time, i.e., **O(1)**.

#### Space Complexity:

- **O(1)** if we consider the alphabet size (since we only need to store character frequencies).
- **O(n)** if we consider arbitrary string size and space for the hashmap.

#### Alternative Approach:

- We could sort both strings and compare them. Sorting takes **O(n log n)** time, and comparison takes **O(n)**, making this approach less efficient than the hashmap-based solution.

### 4. Pseudo Code:

```javascript
function isAnagram(s, t) {
  // Step 1: If the lengths are different, return false immediately
  if (s.length !== t.length) return false;

  // Step 2: Create a frequency map for the characters in string `s`
  const frequencyMap = {};

  // Step 3: Count frequency of each character in string `s`
  for (let char of s) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Step 4: Decrease frequency count for characters in string `t`
  for (let char of t) {
    if (!frequencyMap[char]) return false; // If char is not in map or frequency is zero
    frequencyMap[char]--;
  }

  // Step 5: Return true, as all characters must match
  return true;
}
```

### 5. Dry Run the Code

Let's dry run this code with an example:

- Input: `s = "anagram"`, `t = "nagaram"`

1. **Length Check**:

   - `s.length = 7`, `t.length = 7`, so continue.

2. **Create frequency map for `s`:**

   - After processing `s = "anagram"`, the `frequencyMap` will look like:
     ```
     {
       'a': 3,
       'n': 1,
       'g': 1,
       'r': 1,
       'm': 1
     }
     ```

3. **Process string `t = "nagaram"`:**

   - Decrease count for each character:
     - `'n'`: frequency goes from 1 to 0
     - `'a'`: frequency goes from 3 to 2
     - `'g'`: frequency goes from 1 to 0
     - `'a'`: frequency goes from 2 to 1
     - `'r'`: frequency goes from 1 to 0
     - `'a'`: frequency goes from 1 to 0
     - `'m'`: frequency goes from 1 to 0

4. **Final Check**:
   - All values in the frequency map are 0, so return `true`.

### 6. Optimization and Alternative Methods

#### Optimization:

- This solution is already optimized with **O(n)** time complexity and **O(1)** space complexity in terms of character counts, which is more efficient than sorting.

#### Alternative Methods:

1. **Sorting Approach**:

   - Sort both strings and compare them. This is less optimal but straightforward:
     ```javascript
     function isAnagram(s, t) {
       if (s.length !== t.length) return false;
       return s.split("").sort().join("") === t.split("").sort().join("");
     }
     ```
     - Time Complexity: **O(n log n)** due to sorting.

2. **Using Array Instead of Object**:

   - If the input contains only lowercase letters (a-z), we could use an array of size 26 to track the frequency of each character, making the solution more space-efficient.

   ```javascript
   function isAnagram(s, t) {
     if (s.length !== t.length) return false;

     const count = Array(26).fill(0);

     for (let i = 0; i < s.length; i++) {
       count[s.charCodeAt(i) - 97]++;
       count[t.charCodeAt(i) - 97]--;
     }

     return count.every((val) => val === 0);
   }
   ```

   - Time Complexity: **O(n)**
   - Space Complexity: **O(1)** since we use a fixed array of size 26.

This should cover everything needed for the problem!
