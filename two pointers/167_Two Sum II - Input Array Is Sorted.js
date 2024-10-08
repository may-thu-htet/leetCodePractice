/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // Initialize two pointers
  let left = 0; // Start pointer at the beginning
  let right = numbers.length - 1; // End pointer at the end

  // Loop until the two pointers meet
  while (left < right) {
    let sum = numbers[left] + numbers[right]; // Calculate the sum of the two pointed values

    if (sum === target) {
      // If we found the target, return their 1-indexed positions
      return [left + 1, right + 1]; // Convert to 1-indexed
    } else if (sum < target) {
      // If the sum is less than target, move left pointer to the right to increase the sum
      left++;
    } else {
      // If the sum is greater than target, move right pointer to the left to decrease the sum
      right--;
    }
  }

  // Since the problem guarantees exactly one solution, we should never reach here.
  return [];
};
