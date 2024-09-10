### 162. Find Peak Element

Medium
Topics
Companies
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

Constraints:

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
nums[i] != nums[i + 1] for all valid i.

### Step 1: Repeat the Question

You are given a 0-indexed integer array `nums`, and you need to find an index of a **peak element**. A peak element is an element that is strictly greater than its neighbors. If there are multiple peak elements, return the index of any peak. Additionally, we can assume that `nums[-1] = -∞` and `nums[n] = -∞`, where `n` is the length of the array.

The goal is to find this peak element with an algorithm that runs in **O(log n)** time complexity.

### Step 2: Examples and Edge Cases

#### Example 1:

```
Input: nums = [1, 2, 3, 1]
Output: 2
Explanation: nums[2] = 3 is a peak element as it is greater than both its neighbors (2 and 1).
```

#### Example 2:

```
Input: nums = [1, 2, 1, 3, 5, 6, 4]
Output: 5
Explanation: nums[5] = 6 is a peak element (it is greater than 5 and 4). Another valid output would be index 1 (nums[1] = 2).
```

#### Edge Cases:

1. **Single element array**: If `nums` contains only one element, that element is the peak.
2. **Increasing or decreasing sequence**: The peak will be at the last or first index.
3. **Multiple peaks**: If there are multiple peaks, the algorithm should return any one of them.

### Step 3: Approach and Thought Process

#### Thought Process:

The problem asks for a solution with **O(log n)** time complexity, which strongly suggests a **binary search** approach. Here's the idea:

- We want to search the array efficiently for a peak by dividing the search space in half during each iteration.
- The key observation is that if `nums[mid]` is less than its right neighbor `nums[mid + 1]`, then there must be a peak on the right side. If `nums[mid]` is greater than `nums[mid + 1]`, there must be a peak on the left side or the middle element itself can be the peak.

#### Approach:

1. Use binary search to explore the array.
2. For each `mid` index:
   - If `nums[mid] > nums[mid + 1]`, then the peak is either at `mid` or in the left half, so move `right` to `mid`.
   - If `nums[mid] < nums[mid + 1]`, then the peak is in the right half, so move `left` to `mid + 1`.
3. Continue the search until `left` equals `right`. At that point, `left` will point to a peak element.

#### Time Complexity:

- **O(log n)**: We halve the search space during each step, and binary search takes logarithmic time relative to the size of the input array.

#### Pseudo Code:

```
function findPeakElement(nums):
    left = 0
    right = length of nums - 1

    while left < right:
        mid = (left + right) // 2

        if nums[mid] > nums[mid + 1]:
            // Peak is on the left side or could be mid itself
            right = mid
        else:
            // Peak is on the right side
            left = mid + 1

    return left // 'left' will be the peak index
```

### Step 4: Code in JavaScript with Detailed Comments

```javascript
function findPeakElement(nums) {
  // Initialize two pointers for binary search
  let left = 0;
  let right = nums.length - 1;

  // Perform binary search
  while (left < right) {
    // Find the middle index
    let mid = Math.floor((left + right) / 2);

    // Check if we are in a descending slope (left side of a peak)
    if (nums[mid] > nums[mid + 1]) {
      // Move towards the left side, as the peak is on the left or mid itself
      right = mid;
    } else {
      // Move towards the right side, as the peak is on the right
      left = mid + 1;
    }
  }

  // At the end of binary search, 'left' will point to a peak element
  return left;
}
```

### Step 5: Dry Run the Code

Let's dry-run the algorithm with an example:

**Input:** `nums = [1, 2, 1, 3, 5, 6, 4]`

1. **Initial values:** `left = 0`, `right = 6`
2. **Step 1:** `mid = (0 + 6) // 2 = 3`
   - `nums[3] = 3`, `nums[4] = 5`
   - Since `nums[3] < nums[4]`, move `left = mid + 1 = 4`
3. **Step 2:** `mid = (4 + 6) // 2 = 5`
   - `nums[5] = 6`, `nums[6] = 4`
   - Since `nums[5] > nums[6]`, move `right = mid = 5`
4. **Step 3:** `left = 4`, `right = 5`
   - `mid = (4 + 5) // 2 = 4`
   - `nums[4] = 5`, `nums[5] = 6`
   - Since `nums[4] < nums[5]`, move `left = mid + 1 = 5`
5. **Final State:** `left = right = 5`, so return 5 as the peak element index.

**Output:** `5` (nums[5] = 6 is a peak element).

### Step 6: Optimizations and Alternative Methods

#### 1. **Current Approach is Optimal**:

- The algorithm already runs in O(log n) time, which meets the problem's requirement.
- We perform binary search, reducing the problem size by half at each step, making it efficient.

#### 2. **Alternative (Linear Search)**:

- If time complexity wasn't a constraint, we could use a simple linear search:
  ```javascript
  for (let i = 0; i < nums.length; i++) {
    if (
      (i == 0 || nums[i] > nums[i - 1]) &&
      (i == nums.length - 1 || nums[i] > nums[i + 1])
    ) {
      return i;
    }
  }
  ```
- However, this would take O(n) time, which is less efficient compared to O(log n) in the binary search approach.

Thus, binary search remains the most optimal solution.
