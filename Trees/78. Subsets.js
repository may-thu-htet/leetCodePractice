/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  let subset = [];

  function dfs(i) {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }
    // decide to add nums[i]
    subset.push(nums[i]);
    dfs(i + 1);

    // decide not to add nums[i]
    subset.pop();
    dfs(i + 1);
  }
  dfs(0);
  return result;
};
