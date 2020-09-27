const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity > 15 ||
    sampleActivity <= 0 ||
    typeof sampleActivity !== 'string' ||
    isNaN(sampleActivity)
  )
    return false;
  const countHalfLifePeriods =
    Math.log(MODERN_ACTIVITY / sampleActivity) / Math.log(2);
  const age = countHalfLifePeriods * HALF_LIFE_PERIOD;
  return Math.ceil(age);
};
