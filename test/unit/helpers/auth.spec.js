/* eslint-disable max-len */

const authHelper = require('./../../../src/helpers/auth');

test('Helpers:Auth:isTokenValid', () => {
  expect(authHelper.isTokenValid).toBeDefined();
  expect(authHelper.isTokenValid(null)).toEqual(false);
  expect(authHelper.isTokenValid(undefined)).toEqual(false);
  expect(authHelper.isTokenValid('bad-token')).toEqual(false);
  expect(authHelper.isTokenValid('d1904580-cdef-11e6-9d9d-cec0c932ce01')).toEqual(true);
});
