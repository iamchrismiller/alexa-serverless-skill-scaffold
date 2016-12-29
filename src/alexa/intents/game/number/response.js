/**
 * Number Guess Game Response Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  const userGuess = this.event.request.intent.slots.guess;

  if (userGuess && userGuess.value === this.attributes.guess.value) {
    this.emit(':tell',
      this.t('GAME_RESPONSE_WIN', {
        number: this.attributes.guess.value,
      })
    );

  } else {
    this.emit(':tell',
      this.t('GAME_RESPONSE_LOSE', {
        number: this.attributes.guess.value,
      })
    );
  }
};
