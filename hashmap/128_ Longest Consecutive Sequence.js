/**
 * @param {number[]} nums - Array of unsorted integers
 * @return {number} - Length of the longest consecutive sequence
 */
var longestConsecutive = function (nums) {
  // If the array is empty, return 0 as there's no sequence
  if (nums.length === 0) return 0;

  // Step 1: Add all numbers to a Set to remove duplicates and enable O(1) lookups
  const numSet = new Set(nums);
  let longestStreak = 0; // Track the longest consecutive sequence

  // Step 2: Iterate through each number in the Set
  for (let num of numSet) {
    // Check if 'num' is the start of a sequence (no smaller consecutive number)
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Count consecutive numbers starting from 'num'
      while (numSet.has(currentNum + 1)) {
        currentNum += 1; // Move to the next consecutive number
        currentStreak += 1; // Increase the streak length
      }

      // Update longest streak if currentStreak is longer
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak; // Return the longest sequence found
};
