/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  let curPal = [];

  dfs(s, 0, curPal);
  return res;

  function dfs(s, i, curPal) {
    if (i == s.length) {
      res.push([...curPal]);
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (isPali(s, i, j)) {
        curPal.push(s.substring(i, j + 1));
        dfs(s, j + 1, curPal);
        curPal.pop();
      }
    }
  }

  function isPali(s, l, r) {
    while (l < r) {
      if (s[l] != s[r]) return false;
      l++;
      r--;
    }
    return true;
  }
};
