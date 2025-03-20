// NEED TO KNOW BACKTRACKING AND RECURSIVE AS WELL

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function backTrack(openN, closeN, str) {
    if (openN === n && closeN === n) {
      result.push(str);
      return;
    }
    if (openN < n) {
      backTrack(openN + 1, closeN, str + "(");
    }
    if (closeN < openN) {
      backTrack(openN, closeN + 1, str + ")");
    }
  }
  backTrack(0, 0, "");
  return result;
};
