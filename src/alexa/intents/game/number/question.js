
const states = require('./../../../constants/states');

/**
 * Number Guess Game Question Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  // Set Application State to GAME
  this.handler.state = states.GAME;

  const slots = this.event.request.intent.slots;
  const min = slots.min ? slots.min.value : 1;
  const max = slots.max ? slots.max.value : 100;

  Object.assign(this.attributes, {
    guess: {
      min,
      max,
      value:  ~~(Math.random() * (max - min + 1) + min)
    }
  });

  // Move to resources with variables
  this.emit(':tell',
    `Okay, i've got a number between ${min} and ${max}. What is it?`
  );
};
