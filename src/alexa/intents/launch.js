
const states = require('./../constants/states');

/**
 * Amazon.LaunchRequest Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  // Set Application State to START
  this.handler.state = states.START;
  this.emit(':tell',
    this.t(['SKILL_NAME']) + ': ' +  this.t(['WELCOME_MESSAGE']),
    this.t(['WELCOME_MESSAGE'])
  );
};
