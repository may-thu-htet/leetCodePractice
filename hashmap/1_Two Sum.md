### 1. Two Sums

### 1. Repeat the Question

We are given an array of integers `nums` and an integer `target`. We need to find two distinct numbers in the array whose sum is equal to the target, and return their indices. There will always be exactly one solution, and we cannot use the same element twice.

### 2. Examples and Edge Cases

#### Example 1:

- **Input**: `nums = [2, 7, 11, 15]`, `target = 9`
- **Output**: `[0, 1]` (because `nums[0] + nums[1] = 2 + 7 = 9`)

#### Example 2:

- **Input**: `nums = [3, 2, 4]`, `target = 6`
- **Output**: `[1, 2]` (because `nums[1] + nums[2] = 2 + 4 = 6`)

#### Example 3:

- **Input**: `nums = [3, 3]`, `target = 6`
- **Output**: `[0, 1]` (because `nums[0] + nums[1] = 3 + 3 = 6`)

#### Edge Cases:

- If the array contains only two numbers, the result is straightforward.
- The array will always have exactly one valid solution (as per the problem statement).
- There are no negative or 0-length arrays, so we do not need to handle such cases.

### 3. Approach and Thought Process

#### Approach:

The main task is to find two numbers in the array that sum to the target value. To do this efficiently, we can use a **hashmap (Map)** to store the numbers we have seen so far, along with their indices. The key idea is to check if the **complement** (difference between the target and the current number) exists in the hashmap. If it does, the two numbers form the solution.

#### Steps:

1. **Iterate through the array**: For each number `nums[i]`, compute its complement as `complement = target - nums[i]`.
2. **Check the Hashmap (Map)**: If the complement is already in the hashmap, that means the current number and the complement form the pair whose sum equals the target. Return their indices.
3. **Store the current number**: If the complement is not found, store the current number and its index in the hashmap for future lookup.

#### Time Complexity:

- **O(n)**: We traverse the array once and perform constant-time operations (lookup and insertion) using the hashmap.

#### Space Complexity:

- **O(n)**: In the worst case, we need to store `n` elements in the hashmap.

### 4. Pseudo Code

```javascript
function twoSum(nums, target) {
  // Step 1: Create a Map to store seen numbers and their indices
  const map = new Map();

  // Step 2: Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement
    const complement = target - nums[i];

    // Step 3: Check if the complement exists in the map
    if (map.has(complement)) {
      // If found, return the indices of the two numbers
      return [map.get(complement), i];
    }

    // Step 4: If not found, store the current number and its index in the map
    map.set(nums[i], i);
  }

  // If no solution is found (the problem guarantees there is always one), we return nothing
  return [];
}
```

### 5. Dry Run the Code

#### Example 1:

- **Input**: `nums = [2, 7, 11, 15]`, `target = 9`

1. Initialize an empty map: `map = {}`
2. Start iterating through `nums`:
   - **i = 0**, `nums[0] = 2`
     - Complement: `9 - 2 = 7`
     - `7` is not in the map, so add `2` to the map: `map = { 2: 0 }`
   - **i = 1**, `nums[1] = 7`
     - Complement: `9 - 7 = 2`
     - `2` is in the map, so return `[0, 1]` (because `nums[0] + nums[1] = 9`).

#### Example 2:

- **Input**: `nums = [3, 2, 4]`, `target = 6`

1. Initialize an empty map: `map = {}`
2. Start iterating through `nums`:
   - **i = 0**, `nums[0] = 3`
     - Complement: `6 - 3 = 3`
     - `3` is not in the map, so add `3` to the map: `map = { 3: 0 }`
   - **i = 1**, `nums[1] = 2`
     - Complement: `6 - 2 = 4`
     - `4` is not in the map, so add `2` to the map: `map = { 3: 0, 2: 1 }`
   - **i = 2**, `nums[2] = 4`
     - Complement: `6 - 4 = 2`
     - `2` is in the map, so return `[1, 2]`.

### 6. Optimizations and Alternative Methods

1. **Two-pointer approach** (only works if the array is sorted):

   - If the array is sorted, you can use a two-pointer approach by placing one pointer at the start and the other at the end, then adjusting them based on whether the sum of the two pointers is greater or less than the target. This approach takes **O(n log n)** due to sorting.

   **Example**:

   ```javascript
   function twoSumSorted(nums, target) {
     nums.sort((a, b) => a - b); // Sort the array (O(n log n))
     let left = 0;
     let right = nums.length - 1;

     while (left < right) {
       const sum = nums[left] + nums[right];
       if (sum === target) {
         return [left, right];
       } else if (sum < target) {
         left++;
       } else {
         right--;
       }
     }
     return [];
   }
   ```

   This approach is less efficient than the hashmap approach but can work if sorting is allowed or required.

2. **Brute force approach**:

   - Check every pair of numbers to see if their sum equals the target. This approach has **O(n²)** time complexity but is simple to implement.

   **Example**:

   ```javascript
   function twoSumBruteForce(nums, target) {
     for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] + nums[j] === target) {
           return [i, j];
         }
       }
     }
     return [];
   }
   ```

### Final Thoughts:

The **hashmap** approach is the most efficient and preferred solution for this problem because it allows us to find the pair of indices in **O(n)** time, which is optimal for this problem.
