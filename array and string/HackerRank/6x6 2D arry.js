// https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true

function hourglassSum(arr) {
  // Write your code here
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
