const Alexa = require('alexa-sdk');

const states = require('./../constants/states');
const launchRequestIntent = require('./../intents/launch');
const stopIntent = require('./../intents/stop');
const helpIntent = require('./../intents/help');
const helloWorldIntent = require('./../intents/helloWorld');
const numberQuestionIntent = require('./../intents/game/number/question');
const unhandledIntent = require('./../intents/unhandled');

/**
 * App State Handler
 */
module.exports = Alexa.CreateStateHandler(states.APP, {
  'LaunchRequest': launchRequestIntent,
  'AMAZON.HelpIntent': helpIntent,
  'AMAZON.CancelIntent': stopIntent,
  'AMAZON.StopIntent': stopIntent,
  'HelloWorld': helloWorldIntent,
  'NumberGameQuestion': numberQuestionIntent,
  'Unhandled': unhandledIntent,
});
