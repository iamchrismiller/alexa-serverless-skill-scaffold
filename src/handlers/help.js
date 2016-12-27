/**
 * Amazon.HelpIntent Alexa Handler
 */
module.exports = function() {
  this.emit(':tell', this.t(['HELP_MESSAGE']), this.t(['HELP_REPROMPT']));
};
