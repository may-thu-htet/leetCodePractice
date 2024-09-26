### 122.Best Time to buy and sell stock

### 1. Repeat the Question:

You are given an array `prices` where `prices[i]` represents the price of a stock on the `i`th day. You can decide to buy and/or sell the stock each day, but you can hold at most one share at any time. Additionally, you can buy and sell on the same day.

The goal is to find and return the maximum profit you can achieve by making as many profitable trades as possible.

### 2. Suggest Examples and Edge Cases:

#### Example 1:

```js
prices = [7, 1, 5, 3, 6, 4]
Output: 7
Explanation: Buy at day 2 (price = 1) and sell at day 3 (price = 5), profit = 4.
Then buy at day 4 (price = 3) and sell at day 5 (price = 6), profit = 3.
Total profit = 4 + 3 = 7.
```

#### Example 2:

```js
prices = [1, 2, 3, 4, 5]
Output: 4
Explanation: Buy at day 1 (price = 1) and sell at day 5 (price = 5), profit = 4.
```

#### Example 3:

```js
prices = [7, 6, 4, 3, 1]
Output: 0
Explanation: No transaction is done, no profit is possible as prices decrease continuously.
```

#### Edge Cases:

1. **Empty Array**:
   - `prices = []` → Output: `0` (No prices, no transactions).
2. **Single Price**:
   - `prices = [5]` → Output: `0` (With only one price, no transaction is possible).
3. **All Prices Constant**:
   - `prices = [3, 3, 3, 3, 3]` → Output: `0` (No price change, so no profit).
4. **All Increasing Prices**:
   - `prices = [1, 2, 3, 4, 5]` → Output: `4` (Buy at the start and sell at the peak).
5. **All Decreasing Prices**:
   - `prices = [5, 4, 3, 2, 1]` → Output: `0` (No upward movement for profit).

### 3. Approach and Thought Process in Detail:

#### Idea:

To maximize profit, we should capture every price increase by "buying" before a price increase and "selling" after it. Since we can make unlimited transactions (including buying and selling on the same day), we simply accumulate all positive price differences.

#### Plan:

1. Traverse the array from the second element (`i = 1`).
2. If the price on the current day is greater than the previous day's price, add the difference to the total profit. This ensures that we capture all profitable movements.
3. Continue until the end of the array.
4. Return the total profit.

#### Thought Process:

- We only care about the profit we can gain by tracking positive changes in prices.
- We don't need to explicitly decide when to buy or sell; we just sum all the positive differences between consecutive days.

#### Complexity:

- **Time Complexity**: O(n), where `n` is the length of the prices array. We loop through the array once.
- **Space Complexity**: O(1), since we are only using a few variables to track the profit.

#### Pseudo Code:

```pseudo
Initialize totalProfit to 0
For each i from 1 to the length of prices - 1:
    If prices[i] > prices[i - 1]:
        Add prices[i] - prices[i - 1] to totalProfit

Return totalProfit
```

### 4. Code in JavaScript:

```js
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
```

### 5. Dry Run the Code Step by Step:

#### Example: `prices = [7, 1, 5, 3, 6, 4]`

1. **Initialization**: `totalProfit = 0`
2. **Day 2 (`i = 1`)**: `prices[1] = 1`, `prices[0] = 7`
   - Since `1 < 7`, no profit is made.
   - `totalProfit = 0`
3. **Day 3 (`i = 2`)**: `prices[2] = 5`, `prices[1] = 1`
   - Since `5 > 1`, profit = 5 - 1 = 4.
   - `totalProfit = 4`
4. **Day 4 (`i = 3`)**: `prices[3] = 3`, `prices[2] = 5`
   - Since `3 < 5`, no profit is made.
   - `totalProfit = 4`
5. **Day 5 (`i = 4`)**: `prices[4] = 6`, `prices[3] = 3`
   - Since `6 > 3`, profit = 6 - 3 = 3.
   - `totalProfit = 7`
6. **Day 6 (`i = 5`)**: `prices[5] = 4`, `prices[4] = 6`
   - Since `4 < 6`, no profit is made.
   - `totalProfit = 7`

Final `totalProfit = 7`

#### Example: `prices = [1, 2, 3, 4, 5]`

1. **Initialization**: `totalProfit = 0`
2. **Day 2 (`i = 1`)**: `prices[1] = 2`, `prices[0] = 1`
   - Profit = 2 - 1 = 1
   - `totalProfit = 1`
3. **Day 3 (`i = 2`)**: `prices[2] = 3`, `prices[1] = 2`
   - Profit = 3 - 2 = 1
   - `totalProfit = 2`
4. **Day 4 (`i = 3`)**: `prices[3] = 4`, `prices[2] = 3`
   - Profit = 4 - 3 = 1
   - `totalProfit = 3`
5. **Day 5 (`i = 4`)**: `prices[4] = 5`, `prices[3] = 4`
   - Profit = 5 - 4 = 1
   - `totalProfit = 4`

Final `totalProfit = 4`

#### Example: `prices = [5, 4, 3, 2, 1]`

1. **Initialization**: `totalProfit = 0`
2. **Day 2 (`i = 1`)**: `prices[1] = 4`, `prices[0] = 5`
   - Since `4 < 5`, no profit is made.
   - `totalProfit = 0`
3. **Day 3 (`i = 2`)**: `prices[2] = 3`, `prices[1] = 4`
   - Since `3 < 4`, no profit is made.
   - `totalProfit = 0`
4. **Day 4 (`i = 3`)**: `prices[3] = 2`, `prices[2] = 3`
   - Since `2 < 3`, no profit is made.
   - `totalProfit = 0`
5. **Day 5 (`i = 4`)**: `prices[4] = 1`, `prices[3] = 2`
   - Since `1 < 2`, no profit is made.
   - `totalProfit = 0`

Final `totalProfit = 0`

---

### 6. Optimize and Suggest Alternative Methods:

#### Greedy Strategy (Current Approach):

- This is already the optimal solution using a greedy approach. We are summing all profitable upward movements in one pass through the array.
- **Time Complexity**: O(n), where `n` is the length of the `prices` array.
- **Space Complexity**: O(1), since we're only using a few extra variables.

#### Alternative Methods:

1. **Dynamic Programming**:

   - While not necessary in this case, a dynamic programming approach could maintain two states: "holding stock" and "not holding stock" on each day. However, this approach would be more complex and not as efficient as the greedy method for this problem.
   - **Time Complexity**: O(n)
   - **Space Complexity**: O(n)

2. **Recursive Approach with Memoization**:
   - We could

recursively decide whether to buy/sell or skip on each day, but this would also be unnecessarily complicated.

- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

The **greedy approach** remains the simplest and most efficient solution.
