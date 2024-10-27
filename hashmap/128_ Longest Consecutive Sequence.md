### 128. Longest Consecutive Sequence

### 1. Repeat the Question

The question is:

- Given an unsorted array `nums` of integers, find the length of the longest sequence of consecutive integers.
- The solution must be optimized to run in \(O(n)\) time.

### 2. Examples and Edge Cases

**Examples:**

- **Input:** `nums = [100, 4, 200, 1, 3, 2]`
  - **Output:** `4` (sequence `[1, 2, 3, 4]` is the longest)
- **Input:** `nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]`
  - **Output:** `9` (sequence `[0, 1, 2, 3, 4, 5, 6, 7, 8]`)

**Edge Cases:**

- **Empty Array:** `nums = []`
  - **Output:** `0` (no sequence exists)
- **Single Element:** `nums = [10]`
  - **Output:** `1` (sequence is just `[10]`)
- **All Elements Same:** `nums = [1, 1, 1, 1]`
  - **Output:** `1` (sequence is `[1]`)
- **Non-Consecutive Numbers with Gaps:** `nums = [10, 30, 20, 15, 25]`
  - **Output:** `1` (no consecutive sequence greater than length `1`)

### 3. Approach and Thought Process

Since we need to solve this problem in \(O(n)\) time, sorting the array is not an option because sorting would take \(O(n \log n)\) time.

**Approach:** Use a HashSet for Fast Lookups

1. **Using a Set:**
   - Convert the array into a `Set` to remove duplicates and enable \(O(1)\) lookups.
2. **Finding the Start of Each Sequence:**
   - For each element `num` in the set:
     - Check if `num - 1` is not in the set. This ensures that `num` is the start of a sequence (if `num - 1` exists, then `num` would be part of a sequence starting with a smaller number).
   - If `num` is the start of a sequence, increment a counter to count the length of the sequence by checking `num + 1`, `num + 2`, and so on until the sequence breaks.
3. **Updating the Longest Sequence Length:**
   - Keep track of the longest sequence encountered and update it after checking each sequence.

**Complexity Analysis:**

- **Time Complexity:** \(O(n)\) because each number is added to the set once and processed once in the main loop.
- **Space Complexity:** \(O(n)\) for storing the elements in the set.

**Alternative Approach:**

- **Brute Force:** Check all possible sequences by iterating through all elements. This approach, however, has \(O(n^2)\) complexity due to nested loops, making it inefficient for large arrays.

**Pseudo Code:**

```pseudo
function longestConsecutive(nums):
    if nums is empty:
        return 0

    create a Set called numSet and add all elements from nums to numSet
    initialize longestStreak to 0

    for each num in numSet:
        if num - 1 is not in numSet:
            currentNum = num
            currentStreak = 1

            while currentNum + 1 is in numSet:
                currentNum += 1
                currentStreak += 1

            update longestStreak to be max(longestStreak, currentStreak)

    return longestStreak
```

### 4. JavaScript Code with Detailed Comments

```javascript
/**
 * @param {number[]} nums - Array of unsorted integers
 * @return {number} - Length of the longest consecutive sequence
 */
var longestConsecutive = function (nums) {
  // If the array is empty, return 0 as there's no sequence
  if (nums.length === 0) return 0;

  // Step 1: Add all numbers to a Set to remove duplicates and enable O(1) lookups
  const numSet = new Set(nums);
  let longestStreak = 0; // Track the longest consecutive sequence

  // Step 2: Iterate through each number in the Set
  for (let num of numSet) {
    // Check if 'num' is the start of a sequence (no smaller consecutive number)
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Count consecutive numbers starting from 'num'
      while (numSet.has(currentNum + 1)) {
        currentNum += 1; // Move to the next consecutive number
        currentStreak += 1; // Increase the streak length
      }

      // Update longest streak if currentStreak is longer
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak; // Return the longest sequence found
};
```

### 5. Dry Run of the Code Step by Step

Let's dry-run the code using the example `nums = [100, 4, 200, 1, 3, 2]`:

1. **Initialize `numSet` and `longestStreak`**:

   - `numSet = {100, 4, 200, 1, 3, 2}`
   - `longestStreak = 0`

2. **Iterate through `numSet`**:

   - **num = 100**:

     - `100 - 1` (99) is not in `numSet`, so `100` is the start of a sequence.
     - Current streak length = `1` (no further consecutive numbers).
     - Update `longestStreak = max(0, 1) = 1`.

   - **num = 4**:

     - `4 - 1` (3) is in `numSet`, so skip `4` as it’s part of another sequence.

   - **num = 200**:

     - `200 - 1` (199) is not in `numSet`, so `200` is the start of a sequence.
     - Current streak length = `1` (no further consecutive numbers).
     - `longestStreak = max(1, 1) = 1` (no change).

   - **num = 1**:
     - `1 - 1` (0) is not in `numSet`, so `1` is the start of a sequence.
     - Sequence: `1, 2, 3, 4` (4 numbers long).
     - Update `longestStreak = max(1, 4) = 4`.

3. **Return Result**: `longestStreak = 4`.

### 6. Optimizations and Alternative Methods

The current solution is already optimized with \(O(n)\) time complexity and \(O(n)\) space complexity using a `Set`. Here are a few alternative ideas:

1. **Sorting Approach (Not Optimal for \(O(n)\))**:
   - Sort `nums` and iterate through it, counting consecutive numbers.
   - Complexity: \(O(n \log n)\), not meeting the \(O(n)\) time requirement.
2. **Union-Find (Disjoint Set)**:

   - Use a union-find data structure to group consecutive numbers.
   - Complexity: With path compression, union-find operations are nearly \(O(1)\), making the algorithm close to \(O(n)\).
   - However, it’s more complex to implement and might use more memory.

3. **Sliding Window** (Only works if `k` or length of sequences is bounded):
   - This could be applied with known sequence lengths or windows of interest, but generally doesn't work here due to unknown sequence lengths and gaps.

The `Set` method is the most efficient and direct approach for finding the longest consecutive sequence.
