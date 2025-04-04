/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];

  function backtrack(i, curSet) {
    if (i >= nums.length) {
      res.push([...curSet]);
      return;
    }
    curSet.push(nums[i]);
    backtrack(i + 1, curSet);
    curSet.pop();
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    backtrack(i + 1, curSet);
  }
  backtrack(0, []);
  return res;
};
