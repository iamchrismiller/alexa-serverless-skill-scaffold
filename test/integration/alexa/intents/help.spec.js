/* eslint-disable max-len */

// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Alexa:HelpIntent', (done) => {
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: require('./../../../events/HelpIntentRequestEvent.json'),
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.outputSpeech.ssml).toEqual(
        '<speak> Here are some things you can say: think of a number, hello world. </speak>'
      );
      expect(result.response.outputSpeech.type).toEqual('SSML');
      done();
    },
  });
});
