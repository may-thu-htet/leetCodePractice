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
  if (digits.length === 0) return res;
  function helper(i, substr) {
    if (substr.length === digits.length) {
      res.push(substr);
      return;
    }

    for (let c of digitToLetter[digits[i]]) {
      helper(i + 1, substr + c);
    }
  }
  helper(0, "");
  return res;
};
