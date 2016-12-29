/* eslint-disable max-len */

// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Alexa:NumberGameResponse', (done) => {
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: require('./../../../../../events/NumberGameResponseIntentRequestEvent.json'),
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        '<speak> Well, I was thinking of 12 </speak>',
      ]).toContain(result.response.outputSpeech.ssml);
      done();
    },
  });
});

test('Lambda:Alexa:NumberGameResponse:Success', (done) => {
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: require('./../../../../../events/NumberGameResponseIntentRequestSuccessEvent.json'),
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        '<speak> You got it. I was thinking of 25 </speak>',
      ]).toContain(result.response.outputSpeech.ssml);
      done();
    },
  });
});
