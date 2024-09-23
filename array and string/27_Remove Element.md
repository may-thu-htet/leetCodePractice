### 27.Remove Element

### 1. Repeat the question:

We are given an integer array `nums` and an integer `val`. The goal is to remove all occurrences of `val` from the array `nums` in-place and return the number of elements that are **not** equal to `val`. The order of the elements may change, but the first `k` elements of `nums` should contain the remaining elements that are not equal to `val`. The rest of the elements are irrelevant, and the function should return `k` (the number of elements that are not equal to `val`).

### 2. Suggest examples and edge cases:

#### Example:

```js
(nums = [3, 2, 2, 3]), (val = 3);
Output: (k = 2), (nums = [2, 2, _, _]); // (The "_" means the values after k are irrelevant.)
```

#### Another example:

```js
(nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2);
Output: (k = 5), (nums = [0, 1, 3, 0, 4, _, _, _]);
```

#### Edge cases:

1. **Array without `val`:**
   - `nums = [1, 2, 3], val = 4`
   - Output: `k = 3, nums = [1, 2, 3]` (Nothing needs to be removed.)
2. **All elements are `val`:**
   - `nums = [2, 2, 2, 2], val = 2`
   - Output: `k = 0, nums = [_, _, _, _]` (Everything is removed.)
3. **Empty array:**
   - `nums = [], val = 1`
   - Output: `k = 0, nums = []` (Array is already empty.)

### 3. Approach and thought process:

#### Plan:

We will use a **two-pointer approach** to modify the array in-place:

- One pointer (`i`) will iterate through the entire array to check each element.
- Another pointer (`j`) will track the position where the next element that is not equal to `val` should be placed.

#### Steps:

1. Start with both pointers at the beginning of the array.
2. If the current element `nums[i]` is not equal to `val`, place it at the position indicated by `j` and increment `j`.
3. If `nums[i]` is equal to `val`, just move to the next element (`i++`), without doing anything.
4. Once the loop completes, the first `j` elements of `nums` will contain all elements that are not equal to `val`, and `j` will be the value of `k`.

#### Time complexity:

- The time complexity is `O(n)` where `n` is the number of elements in the array `nums`, as we are traversing the array once.
- The space complexity is `O(1)` since we are only using constant extra space for the two pointers.

### 4. Pseudo code:

```pseudo
function removeElement(nums, val):
    j = 0  // Initialize pointer to track the position of non-val elements

    for i = 0 to length(nums) - 1:
        if nums[i] is not equal to val:
            nums[j] = nums[i]  // Move non-val element to the position j
            j += 1  // Increment j to track the next position

    return j  // j will be the count of elements not equal to val
```

### 5. Code in JavaScript:

```javascript
function removeElement(nums, val) {
  let j = 0; // Pointer to track where to place non-val elements

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to val, we keep it
    if (nums[i] !== val) {
      nums[j] = nums[i]; // Move the non-val element to index j
      j++; // Increment j for the next non-val element
    }
  }

  // After the loop, j will be the number of elements not equal to val
  return j;
}
```

### 6. Dry run the code:

#### Example:

```js
(nums = [3, 2, 2, 3]), (val = 3);
```

**Step-by-step execution:**

- `i = 0, nums[0] = 3`, which equals `val`, so we skip it.
- `i = 1, nums[1] = 2`, which is not `val`, so we place `2` at `nums[0]` (j = 0) and increment `j` to 1.
- `i = 2, nums[2] = 2`, which is not `val`, so we place `2` at `nums[1]` (j = 1) and increment `j` to 2.
- `i = 3, nums[3] = 3`, which equals `val`, so we skip it.

At the end of the loop, `nums` is `[2, 2, _, _]` and `j = 2`.

Output: `k = 2`, and the array `nums` now contains `[2, 2]` in the first `k` elements.

#### Another dry run:

```js
(nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2);
```

- `i = 0, nums[0] = 0` (not `val`), move to `nums[0]`, `j++ = 1`.
- `i = 1, nums[1] = 1` (not `val`), move to `nums[1]`, `j++ = 2`.
- `i = 2, nums[2] = 2` (is `val`), skip.
- `i = 3, nums[3] = 2` (is `val`), skip.
- `i = 4, nums[4] = 3` (not `val`), move to `nums[2]`, `j++ = 3`.
- `i = 5, nums[5] = 0` (not `val`), move to `nums[3]`, `j++ = 4`.
- `i = 6, nums[6] = 4` (not `val`), move to `nums[4]`, `j++ = 5`.
- `i = 7, nums[7] = 2` (is `val`), skip.

Output: `k = 5`, and the array is now `[0, 1, 3, 0, 4, _, _, _]`.

### 7. Optimization and alternative methods:

This solution is already optimal with a time complexity of `O(n)` and a space complexity of `O(1)`.

#### Alternative approach:

If we wanted to optimize for fewer writes (though the time complexity is the same), we could swap `val` elements with the last element in the array to "remove" them more efficiently. However, this would change the order of the elements. The current approach maintains relative order, but if order doesn't matter, swapping could work as well. Here's how it would look:

#### Alternative solution using swap:

```javascript
function removeElement(nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1]; // Replace current element with the last element
      n--; // Reduce the size of the valid portion
    } else {
      i++; // Only move the pointer if we don't swap
    }
  }

  return n;
}
```

In this approach, we reduce unnecessary writes and potentially shrink the array faster. The result may have the elements in a different order but still meets the requirement.
