
/**
 * Validate Token
 * @param {string} token
 * @return {boolean}
 */
module.exports.isTokenValid = function(token) {
  // Rudimentary Length Check
  // d1904580-cdef-11e6-9d9d-cec0c932ce01
  return token && token.length === 36 ? true : false;
};
