
const states = require('./../constants/states');

/**
 * Amazon.LaunchRequest Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  // Set Application State to APP
  this.handler.state = states.APP;
  this.emit(':tell',
    this.t(['SKILL_NAME']) + ': ' +  this.t(['WELCOME_MESSAGE']),
    this.t(['WELCOME_MESSAGE'])
  );
};
