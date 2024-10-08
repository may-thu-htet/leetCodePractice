function isPalindrome(s) {
  // Step 1: Initialize two pointers, one from the start and one from the end
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from the left
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
      left++;
    }

    // Skip non-alphanumeric characters from the right
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
      right--;
    }

    // Compare characters after converting to lowercase
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false; // If mismatch found, it's not a palindrome
    }

    // Move the pointers inward
    left++;
    right--;
  }

  return true; // If all characters matched, it's a palindrome
}
