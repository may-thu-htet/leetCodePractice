/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = {};
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (const char of s) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.join(",");
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(s);
  }
  console.log({ res });
  return Object.values(res);
};
