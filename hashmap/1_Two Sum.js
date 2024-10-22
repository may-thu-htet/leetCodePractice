function twoSum(nums, target) {
  // Step 1: Create a Map to store seen numbers and their indices
  const map = new Map();

  // Step 2: Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement
    const complement = target - nums[i];

    // Step 3: Check if the complement exists in the map
    if (map.has(complement)) {
      // If found, return the indices of the two numbers
      return [map.get(complement), i];
    }

    // Step 4: If not found, store the current number and its index in the map
    map.set(nums[i], i);
  }

  // If no solution is found (the problem guarantees there is always one), we return nothing
  return [];
}

// My solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // map for compliment
  const complimentMap = {};

  // loop through the nums to fill the complimentMap
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    complimentMap[compliment] = i;
  }
  // loop through the nums again to search for the compliment number
  for (let i = 0; i < nums.length; i++) {
    if (complimentMap[nums[i]] !== undefined && i !== complimentMap[nums[i]]) {
      return [i, complimentMap[nums[i]]];
    }
  }

  return [-1, -1];
};
