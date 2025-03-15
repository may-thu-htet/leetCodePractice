/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // additional space such as hashset
  // loop through the nums array and add the value to the set if there is not the same element in array
  // we might set the longest to zero initially and then update it along the iteration
  // if there is not number which is less than the num - 1, we let the length to be one
  // then if there is element which is one greater than the current element, we update the length and then compare the length to the logest and whichever larger got to be the longest
  // return the longest

  let numSet = new Set(nums);
  console.log(numSet);
  let longest = 0;
  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let length = 1;
      while (numSet.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};
