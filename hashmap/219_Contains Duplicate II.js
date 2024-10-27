// My solution

/**
 * @param {number[]} nums - Array of integers
 * @param {number} k - Maximum allowable index difference
 * @return {boolean} - Returns true if a duplicate within range k exists, otherwise false
 */
var containsNearbyDuplicate = function (nums, k) {
  // Initialize a Map to store the index of each number
  const visited = new Map();

  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element has been seen before and if it meets the distance condition
    if (visited.has(nums[i]) && i - visited.get(nums[i]) <= k) {
      return true; // Return true if a valid pair is found
    }
    // Update the Map with the latest index of the current element
    visited.set(nums[i], i);
  }

  // If no valid pair found by the end, return false
  return false;
};

// sliding window approach

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const windowSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    // If current element is already in the set, we found a duplicate within range k
    if (windowSet.has(nums[i])) {
      return true;
    }

    // Add the current element to the set
    windowSet.add(nums[i]);

    // Maintain only the last k elements in the set
    if (windowSet.size > k) {
      windowSet.delete(nums[i - k]);
    }
  }

  // No duplicate within range k found
  return false;
};
