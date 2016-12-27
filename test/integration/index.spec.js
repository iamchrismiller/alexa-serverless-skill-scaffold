const path = require('path');

const lambdaLocal = require('lambda-local');
const lambdaPath = path.join(__dirname, '../../src/index.js');
const timeout = 3000;

test('Index Handler Main', (done) => {
  lambdaLocal.execute({
    lambdaPath: lambdaPath,
    lambdaHandler: 'main',
    mute: true,
    callbackWaitsForEmptyEventLoop: false,
    timeoutMs: timeout,
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
    mute: true,
    callbackWaitsForEmptyEventLoop: false,
    timeoutMs: timeout,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect(result.response.outputSpeech.ssml).toEqual(
        '<speak> Hello World, Hey! </speak>'
      );
      done();
    },
  });
});
