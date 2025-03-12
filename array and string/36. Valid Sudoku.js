/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = new Map();
  let cols = new Map();
  let sqr = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      // skip it if we see '.'
      if (board[r][c] === ".") continue;

      // find key for sqr map
      let sqrKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

      // check if rows, cols or sqr map has the current loop value, and if there is the same value, return false
      if (
        (rows.get(r) && rows.get(r).has(board[r][c])) ||
        (cols.get(c) && cols.get(c).has(board[r][c])) ||
        (sqr.get(sqrKey) && sqr.get(sqrKey).has(board[r][c]))
      )
        return false;

      // if not add it to the map, along with new empty set
      if (!rows.get(r)) rows.set(r, new Set());
      if (!cols.get(c)) cols.set(c, new Set());
      if (!sqr.get(sqrKey)) sqr.set(sqrKey, new Set());

      // add the value to the empty set
      rows.get(r).add(board[r][c]);
      cols.get(c).add(board[r][c]);
      sqr.get(sqrKey).add(board[r][c]);
    }
  }
  return true;
};
