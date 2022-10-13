const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const sortByHeight = arr => {
  const indexes = [];
  const numbers = [];
  arr.forEach((el, i) => {
    if (el !== -1) {
      indexes.push(i);
      numbers.push(el);
    }
  })
  numbers.sort((a, b) => a - b).forEach((el, i) => {
    arr[indexes[i]] = el;
  })
  return arr;
}

module.exports = {
  sortByHeight
};
