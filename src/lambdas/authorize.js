// const https = require('https');

const policies = require('./../helpers/policies');
const authHelper = require('./../helpers/auth');
const httpHelper = require('./../helpers/http');

/**
 * Translate SSO Response into Alexa Compatible Keys
 * @NOTE This may be a candidate for a seperate project
 * @see https://goo.gl/9UY1rh
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.translate = (event, context, callback) => {
  console.log('Attempting To Translate SSO Response', event, context);

  const requestOptions = {
    // This may want to be dynamic
    host: 'https://layla.amazon.com',
    path: '/spa/skill/account-linking-status.html?' +
      httpHelper.objectToQueryString({
        state: {},
        // Not sure how this is generated yet?
        vendorId: 'M1DVLGCUZEYLAC',
        client_id: 'dummy-client',
        access_token: 'bogus-token',
        token_type: 'Bearer',
      }),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  console.log('requestOptions', requestOptions);

  // const request = https.request(requestOptions, function(response) {
  //   response.on('data', function (chunk) {
  //     body += chunk;
  //   });
  //
  //   callback(null, {
  //     statusCode: 200,
  //     headers: httpHelper.defaultHeaders,
  //     body: JSON.stringify({
  //       message: body,
  //       input: event,
  //     }),
  //   });
  // });
  //
  // request.write();
  // request.end();
};

/**
 * Authorize Handler
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.main = (event, context, callback) => {
  const principalId = 'user';
  if (authHelper.isTokenValid(event.accessToken)) {
    callback(null, policies.generate(principalId, 'Allow', event.methodArn));
    return;
  }
  callback(null, policies.generate(principalId, 'Deny', event.methodArn));
};
