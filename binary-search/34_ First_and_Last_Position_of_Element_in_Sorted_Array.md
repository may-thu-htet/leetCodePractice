34. Find First and Last Position of Element in Sorted Array
    Medium
    Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

- two-binary search approach is at the end

---

### **1. Repeat the question:**

We are tasked with finding the starting and ending position of a given target value in a sorted array `nums`. If the target is not found, return `[-1, -1]`. The solution should have a time complexity of O(log n).

---

### **2. Suggest examples and edge cases:**

**Examples:**

- **Example 1:**

  - Input: `nums = [5,7,7,8,8,10]`, `target = 8`
  - Output: `[3, 4]` (8 appears at indices 3 and 4)

- **Example 2:**

  - Input: `nums = [5,7,7,8,8,10]`, `target = 6`
  - Output: `[-1, -1]` (6 is not present)

- **Example 3:**
  - Input: `nums = []`, `target = 0`
  - Output: `[-1, -1]` (empty array)

**Edge Cases:**

- Empty array: `nums = []`, target = any number, should return `[-1, -1]`.
- Single element array: `nums = [8]`, target = 8, should return `[0, 0]`, or if target = 5, should return `[-1, -1]`.
- All elements same: `nums = [8, 8, 8]`, target = 8 → `[0, 2]`.
- Target occurs only once: `nums = [1, 2, 3, 4, 5]`, target = 3 → `[2, 2]`.

---

### **3. Approach and thought process:**

#### **Objective:**

We need to perform binary search to find the target efficiently, and once the target is found, we need to expand left and right to identify the first and last occurrences.

#### **Key Steps:**

1. **Binary Search to Find Target:**

   - Set `left` and `right` pointers for binary search.
   - Perform binary search to find the target's position. Once found, keep looking on both sides to determine the first and last occurrences.

2. **Expand Left and Right:**

   - Once the target is found at `mid`, expand to the left and right to find the full range of the target values.
   - Continue adjusting the left index (move left while the previous element is the target) and the right index (move right while the next element is the target).

3. **Time Complexity:**
   - Binary search takes O(log n), and expanding left and right could take O(n) in the worst case (if all elements are the target). In the average case, the expansion will be limited to just the cluster of matching values.

#### **Pseudocode:**

```plaintext
1. Initialize left = 0 and right = nums.length - 1.
2. If nums is empty, return [-1, -1].
3. Perform binary search:
    a. Find mid = (left + right) / 2.
    b. If nums[mid] == target, expand left and right to find the full range of the target.
    c. If nums[mid] > target, move the right pointer.
    d. If nums[mid] < target, move the left pointer.
4. Return the left and right indices of the target.
5. If the target is not found, return [-1, -1].
```

---

### **4. Code in JS with detailed comments:**

```javascript
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
```

---

### **5. Dry run the code step by step:**

Let's dry run `nums = [5, 7, 7, 8, 8, 10]`, `target = 8`:

1. **Initial Setup:**

   - `left = 0`, `right = 5` (array length is 6)
   - First check: `mid = (0 + 5) // 2 = 2` → `nums[2] = 7`
   - Since `nums[2] < target`, move `left = mid + 1 = 3`.

2. **Second Check:**
   - Now `left = 3`, `right = 5`, `mid = (3 + 5) // 2 = 4` → `nums[4] = 8`
   - Found `target = 8` at index `4`.
3. **Expand Right:**

   - Start `rightIndex = 4`, check if `nums[5] = 10` is also `target` → not equal, so stop expanding.
   - `rightIndex` remains 4.

4. **Expand Left:**

   - Start `leftIndex = 4`, check if `nums[3] = 8` is also `target` → it's the same, so set `leftIndex = 3`.
   - Check if `nums[2] = 7` is also `target` → not equal, so stop expanding.
   - `leftIndex` remains 3.

5. **Return:** `[leftIndex, rightIndex] = [3, 4]`.

**Result:** `[3, 4]` (correct).

---

### **6. Optimize and suggest alternative methods:**

The current approach is already quite efficient and meets the problem's time complexity requirement (O(log n) due to binary search).

#### **Possible Improvements:**

- **Binary Search for Both Boundaries:**
  Instead of expanding left and right after finding the target, we can use **two separate binary searches**:
  - One to find the **first occurrence** of the target.
  - One to find the **last occurrence** of the target.
    This would ensure a strict O(log n) solution since the current approach, in the worst case (if all elements are the target), can degrade to O(n).

---

The current solution is clear and works well. However, if you want strict logarithmic performance, you could consider the two-binary search approach described earlier.

### Two-binary search approach

### **1. Repeat the question:**

Given a sorted array `nums`, find the starting and ending positions of the given `target`. If the target is not found, return `[-1, -1]`. The solution must run in **O(log n)** time complexity.

---

### **2. Suggest examples and edge cases:**

**Examples:**

- **Example 1:**

  - Input: `nums = [5,7,7,8,8,10]`, `target = 8`
  - Output: `[3, 4]`

