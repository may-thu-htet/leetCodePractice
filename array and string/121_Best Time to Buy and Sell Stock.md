### 121. Best Time to Buy and Sell Stock

### 1. Repeat the Question:

We are given an array `prices` where `prices[i]` represents the price of a stock on the `i`th day. Our goal is to maximize profit by buying the stock on one day and selling it on a future day. We need to return the maximum profit that can be achieved from this transaction. If no profit is possible (i.e., if prices only decrease), we return 0.

---

### 2. Suggest Examples and Edge Cases:

#### Examples:

- **Example 1**:
  ```js
  prices = [7, 1, 5, 3, 6, 4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.
  ```
- **Example 2**:
  ```js
  prices = [7, 6, 4, 3, 1]
  Output: 0
  Explanation: There is no profit possible as the prices keep decreasing.
  ```

#### Edge Cases:

- **Edge Case 1: Empty Array**:

  ```js
  prices = []
  Output: 0
  Explanation: No prices are available, so no transaction is possible.
  ```

- **Edge Case 2: One price**:

  ```js
  prices = [5]
  Output: 0
  Explanation: With only one price, no transaction can happen, so profit is 0.
  ```

- **Edge Case 3: Prices constantly increasing**:

  ```js
  prices = [1, 2, 3, 4, 5]
  Output: 4
  Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5 - 1 = 4.
  ```

- **Edge Case 4: Prices constantly decreasing**:
  ```js
  prices = [5, 4, 3, 2, 1]
  Output: 0
  Explanation: No profit is possible as prices continuously decrease.
  ```

---

### 3. Approach and Thought Process:

#### Idea:

The key observation is that to maximize profit, we should buy the stock at the lowest price we've encountered so far and sell it at the highest price after buying. This can be done efficiently in a single pass.

#### Plan:

1. Keep track of the minimum price encountered while iterating through the prices array.
2. For each day, calculate the potential profit if the stock was bought at the lowest price so far and sold on that day.
3. Continuously update the maximum profit during each iteration.

#### Thought Process:

- Traverse through the prices array once.
- Keep a variable `minPrice` to store the lowest price encountered so far.
- For each price, calculate the difference between the current price and `minPrice` to check the potential profit.
- Update the maximum profit whenever a higher profit is found.
- Return the maximum profit at the end.

#### Complexity:

- **Time Complexity**: O(n) — We traverse the prices array once.
- **Space Complexity**: O(1) — We use only a few extra variables (`minPrice` and `maxProfit`).

#### Pseudo Code:

```pseudo
Initialize minPrice to Infinity
Initialize maxProfit to 0

For each price in prices:
    If current price < minPrice:
        Update minPrice to current price
    Else:
        Calculate profit as current price - minPrice
        If profit > maxProfit:
            Update maxProfit to this new profit

Return maxProfit
```

---

### 4. Code in JavaScript:

```js
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
```

---

### 5. Dry Run:

#### Example: `prices = [7, 1, 5, 3, 6, 4]`

1. Initialize `minPrice = Infinity` and `maxProfit = 0`.
2. Iterate through the array:

   - Day 1 (`prices[0] = 7`):
     - Update `minPrice = 7` (as 7 < Infinity).
   - Day 2 (`prices[1] = 1`):
     - Update `minPrice = 1` (as 1 < 7).
   - Day 3 (`prices[2] = 5`):
     - Calculate `profit = 5 - 1 = 4`. Update `maxProfit = 4` (as 4 > 0).
   - Day 4 (`prices[3] = 3`):
     - Calculate `profit = 3 - 1 = 2`. `maxProfit` remains 4.
   - Day 5 (`prices[4] = 6`):
     - Calculate `profit = 6 - 1 = 5`. Update `maxProfit = 5` (as 5 > 4).
   - Day 6 (`prices[5] = 4`):
     - Calculate `profit = 4 - 1 = 3`. `maxProfit` remains 5.

3. Return `maxProfit = 5`.

---

### 6. Optimize and Suggest Alternative Methods:

#### Alternative Approach:

If the problem allowed multiple transactions, we could approach it differently by summing up all the positive differences (buy low and sell high multiple times). But for this problem, the single transaction method is the most optimal.

#### Sliding Window (Alternative Explanation):

This problem can also be thought of as using a "sliding window" approach:

- The left side of the window represents the day you bought the stock, and the right side represents the day you sell.
- As you iterate, you continuously adjust the window to ensure you're calculating the maximum profit.

### Complexity of Alternative Sliding Window:

- **Time Complexity**: O(n)
- **Space Complexity**: O(1)
