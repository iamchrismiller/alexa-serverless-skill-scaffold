/**
 * Read Handler
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.main = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: {
      // Lets figure out how to lock this down
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'Read Resource',
      input: event,
    }),
  });
};
