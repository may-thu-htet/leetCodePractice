### 88. Merge Sorted Array

### 1. Repeat the question:

We are given two integer arrays `nums1` and `nums2`, both sorted in non-decreasing order. The array `nums1` has a length of `m + n`, where the first `m` elements are actual elements to be merged, and the last `n` elements are placeholders (zeros) to accommodate the merge. The array `nums2` has a length of `n`. The task is to merge `nums2` into `nums1` in a sorted manner, and the result should be stored inside `nums1`.

### 2. Suggest examples and edge cases:

#### Example:

```js
(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3);
(nums2 = [2, 5, 6]), (n = 3);
```

- Merged result should be: `nums1 = [1, 2, 2, 3, 5, 6]`

#### Edge cases:

1. **Empty `nums2`:**
   - `nums1 = [1, 2, 3], nums2 = [], m = 3, n = 0`
   - Output: `nums1 = [1, 2, 3]`
2. **Empty `nums1`:**
   - `nums1 = [0, 0, 0], nums2 = [2, 5, 6], m = 0, n = 3`
   - Output: `nums1 = [2, 5, 6]`
3. **`nums1` and `nums2` with identical values:**
   - `nums1 = [1, 1, 1, 0, 0, 0], nums2 = [1, 1, 1], m = 3, n = 3`
   - Output: `nums1 = [1, 1, 1, 1, 1, 1]`

### 3. Approach and thought process:

To efficiently merge both arrays into `nums1` without using extra space, we can leverage the fact that `nums1` has extra space at the end (filled with zeros) to fit all elements.

The idea is to **start merging from the end of both arrays**, placing the larger elements at the end of `nums1`. This way, we avoid overwriting any values that we haven't yet processed.

#### Plan:

- We use three pointers:
  - One starting from the last element of the actual `nums1` (`m-1`).
  - One starting from the last element of `nums2` (`n-1`).
  - One starting from the last index of the total length of `nums1` (`m + n - 1`).
- We compare the elements from the back of both arrays and place the larger one in the correct position in `nums1`.
- Continue this process until either array is exhausted.

#### Time complexity:

- We are iterating through both arrays once, so the time complexity is `O(m + n)`, where `m` is the size of `nums1` and `n` is the size of `nums2`.
- The space complexity is `O(1)` because we're not using extra space except for the pointers.

### 4. Pseudo code:

```pseudo
function merge(nums1, m, nums2, n):
    pointer1 = m - 1  # Pointer to track the last element in nums1
    pointer2 = n - 1  # Pointer to track the last element in nums2
    index = m + n - 1 # Pointer to place the correct element in nums1

    while pointer2 >= 0:
        if pointer1 >= 0 and nums1[pointer1] > nums2[pointer2]:
            nums1[index] = nums1[pointer1]  # Move nums1 element if it's larger
            pointer1 -= 1
        else:
            nums1[index] = nums2[pointer2]  # Move nums2 element otherwise
            pointer2 -= 1
        index -= 1
```

### 5. Code in JavaScript:

```javascript
function merge(nums1, m, nums2, n) {
  // Initialize three pointers
  let p1 = m - 1; // Pointer for last element in nums1's actual data
  let p2 = n - 1; // Pointer for last element in nums2
  let p = m + n - 1; // Pointer for the last position in nums1's total length

  // Loop until we have processed all elements of nums2
  while (p2 >= 0) {
    // If nums1's element is greater, place it at the end of nums1
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--; // Move nums1's pointer to the left
    } else {
      // If nums2's element is greater or nums1 is exhausted, place nums2's element
      nums1[p] = nums2[p2];
      p2--; // Move nums2's pointer to the left
    }
    p--; // Move the pointer for nums1's total length to the left
  }
}
```

### 6. Dry run:

Let’s dry run with the example:

```js
(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3);
(nums2 = [2, 5, 6]), (n = 3);
```

Initial pointers:

- `p1 = 2 (nums1[2] = 3)`
- `p2 = 2 (nums2[2] = 6)`
- `p = 5 (nums1[5] = 0)`

**Step 1:**

- Compare `nums1[2] (3)` with `nums2[2] (6)`, `6` is larger.
- Place `6` in `nums1[5]`.
- Update pointers: `p2 = 1`, `p = 4`.

**Step 2:**

- Compare `nums1[2] (3)` with `nums2[1] (5)`, `5` is larger.
- Place `5` in `nums1[4]`.
- Update pointers: `p2 = 0`, `p = 3`.

**Step 3:**

- Compare `nums1[2] (3)` with `nums2[0] (2)`, `3` is larger.
- Place `3` in `nums1[3]`.
- Update pointers: `p1 = 1`, `p = 2`.

**Step 4:**

- Compare `nums1[1] (2)` with `nums2[0] (2)`, `2` is equal.
- Place `2` in `nums1[2]`.
- Update pointers: `p2 = -1`, `p = 1`.

Now, the merge is complete with `nums1 = [1, 2, 2, 3, 5, 6]`.

### 7. Optimization and alternatives:

The current solution is already optimal in terms of time complexity `O(m + n)` and space complexity `O(1)` since we are merging in-place. There are no obvious further optimizations.

#### Alternative:

A simple but less optimal approach would be to concatenate `nums1` and `nums2`, sort them, and then copy the sorted array back to `nums1`. However, this approach would have a time complexity of `O((m + n) log (m + n))` due to the sorting step, and it would use additional space.
