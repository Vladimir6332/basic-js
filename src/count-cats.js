const CustomError = require('../extensions/custom-error');

module.exports = function countCats(arr) {
  return arr.reduce((acc, val) => {
    acc += val.filter((cat) => cat === '^^').length;
    return acc;
  }, 0);
};