- **Example 2:**
  - Input: `nums = [5,7,7,8,8,10]`, `target = 6`
  - Output: `[-1, -1]`

**Edge Cases:**

- **Empty Array:** `nums = []`, target = 0 → `[-1, -1]`
- **Single Element Array:**
  - `nums = [8]`, target = 8 → `[0, 0]`
  - `nums = [5]`, target = 8 → `[-1, -1]`
- **All Elements Are the Same:** `nums = [8, 8, 8, 8]`, target = 8 → `[0, 3]`

---

### **3. Approach and thought process:**

#### **Main Idea:**

You are performing **two binary searches**:

1. One to find the **first occurrence** of the target by moving left when the target is found.
2. Another to find the **last occurrence** by moving right when the target is found.

By separating the binary searches, you ensure that each search operates independently and finds the exact boundaries of the target's range.

#### **Time Complexity:**

- **Binary Search** has a time complexity of **O(log n)**.
- Since you perform **two binary searches**, the total time complexity is **O(2 \* log n) = O(log n)**.

#### **Pseudocode:**

```plaintext
1. Define a binary search function with an additional parameter `isSearchingLeft`.
2. If searching for the left boundary, once the target is found, move left.
3. If searching for the right boundary, once the target is found, move right.
4. Run the binary search twice:
    a. First, to find the left boundary.
    b. Second, to find the right boundary.
5. Return both left and right indices. If target is not found, return [-1, -1].
```

---

### **4. Code in JS with detailed comments:**

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // Binary search function that takes a flag isSearchingLeft to decide direction
  const binarySearch = (nums, target, isSearchingLeft) => {
    let left = 0;
    let right = nums.length - 1;
    let idx = -1; // Initialize index to -1 (for when target is not found)

    // Standard binary search
    while (left <= right) {
      const mid = Math.floor((left + right) / 2); // Calculate the mid-point

      if (nums[mid] > target) {
        right = mid - 1; // If mid element is greater than target, search left side
      } else if (nums[mid] < target) {
        left = mid + 1; // If mid element is less than target, search right side
      } else {
        // Target found at mid
        idx = mid;

        // Adjust the search bounds depending on whether we're looking for the left or right boundary
        if (isSearchingLeft) {
          right = mid - 1; // Move left to find the first occurrence
        } else {
          left = mid + 1; // Move right to find the last occurrence
        }
      }
    }

    return idx; // Return the found index or -1 if not found
  };

  // Find the first occurrence of the target
  const left = binarySearch(nums, target, true);
  // Find the last occurrence of the target
  const right = binarySearch(nums, target, false);

  return [left, right];
};
```

---

### **5. Dry run the code step by step:**

Let's dry run for `nums = [5,7,7,8,8,10]`, `target = 8`.

1. **Finding the left boundary:**

   - **Initial:** `left = 0`, `right = 5`
   - **First iteration:**
     - `mid = Math.floor((0+5)/2) = 2`, `nums[2] = 7` → `nums[mid] < target`, so update `left = mid + 1 = 3`
   - **Second iteration:**
     - `mid = Math.floor((3+5)/2) = 4`, `nums[4] = 8` → Target found. Since we are searching the left boundary, set `right = mid - 1 = 3`
   - **Third iteration:**
     - `mid = Math.floor((3+3)/2) = 3`, `nums[3] = 8` → Target found. Set `right = mid - 1 = 2`
   - **Exit:** Since `left > right`, return `left = 3` (first occurrence of 8).

2. **Finding the right boundary:**
   - **Initial:** `left = 0`, `right = 5`
   - **First iteration:**
     - `mid = Math.floor((0+5)/2) = 2`, `nums[2] = 7` → `nums[mid] < target`, so update `left = mid + 1 = 3`
   - **Second iteration:**
     - `mid = Math.floor((3+5)/2) = 4`, `nums[4] = 8` → Target found. Set `left = mid + 1 = 5`
   - **Third iteration:**
     - `mid = Math.floor((5+5)/2) = 5`, `nums[5] = 10` → `nums[mid] > target`, so set `right = mid - 1 = 4`
   - **Exit:** Since `left > right`, return `right = 4` (last occurrence of 8).

**Result:** `[3, 4]`.

---

### **6. Optimize and suggest alternative methods:**

Your current solution is already optimized to meet the problem’s requirement of **O(log n)** time complexity, leveraging binary search for both boundaries independently.

#### **Possible Improvement:**

The code is quite clean and doesn't need much improvement, but here are some minor enhancements:

- You could add an early exit condition in case the first binary search returns `-1`, as there's no need to search for the right boundary if the target is not found in the first search.

```javascript
if (left === -1) {
  return [-1, -1];
}
```

This would avoid the second search when the target is absent, improving efficiency for certain cases.

---

**Conclusion:**
This solution is excellent, with clear logic and efficient use of binary search. It ensures an optimal **O(log n)** complexity and handles all cases (left and right boundaries) effectively.
