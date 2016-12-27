const readLambda = require('./../../../src/lambdas/read.js');

test('Lambda:Read', () => {
  expect(readLambda.main).toBeDefined();
  const event = {};
  const mockCallback = jest.fn();
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'Read Resource',
      input: event,
    }),
  };

  readLambda.main(event, {}, mockCallback);
  expect(mockCallback).toBeCalledWith(null, response);
});
