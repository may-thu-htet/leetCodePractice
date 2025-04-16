/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let perm = [];
  let counts = {};

  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }

  function dfs() {
    if (perm.length === nums.length) {
      res.push([...perm]);
      return;
    }
    for (let c in counts) {
      if (counts[c] > 0) {
        perm.push(+c);
        counts[c]--;
        dfs();
        counts[c]++;
        perm.pop();
      }
    }
  }
  dfs();
  return res;
};
