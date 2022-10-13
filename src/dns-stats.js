const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getDNSStats = domains => {
  const arr = domains.map(el => el.split('.').reverse());
  const stat = {};
  arr.forEach(el => {
    let key = '';
    for (let i = 0; i < el.length; i++) {
      key += `.${el[i]}`;
      if (stat.hasOwnProperty(key)) {
        stat[key]++;
      } else stat[key] = 1;
    }
  })
  return stat;
}

module.exports = {
  getDNSStats
};
