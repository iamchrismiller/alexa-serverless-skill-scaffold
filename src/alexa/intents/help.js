
/**
 * Amazon.HelpIntent Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  this.emit(':tell', this.t(['HELP_MESSAGE']), this.t(['HELP_REPROMPT']));
};
