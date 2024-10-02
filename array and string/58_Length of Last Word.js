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

// Alternative approach

var lengthOfLastWord = function (s) {
  let words = s.trim().split(" ");
  return words.length > 0 ? words[words.length - 1].length : 0;
};

// - This approach is less efficient in terms of space.
