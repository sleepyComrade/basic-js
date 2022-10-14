const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const repeater = (str, options) => {
  const string = str + '';
  const add = options.addition + '';
  const sep = options.separator ? options.separator : '+';
  const addSep = options.additionSeparator ? options.additionSeparator : '|';
  const rep = options.repeatTimes ? options.repeatTimes : 1
  const addRep = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const final = [];
  const single = [string];
  const addition = [];
  if (options.addition !== undefined) {
    for (let i = 0; i < addRep; i++) {
      addition.push(add);
    }
  }
  single.push(addition.join(addSep));
  for (let i = 0; i < rep; i++) {
    final.push(single.join(''));
  }
  return final.join(sep);
}

module.exports = {
  repeater
};