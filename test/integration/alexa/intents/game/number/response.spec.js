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
      expect(result.response.shouldEndSession).toEqual(false);
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        '<speak> Well, I was thinking of 12. Would you like to play again? </speak>',
      ]).toContain(result.response.outputSpeech.ssml);

      expect(result.response.reprompt.outputSpeech.type).toEqual('SSML');
      expect([
        '<speak> Would you like to play again? </speak>',
      ]).toContain(result.response.reprompt.outputSpeech.ssml);

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
      expect(result.response.shouldEndSession).toEqual(false);
      expect(result.response.outputSpeech.type).toEqual('SSML');

      expect([
        '<speak> You got it. I was thinking of 25. Would you like to play again? </speak>',
      ]).toContain(result.response.outputSpeech.ssml);

      expect(result.response.reprompt.outputSpeech.type).toEqual('SSML');
      expect([
        '<speak> Would you like to play again? </speak>',
      ]).toContain(result.response.reprompt.outputSpeech.ssml);

      done();
    },
  });
});
