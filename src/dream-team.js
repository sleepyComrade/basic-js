const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = members => {
  if (!Array.isArray(members)) return false;
  let teamName = '';
  members.forEach(el => {
    if (typeof el === 'string' && el) {
      for (let i = 0; i < el.length; i++) {
        if (el[i] !== ' ') {
          teamName += el[i];
          break;
        }
      }
    }
  })
  teamName = teamName.toUpperCase().split('').sort().join('');
  return teamName;
}

module.exports = {
  createDreamTeam
};
