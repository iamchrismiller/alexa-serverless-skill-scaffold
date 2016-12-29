const httpHelper = require('./../../../src/helpers/http');

test('Helpers:Http:defaultHeaders', () => {
  expect(httpHelper.defaultHeaders).toBeDefined();
  expect(httpHelper.defaultHeaders).toEqual({
    'Access-Control-Allow-Origin': '*',
  });
});
