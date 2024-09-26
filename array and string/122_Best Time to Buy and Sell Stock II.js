/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Initialize the total profit to 0
  let totalProfit = 0;

  // Traverse through the prices array, starting from the second day
  for (let i = 1; i < prices.length; i++) {
    // If the current price is higher than the previous day's price,
    // then we add the profit from this transaction (i.e., prices[i] - prices[i-1])
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }

  // Return the total profit after traversing all the prices
  return totalProfit;
};
