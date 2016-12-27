const indexHandler = require('./../../src/index');

test('Index Handler Main', () => {
  expect(indexHandler.main).toBeDefined();
  const mockCallback = jest.fn();
  const response = {
    'body': JSON.stringify({
      'message': 'Hello World, Hey!',
      'input': {},
    }),
    'statusCode': 200,
  };

  indexHandler.main({}, {}, mockCallback);

  expect(mockCallback).toBeCalledWith(null, response);
});
