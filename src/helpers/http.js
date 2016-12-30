/**
 * default HTTP Headers
 * @return {object}
 */
module.exports.defaultHeaders = {
  // Lets figure out how to lock this down
  'Access-Control-Allow-Origin': '*',
};

/**
 * Convert Object to URL Encoded Query String
 * @param {object} obj
 * @return {string}
 */
module.exports.objectToQueryString = function(obj) {
  return Object.keys(obj).map((key) => {
    return (`${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
  });
};
