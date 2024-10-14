function canConstruct(ransomNote, magazine) {
  // Step 1: Create a frequency map for the magazine
  const magazineMap = {};

  // Step 2: Count the frequency of each character in the magazine
  for (let char of magazine) {
    // If the character exists in the map, increment the count, otherwise initialize it
    magazineMap[char] = (magazineMap[char] || 0) + 1;
  }

  // Step 3: Loop through each character of the ransomNote
  for (let char of ransomNote) {
    // If the character is not in the magazine or we run out of that character
    if (!magazineMap[char] || magazineMap[char] === 0) {
      return false; // Can't construct ransomNote
    }
    // Step 4: Decrement the count of the character in the magazine
    magazineMap[char]--;
  }

  // If we successfully check all characters, return true
  return true;
}

// Alternative method
function canConstruct(ransomNote, magazine) {
  // Create an array of size 26 to hold the frequency of each character
  const magazineCount = new Array(26).fill(0);

  // Step 1: Count the frequency of each character in the magazine
  for (let char of magazine) {
    magazineCount[char.charCodeAt(0) - 97]++;
  }

  // Step 2: Loop through each character of the ransomNote
  for (let char of ransomNote) {
    let index = char.charCodeAt(0) - 97;
    if (magazineCount[index] === 0) {
      return false; // Not enough characters
    }
    magazineCount[index]--;
  }

  // If all characters matched, return true
  return true;
}
