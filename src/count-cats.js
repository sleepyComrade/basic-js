const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let num = 0;
  const cat = '^^';
  arr.forEach(el => {
    el.forEach(e => {
      if (e === cat) {
        num++;
      }
    })
  })
  return num;
}

module.exports = {
  countCats
};
