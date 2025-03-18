/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // add two spaces at the beginning and end of the original array
  // compare three consecutive spaces and they are all zero, change the middle one to 1
  // return n <= 0

  let fs = [0, ...flowerbed, 0];
  for (let i = 1; i < fs.length - 1; i++) {
    if (fs[i - 1] === 0 && fs[i] === 0 && fs[i + 1] === 0) {
      fs[i] = 1;
      n--;
    }
  }

  return n <= 0;
};
