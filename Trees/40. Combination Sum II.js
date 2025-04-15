/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);

  function helper(i, curSum, arr) {
    if (curSum === target) {
      res.push([...arr]);
      return;
    }
    if (curSum > target || i === candidates.length) return;
    arr.push(candidates[i]);
    helper(i + 1, curSum + candidates[i], arr);
    arr.pop();

    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    helper(i + 1, curSum, arr);
  }
  helper(0, 0, []);
  return res;
};
