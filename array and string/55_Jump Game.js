/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Initialize the farthest we can reach to 0
  let farthest = 0;

  // Iterate over each index
  for (let i = 0; i < nums.length; i++) {
    // If the current index is greater than the farthest position, return false
    if (i > farthest) {
      return false;
    }

    // Update the farthest we can reach
    farthest = Math.max(farthest, i + nums[i]);

    // If the farthest position is beyond or at the last index, return true
    if (farthest >= nums.length - 1) {
      return true;
    }
  }

  // If we finish the loop without reaching the last index, return false
  return false;
};
