/* eslint-disable max-len */

// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Alexa:NumberGame:NoIntent', (done) => {
  const event = require('./../../../../../events/NumberGameNoIntentRequestEvent.json');
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: event,
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.shouldEndSession).toEqual(true);
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        '<speak> Okay, Goodbye! </speak>',
        '<speak> Okay, Talk to you soon! </speak>',
      ]).toContain(result.response.outputSpeech.ssml);

      done();
    },
  });
});
