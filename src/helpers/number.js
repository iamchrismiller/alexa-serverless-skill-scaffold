/**
 * Get A Random Number Within
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
module.exports.getNumberWithin = function(min, max) {
  return ~~(Math.random() * (max - min + 1) + min);
};
