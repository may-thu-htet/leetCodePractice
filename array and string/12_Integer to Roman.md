### 12. Integer to Roman

Let's go through the problem step by step:

### 1. Repeat the Question:

We are tasked with converting a given integer (from 1 to 3999) into its corresponding Roman numeral form. The conversion process follows specific rules based on the values of the digits and uses both additive and subtractive forms of Roman numerals.

### 2. Suggest Examples and Edge Cases:

- **Examples**:

  - Input: `3` → Output: `III`
  - Input: `58` → Output: `LVIII` (`L` = 50, `V` = 5, `III` = 3)
  - Input: `1994` → Output: `MCMXCIV` (`M` = 1000, `CM` = 900, `XC` = 90, `IV` = 4)

- **Edge Cases**:
  - The smallest number: `1` → Output: `I`
  - The largest number: `3999` → Output: `MMMCMXCIX`
  - Numbers that directly use subtractive notation: `4` → `IV`, `9` → `IX`, `40` → `XL`, etc.

### 3. Approach and Thought Process:

#### Approach:

We can convert the integer to a Roman numeral by repeatedly subtracting the largest possible Roman numeral value from the number and appending the corresponding Roman numeral symbol to the result string.

- **Step-by-Step Process**:
  1. Define a list of Roman numerals and their corresponding integer values.
  2. Iterate through the list from the largest to the smallest value.
  3. For each value, subtract it from the input number as many times as possible, and append the Roman numeral to the result each time.
  4. When the remainder becomes zero, stop.

#### Time Complexity:

- Since we iterate through each digit and process constant Roman numeral mappings, the algorithm runs in **O(1)** time for input values limited to 1–3999.

#### Pseudo Code:

1. Create a list of Roman numeral symbols paired with their integer values.
2. Initialize an empty string `result`.
3. Loop through the list, subtract the corresponding integer value from the input number, and append the Roman numeral symbol to the result string until the input number becomes 0.

### 4. JavaScript Code:

Here’s the implementation in JavaScript with detailed comments:

```javascript
function intToRoman(num) {
  // Define the mapping of Roman numerals to their integer values
  const romanMap = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  // Initialize an empty string to store the resulting Roman numeral
  let result = "";

  // Iterate through the list of Roman numeral values
  for (let [value, symbol] of romanMap) {
    // While the input number is larger than or equal to the current value,
    // append the corresponding Roman symbol and subtract the value from the number
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  // Return the final Roman numeral string
  return result;
}

// Example usage:
console.log(intToRoman(1994)); // Outputs: "MCMXCIV"
```

### 5. Dry Run:

Let’s dry run the function for `num = 1994`:

- `romanMap` starts from the largest value (1000, 'M'):
  - 1994 >= 1000 → Append 'M', subtract 1000 → `num = 994`
  - 994 >= 900 → Append 'CM', subtract 900 → `num = 94`
  - 94 >= 90 → Append 'XC', subtract 90 → `num = 4`
  - 4 >= 4 → Append 'IV', subtract 4 → `num = 0`

The final result is `'MCMXCIV'`.

### 6. Optimizations and Alternative Methods:

- **Optimized Version**: The current approach is already optimized with **O(1)** time complexity since the input range is fixed (1 to 3999), and the Roman numeral values are constant. There's no need for further optimization in terms of time complexity.
- **Alternative Approach**: Another approach could use predefined string patterns for thousands, hundreds, tens, and ones, but this would not offer significant performance improvements over the current method.

### Conclusion:

The above solution converts an integer to a Roman numeral efficiently using a lookup approach with constant time complexity. The dry run demonstrates that the code accurately follows the rules for Roman numeral conversion, including handling additive and subtractive forms.
