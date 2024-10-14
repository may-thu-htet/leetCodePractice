### 205. Isomorphic Strings

### 1. Repeat the question:

We are asked to determine if two strings `s` and `t` are **isomorphic**. Two strings are considered isomorphic if the characters in `s` can be replaced to get `t`, following these rules:

- Each character in `s` can be mapped to exactly one character in `t`.
- No two characters from `s` can map to the same character in `t`.
- A character may map to itself.

### 2. Examples and edge cases:

#### Example 1:

- **Input**: `s = "egg"`, `t = "add"`
- **Output**: `true`
- **Explanation**: The characters 'e' and 'g' in `s` can be replaced by 'a' and 'd' in `t`, respectively.

#### Example 2:

- **Input**: `s = "foo"`, `t = "bar"`
- **Output**: `false`
- **Explanation**: The character 'o' in `s` maps to two different characters in `t`, which is not allowed.

#### Example 3:

- **Input**: `s = "paper"`, `t = "title"`
- **Output**: `true`
- **Explanation**: The characters 'p' -> 't', 'a' -> 'i', 'e' -> 'l', and 'r' -> 'e' can be mapped accordingly.

#### Edge Cases:

- If `s` and `t` are of different lengths, return `false` immediately since they cannot be isomorphic.
- If both `s` and `t` are empty, they are trivially isomorphic, so return `true`.

### 3. Approach and thought process:

To solve the problem, we need to ensure two things:

1. **One-to-one mapping from `s` to `t`**: Each character in `s` must map to exactly one character in `t`.
2. **No two characters in `s` can map to the same character in `t`**.

#### Approach:

We can maintain two hash maps (or dictionaries):

- One map (`mapST`) to track the mapping of characters from `s` to `t`.
- Another map (`mapTS`) to track the reverse mapping from `t` to `s`.

While iterating over both strings:

- If a character in `s` is already mapped to a different character in `t`, return `false`.
- If a character in `t` is already mapped to a different character in `s`, return `false`.
- Otherwise, add the character mappings to the maps.

#### Time Complexity:

- **O(n)** where `n` is the length of the strings `s` and `t`. We iterate through both strings exactly once.
- Space complexity is **O(n)** to store the mappings.

### Pseudocode:

```
function isIsomorphic(s, t):
    if length of s != length of t:
        return false

    create two hash maps: mapST, mapTS

    for each character pair (s[i], t[i]):
        if s[i] is in mapST:
            if mapST[s[i]] != t[i]:
                return false
        if t[i] is in mapTS:
            if mapTS[t[i]] != s[i]:
                return false
        mapST[s[i]] = t[i]
        mapTS[t[i]] = s[i]

    return true
```

### 4. Code in JavaScript:

```javascript
function isIsomorphic(s, t) {
  // If strings are of different lengths, they cannot be isomorphic
  if (s.length !== t.length) {
    return false;
  }

  // Create two hash maps to store character mappings
  const mapST = {}; // To map characters from s -> t
  const mapTS = {}; // To map characters from t -> s

  // Loop through each character in both strings
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check if there's a conflict in s -> t mapping
    if (mapST[charS] && mapST[charS] !== charT) {
      return false;
    }

    // Check if there's a conflict in t -> s mapping
    if (mapTS[charT] && mapTS[charT] !== charS) {
      return false;
    }

    // Establish the character mappings
    mapST[charS] = charT;
    mapTS[charT] = charS;
  }

  // If no conflicts, the strings are isomorphic
  return true;
}
```

### 5. Dry Run the Code:

#### Example 1: `s = "egg"`, `t = "add"`

1. Initial `mapST = {}`, `mapTS = {}`.
2. Iteration 1:
   - `s[0] = 'e'`, `t[0] = 'a'`.
   - No mapping exists, so set `mapST['e'] = 'a'` and `mapTS['a'] = 'e'`.
3. Iteration 2:
   - `s[1] = 'g'`, `t[1] = 'd'`.
   - No mapping exists, so set `mapST['g'] = 'd'` and `mapTS['d'] = 'g'`.
4. Iteration 3:
   - `s[2] = 'g'`, `t[2] = 'd'`.
   - Existing mapping is consistent, so continue.
5. Return `true`.

#### Example 2: `s = "foo"`, `t = "bar"`

1. Initial `mapST = {}`, `mapTS = {}`.
2. Iteration 1:
   - `s[0] = 'f'`, `t[0] = 'b'`.
   - No mapping exists, so set `mapST['f'] = 'b'` and `mapTS['b'] = 'f'`.
3. Iteration 2:
   - `s[1] = 'o'`, `t[1] = 'a'`.
   - No mapping exists, so set `mapST['o'] = 'a'` and `mapTS['a'] = 'o'`.
4. Iteration 3:
   - `s[2] = 'o'`, `t[2] = 'r'`.
   - Conflict! `mapST['o']` is already mapped to `'a'`, not `'r'`.
5. Return `false`.

### 6. Optimized Version and Alternative Methods:

#### Optimization:

- The current approach using two hash maps is already optimal with a time complexity of **O(n)**.
- Instead of using hash maps, we can use arrays of size 256 (for ASCII characters) to store mappings between characters, which might slightly improve the performance.

#### Alternative Approach:

We can represent the pattern of mappings between characters by storing the first appearance indices of each character in both strings, then comparing the resulting patterns.

Here's a simple alternative:

```javascript
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapS = new Array(256).fill(0);
  const mapT = new Array(256).fill(0);

  for (let i = 0; i < s.length; i++) {
    const sChar = s.charCodeAt(i);
    const tChar = t.charCodeAt(i);

    if (mapS[sChar] !== mapT[tChar]) {
      return false;
    }

    // Store the index + 1, as 0 is a valid index for first appearance
    mapS[sChar] = i + 1;
    mapT[tChar] = i + 1;
  }

  return true;
}
```

#### Time Complexity:

- **O(n)** time complexity for both the original and alternative approach, where `n` is the length of the strings.

Both methods are optimal for this problem!
