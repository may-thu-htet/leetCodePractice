// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// let the left pointer be 0
// let the right pointer be the length of array - 1
// first find the mid value
// compare the mid value with target
// if the target is larger than the mid, set the left to mid + 1
// if the target is smaller than the mid. set the right to mid - 1
// if the target is equal to the mid, then return the index of that mid.

var search = function (nums, target) {
  let right = nums.length - 1;
  let left = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
