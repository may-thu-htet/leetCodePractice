/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  function bT(openN, closeN, str) {
    if (openN === n && closeN === n) {
      res.push(str);
      return;
    }
    if (openN < n) {
      bT(openN + 1, closeN, str + "(");
    }
    if (closeN < openN) {
      bT(openN, closeN + 1, str + ")");
    }
  }
  bT(0, 0, "");
  return res;
};
