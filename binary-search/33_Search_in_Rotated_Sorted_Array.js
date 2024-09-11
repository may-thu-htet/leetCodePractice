/**
 * Searches for target in a rotated sorted array and returns its index.
 * If target is not found, returns -1.
 *
 * @param {number[]} nums - Rotated sorted array
 * @param {number} target - Target number to find
 * @returns {number} - Index of target, or -1 if not found
 */
function search(nums, target) {
  // Initialize pointers
  let left = 0;
  let right = nums.length - 1;

  // Perform binary search
  while (left <= right) {
    // Calculate mid-point to avoid overflow
    let mid = Math.floor(left + (right - left) / 2);

    // If target is found at mid, return its index
    if (nums[mid] === target) {
      return mid;
    }

    // Determine which half is sorted
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        // Target is in the sorted left side
        right = mid - 1;
      } else {
        // Target is not in the sorted left side, so search right side
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        // Target is in the sorted right side
        left = mid + 1;
      } else {
        // Target is not in the sorted right side, so search left side
        right = mid - 1;
      }
    }
  }

  // If the loop ends, target was not found
  return -1;
}
