### 49. Group Anagrams

### 1. Repeat the Question

The problem is: Given an array of strings `strs`, we need to group all the **anagrams** together. An anagram is defined as a word formed by rearranging the letters of another word. The goal is to return the grouped anagrams in any order.

### 2. Examples and Edge Cases

#### Example 1:

- **Input**: `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]`
- **Output**: `[['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]`

#### Example 2:

- **Input**: `strs = [""]`
- **Output**: `[[""]]` (Empty string is considered an anagram of itself.)

#### Example 3:

- **Input**: `strs = ["a"]`
- **Output**: `[["a"]]` (Single character words are trivially anagrams of themselves.)

#### Edge Cases:

- **Empty array**: If `strs` is empty, return an empty array `[]`.
- **Identical words**: All identical words are anagrams and should be grouped together.

### 3. Approach and Thought Process

#### Approach:

We can solve this problem using a **hashmap** to group words that are anagrams together.

1. **Key Insight**:

   - Anagrams will have the **same sorted character sequence**. For example, `"eat"`, `"tea"`, and `"ate"` all become `"aet"` when their characters are sorted.
   - We can use this sorted sequence as a **key** in a hashmap, and group words with the same sorted key together.

2. **Steps**:
   - Create an empty hashmap (or `Map`) where the key is the sorted version of the word and the value is an array containing the original words.
   - For each word in the input list:
     1. Sort its characters.
     2. Use the sorted string as the key in the hashmap.
     3. Push the original word to the corresponding key's value (array of anagrams).
   - Finally, return all the grouped values from the hashmap.

#### Time Complexity:

- **O(n \* k log k)**, where `n` is the number of words in `strs` and `k` is the maximum length of a word. Sorting each word takes **O(k log k)**, and we do this for every word.

#### Space Complexity:

- **O(n \* k)**, where `n` is the number of words and `k` is the average length of the words. We store all words in the hashmap.

### 4. Pseudo Code:

```javascript
function groupAnagrams(strs) {
  // Step 1: Create a Map to store grouped anagrams
  const anagramGroups = new Map();

  // Step 2: Process each word in `strs`
  for (let word of strs) {
    // Sort the word's characters to form the key
    const sortedWord = word.split("").sort().join("");

    // Add the word to the corresponding group in the Map
    if (!anagramGroups.has(sortedWord)) {
      anagramGroups.set(sortedWord, []);
    }
    anagramGroups.get(sortedWord).push(word);
  }

  // Step 3: Return the grouped anagrams
  return Array.from(anagramGroups.values());
}
```

### 5. Dry Run the Code

#### Example 1:

- **Input**: `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]`

1. **Initial State**:

   - `anagramGroups = new Map()`

2. **Processing "eat"**:

   - Sorted word: `"eat"` → `"aet"`
   - Map state: `{ "aet": ["eat"] }`

3. **Processing "tea"**:

   - Sorted word: `"tea"` → `"aet"`
   - Map state: `{ "aet": ["eat", "tea"] }`

4. **Processing "tan"**:

   - Sorted word: `"tan"` → `"ant"`
   - Map state: `{ "aet": ["eat", "tea"], "ant": ["tan"] }`

5. **Processing "ate"**:

   - Sorted word: `"ate"` → `"aet"`
   - Map state: `{ "aet": ["eat", "tea", "ate"], "ant": ["tan"] }`

6. **Processing "nat"**:

   - Sorted word: `"nat"` → `"ant"`
   - Map state: `{ "aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"] }`

7. **Processing "bat"**:

   - Sorted word: `"bat"` → `"abt"`
   - Map state: `{ "aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"] }`

8. **Final Output**:
   - Return all values from the map:
   - `[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`

#### Example 2:

- **Input**: `strs = ["a"]`
  - Sorted word: `"a"` → `"a"`
  - Map state: `{ "a": ["a"] }`
  - Output: `[["a"]]`

### 6. Optimizations and Alternative Approaches

1. **Character Frequency Array**:

   - Instead of sorting the string (which takes **O(k log k)**), we can use a fixed-length frequency array of size 26 (for lowercase English letters). This will allow us to represent a string by the frequency of its characters in **O(k)** time.

   Example:

   ```javascript
   function groupAnagrams(strs) {
     const anagramGroups = new Map();

     for (let word of strs) {
       const charCount = Array(26).fill(0);
       for (let char of word) {
         charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
       }
       const key = charCount.join(",");
       if (!anagramGroups.has(key)) {
         anagramGroups.set(key, []);
       }
       anagramGroups.get(key).push(word);
     }

     return Array.from(anagramGroups.values());
   }
   ```

   - This approach improves sorting time from **O(k log k)** to **O(k)** using character frequency counting.

### Final Thoughts:

The current solution is efficient and uses sorting to group anagrams together, but we can further optimize it with a frequency array-based approach if needed.
