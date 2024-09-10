// 2529. Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between
// the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the
// number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

// Constraints:

// 1 <= nums.length <= 2000
// -2000 <= nums[i] <= 2000
// nums is sorted in a non-decreasing order.

// Follow up: Can you solve the problem in O(log(n)) time complexity?

// Solution

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumCount = function (nums) {
  let negCount = 0;
  let posCount = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > 0) {
      right = mid - 1;
    } else if (nums[mid] < 0) {
      left = mid + 1;
    } else {
      // Skip all the zeros in the middle
      let leftZero = mid;
      let rightZero = mid;
      // Move leftZero to the left until non-zero is found
      while (leftZero >= 0 && nums[leftZero] === 0) leftZero--;
      // Move rightZero to the right until non-zero is found
      while (rightZero < nums.length && nums[rightZero] === 0) rightZero++;

      // Now update the bounds accordingly
      right = leftZero;
      left = rightZero;
    }
  }

  posCount = nums.length - left;
  negCount = right + 1;
  return Math.max(posCount, negCount);
};
