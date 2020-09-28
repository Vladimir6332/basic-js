const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let isDiscard = false;
  let isDouble = false;
  let isAlreadyDiscard = false;
  let countNotCommand = 0;
  const result = arr.reduce((acc, val, index, ar) => {
    switch (val) {
      case '--discard-next':
        isDiscard = true;
        break;
      case '--discard-prev':
        if (index === 0) break;
        if (isAlreadyDiscard) {
          isAlreadyDiscard = false;
          break;
        }
        acc.pop();
        break;
      case '--double-next':
        isDouble = true;
        isAlreadyDiscard = false;
        break;
      case '--double-prev':
        if (index === 0) break;
        const prevDouble = ar[index - 1];
        if (isAlreadyDiscard) {
          isAlreadyDiscard = false;
          break;
        }
        acc.push(prevDouble);
        break;
      default:
        if (isDiscard) {
          isDiscard = false;
          isAlreadyDiscard = true;
          break;
        } else {
          acc.push(val);
          isAlreadyDiscard = false;
          if (isDouble) {
            isDouble = false;
            acc.push(val);
          }
        }

        break;
    }
    return acc;
  }, []);
  return result;
};
