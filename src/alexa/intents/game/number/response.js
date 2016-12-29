/**
 * Number Guess Game Response Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  const userGuess = this.event.request.intent.slots.guess;

  if (userGuess && userGuess.value === this.attributes.guess.value) {
    this.emit(':tell',
      `You got it. I was thinking of ${this.attributes.guess.value}`
    );

  } else {
    this.emit(':tell',
      `Well, I was thinking of ${this.attributes.guess.value}`
    );
  }
};
