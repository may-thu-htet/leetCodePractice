/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function dfs(steps) {
    if (steps >= n) return steps == n;
    return dfs(steps + 1) + dfs(steps + 2);
  }
  return dfs(0);
};
