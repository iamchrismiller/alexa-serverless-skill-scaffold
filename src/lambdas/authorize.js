
const policies = require('./../helpers/policies');
const auth = require('./../helpers/auth');

/**
 * Authorize Handler
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.main = (event, context, callback) => {
  const principalId = 'user';
  if (auth.isTokenValid(event.accessToken)) {
    callback(null, policies.generate(principalId, 'Allow', event.methodArn));
    return;
  }
  callback(null, policies.generate(principalId, 'Deny', event.methodArn));
};
