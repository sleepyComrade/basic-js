const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const transform = arr => {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  const transformedArr = [];
  const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  arr.forEach((el, i) => {
    if (el === controls[1] && arr[i - 2] !== controls[0]) {
      transformedArr.pop();
    }
    if (el === controls[2] && arr[i + 1]) {
      transformedArr.push(arr[i + 1]);
    }
    if (el === controls[3] && arr[i - 1] && arr[i - 2] !== controls[0]) {
      transformedArr.push(arr[i - 1]);
    }
    if (!controls.includes(el) && arr[i - 1] !== controls[0]) {
      transformedArr.push(el);
    }
  })
  return transformedArr;
}

module.exports = {
  transform
};
