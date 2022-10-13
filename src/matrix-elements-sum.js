const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
const getMatrixElementsSum = matrix => {
  const arr = [];
  matrix.forEach((el, i, a) => {
    for (let j = 0; j < el.length; j++) {
      if (a[i - 1] && a[i - 1][j] || !a[i - 1]) {
        arr.push(el[j]);
      }
    }
  })
  return arr.reduce((a, b) => a + b);
}

module.exports = {
  getMatrixElementsSum
};
