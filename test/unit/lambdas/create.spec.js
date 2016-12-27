const createLambda = require('./../../../src/lambdas/create.js');

test('Lambda:Create', () => {
  expect(createLambda.main).toBeDefined();
  const event = {};
  const mockCallback = jest.fn();
  const response = {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'Created Resource',
      input: event,
    }),
  };

  createLambda.main(event, {}, mockCallback);
  expect(mockCallback).toBeCalledWith(null, response);
});
