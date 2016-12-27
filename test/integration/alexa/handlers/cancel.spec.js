// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Alexa:HelpIntent', (done) => {
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: require('./../../../events/CancelIntentRequestEvent.json'),
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect([
        '<speak> Goodbye! </speak>',
        '<speak> Talk soon! </speak>',
      ]).toContain(result.response.outputSpeech.ssml);
      expect(result.response.outputSpeech.type).toEqual('SSML');
      done();
    },
  });
});
