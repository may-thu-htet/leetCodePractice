/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // find the maximum in candies
  // loop the candies array and add extraCandies to each element and compare it to maximum and add it to the result array

  let maxCandy = 0;
  let result = [];
  for (let candy of candies) {
    maxCandy = Math.max(candy, maxCandy);
  }
  for (let i = 0; i < candies.length; i++) {
    candies[i] + extraCandies >= maxCandy
      ? result.push(true)
      : result.push(false);
  }
  return result;
};
