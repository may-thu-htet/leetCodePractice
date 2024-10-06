function candy(ratings) {
  let n = ratings.length;

  // Step 1: Initialize candies array with 1 candy for each child
  let candies = new Array(n).fill(1);

  // Step 2: Left-to-right pass
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Step 3: Right-to-left pass
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Step 4: Sum up all the candies
  return candies.reduce((sum, candy) => sum + candy, 0);
}