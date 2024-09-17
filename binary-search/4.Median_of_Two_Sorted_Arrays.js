function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array to minimize binary search operations
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1); // Swap for optimization
  }

  let m = nums1.length;
  let n = nums2.length;
  let low = 0,
    high = m;

  while (low <= high) {
    // Partitioning nums1 and nums2
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = Math.floor((m + n + 1) / 2) - partition1;

    // Edge cases when partition is at 0 or at the end of the array
    let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let minRight1 = partition1 === m ? Infinity : nums1[partition1];

    let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let minRight2 = partition2 === n ? Infinity : nums2[partition2];

    // Check if we have found the correct partition
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // If total number of elements is odd, return max of left side
      if ((m + n) % 2 === 1) {
        return Math.max(maxLeft1, maxLeft2);
      } else {
        // Otherwise, return average of max of left and min of right
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      }
    }
    // Adjust search space if partition is incorrect
    else if (maxLeft1 > minRight2) {
      high = partition1 - 1; // Move left in nums1
    } else {
      low = partition1 + 1; // Move right in nums1
    }
  }

  // If we exit the loop, there's no valid median (shouldn't happen in valid input)
  throw new Error("Input arrays are not valid for finding median");
}
