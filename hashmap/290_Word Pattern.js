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
