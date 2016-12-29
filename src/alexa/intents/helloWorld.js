/**
 * Hello World Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  const greetingIndex = ~~(Math.random() * this.t('HELLO_WORLD').length);
  this.emit(':ask',
    this.t('HELLO_WORLD')[greetingIndex],
    this.t('NEXT_REQUEST')
  );
};
