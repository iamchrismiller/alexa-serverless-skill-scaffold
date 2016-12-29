const Alexa = require('alexa-sdk');

const states = require('./../constants/states');
const stopIntent = require('./../intents/stop');
const helpIntent = require('./../intents/help');
const numberQuestionIntent = require('./../intents/game/number/question');
const numberResponseIntent = require('./../intents/game/number/response');
const unhandledIntent = require('./../intents/game/unhandled');

/**
 * Game State Handler
 */
module.exports = Alexa.CreateStateHandler(states.GAME, {
  'AMAZON.HelpIntent': helpIntent,
  'AMAZON.CancelIntent': stopIntent,
  'AMAZON.StopIntent': stopIntent,
  'NumberGameQuestion': numberQuestionIntent,
  'NumberGameResponse': numberResponseIntent,
  'Unhandled': unhandledIntent,
});
