const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
const getCommonCharacterCount = (s1, s2) => {
  let count = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  arr1.forEach(el => {
    if (arr2.includes(el)) {
      let index = arr2.indexOf(el);
      arr2.splice(index, 1);
      count++;
    }
  })
  return count;
}

module.exports = {
  getCommonCharacterCount
};
