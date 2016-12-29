// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Alexa:StopIntent', (done) => {
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: require('./../../../events/LaunchIntentRequestEvent.json'),
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      /* eslint-disable max-len */
      expect([
        '<speak> scaffold: You can ask me to think of a number or say help. What would you like? </speak>',
      ]).toContain(result.response.outputSpeech.ssml);
      /* eslint-enable max-len */
      expect(result.response.outputSpeech.type).toEqual('SSML');
      done();
    },
  });
});
