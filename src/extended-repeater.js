const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const REPEAT_TIMES = options.repeatTimes;
  const SEPARATOR = options.separator || '+';
  const ADDITION = options.addition === null ? 'null' : options.addition;
  const ADDITION_REPEAT_TIMES = options.additionRepeatTimes;
  const ADDITION_SEPARATOR = options.additionSeparator || '|';
  const additionsStr = Array(ADDITION_REPEAT_TIMES)
    .fill(ADDITION)
    .join(ADDITION_SEPARATOR);
  return Array(REPEAT_TIMES)
    .fill(str + additionsStr)
    .join(SEPARATOR);
};
