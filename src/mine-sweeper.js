const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const minesweeper = matrix => {
  const arr = [...matrix].map(el => el.map(e => e = 0));
  matrix.forEach((el, i, a) => {
    for (let j = 0; j < el.length; j++) {
      if (el[j + 1] && el[j + 1] ||
          el[j - 1] && el[j - 1]) {
        arr[i][j]++;
      }
      if (a[i + 1] && a[i + 1][j] ||
          a[i + 1] && a[i + 1][j + 1] ||
          a[i + 1] && a[i + 1][j - 1] ||
          a[i - 1] && a[i - 1][j] ||
          a[i - 1] && a[i - 1][j + 1] ||
          a[i - 1] && a[i - 1][j - 1]) {
        arr[i][j]++;
      }
    }
  })
  return arr;
}

module.exports = {
  minesweeper
};
