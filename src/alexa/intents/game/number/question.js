
const states = require('./../../../constants/states');

/**
 * Get A Random Number Within
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const getNumberWithin = function(min, max) {
  return ~~(Math.random() * (max - min + 1) + min);
};

/**
 * Number Guess Game Question Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  // Set Application State to GAME
  this.handler.state = states.GAME;

  const slots = this.event.request.intent.slots || {};
  const min = slots.min && slots.min.value? slots.min.value : 1;
  const max = slots.max && slots.max.value? slots.max.value : 10;

  Object.assign(this.attributes, {
    guess: {
      min,
      max,
      value:  getNumberWithin(min, max)
    }
  });

  this.emit(':ask',
    this.t('GAME_QUESTION', {
      min: min,
      max: max
    }),
    this.t('GAME_QUESTION_REPROMPT'),
  );
};
