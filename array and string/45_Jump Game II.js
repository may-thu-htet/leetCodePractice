/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // Initialize variables to track farthest reach, current end of jump, and jump count
  let farthest = 0;
  let currentEnd = 0;
  let jumps = 0;

  // Traverse the array up to the second last element (no need to jump from last index)
  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest we can reach from current index i
    farthest = Math.max(farthest, i + nums[i]);

    // If we've reached the end of the current jump segment
    if (i === currentEnd) {
      // We need another jump, so increment jump count
      jumps++;
      // Update the end of this jump segment to the farthest we can reach
      currentEnd = farthest;
    }
  }

  // Return the total number of jumps needed to reach the last index
  return jumps;
};
