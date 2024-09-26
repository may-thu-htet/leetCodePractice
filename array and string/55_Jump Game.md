### 55. Jump Game

### Problem:

You are given an array `nums` where each element represents the maximum jump length you can make from that position. Your task is to determine if it is possible to jump from the first index to the last index.

### Example:

#### Example 1:

```js
Input: nums = [2, 3, 1, 1, 4]
Output: true
Explanation: Jump 1 step from index 0 to index 1, then 3 steps to the last index.
```

#### Example 2:

```js
Input: nums = [3, 2, 1, 0, 4]
Output: false
Explanation: You will always reach the index 3, but its value is 0, which prevents further progress.
```

### Key Observations:

1. You start at the first index and you need to determine if you can jump to the last index.
2. Each element in the array defines the maximum number of steps you can jump forward from that position.
3. If you reach an index where the value is `0` and you cannot jump past it, you are stuck, and it’s impossible to reach the last index.

### Approach:

We can solve this problem using a **Greedy** approach.

### Greedy Approach:

#### Idea:

- The idea is to keep track of the farthest index we can currently reach as we iterate through the array.
- As we traverse each index, we update the farthest position we can reach.
- If, at any point, the current index exceeds the farthest position we can reach, then it is impossible to proceed further, and the answer is `false`.
- If we can reach or surpass the last index, we return `true`.

#### Plan:

1. Start at the first index.
2. Keep a variable `farthest` to track the farthest index we can reach.
3. As we iterate over each element in `nums`, update `farthest` as the maximum of the current `farthest` and the current index plus its value (`i + nums[i]`).
4. If at any point `farthest` is less than the current index, return `false` (since we are stuck).
5. If `farthest` is greater than or equal to the last index, return `true`.

#### Complexity:

- **Time Complexity**: O(n), where `n` is the length of the array. We make a single pass through the array.
- **Space Complexity**: O(1), since we are only using a few variables.

### Pseudo Code:

```pseudo
Initialize farthest to 0
For each index i from 0 to length of nums - 1:
    If farthest < i:
        Return false (we are stuck)

    Update farthest = max(farthest, i + nums[i])

    If farthest >= last index:
        Return true (we can reach the last index)

Return false if the loop completes without returning
```

### 4. JavaScript Code:

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Initialize the farthest we can reach to 0
  let farthest = 0;

  // Iterate over each index
  for (let i = 0; i < nums.length; i++) {
    // If the current index is greater than the farthest position, return false
    if (i > farthest) {
      return false;
    }

    // Update the farthest we can reach
    farthest = Math.max(farthest, i + nums[i]);

    // If the farthest position is beyond or at the last index, return true
    if (farthest >= nums.length - 1) {
      return true;
    }
  }

  // If we finish the loop without reaching the last index, return false
  return false;
};
```

### 5. Dry Run the Code Step by Step:

#### Example 1: `nums = [2, 3, 1, 1, 4]`

- **Initialization**: `farthest = 0`
- **Step 1**: `i = 0`, `nums[0] = 2`
  - Update: `farthest = max(0, 0 + 2) = 2`
  - `farthest >= last index` → `false`
- **Step 2**: `i = 1`, `nums[1] = 3`
  - Update: `farthest = max(2, 1 + 3) = 4`
  - `farthest >= last index` → `true`, so return `true`

#### Example 2: `nums = [3, 2, 1, 0, 4]`

- **Initialization**: `farthest = 0`
- **Step 1**: `i = 0`, `nums[0] = 3`
  - Update: `farthest = max(0, 0 + 3) = 3`
  - `farthest >= last index` → `false`
- **Step 2**: `i = 1`, `nums[1] = 2`
  - Update: `farthest = max(3, 1 + 2) = 3`
  - `farthest >= last index` → `false`
- **Step 3**: `i = 2`, `nums[2] = 1`
  - Update: `farthest = max(3, 2 + 1) = 3`
  - `farthest >= last index` → `false`
- **Step 4**: `i = 3`, `nums[3] = 0`
  - Update: `farthest = max(3, 3 + 0) = 3`
  - `farthest >= last index` → `false`
- **Step 5**: `i = 4`, `farthest = 3`
  - Since `i > farthest`, return `false`

### 6. Optimize and Suggest Alternative Methods:

#### Greedy Approach (Current):

- This is the most optimal approach, making a single pass through the array and updating the farthest reachable index.
- **Time Complexity**: O(n), as we only traverse the array once.
- **Space Complexity**: O(1), since we only use a few variables.

#### Alternative Approach (Dynamic Programming):

- You could use a dynamic programming table to store whether each index is reachable, starting from index 0. This would take O(n^2) time and space, which is inefficient compared to the greedy solution.

### Conclusion:

The **greedy approach** is optimal for this problem due to its linear time complexity and constant space complexity. It efficiently tracks whether the last index can be reached without unnecessary computations.
