function trap(height) {
  // Step 1: Initialize two pointers, leftMax and rightMax, and water accumulator
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  // Step 2: Move the pointers towards each other
  while (left < right) {
    if (height[left] < height[right]) {
      // Step 3a: If height[left] is less, calculate water from the left
      if (height[left] >= leftMax) {
        leftMax = height[left]; // Update leftMax
      } else {
        water += leftMax - height[left]; // Calculate trapped water
      }
      left++; // Move left pointer
    } else {
      // Step 3b: If height[right] is less, calculate water from the right
      if (height[right] >= rightMax) {
        rightMax = height[right]; // Update rightMax
      } else {
        water += rightMax - height[right]; // Calculate trapped water
      }
      right--; // Move right pointer
    }
  }

  // Step 4: Return the total trapped water
  return water;
}
