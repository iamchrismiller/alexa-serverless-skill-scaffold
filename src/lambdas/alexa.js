// Yarn
const Alexa = require('alexa-sdk');

// Local
const resources = require('./../alexa/resources');
const helloWorldIntentHandler = require('./../alexa/handlers/helloWorld');
const helpIntentHandler = require('./../alexa/handlers/help');
const cancelIntentHandler = require('./../alexa/handlers/cancel');

/**
 * Alexa Handler
 * @NOTE Optionally Set Lambda Environment Variable ALEXA_APP_ID
 *
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.main = (event, context, callback) => {
  const alexa = Alexa.handler(event, context);
  // alexa.APP_ID = process.env.ALEXA_APP_ID;
  alexa.resources = resources;
  // This could be a seperate Definition?
  alexa.registerHandlers({
    'HelloWorld': helloWorldIntentHandler,
    'AMAZON.HelpIntent': helpIntentHandler,
    'AMAZON.CancelIntent': cancelIntentHandler,
  });
  alexa.execute();
};
