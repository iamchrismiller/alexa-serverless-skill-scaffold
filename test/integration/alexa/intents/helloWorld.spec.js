// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Alexa:HelloWorldIntent', (done) => {
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: require('./../../../events/HelloWorldIntentRequestEvent.json'),
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        '<speak> Hello world </speak>',
        '<speak> Hello le monde </speak>',
        '<speak> Hello mundo </speak>',
        '<speak> Hello Welt </speak>',
        '<speak> Hello verden </speak>',
        '<speak> Hello dunia </speak>',
        '<speak> Hello terrarum </speak>',
        '<speak> Hello świat </speak>',
      ]).toContain(result.response.outputSpeech.ssml);
      done();
    },
  });
});
