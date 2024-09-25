### 80. Remove Duplicates from Sorted Array II

### 1. Repeat the question:

We are given a sorted integer array `nums` and we are tasked with removing duplicates such that each unique element can appear at most twice in the modified array. The relative order of the elements must be maintained, and we need to modify the array **in-place**, meaning we can't use extra space for another array. After removing duplicates, the first `k` elements of the array should contain the valid result, and the value of `k` should be returned.

### 2. Examples and Edge Cases:

Let's consider some examples and edge cases:

#### Example 1:

- Input: `nums = [1, 1, 1, 2, 2, 3]`
- Output: `k = 5`, `nums = [1, 1, 2, 2, 3, ...]`
- Explanation: `1` appears more than twice, so we only keep two instances of `1`. `2` appears twice and remains unchanged, and `3` appears once.

#### Example 2:

- Input: `nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]`
- Output: `k = 7`, `nums = [0, 0, 1, 1, 2, 3, 3, ...]`
- Explanation: `1` appears more than twice, so we only keep two instances. The others remain unchanged.

#### Edge Cases:

- Input: `nums = []`
  - Output: `k = 0` (empty array)
- Input: `nums = [1]`
  - Output: `k = 1` (only one element)
- Input: `nums = [2, 2, 2]`
  - Output: `k = 2` (three duplicates, but only two should remain)

### 3. Approach and Thought Process:

To solve this problem, we need to keep track of how many times we've seen each unique element and ensure that no element appears more than twice. We can use a **two-pointer technique** to do this efficiently:

1. We will maintain a pointer `j` which tracks the position to place the next valid element (an element that appears at most twice).
2. We will iterate over the array with another pointer `i`, and for each element `nums[i]`, we check whether it can be placed into the result array.
3. If the element at `nums[i]` is different from the one before it (i.e., it's a new element or we've only seen it once), we copy it to `nums[j]` and increment `j`.
4. By using this approach, we ensure that each unique element appears at most twice in the final result.

### Complexity:

- Time Complexity: **O(n)** because we go through the array once.
- Space Complexity: **O(1)** because we are not using any extra space apart from the input array.

### Pseudo Code:

```text
1. Initialize j = 0 to track the position of the next valid element.
2. Iterate over nums with i from 0 to n:
   a. If i < 2 or nums[i] > nums[j-2], then:
      - nums[j] = nums[i]
      - Increment j
3. Return j (the number of valid elements).
```

### 4. Code in JavaScript:

```javascript
/**
 * @param {number[]} nums - The input array sorted in non-decreasing order
 * @return {number} - The number of valid elements (appearing at most twice)
 */
var removeDuplicates = function (nums) {
  // Initialize j to track the index for placing valid elements
  let j = 0;

  // Iterate through the entire array nums
  for (let i = 0; i < nums.length; i++) {
    // If we are at the first two elements OR
    // the current element is greater than the element two positions before j,
    // it means we can place this element
    if (i < 2 || nums[i] > nums[j - 2]) {
      nums[j] = nums[i]; // Place the valid element at nums[j]
      j++; // Move the pointer for the next valid element
    }
  }

  // Return the number of valid elements, which is now j
  return j;
};
```

### 5. Dry Run:

Let’s dry run the code with an example:

Input: `nums = [1, 1, 1, 2, 2, 3]`

- Initially, `j = 0`.
- **i = 0**: We can place `nums[0] = 1`, so `nums[j] = 1`, and `j` becomes 1.
- **i = 1**: We can place `nums[1] = 1` again (since it's the second occurrence), so `nums[j] = 1`, and `j` becomes 2.
- **i = 2**: `nums[2] = 1`, but we already have two `1`s, so we skip this.
- **i = 3**: We can place `nums[3] = 2`, so `nums[j] = 2`, and `j` becomes 3.
- **i = 4**: We can place `nums[4] = 2` again (since it's the second occurrence), so `nums[j] = 2`, and `j` becomes 4.
- **i = 5**: We can place `nums[5] = 3`, so `nums[j] = 3`, and `j` becomes 5.

Final result:

- The first 5 elements of the array are `[1, 1, 2, 2, 3]` and `k = 5`.

### 6. Optimization and Alternative Methods:

The current approach is already optimal with **O(n)** time complexity and **O(1)** space complexity, but an alternative method could involve:

- **Count Frequency**: Iterate through the array to count the occurrences of each element. This would require extra space, so it’s not ideal for this problem.

Another minor optimization could involve handling special cases (like empty arrays or arrays with less than 3 elements) at the start, which may save time in those cases. However, the current method handles those edge cases naturally and efficiently.
