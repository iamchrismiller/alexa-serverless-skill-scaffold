/**
 * Hello World Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  const greetingIndex = ~~(Math.random() * this.t('HELLO_WORLD').length);
  this.emit(':tell', this.t('HELLO_WORLD')[greetingIndex]);
};
