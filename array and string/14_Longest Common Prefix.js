// Horizontal scanning

function longestCommonPrefix(strs) {
  // Step 1: Handle the edge case of an empty array
  if (strs.length === 0) return ""; // If no strings, return empty string

  // Step 2: Start by assuming the first string is the common prefix
  let prefix = strs[0];

  // Step 3: Iterate through the remaining strings
  for (let i = 1; i < strs.length; i++) {
    // Check if the current string starts with the current prefix
    while (strs[i].indexOf(prefix) !== 0) {
      // If not, shorten the prefix by removing the last character
      prefix = prefix.slice(0, -1);

      // If the prefix becomes an empty string, return it
      if (prefix === "") return "";
    }
  }

  // Step 4: Return the longest common prefix after checking all strings
  return prefix;
}

// vertical scanning
function longestCommonPrefixVertical(strs) {
  if (strs.length === 0) return ""; // Handle empty input case

  // Step 1: Iterate over characters in the first string
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i]; // Take character at position 'i' from the first string

    // Step 2: Compare this character with the corresponding character in all other strings
    for (let j = 1; j < strs.length; j++) {
      // If we reach the end of any string or find a mismatch
      if (i >= strs[j].length || strs[j][i] !== char) {
        // Return the prefix up to this point
        return strs[0].slice(0, i);
      }
    }
  }

  // If no mismatch found, return the full first string
  return strs[0];
}

// My logic and code (vertical scanning)
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""; // Edge case: empty input array

  // Step 1: Find the length of the smallest string
  let minStrLen = Math.min(...strs.map((str) => str.length));

  let resultStr = "";
  // Step 2: Compare characters at each index from 0 to minStrLen
  for (let strIndex = 0; strIndex < minStrLen; strIndex++) {
    let currentChar = strs[0][strIndex]; // Take character from the first string

    // Step 3: Check if this character matches for all strings
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][strIndex] !== currentChar) {
        // Mismatch found, return the result so far
        return resultStr;
      }
    }

    // All strings have the same character at the current index
    resultStr += currentChar;
  }

  return resultStr; // Return the final result after checking all indices
};
