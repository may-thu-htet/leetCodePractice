function findPeakElement(nums) {
  // Initialize two pointers for binary search
  let left = 0;
  let right = nums.length - 1;

  // Perform binary search
  while (left < right) {
    // Find the middle index
    let mid = Math.floor((left + right) / 2);

    // Check if we are in a descending slope (left side of a peak)
    if (nums[mid] > nums[mid + 1]) {
      // Move towards the left side, as the peak is on the left or mid itself
      right = mid;
    } else {
      // Move towards the right side, as the peak is on the right
      left = mid + 1;
    }
  }

  // At the end of binary search, 'left' will point to a peak element
  return left;
}
