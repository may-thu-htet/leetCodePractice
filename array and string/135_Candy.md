### 135. Candy

### Step 1: Repeat the question

We are given `n` children standing in a line, each with a rating value in an array `ratings`. We need to distribute candies to the children based on the following conditions:

1. Every child must receive **at least one candy**.
2. If a child has a **higher rating** than their neighbor, they should receive **more candies** than that neighbor.

We are required to find the **minimum number of candies** needed to meet these conditions.

### Step 2: Suggest examples and edge cases

#### Example 1:

```js
Input: ratings = [1, 0, 2]
Output: 5
Explanation: We can distribute candies as follows: [2, 1, 2].
```

#### Example 2:

```js
Input: ratings = [1, 2, 2]
Output: 4
Explanation: We can distribute candies as follows: [1, 2, 1].
```

#### Edge cases:

1. **All children have the same rating:** Every child gets exactly 1 candy.

   ```js
   Input: ratings = [1, 1, 1]
   Output: 3 (1 candy each, total = 3).
   ```

2. **Strictly increasing or decreasing ratings:** For increasing ratings, each subsequent child gets more candies. For decreasing ratings, we need to give more candies starting from the back.

   ```js
   Input: ratings = [1, 2, 3]
   Output: 6 (Candies: [1, 2, 3])

   Input: ratings = [3, 2, 1]
   Output: 6 (Candies: [3, 2, 1])
   ```

3. **Single child:** The child gets exactly 1 candy.
   ```js
   Input: ratings = [5];
   Output: 1;
   ```

### Step 3: Approach and thought process

#### Thought Process:

We can approach the problem in two passes:

1. **Left-to-right pass:** Ensure that each child has more candies than the left neighbor if their rating is higher.
2. **Right-to-left pass:** Ensure that each child has more candies than the right neighbor if their rating is higher.

By combining these two passes, we ensure that all conditions are met.

#### Approach in Detail:

1. **Initial assignment:** Start by giving each child 1 candy.
2. **Left-to-right pass:** Traverse from left to right. If `ratings[i] > ratings[i-1]`, then increase `candies[i]` to `candies[i-1] + 1`.
3. **Right-to-left pass:** Traverse from right to left. If `ratings[i] > ratings[i+1]`, ensure `candies[i]` is greater than `candies[i+1]`. Take the maximum of the current candies count and `candies[i+1] + 1`.
4. **Sum the candies:** After adjusting in both passes, sum the total candies required.

#### Time Complexity:

- **Time complexity:** `O(n)` because we traverse the array twice.
- **Space complexity:** `O(n)` for storing the candies array.

#### Pseudocode:

```
1. Initialize candies array with 1 candy for each child.
2. Perform a left-to-right pass to ensure children with higher ratings get more candies than their left neighbor.
3. Perform a right-to-left pass to ensure children with higher ratings get more candies than their right neighbor.
4. Sum the candies array and return the total.
```

### Step 4: Code in JavaScript

```javascript
function candy(ratings) {
  let n = ratings.length;

  // Step 1: Initialize candies array with 1 candy for each child
  let candies = new Array(n).fill(1);

  // Step 2: Left-to-right pass
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Step 3: Right-to-left pass
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Step 4: Sum up all the candies
  return candies.reduce((sum, candy) => sum + candy, 0);
}
```

### Step 5: Dry run the code step by step

Let’s dry run the solution with `ratings = [1, 0, 2]`:

#### Initial setup:

```js
ratings = [1, 0, 2];
candies = [1, 1, 1]; // Initially, 1 candy for each child.
```

#### Left-to-right pass:

- **At index 1:** `ratings[1] = 0` and `ratings[0] = 1` → No change.
- **At index 2:** `ratings[2] = 2` and `ratings[1] = 0` → Increase candies:  
  `candies[2] = candies[1] + 1 = 2`.

After the left-to-right pass:

```js
candies = [1, 1, 2];
```

#### Right-to-left pass:

- **At index 1:** `ratings[1] = 0` and `ratings[2] = 2` → No change.
- **At index 0:** `ratings[0] = 1` and `ratings[1] = 0` → Increase candies:  
  `candies[0] = Math.max(candies[0], candies[1] + 1) = 2`.

After the right-to-left pass:

```js
candies = [2, 1, 2];
```

#### Final result:

Sum of candies: `2 + 1 + 2 = 5`.  
The function returns `5`, which is the minimum number of candies needed.

### Step 6: Optimize and suggest alternative methods

#### Optimizations:

The current approach is already optimal:

- **Time complexity:** `O(n)` because we traverse the `ratings` array twice (once from left to right and once from right to left).
- **Space complexity:** `O(n)` because we are using an additional array to store the number of candies for each child.

#### Alternative methods:

1. **Single pass using a priority queue:** This method would involve using a priority queue to handle the children based on their ratings. However, this would have a higher time complexity (`O(n log n)`), making it less efficient compared to the two-pass method.
2. **Greedy approach:** While the current solution is already greedy in nature (greedily ensuring the local conditions from both sides), no further optimization in terms of complexity is possible.

### Summary:

- We solved the problem using a greedy two-pass approach (left-to-right and right-to-left), ensuring the conditions for distributing candies are met efficiently in `O(n)` time.
