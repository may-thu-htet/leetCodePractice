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
