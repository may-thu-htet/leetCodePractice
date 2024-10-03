/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Step 1: Trim leading and trailing spaces
  let trimmedString = s.trim();

  // Step 2: Split the string into words
  let words = trimmedString.split(" ");

  // Step 3: Filter out empty strings caused by multiple spaces
  let filteredWords = words.filter((word) => word.length > 0);

  // Step 4: Reverse the array of words
  let reversedWords = filteredWords.reverse();

  // Step 5: Join the reversed words with a single space
  return reversedWords.join(" ");
};
