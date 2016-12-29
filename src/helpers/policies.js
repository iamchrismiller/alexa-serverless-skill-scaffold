
/**
 * Generate AWS Policy
 * @param {string} principalId
 * @param {object} effect
 * @param {object} resource
 * @return {boolean}
 */
module.exports.generate = function(principalId, effect, resource) {
  const response = {
    context: {},
    principalId: principalId,
    policyDocument: {},
  };

  if (effect && resource) {
    response.policyDocument.Version = '2012-10-17';
    response.policyDocument.Statement = [{
      Action: 'execute-api:Invoke',
      Effect: effect,
      Resource: resource,
    }];
  }
  return response;
};
