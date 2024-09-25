/**
 * @param {number[]} nums - The input array sorted in non-decreasing order
 * @return {number} - The number of valid elements (appearing at most twice)
 */
var removeDuplicates = function (nums) {
  // Initialize j to track the index for placing valid elements
  let j = 0;

  // Iterate through the entire array nums
  for (let i = 0; i < nums.length; i++) {
    // If we are at the first two elements OR
    // the current element is greater than the element two positions before j,
    // it means we can place this element
    if (i < 2 || nums[i] > nums[j - 2]) {
      nums[j] = nums[i]; // Place the valid element at nums[j]
      j++; // Move the pointer for the next valid element
    }
  }

  // Return the number of valid elements, which is now j
  return j;
};
