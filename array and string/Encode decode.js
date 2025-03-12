// https://neetcode.io/problems/string-encode-and-decode

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let s of strs) {
      res += s.length + "#" + s;
    }
    // console.log({res})
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] != "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      // console.log({length});
      i = j + 1;
      j = i + length;
      // console.log({i,j})
      res.push(str.substring(i, j));
      // console.log(res)
      i = j;
      // console.log({i,j})
    }
    return res;
  }
}
