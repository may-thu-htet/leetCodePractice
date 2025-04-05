/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];

  function helper(i, combo) {
    if (i > n + 1) return;
    if (combo.length === k) {
      res.push([...combo]);
      return;
    }
    combo.push(i);
    helper(i + 1, combo);
    combo.pop();
    helper(i + 1, combo);
  }
  helper(1, []);
  return res;
};
