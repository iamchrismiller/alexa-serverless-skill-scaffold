/* eslint-disable max-len */

// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Alexa:NumberGame:YesIntent', (done) => {
  const event = require('./../../../../../events/NumberGameYesIntentRequestEvent.json');
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: event,
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.shouldEndSession).toEqual(false);
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        `<speak> Okay, i've got a number between 1 and 10. What is it? </speak>`,
      ]).toContain(result.response.outputSpeech.ssml);

      expect(result.response.reprompt.outputSpeech.type).toEqual('SSML');

      expect([
        `<speak> What is the number I am thinking of? </speak>`,
      ]).toContain(result.response.reprompt.outputSpeech.ssml);

      done();
    },
  });
});
