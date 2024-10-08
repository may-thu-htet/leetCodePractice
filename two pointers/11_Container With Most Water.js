/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // Initialize two pointers
  let left = 0; // Start pointer at the beginning
  let right = height.length - 1; // End pointer at the last index
  let maxArea = 0; // Variable to store the maximum area found

  // Use the two-pointer approach
  while (left < right) {
    // Calculate the height of the container
    let currentHeight = Math.min(height[left], height[right]);
    // Calculate the width of the container
    let currentWidth = right - left;
    // Calculate the area
    let area = currentHeight * currentWidth;

    // Update the maximum area found
    maxArea = Math.max(maxArea, area);

    // Move the pointer pointing to the shorter line
    if (height[left] < height[right]) {
      left++; // Move left pointer to the right
    } else {
      right--; // Move right pointer to the left
    }
  }

  return maxArea; // Return the maximum area found
};
