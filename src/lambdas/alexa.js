// Yarn
const Alexa = require('alexa-sdk');

// Local
const resources = require('./../alexa/resources');
const appHandler = require('./../alexa/handlers/app');
const gameHandler = require('./../alexa/handlers/game');

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
  alexa.APP_ID = process.env.ALEXA_APP_ID;
  alexa.resources = resources;
  alexa.registerHandlers(
    appHandler,
    gameHandler
  );
  alexa.execute();
};
