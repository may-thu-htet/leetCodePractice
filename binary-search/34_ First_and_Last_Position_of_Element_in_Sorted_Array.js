// More efficient two-binary search approach below///

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // Step 1: Initialize the left and right pointers
  let left = 0;
  let right = nums.length - 1;

  // Step 2: If array length is zero, return [-1, -1]
  if (nums.length === 0) {
    return [-1, -1];
  }

  // Step 3: Perform binary search to find the target
  while (left <= right) {
    // Step 4: Calculate the mid index
    let mid = left + Math.floor((right - left) / 2);

    // Step 5: If target is found at mid, expand to find the range
    if (nums[mid] === target) {
      // Initialize leftIndex and rightIndex starting from mid
      let leftIndex = mid;
      let rightIndex = mid;

      // Expand right to find the last occurrence of target
      while (
        rightIndex < nums.length - 1 &&
        nums[rightIndex] === nums[rightIndex + 1]
      ) {
        rightIndex++;
      }

      // Expand left to find the first occurrence of target
      while (leftIndex > 0 && nums[leftIndex] === nums[leftIndex - 1]) {
        leftIndex--;
      }

      // Return the final left and right indices of the target
      return [leftIndex, rightIndex];
    }
    // If mid value is greater than target, the target must be on the left side
    else if (nums[mid] > target) {
      right = mid - 1;
    }
    // If mid value is less than target, the target must be on the right side
    else {
      left = mid + 1;
    }
  }

  // Step 6: If target is not found, return [-1, -1]
  return [-1, -1];
};

// Two-binary search approach

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const binarySearch = (nums, target, isSearchingLeft) => {
    let left = 0;
    let right = nums.length - 1;
    let idx = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        idx = mid;
        if (isSearchingLeft) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }

    return idx;
  };

  const left = binarySearch(nums, target, true);
  const right = binarySearch(nums, target, false);

  return [left, right];
};
