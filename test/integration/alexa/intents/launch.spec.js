/* eslint-disable max-len */

// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Alexa:LaunchRequest', (done) => {
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: require('./../../../events/LaunchRequestEvent.json'),
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.shouldEndSession).toEqual(false);
      expect([
        '<speak> scaffold: You can ask me to think of a number, hello world or say help. What would you like? </speak>',
      ]).toContain(result.response.outputSpeech.ssml);
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        '<speak> This is when you tell me what to do. Maybe ask me to think of a number? </speak>',
      ]).toContain(result.response.reprompt.outputSpeech.ssml);
      expect(result.response.reprompt.outputSpeech.type).toEqual('SSML');

      done();
    },
  });
});
