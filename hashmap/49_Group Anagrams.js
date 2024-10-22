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

// Alternate solution

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
