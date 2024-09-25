/**
 * @param {number[]} nums - The input array
 * @return {number} - The majority element
 */
var majorityElement = function (nums) {
  let candidate = null; // To store the majority candidate
  let count = 0; // Count to track the candidate's frequency

  // Iterate through the array
  for (let num of nums) {
    if (count === 0) {
      // If count is 0, set the current number as candidate
      candidate = num;
    }
    // If current number is the candidate, increment count
    if (num === candidate) {
      count++;
    } else {
      // Otherwise, decrement the count
      count--;
    }
  }

  // Return the candidate which is the majority element
  return candidate;
};
