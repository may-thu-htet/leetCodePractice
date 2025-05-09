/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let col = new Set();
  let posDiag = new Set();
  let negDiag = new Set();
  let count = 0;

  // helper functions
  const isValid = function (r, c) {
    return !(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c));
  };

  const addQueen = function (r, c) {
    col.add(c);
    posDiag.add(r + c);
    negDiag.add(r - c);
  };
  const removeQueen = function (r, c) {
    col.delete(c);
    posDiag.delete(r + c);
    negDiag.delete(r - c);
  };

  // backtracking function
  function recurse(row) {
    // base case
    if (row === n) {
      count++;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        addQueen(row, col);
        recurse(row + 1);
        removeQueen(row, col);
      }
    }
    return count;
  }
  return recurse(0);
};
