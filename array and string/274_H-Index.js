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

// Optimized solution
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
