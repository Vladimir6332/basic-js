const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .filter((val) => typeof val === 'string' && /^[a-zA-Z]/.test(val.trim()))
    .reduce((acc, val) => {
      acc.push(val.trim()[0].toUpperCase());
      return acc;
    }, [])
    .sort()
    .join('');
};
