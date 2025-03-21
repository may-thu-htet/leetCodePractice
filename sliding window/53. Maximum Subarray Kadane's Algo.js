/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // kadane's algorithm
  let maxSum = nums[0];
  let curSum = nums[0]; // if we set it to zero, it will lead to wrong result if
  // nums has negative numbers only

  // if(nums.length === 1)return nums[0]; <-- this would be unnecessary if length is
  // only one then the function will return just nums[0] as it set to maxSum.
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};
