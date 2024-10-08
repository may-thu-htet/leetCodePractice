/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Sort the array to allow the two-pointer technique and handle duplicates
  nums.sort((a, b) => a - b);

  // Result array to store unique triplets
  const result = [];

  // Iterate over each element to consider it as the first element of a triplet
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Initialize two pointers: one at i+1 (left) and one at the end (right)
    let left = i + 1;
    let right = nums.length - 1;

    // While the left pointer is less than the right pointer
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // If we found a triplet that sums to zero
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Move the left pointer forward and skip duplicates
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // Move the right pointer backward and skip duplicates
        right--;
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
      // If the sum is less than zero, move the left pointer to increase the sum
      else if (sum < 0) {
        left++;
      }
      // If the sum is greater than zero, move the right pointer to decrease the sum
      else {
        right--;
      }
    }
  }

  // Return the result array containing all the unique triplets
  return result;
};
