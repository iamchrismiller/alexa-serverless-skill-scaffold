/**
 * Hello World Alexa Handler
 */
module.exports = function() {
  const greetingIndex = ~~(Math.random() * this.t('GREETING').length);
  this.emit(':tell', this.t('GREETING')[greetingIndex]);
};
