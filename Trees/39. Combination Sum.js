/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  function backtrack(i, cur, sum) {
    if (sum === target) {
      res.push([...cur]);
      return;
    }
    if (i >= candidates.length || sum > target) {
      return;
    }
    cur.push(candidates[i]);
    backtrack(i, cur, sum + candidates[i]);

    cur.pop();
    backtrack(i + 1, cur, sum);
  }
  backtrack(0, [], 0);
  return res;
};
