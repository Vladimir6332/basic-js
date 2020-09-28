const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrOfArrays = arr.filter((val) => Array.isArray(val));
    if (arrOfArrays.length > 0) {
      return (
        1 + Math.max(...arrOfArrays.map((val) => this.calculateDepth(val)))
      );
    } else return 1;
  }
};
