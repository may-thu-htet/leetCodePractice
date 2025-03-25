/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  // find the sum using two pointers
  // while looping find the avg greater than or equal to threshold

  let left = 0;
  let sum = 0;
  let noOfArr = 0;
  for (let right = 0; right < arr.length; right++) {
    if (right - left < k) {
      sum += arr[right];
      if (right === k - 1 && sum / k >= threshold) noOfArr += 1;
    } else if (right - left >= k) {
      sum += arr[right] - arr[left];
      if (sum / k >= threshold) noOfArr += 1;
      left++;
    }
  }
  return noOfArr;
};
