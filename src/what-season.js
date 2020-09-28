const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  else if (date.getMonth !== Date.prototype.getMonth) throw new Error();
  const month = date.getMonth();
  let season;
  if (month < 2 || month === 11) season = 'winter';
  else if (month < 5) season = 'spring';
  else if (month < 8) season = 'summer';
  else season = 'autumn';
  return season;
};
