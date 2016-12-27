'use strict';

// Yarn
const Alexa = require('alexa-sdk');

// Local
const resources = require('./resources');
const helloWorldIntentHandler = require('./handlers/helloWorld');
const helpIntentHandler = require('./handlers/help');
const cancelIntentHandler = require('./handlers/cancel');

/**
 * Alexa Handler (index.alexa)
 * @NOTE Must Set Lambda Environment Variable ALEXA_APP_ID
 *
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.alexa = (event, context, callback) => {
  const alexa = Alexa.handler(event, context);
  // alexa.APP_ID = process.env.ALEXA_APP_ID;
  alexa.resources = resources;
  // This could be a seperate Definition?
  alexa.registerHandlers({
    'HelloWorld':  helloWorldIntentHandler,
    'AMAZON.HelpIntent': helpIntentHandler,
    'AMAZON.CancelIntent': cancelIntentHandler,
  });
  alexa.execute();
};

/**
 * Main Handler (index.main)
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World, Hey!',
      input: event,
    }),
  };

  callback(null, response);
};
