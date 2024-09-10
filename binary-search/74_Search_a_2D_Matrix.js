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
