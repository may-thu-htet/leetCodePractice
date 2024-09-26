### 274. H-index

### 1. Repeat the Question:

We are given an array `citations` where `citations[i]` represents the number of citations a researcher received for their `i-th` paper. Our task is to compute the researcher's **h-index**.

The **h-index** is defined as the maximum value of `h` such that the researcher has published at least `h` papers, and each of these `h` papers has been cited at least `h` times.

### 2. Suggest Examples and Edge Cases:

#### Examples:

- **Example 1:**

  ```js
  Input: citations = [3, 0, 6, 1, 5]
  Output: 3
  Explanation:
  - The researcher has 5 papers.
  - To have an h-index of 3, the researcher must have at least 3 papers with at least 3 citations each.
  - There are 3 papers with at least 3 citations: [3, 6, 5].
  ```

- **Example 2:**
  ```js
  Input: citations = [1, 3, 1]
  Output: 1
  Explanation:
  - The researcher has 1 paper with at least 1 citation.
  ```

#### Edge Cases:

- **Edge Case 1**: `citations = [0, 0, 0, 0]`
  - The h-index is `0`, since no paper has any citation.
- **Edge Case 2**: `citations = [100]`

  - The h-index is `1`, as there is only 1 paper, and it has more than 1 citation.

- **Edge Case 3**: `citations = []` (empty array)
  - The h-index is `0` since there are no papers.

### 3. Approach and Thought Process:

To compute the h-index, we need to find the largest `h` such that at least `h` papers have `h` or more citations.

#### Approach 1: Sorting Approach

**Steps:**

1. Sort the array of citations in non-decreasing order.
2. Traverse the sorted array from the end, counting how many papers have citations greater than or equal to their index.
3. The highest number where the paper's citation count is greater than or equal to its rank will be the h-index.

#### Pseudo Code Plan:

1. Sort `citations` array in ascending order.
2. Iterate from the largest citation to the smallest, checking if the number of papers with at least `h` citations is greater than or equal to `h`.
3. Return the h-index.

#### Complexity:

- **Time Complexity**: O(n log n) because we need to sort the array.
- **Space Complexity**: O(1) if sorting is done in place.

#### Alternative Approach: Bucket Sort (Optimized)

Since the h-index can never be larger than the number of papers, we can optimize with a counting approach that avoids sorting.

1. Create an array `buckets` of size `n+1` where `n` is the number of papers.
2. Count how many papers have each citation count (up to `n`). Any citation count greater than `n` is stored in the last bucket.
3. Iterate over the `buckets` array from the end, accumulating the count of papers with at least `h` citations, and return the largest valid `h`.

#### Complexity:

- **Time Complexity**: O(n), since we only traverse the list and then the bucket array.
- **Space Complexity**: O(n), due to the extra space for the bucket array.

### 4. Code in JavaScript:

#### Sorting Approach:

```javascript
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // Step 1: Sort the citations array in non-decreasing order
  citations.sort((a, b) => b - a); // Sort in descending order

  // Step 2: Iterate over the sorted citations array
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    // If the current citation count is greater than or equal to the rank (i + 1)
    if (citations[i] >= i + 1) {
      h = i + 1; // Update the h-index
    } else {
      break; // If we can't find more papers that satisfy, break early
    }
  }

  // Return the final h-index
  return h;
};
```

#### Bucket Sort (Optimized) Approach:

```javascript
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let n = citations.length;
  let buckets = new Array(n + 1).fill(0);

  // Step 1: Populate the buckets
  for (let c of citations) {
    if (c >= n) {
      buckets[n]++; // Any citation greater than n goes into the last bucket
    } else {
      buckets[c]++;
    }
  }

  // Step 2: Traverse the buckets from the back to find the h-index
  let count = 0;
  for (let i = n; i >= 0; i--) {
    count += buckets[i]; // Accumulate papers with at least i citations
    if (count >= i) {
      return i; // Found the h-index
    }
  }

  return 0;
};
```

### 5. Dry Run the Code:

#### Example: `citations = [3, 0, 6, 1, 5]`

**Sorted Approach**:

1. **Step 1**: Sort `citations` → `[6, 5, 3, 1, 0]`
2. **Step 2**:
   - For `i = 0`: `citations[0] = 6`, `i + 1 = 1`, so `h = 1`
   - For `i = 1`: `citations[1] = 5`, `i + 1 = 2`, so `h = 2`
   - For `i = 2`: `citations[2] = 3`, `i + 1 = 3`, so `h = 3`
   - For `i = 3`: `citations[3] = 1`, `i + 1 = 4`, break (since `citations[3] < 4`)
3. **Return**: `h = 3`

#### Bucket Sort Approach:

1. **Step 1**: Initialize `buckets = [0, 0, 0, 0, 0, 0]`
   - For citation `6`: Increment `buckets[5]`
   - For citation `5`: Increment `buckets[5]`
   - For citation `3`: Increment `buckets[3]`
   - For citation `1`: Increment `buckets[1]`
   - For citation `0`: Increment `buckets[0]`
     → `buckets = [1, 1, 0, 1, 0, 2]`
2. **Step 2**: Traverse from `i = 5` down to `i = 0`, accumulating paper counts:
   - `i = 5`: `count = 2`
   - `i = 4`: `count = 2`
   - `i = 3`: `count = 3` (since `count >= i`, return `i = 3`)
3. **Return**: `h = 3`

### 6. Optimize and Alternative Methods:

#### Bucket Sort (Optimized):

- **Why It’s Optimal**: It avoids the O(n log n) sorting by directly counting citations, making it faster (O(n) time complexity).

#### Sorting Approach:

- **Advantages**: Simple to understand, though sorting can take O(n log n) time.
- **Optimization**: Early exit when the h-index condition is no longer met during traversal.

### Conclusion:

- The **Bucket Sort** approach is more optimal in terms of time complexity (O(n)), making it the best choice for larger input sizes.
- However, the **Sorting Approach** is still a good solution due to its simplicity and ease of understanding, especially in interviews where readability is important.
