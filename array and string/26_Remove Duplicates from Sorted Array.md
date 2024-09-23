### 26. Remove Duplicates from Sorted Array

### 1. Repeat the question:

You are given a sorted integer array `nums`. Your task is to **remove duplicates** from this sorted array **in-place** so that each unique element appears only once. The relative order of the elements should be kept the same, and we are asked to return the number of unique elements, `k`. The first `k` elements of the array should contain the unique elements. The rest of the array does not matter.

### 2. Suggest examples and edge cases:

#### Example 1:

```js
nums = [1, 1, 2];
Output: (k = 2), (nums = [1, 2, _]);
```

Explanation: After removing duplicates, we are left with `[1, 2]` and `k = 2`.

#### Example 2:

```js
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
Output: (k = 5), (nums = [0, 1, 2, 3, 4, _, _, _, _, _]);
```

Explanation: After removing duplicates, we are left with `[0, 1, 2, 3, 4]` and `k = 5`.

#### Edge cases:

1. **No duplicates:**
   - `nums = [1, 2, 3]`
   - Output: `k = 3, nums = [1, 2, 3]`
2. **All elements are duplicates:**
   - `nums = [1, 1, 1]`
   - Output: `k = 1, nums = [1, _, _]`
3. **Empty array:**
   - `nums = []`
   - Output: `k = 0, nums = []`
4. **Single element array:**
   - `nums = [5]`
   - Output: `k = 1, nums = [5]`

### 3. Approach and thought process:

We are working with an **in-place** solution, meaning we should not use any additional arrays. Since the array is already sorted, we can take advantage of this by using a **two-pointer technique** to remove duplicates.

#### Thought process:

1. We initialize a pointer `index` to track the position of the next unique element in the array.
2. We start a loop from the second element (`i = 1`), as the first element is always unique.
3. For each element, we compare it with the previous element (`nums[i]` vs. `nums[i-1]`):
   - If they are different, it means we have found a new unique element.
   - We place this unique element at position `index`, and increment `index`.
4. At the end of the loop, the `index` will hold the count of unique elements, which is our result.

#### Time complexity:

- **O(n)** where `n` is the length of the array, as we traverse the array once.

#### Space complexity:

- **O(1)** since we are modifying the array in-place without using any additional space.

#### Alternative approach:

- One alternative approach is to use a set to keep track of unique elements, but this would increase space complexity to **O(n)**. The in-place solution is optimal here.

### Pseudo code:

```pseudo
function removeDuplicates(nums):
    if length(nums) == 0:
        return 0

    index = 1

    for i from 1 to length(nums) - 1:
        if nums[i] != nums[i - 1]:  // Found a new unique element
            nums[index] = nums[i]  // Place it at position index
            index += 1

    return index  // The number of unique elements
```

### 4. Code in JavaScript with detailed comments:

```javascript
/**
 * @param {number[]} nums - The input array of integers sorted in non-decreasing order.
 * @return {number} - The number of unique elements in the array.
 */
var removeDuplicates = function (nums) {
  // If the array is empty, return 0
  if (nums.length === 0) return 0;

  let index = 1; // Pointer to track where to place the next unique element

  // Start looping from the second element, as the first element is always unique
  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the previous one
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i]; // Place the unique element at the index position
      index++; // Move the index to the next available position
    }
  }

  // Return the number of unique elements, which is the value of index
  return index;
};
```

### 5. Dry run the code step by step:

#### Example 1:

```js
nums = [1, 1, 2];
```

- Initial: `index = 1`
- **Step 1:**
  - `i = 1`: `nums[1] = 1`, `nums[1]` is equal to `nums[0]`, so skip.
- **Step 2:**
  - `i = 2`: `nums[2] = 2`, `nums[2]` is not equal to `nums[1]`.
  - Place `nums[2]` at `nums[1]` → `nums = [1, 2, _]`.
  - Increment `index = 2`.
- Final result: `nums = [1, 2, _]` and `k = 2`.

#### Example 2:

```js
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
```

- Initial: `index = 1`
- **Step 1:** `i = 1`: `nums[1] = 0`, `nums[1]` is equal to `nums[0]`, so skip.
- **Step 2:** `i = 2`: `nums[2] = 1`, `nums[2]` is not equal to `nums[1]`.
  - Place `nums[2]` at `nums[1]` → `nums = [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]`.
  - Increment `index = 2`.
- **Step 3:** Skip `nums[3]` and `nums[4]` (equal to previous).
- **Step 4:** `i = 5`: `nums[5] = 2`, `nums[5]` is not equal to `nums[2]`.
  - Place `nums[5]` at `nums[2]` → `nums = [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]`.
  - Increment `index = 3`.
- **Step 5:** Skip `nums[6]` (equal to previous).
- **Step 6:** `i = 7`: `nums[7] = 3`, `nums[7]` is not equal to `nums[3]`.
  - Place `nums[7]` at `nums[3]` → `nums = [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]`.
  - Increment `index = 4`.
- **Step 7:** Skip `nums[8]` (equal to previous).
- **Step 8:** `i = 9`: `nums[9] = 4`, `nums[9]` is not equal to `nums[4]`.
  - Place `nums[9]` at `nums[4]` → `nums = [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]`.
  - Increment `index = 5`.
- Final result: `nums = [0, 1, 2, 3, 4, _, _, _, _, _]` and `k = 5`.

### 6. Optimize and suggest alternative methods:

#### Optimization:

- This solution is already optimal in terms of **time complexity** (`O(n)`) and **space complexity** (`O(1)`).
- The two-pointer technique is an efficient way to solve this problem in-place without any additional data structures.

#### Alternative approaches:

1. **Set approach**:

   - You could use a set to collect unique elements and then overwrite the original array with these elements. However, this would require extra space, making the space complexity **O(n)**, which is not ideal for an in-place solution.

   ```javascript
   var removeDuplicates = function (nums) {
     let uniqueSet = new Set(nums); // Collect unique elements
     let index = 0;
     for (let val of uniqueSet) {
       nums[index++] = val; // Overwrite the array with unique values
     }
     return index;
   };
   ```

2. **Brute force**:
   - A brute force approach could involve scanning the array multiple times to remove duplicates, but this would result in a time complexity of **O(n^2)**, which is inefficient compared to the current **O(n)** solution
