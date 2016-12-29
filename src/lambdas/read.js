
const httpHelper = require('./../helpers/http');

/**
 * Read Handler
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.main = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: httpHelper.defaultHeaders,
    body: JSON.stringify({
      message: 'Read Resource',
      input: event,
    }),
  });
};
