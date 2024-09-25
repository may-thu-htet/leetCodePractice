### 189. Rotate Array

### 1. Repeat the Question:

We are given an integer array `nums` and a non-negative integer `k`. We need to rotate the array to the **right** by `k` steps. This means the last `k` elements of the array should be moved to the front, and the rest of the elements should be shifted accordingly.

### 2. Examples and Edge Cases:

Let's look at a few examples and edge cases to better understand the problem:

#### Example 1:

- Input: `nums = [1, 2, 3, 4, 5, 6, 7]`, `k = 3`
- Output: `[5, 6, 7, 1, 2, 3, 4]`
- Explanation: Rotate the array right by 3 steps. The last 3 elements `[5, 6, 7]` move to the front.

#### Example 2:

- Input: `nums = [-1, -100, 3, 99]`, `k = 2`
- Output: `[3, 99, -1, -100]`
- Explanation: Rotate the array right by 2 steps.

#### Edge Cases:

- **k is greater than the array length:**
  - Input: `nums = [1, 2, 3]`, `k = 4`
  - Output: `[3, 1, 2]` (because rotating by `k = 4` is equivalent to rotating by `k = 1` when `k` is larger than `nums.length`)
- **Empty array:**
  - Input: `nums = []`, `k = 3`
  - Output: `[]` (empty array remains unchanged)
- **k is zero:**
  - Input: `nums = [1, 2, 3]`, `k = 0`
  - Output: `[1, 2, 3]` (no rotation is needed)

### 3. Approach and Thought Process:

#### Key Observations:

- If `k` is larger than the array size `n`, rotating by `k` is the same as rotating by `k % n`. This is because rotating an array of size `n` by `n` steps returns the same array.
- The problem can be solved in several ways:
  - **Extra Array Method (O(n) Time, O(n) Space)**: We can create a new array, place the rotated elements, and copy them back.
  - **In-Place Reversal Method (O(n) Time, O(1) Space)**: Rotate the array in-place using three reverse operations.

#### **Approach: In-Place Reversal Method (Optimal)**

This method rotates the array in-place without using extra space, which is optimal in terms of space complexity.

**Steps:**

1. **Reverse the entire array.**
2. **Reverse the first `k` elements.**
3. **Reverse the remaining `n - k` elements.**

This method works because reversing the entire array sets up the order of the elements, and the subsequent reversals restore the original ordering of the rotated elements.

#### Example:

For `nums = [1, 2, 3, 4, 5, 6, 7]` and `k = 3`:

1. Reverse the entire array: `[7, 6, 5, 4, 3, 2, 1]`
2. Reverse the first `k = 3` elements: `[5, 6, 7, 4, 3, 2, 1]`
3. Reverse the remaining `n - k = 4` elements: `[5, 6, 7, 1, 2, 3, 4]`

### 4. Pseudo Code:

```text
1. Reverse the entire array.
2. Reverse the first k elements.
3. Reverse the last n - k elements.
```

### 5. Code in JavaScript:

```javascript
/**
 * @param {number[]} nums - The input array
 * @param {number} k - The number of steps to rotate
 * @return {void} - Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;

  // If k is greater than the length of the array, we can reduce it by modulo
  k = k % n;

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      // Swap elements at start and end
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining n - k elements
  reverse(k, n - 1);
};
```

### 6. Dry Run:

Let’s dry run the code with the example `nums = [1, 2, 3, 4, 5, 6, 7]` and `k = 3`:

1. **Initial State:**
   - `nums = [1, 2, 3, 4, 5, 6, 7]`
   - `k = 3`
2. **Step 1:** Reverse the entire array:

   - `nums = [7, 6, 5, 4, 3, 2, 1]`

3. **Step 2:** Reverse the first `k = 3` elements:

   - `nums = [5, 6, 7, 4, 3, 2, 1]`

4. **Step 3:** Reverse the remaining `n - k = 4` elements:
   - `nums = [5, 6, 7, 1, 2, 3, 4]`

Final output: `nums = [5, 6, 7, 1, 2, 3, 4]`, which is the expected result.

### 7. Optimization and Alternative Methods:

#### **Alternative 1: Using Extra Array (O(n) Time, O(n) Space)**

- Create a new array of the same size as `nums`.
- For each element in `nums`, calculate its new position and place it in the new array.
- Copy the elements from the new array back to `nums`.

```javascript
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  const rotated = new Array(n);

  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i];
  }

  // Copy back the rotated array to nums
  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
};
```

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### **Alternative 2: Cyclic Replacements (O(n) Time, O(1) Space)**

- In this approach, we move the elements directly in a cyclic manner without the need for reversing.

However, this is more complex to implement, as it requires managing when to stop the cyclic shifts and handling cases where the cycle length is not a multiple of `n`.

### Conclusion:

The **in-place reversal method** is optimal with O(n) time complexity and O(1) space complexity. It avoids the need for extra space by leveraging the power of reversing subarrays, making it the most efficient solution.
