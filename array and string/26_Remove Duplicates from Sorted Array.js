/**
 * @param {number[]} nums - The input array of integers sorted in non-decreasing order.
 * @return {number} - The number of unique elements in the array.
 */
var removeDuplicates = function (nums) {
  // If the array is empty, return 0
  if (nums.length === 0) return 0;

  let index = 1; // Pointer to track where to place the next unique element

  // Start looping from the second element, as the first element is always unique
  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the previous one
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i]; // Place the unique element at the index position
      index++; // Move the index to the next available position
    }
  }

  // Return the number of unique elements, which is the value of index
  return index;
};

// Alternative approach
var removeDuplicates = function (nums) {
  let uniqueSet = new Set(nums); // Collect unique elements
  let index = 0;
  for (let val of uniqueSet) {
    nums[index++] = val; // Overwrite the array with unique values
  }
  return index;
};
