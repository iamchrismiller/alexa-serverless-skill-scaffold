
const httpHelper = require('./../helpers/http');

/**
 * Create Handler
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.main = (event, context, callback) => {
  callback(null, {
    statusCode: 201,
    headers: httpHelper.defaultHeaders,
    body: JSON.stringify({
      message: 'Created Resource',
      input: event,
    }),
  });
};
