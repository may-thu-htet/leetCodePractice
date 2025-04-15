/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let digitToLetter = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let res = [];
  let cur = "";
  if (digits.length == 0) return res;
  function helper(i, cur) {
    if (cur.length == digits.length) {
      res.push(cur);
      return;
    }
    for (let c of digitToLetter[digits[i]]) {
      helper(i + 1, cur + c);
    }
  }
  helper(0, cur);
  return res;
};
