### 68. Text Justification

### 1. Repeat the Question:

We are given an array of strings `words` and an integer `maxWidth`, which represents the maximum width of a line. The task is to format the text such that each line has exactly `maxWidth` characters and is fully justified. Fully justified means that the spaces between words should be distributed as evenly as possible. If the number of spaces doesn't divide evenly, the leftmost gaps should have more spaces than the right ones. The last line of text should be left-justified, meaning words should be left-aligned with no extra spaces between them.

### 2. Suggest Examples and Edge Cases:

**Examples:**

- **Example 1:**

  ```javascript
  words = ["This", "is", "an", "example", "of", "text", "justification."];
  maxWidth = 16;
  Output: ["This    is    an", "example  of text", "justification.  "];
  ```

- **Example 2:**
  ```javascript
  words = ["What", "must", "be", "acknowledgment", "shall", "be"];
  maxWidth = 16;
  Output: ["What   must   be", "acknowledgment  ", "shall be        "];
  ```

**Edge Cases:**

- Only one word in a line (`["word"]` with `maxWidth = 10`)
- Multiple words that fit exactly (`["word", "word"]` with `maxWidth = 10`)
- Words that fit one-by-one in the last line, which should be left-aligned with no extra spaces.
- Input array where `maxWidth` is larger than the total length of words, requiring extra spaces.

### 3. Thought Process and Approach:

To solve this problem, we need to build lines of words such that:

- The words fit exactly within the given `maxWidth`.
- If the line is not the last, the words should be fully justified with spaces distributed evenly.
- If the line is the last or contains only one word, it should be left-justified, and the remaining spaces should be appended at the end.

**Approach:**

1. **Greedy Packing**: We'll iterate through the words array and keep adding words to the current line until adding another word would exceed the `maxWidth`.
2. **Space Distribution**: Once we have a valid line, we compute the spaces between words. If it's not the last line, distribute the spaces evenly between the words. If it's the last line or there is only one word, the line should be left-justified.
3. **Handling Extra Spaces**: Extra spaces (when they cannot be evenly divided) will be placed in the leftmost slots.
4. **Final Line Handling**: The last line should be left-justified without any extra spaces between words, only padding at the end.

**Time Complexity:**

- Let `n` be the number of words, and `L` be the maximum width.
- We traverse the list of words once to pack them into lines (`O(n)`).
- For each line, we distribute spaces, which takes `O(L)` for calculating and distributing spaces.
  Thus, the overall time complexity is **O(n \* L)**.

### Pseudo Code:

```text
function justifyText(words, maxWidth):
    result = []
    lineWords = []
    lineLength = 0

    for word in words:
        if lineLength + len(word) + len(lineWords) > maxWidth:
            # Process the current line before adding the new word
            result.append(justify(lineWords, lineLength, maxWidth))
            lineWords = []  # Reset lineWords for the next line
            lineLength = 0  # Reset lineLength for the next line

        # Add the word to the current line
        lineWords.append(word)
        lineLength += len(word)

    # Handle the last line, which is left-justified
    result.append(leftJustify(lineWords, maxWidth))

    return result

function justify(lineWords, lineLength, maxWidth):
    if len(lineWords) == 1:
        # If there's only one word, left justify
        return leftJustify(lineWords, maxWidth)

    totalSpaces = maxWidth - lineLength
    spaceSlots = len(lineWords) - 1
    evenSpaces = totalSpaces // spaceSlots
    extraSpaces = totalSpaces % spaceSlots

    line = ""
    for i in range(len(lineWords) - 1):
        line += lineWords[i] + " " * (evenSpaces + (1 if i < extraSpaces else 0))
    line += lineWords[-1]

    return line

function leftJustify(lineWords, maxWidth):
    line = " ".join(lineWords)
    return line + " " * (maxWidth - len(line))
```

### 4. JavaScript Code Implementation:

```javascript
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
```

### 5. Dry Run Step by Step:

**Example:**

```javascript
words = ["This", "is", "an", "example", "of", "text", "justification."];
maxWidth = 16;
```

- **Step 1:** Initialize `result = []`, `lineWords = []`, `lineLength = 0`
- **Step 2:** Iterate through the words:
  - `"This"`: Add to `lineWords`, `lineLength = 4`.
  - `"is"`: Add to `lineWords`, `lineLength = 6`.
  - `"an"`: Add to `lineWords`, `lineLength = 8`.
  - `"example"`: Adding would exceed maxWidth. Justify the current line:
    - `lineWords = ["This", "is", "an"]`, `lineLength = 8`.
    - Spaces to distribute: `16 - 8 = 8`, space slots: `2`, even spaces: `4`.
    - Resulting line: `"This    is    an"`.
  - Start new line with `"example"`, `lineLength = 7`.
  - Add `"of"`, `lineLength = 9`.
  - Add `"text"`, `lineLength = 13`.
  - Justify the line: `"example  of text"`.
  - Add `"justification."`, left justify: `"justification.  "`.
- **Final Output:**
  ```
  [
    "This    is    an",
    "example  of text",
    "justification.  "
  ]
  ```

### 6. Optimization and Alternatives:

- **Optimization:** The current solution is efficient with a time complexity of `O(n * L)`. There are no further space optimizations possible since the greedy approach ensures minimal space usage.
- **Alternative Approach:**
  - **Dynamic Programming**: We could use a dynamic programming approach to minimize the uneven distribution of spaces. However, this is more complex and has a higher time complexity than the greedy method.

Thus, the current greedy solution is both time-efficient and space-efficient for the problem at hand.
