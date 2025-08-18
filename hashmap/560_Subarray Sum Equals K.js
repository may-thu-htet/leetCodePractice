/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // given:array nums, integer k
  // question: totoal no of subarrays whose sum is k
  // Brute force -> two nested loop, find the sum and compare it with k, calculate no of totalArr
  // time = O(n2), space = O(1)

  // let count = 0;
  // for(let i = 0; i < nums.length; i++){
  //     let sum = nums[i];
  //     if(sum === k)count ++;
  //     for(let j = i + 1; j < nums.length; j++){
  //         sum += nums[j];
  //         if(sum === k)count ++;
  //     }
  // }
  // return count;

  // Optimize approach, Hashmap and prefix
  // store sum - k and its frequency inside a hashmap, if there is a prefix sum in the hashmap, increase the count no by that hashmap value.
  // return the count

  const sumMap = new Map();
  let sum = 0;
  let count = 0;
  sumMap.set(sum, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k);
    }
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }
  return count;
};
