// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Create', (done) => {
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../src/lambdas/create.js'),
    lambdaHandler: 'main',
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.statusCode).toEqual(201);
      expect(result.headers['Access-Control-Allow-Origin']).toEqual('*');
      expect(JSON.parse(result.body)).toEqual({
        message: 'Created Resource',
      });
      done();
    },
  });
});
