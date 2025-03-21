/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let curSum = 0;

  for (let i = 0; i < k; i++) {
    curSum += nums[i];
  }
  maxSum = curSum;
  for (let i = k; i < nums.length; i++) {
    curSum += nums[i] - nums[i - k];
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum / k;
};
