/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketMaps = new Map([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);

  const bracketsStack = [];
  if (s.length % 2 !== 0) return false;
  for (let char of s) {
    if (char === "{" || char === "[" || char === "(") {
      bracketsStack.push(char);
    } else {
      if (bracketMaps.get(char) !== bracketsStack.pop()) {
        return false;
      }
    }
  }
  return bracketsStack.length === 0;
};
