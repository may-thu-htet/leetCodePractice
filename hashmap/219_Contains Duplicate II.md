### 219. Contains Duplicate II

### 1. Repeat the Question

The problem is:

- Given an integer array `nums` and an integer `k`, determine if there are two distinct indices `i` and `j` in the array such that:
  - The elements at these indices are the same (`nums[i] == nums[j]`).
  - The difference in indices `abs(i - j)` is less than or equal to `k`.

If such a pair exists, return `true`; otherwise, return `false`.

### 2. Examples and Edge Cases

1. **Basic Examples:**

   - **Input:** `nums = [1, 2, 3, 1]`, `k = 3`
     - **Output:** `true` (since `nums[0] == nums[3]` and `abs(0 - 3) = 3` which is `<= k`)
   - **Input:** `nums = [1, 0, 1, 1]`, `k = 1`
     - **Output:** `true` (since `nums[2] == nums[3]` and `abs(2 - 3) = 1` which is `<= k`)

2. **Edge Cases:**
   - **No Duplicate Elements:**
     - **Input:** `nums = [1, 2, 3, 4]`, `k = 1`
     - **Output:** `false` (no duplicates present)
   - **All Duplicates but Larger than `k`:**
     - **Input:** `nums = [1, 1, 1, 1]`, `k = 1`
     - **Output:** `true` (pairs are all within `k`)
   - **Large `k` Value with Small Array:**
     - **Input:** `nums = [1, 2, 3, 1]`, `k = 10`
     - **Output:** `true` (since `abs(0 - 3) = 3` which is within `k`)
   - **Single Element Array:**
     - **Input:** `nums = [1]`, `k = 1`
     - **Output:** `false` (only one element, so no pairs)

### 3. Approach, Thought Process, and Complexity

**Approach:**

1. **Using a Map (HashMap) for Index Tracking:**
   - We use a `Map` to keep track of each element and its most recent index in `nums`.
   - Traverse the `nums` array, and for each element:
     - Check if it’s already in the `Map` (indicating it has appeared before).
     - If found, check if the difference between the current index and the stored index is `<= k`.
     - If the condition is met, return `true` immediately.
   - If no pair is found by the end, return `false`.

**Complexity:**

- **Time Complexity:** \(O(n)\) because we iterate through the `nums` array once.
- **Space Complexity:** \(O(n)\) for storing the indices in the `Map`.

**Alternative Approaches:**

1. **Brute Force (Inefficient):**
   - Use two nested loops to check all pairs `(i, j)`.
   - **Time Complexity:** \(O(n^2)\), which is inefficient for large arrays.
2. **Sliding Window (Set-based Approach):**
   - Use a set to keep track of the last `k` elements, updating with each iteration.
   - **Complexity:** \(O(n)\) time and \(O(k)\) space.

**Pseudo Code:**

```pseudo
function containsNearbyDuplicate(nums, k):
    create empty Map called visited
    for each index i from 0 to nums.length - 1:
        if nums[i] exists in visited:
            if (i - visited.get(nums[i])) <= k:
                return true
        update visited with (nums[i], i)
    return false
```

### 4. JavaScript Code with Detailed Comments

```javascript
/**
 * @param {number[]} nums - Array of integers
 * @param {number} k - Maximum allowable index difference
 * @return {boolean} - Returns true if a duplicate within range k exists, otherwise false
 */
var containsNearbyDuplicate = function (nums, k) {
  // Initialize a Map to store the index of each number
  const visited = new Map();

  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element has been seen before and if it meets the distance condition
    if (visited.has(nums[i]) && i - visited.get(nums[i]) <= k) {
      return true; // Return true if a valid pair is found
    }
    // Update the Map with the latest index of the current element
    visited.set(nums[i], i);
  }

  // If no valid pair found by the end, return false
  return false;
};
```

### 5. Dry Run of the Code Step by Step

Let's dry-run the code with `nums = [1, 2, 3, 1]` and `k = 3`.

1. **Initialize:** `visited = new Map()`.
2. **i = 0:** `nums[0] = 1`
   - `visited` doesn’t contain `1`, so add `1: 0` to `visited`.
   - `visited = {1: 0}`.
3. **i = 1:** `nums[1] = 2`
   - `visited` doesn’t contain `2`, so add `2: 1` to `visited`.
   - `visited = {1: 0, 2: 1}`.
4. **i = 2:** `nums[2] = 3`
   - `visited` doesn’t contain `3`, so add `3: 2` to `visited`.
   - `visited = {1: 0, 2: 1, 3: 2}`.
5. **i = 3:** `nums[3] = 1`
   - `visited` contains `1` with index `0`.
   - Check `abs(3 - 0) = 3`, which is `<= k`.
   - Return `true`.

### 6. Optimizations and Alternative Methods

1. **Sliding Window with Set:**

   - Use a `Set` to keep only the last `k` elements of the array.
   - For each element in `nums`:
     - Check if it exists in the `Set` (indicating a duplicate within the last `k` elements).
     - If yes, return `true`.
     - If no, add the element to the `Set`.
     - Remove the oldest element from the `Set` if its size exceeds `k`.
   - **Code Implementation:**

     ```javascript
     /**
      * @param {number[]} nums
      * @param {number} k
      * @return {boolean}
      */
     var containsNearbyDuplicate = function (nums, k) {
       const windowSet = new Set();

       for (let i = 0; i < nums.length; i++) {
         // If current element is already in the set, we found a duplicate within range k
         if (windowSet.has(nums[i])) {
           return true;
         }

         // Add the current element to the set
         windowSet.add(nums[i]);

         // Maintain only the last k elements in the set
         if (windowSet.size > k) {
           windowSet.delete(nums[i - k]);
         }
       }

       // No duplicate within range k found
       return false;
     };
     ```

This sliding window approach is more memory-efficient than using a hashmap if `k` is much smaller than the length of `nums`. Both the hashmap and set approaches maintain \(O(n)\) time complexity and are optimal for this problem.
