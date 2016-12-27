/**
 * Amazon.CancelIntent Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  const messageIndex = ~~(Math.random() * this.t('STOP_MESSAGES').length);
  this.emit(':tell', this.t('STOP_MESSAGES')[messageIndex]);
};
