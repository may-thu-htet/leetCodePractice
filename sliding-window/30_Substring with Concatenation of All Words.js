function findSubstring(s, words) {
  // Edge case: if the input string or words list is empty, return an empty result
  if (s.length === 0 || words.length === 0) return [];

  const wordLen = words[0].length; // All words have the same length
  const totalLen = wordLen * words.length; // Total length of the concatenated string
  const wordCount = {}; // To store the frequency of each word in words array

  // Build the word frequency map
  for (let word of words) {
    if (wordCount[word] == null) {
      wordCount[word] = 1;
    } else {
      wordCount[word]++;
    }
  }

  const result = []; // To store the starting indices of the valid substrings

  // Iterate through the string, sliding the window of size totalLen
  for (let i = 0; i <= s.length - totalLen; i++) {
    const seen = {}; // To track words seen in the current window
    let j = 0;

    // Check if the substring from i to i + totalLen is a valid concatenation of words
    while (j < words.length) {
      // Extract the word of length wordLen
      const word = s.substring(i + j * wordLen, i + (j + 1) * wordLen);

      // If the word is not in wordCount map or seen too many times, break out
      if (!wordCount[word]) break;

      if (!seen[word]) {
        seen[word] = 1;
      } else {
        seen[word]++;
      }

      // If the current word has been seen more times than it appears in words, break
      if (seen[word] > wordCount[word]) break;

      j++;
    }

    // If we went through all the words successfully, this is a valid starting index
    if (j === words.length) {
      result.push(i);
    }
  }

  return result;
}
