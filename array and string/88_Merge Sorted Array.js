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
