/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // create a set and add vowels to that set
  // set two pointer left and right and swap if they are vowels
  // return the updated string
  let vowels = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);
  let left = 0,
    right = s.length - 1;
  let chars = s.split("");

  while (left < right) {
    if (vowels.has(chars[left])) {
      if (vowels.has(chars[right])) {
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
      } else {
        right--;
      }
    } else {
      left++;
    }
  }
  return chars.join("");
};
