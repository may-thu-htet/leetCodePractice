/**
 * @param {number[]} nums - The input array
 * @param {number} k - The number of steps to rotate
 * @return {void} - Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;

  // If k is greater than the length of the array, we can reduce it by modulo
  k = k % n;

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      // Swap elements at start and end
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining n - k elements
  reverse(k, n - 1);
};
