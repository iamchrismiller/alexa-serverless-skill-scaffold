/**
 * Amazon.StopIntent / Amazon.CancelIntent Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  const messageIndex = ~~(Math.random() * this.t('STOP_MESSAGES').length);
  const message = this.t('STOP_MESSAGES')[messageIndex];
  this.emit(':tell', message, message);
};
