/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Initialize variables: minPrice starts at Infinity, maxProfit at 0
  let minPrice = Infinity;
  let maxProfit = 0;

  // Traverse each price in the array
  for (let i = 0; i < prices.length; i++) {
    // If current price is lower than the minPrice, update minPrice
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Otherwise, calculate the profit by subtracting minPrice from current price
    else {
      let profit = prices[i] - minPrice;
      // If this profit is greater than maxProfit, update maxProfit
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  // Return the maximum profit found (or 0 if no profit possible)
  return maxProfit;
};
