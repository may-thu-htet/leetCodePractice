/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  // if word1 or word2 length are zero return the other one
  // if both of them are zero, return empty string
  // we will use additional variable to store the result
  // two pointers for each string to point the index of the string

  let p1 = 0;
  let p2 = 0;
  if (word1.length === 0) return word2;
  if (word2.length === 0) return word1;
  if (word1.length === 0 && word2.length === 0) return "";

  let result = "";

  while (p1 < word1.length || p2 < word2.length) {
    if (p1 != word1.length && p2 != word2.length) {
      result += word1[p1];
      result += word2[p2];
      p1++;
      p2++;
      // console.log(result);
    } else if (p1 === word1.length) {
      result += word2.substr(p2, word2.length - 1);
      // console.log(result);
      break;
    } else {
      result += word1.substr(p1, word1.length - 1);
      // console.log(result);
      break;
    }
  }
  return result;
};
