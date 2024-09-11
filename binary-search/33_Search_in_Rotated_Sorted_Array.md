### 33. Search in Rotated Sorted Array

Medium

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104

### Problem Repetition:

We are given a sorted integer array `nums`, which has been possibly rotated at an unknown pivot. We need to find the index of a given `target` in this array. If the target is not present, we should return `-1`. The array must be searched with a time complexity of `O(log n)`.

### Examples and Edge Cases:

- **Example 1**:
  - Input: `nums = [4,5,6,7,0,1,2]`, `target = 0`
  - Output: `4`
- **Example 2**:
  - Input: `nums = [4,5,6,7,0,1,2]`, `target = 3`
  - Output: `-1`
- **Example 3**:
  - Input: `nums = [1]`, `target = 0`
  - Output: `-1`

#### Edge Cases:

- The array has only one element: `nums = [3], target = 3`
- The array is not rotated: `nums = [1, 2, 3, 4, 5], target = 3`
- The array is fully rotated (i.e., no actual rotation): `nums = [1,2,3,4,5], target = 1`
- The target is not present in the array: `nums = [1,2,3], target = 10`

### Approach and Thought Process:

Since the array is sorted but rotated, we need to consider both parts: the sorted part and the rotated part. To achieve `O(log n)` time complexity, we will use a modified binary search, as it inherently runs in `O(log n)` time.

#### Detailed Plan:

1. **Binary Search**:
   - We will start by initializing two pointers, `left` at `0` and `right` at `nums.length - 1`.
   - In each iteration, we will find the `mid` index.
   - We need to determine whether the left half or the right half of the array is sorted.
     - If the left half is sorted:
       - Check if the `target` lies within the range of the left half.
       - If so, move the `right` pointer to `mid - 1` to search the left half.
       - Otherwise, move the `left` pointer to `mid + 1` to search the right half.
     - If the right half is sorted:
       - Check if the `target` lies within the range of the right half.
       - If so, move the `left` pointer to `mid + 1` to search the right half.
       - Otherwise, move the `right` pointer to `mid - 1` to search the left half.
2. **Return**: If the `target` is found, return the index. If the loop completes without finding the `target`, return `-1`.

### Complexity:

- **Time Complexity**: `O(log n)` due to binary search.
- **Space Complexity**: `O(1)` because we are only using a few extra variables.

### Pseudo Code:

```plaintext
function search(nums, target):
    left = 0
    right = nums.length - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid

        if nums[left] <= nums[mid]:   # Left side is sorted
            if nums[left] <= target < nums[mid]:  # Target is in the sorted left side
                right = mid - 1
            else:
                left = mid + 1
        else:                         # Right side is sorted
            if nums[mid] < target <= nums[right]:  # Target is in the sorted right side
                left = mid + 1
            else:
                right = mid - 1

    return -1  # Target not found
```

### JavaScript Code:

```javascript
/**
 * Searches for target in a rotated sorted array and returns its index.
 * If target is not found, returns -1.
 *
 * @param {number[]} nums - Rotated sorted array
 * @param {number} target - Target number to find
 * @returns {number} - Index of target, or -1 if not found
 */
function search(nums, target) {
  // Initialize pointers
  let left = 0;
  let right = nums.length - 1;

  // Perform binary search
  while (left <= right) {
    // Calculate mid-point to avoid overflow
    let mid = Math.floor(left + (right - left) / 2);

    // If target is found at mid, return its index
    if (nums[mid] === target) {
      return mid;
    }

    // Determine which half is sorted
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        // Target is in the sorted left side
        right = mid - 1;
      } else {
        // Target is not in the sorted left side, so search right side
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        // Target is in the sorted right side
        left = mid + 1;
      } else {
        // Target is not in the sorted right side, so search left side
        right = mid - 1;
      }
    }
  }

  // If the loop ends, target was not found
  return -1;
}
```

### Dry Run:

Let’s dry run the code for an example:

**Input**: `nums = [4,5,6,7,0,1,2]`, `target = 0`

- **Step 1**: `left = 0`, `right = 6`, `mid = (0 + 6) / 2 = 3`

  - `nums[mid] = 7`
  - Left side (`nums[0] = 4`) is sorted.
  - `target = 0` is not in the range `[4, 7]`, so search the right side.
  - Update: `left = 4`

- **Step 2**: `left = 4`, `right = 6`, `mid = (4 + 6) / 2 = 5`

  - `nums[mid] = 1`
  - Right side (`nums[5] = 1` to `nums[6] = 2`) is sorted.
  - `target = 0` is in the range `[0, 1]`, so search the left side.
  - Update: `right = 4`

- **Step 3**: `left = 4`, `right = 4`, `mid = (4 + 4) / 2 = 4`
  - `nums[mid] = 0`
  - Target found at index `4`.

### Optimization & Alternative Methods:

- **Optimization**: The current approach already achieves optimal `O(log n)` time complexity.
- **Alternative**: One alternative is to find the pivot (point of rotation) first and then perform two binary searches on each sorted sub-array, but this would increase complexity to `O(log n + log n) = O(log n)`. Hence, the current approach is more straightforward and equally efficient.
