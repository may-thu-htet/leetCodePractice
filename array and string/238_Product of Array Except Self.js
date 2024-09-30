function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1); // Step 1: Initialize result array with 1s

  // Step 2: Compute prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix; // Store the product of elements before nums[i]
    prefix *= nums[i]; // Update prefix to include nums[i]
  }

  // Step 3: Compute suffix product and multiply with current result
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix; // Multiply by the product of elements after nums[i]
    suffix *= nums[i]; // Update suffix to include nums[i]
  }

  return result; // Step 4: Return the final result
}
