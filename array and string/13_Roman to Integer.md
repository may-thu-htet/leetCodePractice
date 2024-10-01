### 13.Roman to Integer

### Step 1: Repeat the Question

We are given a Roman numeral represented as a string. The goal is to convert this Roman numeral into an integer. Roman numerals have certain rules, especially where a smaller numeral is placed before a larger numeral to indicate subtraction. We need to account for such cases and return the correct integer representation.

### Step 2: Examples and Edge Cases

#### Example 1:

```js
Input: "III"
Output: 3
Explanation: III = 1 + 1 + 1 = 3
```

#### Example 2:

```js
Input: "IV"
Output: 4
Explanation: IV = 5 - 1 = 4 (since I is before V, we subtract 1 from 5)
```

#### Example 3:

```js
Input: "IX"
Output: 9
Explanation: IX = 10 - 1 = 9
```

#### Example 4:

```js
Input: "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3, so 50 + 5 + 3 = 58
```

#### Example 5:

```js
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90, IV = 4, so 1000 + 900 + 90 + 4 = 1994
```

#### Edge Cases:

1. **Empty String:** No valid Roman numeral.
   ```js
   Input: "";
   Output: 0;
   ```
2. **Single character numeral (like "I" or "M"):**
   ```js
   Input: "I";
   Output: 1;
   ```
3. **Roman numeral without any subtraction (e.g., "VII"):**
   ```js
   Input: "VII";
   Output: 7;
   ```

### Step 3: Approach and Thought Process

#### Thought Process:

The core idea is to:

1. Convert each Roman numeral symbol to its respective integer value.
2. Traverse the string from left to right.
3. Add the current symbol’s value to the total if it is greater than or equal to the next symbol’s value (or if it’s the last symbol).
4. Subtract the current symbol’s value if it is smaller than the next symbol (indicating a subtraction case like IV, IX, etc.).

#### Approach:

1. Create a **map (dictionary)** that stores the Roman numeral symbols and their corresponding values.
2. Traverse the Roman numeral string.
   - If the current symbol is smaller than the next one, subtract its value.
   - Otherwise, add its value to the total.
3. Return the total sum at the end.

#### Pseudocode:

```
1. Create a map to store Roman numeral values.
2. Initialize `total = 0`
3. Loop through each character in the Roman numeral:
   a. If the current numeral is smaller than the next numeral, subtract its value.
   b. Else, add its value to the total.
4. Return the total.
```

### Step 4: Code in JavaScript

```javascript
function romanToInt(s) {
  // Step 1: Create a map of Roman numerals and their corresponding values
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Step 2: Initialize total to 0
  let total = 0;

  // Step 3: Loop through the Roman numeral string
  for (let i = 0; i < s.length; i++) {
    // Get the value of the current Roman numeral and the next one
    let currentValue = romanMap[s[i]];
    let nextValue = romanMap[s[i + 1]]; // undefined if it's the last symbol

    // Step 4: If the current value is less than the next one, subtract it (subtractive case)
    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      // Otherwise, add it
      total += currentValue;
    }
  }

  // Step 5: Return the total integer value
  return total;
}
```

### Step 5: Dry Run the Code

Let’s dry run the code with the example `s = "MCMXCIV"`:

```js
s = "MCMXCIV" // input string
total = 0

i = 0, s[i] = 'M', currentValue = 1000, nextValue = 100
- 1000 >= 100 → Add currentValue: total = 1000

i = 1, s[i] = 'C', currentValue = 100, nextValue = 1000
- 100 < 1000 → Subtract currentValue: total = 1000 - 100 = 900

i = 2, s[i] = 'M', currentValue = 1000, nextValue = 90
- 1000 >= 90 → Add currentValue: total = 900 + 1000 = 1900

i = 3, s[i] = 'X', currentValue = 10, nextValue = 100
- 10 < 100 → Subtract currentValue: total = 1900 - 10 = 1890

i = 4, s[i] = 'C', currentValue = 100, nextValue = 10
- 100 >= 10 → Add currentValue: total = 1890 + 100 = 1990

i = 5, s[i] = 'I', currentValue = 1, nextValue = 5
- 1 < 5 → Subtract currentValue: total = 1990 - 1 = 1989

i = 6, s[i] = 'V', currentValue = 5, nextValue = undefined
- 5 >= undefined → Add currentValue: total = 1989 + 5 = 1994

Output = 1994
```

### Step 6: Optimize and Suggest Alternative Methods

#### Current Approach:

- **Time complexity:** `O(n)`, where `n` is the length of the Roman numeral string. We only loop through the string once.
- **Space complexity:** `O(1)`, since the map has a fixed size (only 7 Roman numeral symbols), and we only use a few extra variables.

#### Alternative Methods:

1. **No better time complexity alternative**: Since we need to examine every character of the input string, this approach is already optimal for time complexity.
2. **Precomputing Subtractive Combinations**: Instead of checking each numeral and subtracting when necessary, we could directly account for combinations like "IV" or "IX" in the map itself. However, this wouldn't significantly improve the time complexity and might make the logic more cumbersome.

The current approach is simple and efficient, so no further optimization is needed.
