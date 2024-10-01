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
