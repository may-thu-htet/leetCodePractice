### 169. Majority Element

### 1. Repeat the Question:

We are given an array `nums` of size `n`, and we need to return the **majority element**. The majority element is defined as the element that appears more than `⌊n / 2⌋` times. We are guaranteed that the majority element always exists in the array, meaning no need to handle cases where there is no majority element.

### 2. Examples and Edge Cases:

Let's consider a few examples:

#### Example 1:

- Input: `nums = [3, 2, 3]`
- Output: `3`
- Explanation: The element `3` appears more than `⌊3 / 2⌋ = 1` time.

#### Example 2:

- Input: `nums = [2, 2, 1, 1, 1, 2, 2]`
- Output: `2`
- Explanation: The element `2` appears 4 times, which is more than `⌊7 / 2⌋ = 3` times.

#### Edge Cases:

- **Single element array:**
  - Input: `nums = [1]`
  - Output: `1` (only one element, so it's the majority).
- **Array with all elements the same:**
  - Input: `nums = [4, 4, 4, 4]`
  - Output: `4` (all elements are the same, so it's obviously the majority).

### 3. Approach and Thought Process:

There are multiple ways to solve this problem, but the most efficient one uses **Boyer-Moore Voting Algorithm**, which works in **O(n)** time and **O(1)** space. Here are several approaches to solve the problem:

#### **Approach 1: Hash Map (Count Frequency)**

1. Use a hash map to count the frequency of each element.
2. Iterate over the array and for each element, increment its count in the hash map.
3. Return the element whose count exceeds `n / 2`.

- **Time Complexity:** O(n) (since we are traversing the array and performing hash map lookups)
- **Space Complexity:** O(n) (we need extra space for the hash map)

#### **Approach 2: Boyer-Moore Voting Algorithm (Optimal)**

This algorithm is an efficient way to find the majority element using **O(n)** time and **O(1)** space. The idea is based on maintaining a **candidate** for the majority element and a **count**.

- We traverse through the array:
  1. If the `count` is `0`, we select the current element as the new **candidate**.
  2. If the current element is the same as the candidate, we increment the count. Otherwise, we decrement the count.
- By the end of the traversal, the **candidate** will be the majority element.

- **Time Complexity:** O(n) (we traverse the array once)
- **Space Complexity:** O(1) (no extra space apart from a few variables)

### 4. Pseudo Code:

#### Boyer-Moore Voting Algorithm:

```text
1. Initialize candidate = None and count = 0.
2. Iterate over each element in nums:
    a. If count is 0, set candidate = current element.
    b. If the current element equals the candidate, increment count.
    c. Otherwise, decrement count.
3. Return candidate.
```

### 5. Code in JavaScript:

```javascript
/**
 * @param {number[]} nums - The input array
 * @return {number} - The majority element
 */
var majorityElement = function (nums) {
  let candidate = null; // To store the majority candidate
  let count = 0; // Count to track the candidate's frequency

  // Iterate through the array
  for (let num of nums) {
    if (count === 0) {
      // If count is 0, set the current number as candidate
      candidate = num;
    }
    // If current number is the candidate, increment count
    if (num === candidate) {
      count++;
    } else {
      // Otherwise, decrement the count
      count--;
    }
  }

  // Return the candidate which is the majority element
  return candidate;
};
```

### 6. Dry Run:

Let’s dry run the code using the example:

#### Input: `nums = [2, 2, 1, 1, 1, 2, 2]`

- **Initial State:** `candidate = null`, `count = 0`

1. **First element `2`:**

   - `count = 0`, so set `candidate = 2`, and increment `count` to 1.

2. **Second element `2`:**

   - `candidate = 2`, so increment `count` to 2.

3. **Third element `1`:**

   - `candidate = 2`, but `num = 1`, so decrement `count` to 1.

4. **Fourth element `1`:**

   - `candidate = 2`, but `num = 1`, so decrement `count` to 0.

5. **Fifth element `1`:**

   - `count = 0`, so set `candidate = 1`, and increment `count` to 1.

6. **Sixth element `2`:**

   - `candidate = 1`, but `num = 2`, so decrement `count` to 0.

7. **Seventh element `2`:**
   - `count = 0`, so set `candidate = 2`, and increment `count` to 1.

- **Final Output:** `candidate = 2`, which is the majority element.

### 7. Optimization and Alternative Methods:

#### Boyer-Moore Algorithm is already optimal:

- **Time Complexity:** O(n) because we pass through the array once.
- **Space Complexity:** O(1) because we only use a few variables (`candidate` and `count`).

#### Alternative Method: Sorting:

- Another approach is to **sort** the array and return the middle element (`nums[Math.floor(n / 2)]`), since the majority element will always appear at the center.
  - **Time Complexity:** O(n log n) because sorting takes O(n log n).
  - **Space Complexity:** O(1) if sorting in-place, but not as efficient as Boyer-Moore.

### Conclusion:

The Boyer-Moore Voting Algorithm is the most efficient way to find the majority element with **O(n)** time and **O(1)** space. It leverages a counting mechanism to determine the majority candidate in a single pass through the array, making it ideal for this problem.
