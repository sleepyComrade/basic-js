const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let temp = count;
        count = 1;
        count += this.calculateDepth(arr[i]);
        if (count < temp) {
          count = temp;
        }
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};



    // let nestCount = 0;
    // arr.forEach(el => {
    //   if (Array.isArray(el)) {
    //     nestCount++;
    //     count += this.calculateDepth(el);
    //   }
    // })
    // if (nestCount > 0) {
    //   return count;
    // }