### 202. Happy Number

### 1. Repeat the Question

The problem asks to determine whether a given number `n` is a "happy number." A number is called happy if the sum of the squares of its digits, when repeatedly computed, eventually leads to `1`. If the number does not reach `1` and instead falls into a cycle, it is not a happy number.

We need to write an algorithm to return `true` if `n` is a happy number, and `false` otherwise.

---

### 2. Examples and Edge Cases

#### Examples:

- Input: `n = 19`

  - Process: 1² + 9² = 82, 8² + 2² = 68, 6² + 8² = 100, 1² + 0² + 0² = 1
  - Output: `true` (since we reached `1`)

- Input: `n = 2`
  - Process: 2² = 4, 4² = 16, 1² + 6² = 37, 3² + 7² = 58, 5² + 8² = 89... (it will enter a cycle)
  - Output: `false`

#### Edge Cases:

- If `n = 1`: The output should be `true` immediately since 1 is a happy number.
- If `n` is a large number: We need to handle large values efficiently without getting stuck in infinite loops.

---

### 3. Approach and Thought Process

#### Key Idea:

- We can break down the number into digits, square each digit, and sum them up. We repeat this process until the sum equals `1` (happy number) or falls into a previously encountered sum (cycle detection).

#### Steps:

1. **Sum of Squares**: Convert the number into its digits, square each, and sum them.
2. **Cycle Detection**: Use a set to store previously encountered numbers. If we encounter the same number again, it means we are in a cycle, and the number is not happy.
3. **Base Case**: If the sum becomes `1`, return `true` since it's a happy number.

#### Complexity:

- **Time Complexity**: In the worst case, we repeatedly compute the sum of squares, and detecting a cycle would take O(log n) time for each check, where `n` is the number of digits.
- **Space Complexity**: We use a set to track previously encountered sums, leading to O(log n) space complexity.

#### Pseudocode:

```text
function isHappy(n):
    initialize an empty set 'seen'

    while n != 1:
        if n is in 'seen':
            return false  # cycle detected

        add n to 'seen'

        update n to be the sum of squares of its digits

    return true  # if n == 1
```

---

### 4. Code in JavaScript

```javascript
function isHappy(n) {
  // A set to track numbers we've already seen (to detect cycles)
  let seen = new Set();

  // Helper function to calculate sum of squares of digits
  function getSumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10; // Get the last digit
      sum += digit * digit; // Square the digit and add to sum
      num = Math.floor(num / 10); // Remove the last digit
    }
    return sum;
  }

  // Main logic to check for happiness
  while (n !== 1) {
    if (seen.has(n)) {
      // If we've seen this number before, it's a cycle, return false
      return false;
    }

    // Add the current number to the set
    seen.add(n);

    // Update n to be the sum of the squares of its digits
    n = getSumOfSquares(n);
  }

  // If we reach 1, the number is happy
  return true;
}
```

---

### 5. Dry Run

Let's dry run the function with `n = 19`:

1. **Initial state**: `n = 19`, `seen = {}`.
   - Compute sum of squares: `1² + 9² = 82`. Update `n = 82`.
2. **Next state**: `n = 82`, `seen = {19}`.

   - Compute sum of squares: `8² + 2² = 68`. Update `n = 68`.

3. **Next state**: `n = 68`, `seen = {19, 82}`.

   - Compute sum of squares: `6² + 8² = 100`. Update `n = 100`.

4. **Next state**: `n = 100`, `seen = {19, 82, 68}`.

   - Compute sum of squares: `1² + 0² + 0² = 1`. Update `n = 1`.

   - Since `n = 1`, the number is happy! Return `true`.

---

### 6. Optimization and Alternative Methods

#### Optimized Approach:

Instead of using a set to detect cycles, we can use **Floyd's Cycle Detection Algorithm** (tortoise and hare) to detect a loop:

- Use two pointers: one moves "slow" by computing the sum of squares once, and the other "fast" by computing it twice. If they meet at some point, there is a cycle, meaning the number is not happy.

#### Pseudocode for Optimized Approach:

```text
function isHappy(n):
    slow = n
    fast = getSumOfSquares(getSumOfSquares(n))

    while fast != 1 and slow != fast:
        slow = getSumOfSquares(slow)
        fast = getSumOfSquares(getSumOfSquares(fast))

    return fast == 1
```

#### Complexity of Optimized Approach:

- **Time Complexity**: O(log n), since the number of steps is proportional to the number of digits.
- **Space Complexity**: O(1), since we are no longer using extra space for a set.

#### Optimized Code in JavaScript:

```javascript
function isHappy(n) {
  function getSumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  let slow = n;
  let fast = getSumOfSquares(n);

  while (fast !== 1 && slow !== fast) {
    slow = getSumOfSquares(slow); // Move slow by 1 step
    fast = getSumOfSquares(getSumOfSquares(fast)); // Move fast by 2 steps
  }

  return fast === 1;
}
```

In this version, we detect cycles without extra space, making it more efficient.
