/* eslint-disable max-len */

// Node
const path = require('path');

// Yarn
const lambdaLocal = require('lambda-local');
lambdaLocal.getLogger().level = 'error';

test('Lambda:Alexa:NumberGameQuestion', (done) => {
  const event = require('./../../../../../events/NumberGameQuestionIntentRequestEvent.json');
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: event,
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      const slots = event.request.intent.slots;
      expect(result.version).toEqual('1.0');
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        `<speak> Okay, i've got a number between ${slots.min.value} and ${slots.max.value}. What is it? </speak>`,
      ]).toContain(result.response.outputSpeech.ssml);
      done();
    },
  });
});

test('Lambda:Alexa:NumberGameQuestion:BlankSlots', (done) => {
  lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../../../../../../src/lambdas/alexa.js'),
    lambdaHandler: 'main',
    event: require('./../../../../../events/NumberGameQuestionIntentRequestEventWithoutBounds.json'),
    callbackWaitsForEmptyEventLoop: false,
    callback: function(err, result) {
      expect(result.version).toEqual('1.0');
      expect(result.response.outputSpeech.type).toEqual('SSML');
      expect([
        `<speak> Okay, i've got a number between 1 and 100. What is it? </speak>`,
      ]).toContain(result.response.outputSpeech.ssml);
      done();
    },
  });
});
