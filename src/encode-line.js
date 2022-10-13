const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = str => {
  const arr = str.split('');
  let final = '';
  let count = 1;
  arr.forEach((el, i, a) => {
    if (el === a[i + 1]) {
      count++;
    } else if (count > 1) {
      final += count + el;
      count = 1;
    } else final += el;
  })
  return final;
}

module.exports = {
  encodeLine
};
