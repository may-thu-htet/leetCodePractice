/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  let one = 1,
    two = 1;
  for (let i = 2; i <= n; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
};
