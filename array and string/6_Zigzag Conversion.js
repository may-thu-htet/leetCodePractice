/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // Handle edge cases
  if (numRows <= 1 || numRows >= s.length) {
    return s; // No zigzag needed
  }

  // Create an array to hold the rows
  let rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  // Fill the rows with characters
  for (let char of s) {
    rows[currentRow] += char; // Append the character to the current row

    // Change direction if we hit the top or bottom row
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown; // Switch direction
    }

    // Move to the next row
    currentRow += goingDown ? 1 : -1;
  }

  // Join all rows to form the final string
  return rows.join("");
};
