function minSubArrayLen(target, nums) {
  // Initialize two pointers and the current sum of the window
  let start = 0;
  let currentSum = 0;
  let minLength = Infinity; // Variable to store the minimum length found

  // Iterate with the end pointer to expand the window
  for (let end = 0; end < nums.length; end++) {
    // Add the current element to the window's sum
    currentSum += nums[end];

    // Shrink the window as much as possible while the sum is >= target
    while (currentSum >= target) {
      // Update the minimum length of the subarray
      minLength = Math.min(minLength, end - start + 1);

      // Remove the element at the start of the window from the sum
      currentSum -= nums[start];

      // Move the start pointer to the right
      start++;
    }
  }

  // If no subarray was found, return 0. Otherwise, return the minimal length.
  return minLength === Infinity ? 0 : minLength;
}
