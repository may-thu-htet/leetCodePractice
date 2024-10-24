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

// Alternative method by two pointer
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
