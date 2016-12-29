const policyHelper = require('./../../../src/helpers/policies');

test('Helpers:Policies:generate', () => {
  expect(policyHelper.generate).toBeDefined();
  expect(policyHelper.generate('user', 'Allow', 'arn.*.*')).toEqual({
    'context': {},
    'principalId': 'user',
    'policyDocument': {
      'Statement': [
        {
          'Action': 'execute-api:Invoke',
          'Effect': 'Allow',
          'Resource': 'arn.*.*',
        },
      ],
      'Version': '2012-10-17',
    },
  });
});
