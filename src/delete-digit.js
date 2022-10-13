const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const deleteDigit = n => {
  const arr = (n + '').split('');
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr.length === 2 && arr[j] < arr[j + 1]) {
      arr.splice(j);
    } else if (arr.length === 2 && arr[j] > arr[j + 1]) {
      arr.splice(j + 1);
    } else if (arr[j] < arr[j + 1]) {
      arr.splice(j, 1);
    }
  }
  return +arr.join('');
}

module.exports = {
  deleteDigit
};
