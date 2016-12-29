const Alexa = require('alexa-sdk');

const states = require('./../constants/states');
const stopIntent = require('./../intents/stop');
const helpIntent = require('./../intents/help');
const numberQuestionIntent = require('./../intents/game/number/question');
const numberResponseIntent = require('./../intents/game/number/response');
const unhandledIntent = require('./../intents/game/unhandled');
const yesIntent = require('./../intents/game/number/replay');
const noIntent = require('./../intents/game/number/end');

/**
 * Game State Handler
 */
module.exports = Alexa.CreateStateHandler(states.GAME, {
  'AMAZON.HelpIntent': helpIntent,
  'AMAZON.CancelIntent': stopIntent,
  'AMAZON.StopIntent': stopIntent,
  'AMAZON.YesIntent': yesIntent,
  'AMAZON.NoIntent': noIntent,
  'NumberGameQuestion': numberQuestionIntent,
  'NumberGameResponse': numberResponseIntent,
  'Unhandled': unhandledIntent,
});
