function removeElement(nums, val) {
  let j = 0; // Pointer to track where to place non-val elements

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to val, we keep it
    if (nums[i] !== val) {
      nums[j] = nums[i]; // Move the non-val element to index j
      j++; // Increment j for the next non-val element
    }
  }

  // After the loop, j will be the number of elements not equal to val
  return j;
}
