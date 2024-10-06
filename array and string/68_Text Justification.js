function fullJustify(words, maxWidth) {
  let result = []; // Array to store the final justified text
  let lineWords = []; // Array to store words for the current line
  let lineLength = 0; // Length of the current line (without spaces)

  for (let word of words) {
    // Check if adding the next word would exceed the maxWidth
    if (lineLength + word.length + lineWords.length > maxWidth) {
      // Process the current line
      result.push(justify(lineWords, lineLength, maxWidth));
      lineWords = []; // Reset lineWords for the next line
      lineLength = 0; // Reset lineLength for the next line
    }
    // Add the word to the current line
    lineWords.push(word);
    lineLength += word.length;
  }

  // Handle the last line (left-justified)
  result.push(leftJustify(lineWords, maxWidth));
  return result;
}

function justify(lineWords, lineLength, maxWidth) {
  // If there's only one word, left-justify it
  if (lineWords.length === 1) {
    return leftJustify(lineWords, maxWidth);
  }

  let totalSpaces = maxWidth - lineLength; // Total spaces to distribute
  let spaceSlots = lineWords.length - 1; // Number of slots between words
  let evenSpaces = Math.floor(totalSpaces / spaceSlots); // Base number of spaces per slot
  let extraSpaces = totalSpaces % spaceSlots; // Extra spaces to distribute

  let line = "";
  for (let i = 0; i < lineWords.length - 1; i++) {
    // Add the word followed by the necessary spaces
    line += lineWords[i] + " ".repeat(evenSpaces + (i < extraSpaces ? 1 : 0));
  }
  line += lineWords[lineWords.length - 1]; // Add the last word without extra spaces

  return line;
}

function leftJustify(lineWords, maxWidth) {
  let line = lineWords.join(" "); // Join the words with a single space
  return line + " ".repeat(maxWidth - line.length); // Pad with extra spaces at the end
}
