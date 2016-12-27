// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');

// Local
const lambdaPath = path.join(__dirname, '../../src/index.js');

lambdaLocal.getLogger().level = 'error';

test('Index Handler Main', (done) => {
  lambdaLocal.execute({
    lambdaPath: lambdaPath,
    lambdaHandler: 'main',
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.statusCode).toEqual(200);
      expect(JSON.parse(result.body)).toEqual({
        message: 'Hello World, Hey!',
      });
      done();
    },
  });
});

test('Index Handler Alexa', (done) => {
  lambdaLocal.execute({
    lambdaPath: lambdaPath,
    lambdaHandler: 'alexa',
    event: require('./../events/HelloWorldRequestEvent.json'),
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        '<speak> Hello </speak>',
        '<speak> Hey There </speak>',
        '<speak> Hi </speak>',
      ]).toContain(result.response.outputSpeech.ssml);
      done();
    },
  });
});
