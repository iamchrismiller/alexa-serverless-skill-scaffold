'use strict';

const Alexa = require('alexa-sdk');

const handlers = require('./handlers');
const resources = require('./resources');

/**
 * Alexa Handler (index.alexa)
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports.alexa = (event, context, callback) => {
    const alexa = Alexa.handler(event, context);
    // @NOTE Must Set Lambda Environment Variable ALEXA_APP_ID
    // alexa.APP_ID = process.env.ALEXA_APP_ID;
    // alexa.locale = 'en-US';
    alexa.resources = resources;
    alexa.registerHandlers(handlers);
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
