// https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

function superReducedString(s) {
  // Write your code here
  let stack = [];
  for (let c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length > 0 ? stack.join("") : "Empty String";
}
