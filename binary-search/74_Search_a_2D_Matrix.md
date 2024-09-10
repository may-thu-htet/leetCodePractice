### 74. Search a 2D Matrix

Medium
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m \* n)) time complexity.

### Step 1: Repeat the question

You are given an m x n integer matrix with the following two properties:

1. Each row is sorted in non-decreasing order.
2. The first integer of each row is greater than the last integer of the previous row.

Given an integer target, we need to determine whether the target exists in the matrix. The goal is to achieve an O(log(m \* n)) time complexity.

### Step 2: Examples and edge cases

**Example 1:**

```
Input: matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
], target = 3
Output: true
```

**Example 2:**

```
Input: matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
], target = 13
Output: false
```

**Edge Cases:**

1. Empty matrix (matrix with no rows or columns).
2. Single row or single column matrices.
3. Target being smaller than the smallest element in the matrix or larger than the largest element.
4. Target being the smallest or largest number in the matrix.

### Step 3: Approach and Thought Process

#### Thought Process:

- Since the matrix is sorted both row-wise and column-wise (with the first element of each row greater than the last element of the previous row), we can treat the matrix as a sorted 1D array for efficient searching.
- The key idea is to perform **binary search** by mapping the 2D indices of the matrix to a 1D index.

#### Approach:

1. Convert the 2D matrix into a virtual 1D array. The element at position `(i, j)` in the 2D matrix corresponds to index `i * n + j` in a 1D array, where `n` is the number of columns.
2. Perform a binary search on this 1D representation. The midpoint index in 1D can be converted back to 2D by using:
   - Row: `mid // n`
   - Column: `mid % n`
3. Compare the middle element with the target and adjust the search bounds accordingly.

#### Time Complexity:

- Binary search takes O(log(m _ n)) where `m` is the number of rows and `n` is the number of columns. This is because we are effectively performing binary search on a 1D array of length `m _ n`.

#### Pseudo Code:

```
// Let rows = m and columns = n
initialize left = 0, right = m * n - 1

while left <= right:
    mid = (left + right) // 2
    // Convert mid index back to 2D
    row = mid // n
    col = mid % n
    if matrix[row][col] == target:
        return true
    else if matrix[row][col] < target:
        left = mid + 1
    else:
        right = mid - 1

return false
```

### Step 4: Code in JavaScript with Detailed Comments

```javascript
function searchMatrix(matrix, target) {
  // Edge case: If matrix is empty or has no columns
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  const rows = matrix.length; // Number of rows
  const cols = matrix[0].length; // Number of columns

  // Start the binary search on a "virtual" 1D array
  let left = 0;
  let right = rows * cols - 1; // The last index in the virtual 1D array

  while (left <= right) {
    // Find the midpoint
    let mid = Math.floor((left + right) / 2);

    // Convert the 1D mid index back into 2D matrix coordinates
    let row = Math.floor(mid / cols); // Row index
    let col = mid % cols; // Column index

    // Compare the target with the element at (row, col)
    if (matrix[row][col] === target) {
      return true; // Target found
    } else if (matrix[row][col] < target) {
      // Move to the right half
      left = mid + 1;
    } else {
      // Move to the left half
      right = mid - 1;
    }
  }

  return false; // Target not found
}
```

### Step 5: Dry Run the Code

**Input:**

```
matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
], target = 16
```

- Initialize: `left = 0`, `right = 11` (rows \* cols - 1).
- Step 1: `mid = 5`, which maps to `(row=1, col=1)`. `matrix[1][1] = 11`. Since 11 < 16, update `left = 6`.
- Step 2: `mid = 8`, which maps to `(row=2, col=0)`. `matrix[2][0] = 23`. Since 23 > 16, update `right = 7`.
- Step 3: `mid = 6`, which maps to `(row=1, col=2)`. `matrix[1][2] = 16`. Found the target!

Output: `true`

### Step 6: Optimizations and Alternative Methods

The current solution is optimal with O(log(m \* n)) time complexity and no additional space usage, which is already the best achievable for this problem. There are no significant optimizations to make as binary search on a sorted 1D array (or equivalently a 2D matrix) is the most efficient approach.

Alternative approaches like scanning the entire matrix or doing a row-by-row binary search would result in higher time complexities (O(m + n) or O(m _ log(n)), which are worse than O(log(m _ n)). Thus, no further optimizations are necessary.
