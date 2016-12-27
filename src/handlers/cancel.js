/**
 * Amazon.CancelIntent Alexa Handler
 */
module.exports = function() {
  const messageIndex = ~~(Math.random() * this.t('STOP_MESSAGES').length);
  this.emit(':tell', this.t('STOP_MESSAGES')[messageIndex]);
};
