/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let operators = new Set(["+", "-", "*", "/"]);
  const result = [];
  for (let token of tokens) {
    if (!operators.has(token)) {
      result.push(parseInt(token));
    } else {
      let second = result.pop();
      let first = result.pop();
      let ans;
      switch (token) {
        case "+":
          ans = first + second;
          break;
        case "-":
          ans = first - second;
          break;
        case "*":
          ans = first * second;
          break;
        case "/":
          ans = Math.trunc(first / second);
          break;
      }
      // console.log({ans})
      result.push(ans);
      // console.log({result})
    }
  }
  return result.pop();
};
