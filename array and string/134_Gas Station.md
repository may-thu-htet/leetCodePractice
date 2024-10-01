### 134. Gas Station

### Step 1: Repeat the question

The problem asks us to determine if it's possible to complete a full circular route of `n` gas stations, starting at some station. Each station has a certain amount of gas and it costs a certain amount of gas to travel to the next station. We are given two arrays: `gas[i]` represents the gas available at station `i`, and `cost[i]` represents the gas needed to travel from station `i` to station `i + 1`. We need to return the index of the gas station from where the journey can begin so that we can complete the circuit. If it's not possible to complete the circuit, return `-1`. The solution is guaranteed to be unique if it exists.

### Step 2: Suggest examples and edge cases

#### Example 1:

```js
Input: gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
Output: 3
Explanation: Start at station 3. Gas from station 3 = 4. It costs 1 to travel to station 4 (remaining gas = 3), and so on.
```

#### Example 2:

```js
Input: gas = [2, 3, 4], cost = [3, 4, 3]
Output: -1
Explanation: No station allows for completing the circuit, so return -1.
```

#### Edge cases:

1. **Not enough gas overall:** If the total gas provided by all stations is less than the total cost, the circuit cannot be completed.
   ```js
   Input: (gas = [1, 1, 1]), (cost = [2, 2, 2]);
   Output: -1;
   ```
2. **Single station:** If there's only one gas station, and the gas at that station is greater than or equal to the cost, return that station's index.
   ```js
   Input: (gas = [5]), (cost = [4]);
   Output: 0;
   ```

### Step 3: Approach and thought process

#### Thought Process:

1. **Total gas check:** If the total amount of gas at all stations is less than the total cost of traveling between the stations, it's impossible to complete the journey. In that case, we should return `-1` immediately.
2. **Greedy approach:** If it's possible to complete the journey, the problem is finding the correct starting station. A **greedy strategy** works here:

   - Track the total gas accumulated while moving from one station to the next.
   - If at any point, the current accumulated gas becomes negative, this means starting from that station or any station before it is not feasible.
   - We should "restart" the journey from the next station and reset the gas accumulator.

3. **Complexity:**
   - **Time complexity:** `O(n)` because we traverse the arrays once.
   - **Space complexity:** `O(1)` since we only use a few extra variables for tracking gas and indices.

#### Pseudocode:

```
1. Initialize totalGas and totalCost as the sum of all gas and cost.
2. If totalGas < totalCost, return -1 (it's impossible to complete the circuit).
3. Initialize variables: currentGas = 0, startStation = 0.
4. Iterate through each station:
   - Add the difference (gas[i] - cost[i]) to currentGas.
   - If currentGas becomes negative, reset currentGas to 0 and set startStation to i + 1.
5. After the loop, return startStation (this will be the starting point to complete the circuit).
```

### Step 4: Code in JavaScript

```javascript
function canCompleteCircuit(gas, cost) {
  // Step 1: Calculate the total gas and total cost
  let totalGas = 0;
  let totalCost = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }

  // Step 2: If totalGas is less than totalCost, return -1
  if (totalGas < totalCost) {
    return -1;
  }

  // Step 3: Initialize current gas and start station
  let currentGas = 0;
  let startStation = 0;

  // Step 4: Iterate through each station
  for (let i = 0; i < gas.length; i++) {
    currentGas += gas[i] - cost[i];

    // If currentGas drops below zero, reset startStation and currentGas
    if (currentGas < 0) {
      currentGas = 0;
      startStation = i + 1; // Try starting from the next station
    }
  }

  // Step 5: Return the starting station
  return startStation;
}
```

### Step 5: Dry run the code step by step

Let's dry run this using the example `gas = [1, 2, 3, 4, 5]` and `cost = [3, 4, 5, 1, 2]`:

1. **Step 1 (Total gas and total cost):**
   - `totalGas = 1 + 2 + 3 + 4 + 5 = 15`
   - `totalCost = 3 + 4 + 5 + 1 + 2 = 15`
2. **Step 2 (Check totalGas vs totalCost):**

   - Since `totalGas = totalCost = 15`, it's possible to complete the circuit.

3. **Step 3 (Iterating over each station):**

   - **At index 0:**  
     `currentGas = 0 + (1 - 3) = -2`  
     `currentGas < 0`, so reset `currentGas = 0` and set `startStation = 1`.

   - **At index 1:**  
     `currentGas = 0 + (2 - 4) = -2`  
     `currentGas < 0`, so reset `currentGas = 0` and set `startStation = 2`.

   - **At index 2:**  
     `currentGas = 0 + (3 - 5) = -2`  
     `currentGas < 0`, so reset `currentGas = 0` and set `startStation = 3`.

   - **At index 3:**  
     `currentGas = 0 + (4 - 1) = 3`  
     `currentGas >= 0`, so continue.

   - **At index 4:**  
     `currentGas = 3 + (5 - 2) = 6`  
     `currentGas >= 0`, so continue.

4. **Step 5 (Return result):**
   - The final `startStation` is 3. So return `3`.

### Step 6: Optimize and suggest alternative methods

The solution we implemented is already optimal in terms of time complexity (`O(n)`). We only pass through the `gas` and `cost` arrays once, and no extra space is used except for a few variables.

#### Alternative methods:

1. **Brute-force approach:** We could try starting at each station and simulate the journey, but that would result in `O(n^2)` time complexity, which is inefficient for larger arrays.

2. **Mathematical proof:** The greedy solution works because once you find a station where you run out of gas (`currentGas < 0`), it's guaranteed that starting from any station before it won't work. So the optimal start station must be after this point.

#### Why this approach works:

- **Key observation:** If the total gas is greater than or equal to the total cost, there **must** be a valid starting station.
- **Greedy nature:** Whenever `currentGas` becomes negative, it means all stations up to that point can't be the start of a successful trip. We shift the start station to the next one and reset the gas accumulator. This ensures that by the end of the loop, the last valid station index is the correct answer.
