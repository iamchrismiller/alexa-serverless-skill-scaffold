
const numberHelper = require('./../../../src/helpers/number');

test('Helpers:Numbers:getNumberWithin', () => {
  expect(numberHelper.getNumberWithin).toBeDefined();

  expect([
    5, 6, 7, 8, 9, 10,
  ]).toContain(numberHelper.getNumberWithin(5, 10));

  expect([
    1, 2, 3, 4, 5,
  ]).toContain(numberHelper.getNumberWithin(1, 5));

  expect([
    1, 2,
  ]).toContain(numberHelper.getNumberWithin(1, 2));

  expect([
    1,
  ]).toContain(numberHelper.getNumberWithin(1, 1));
});
