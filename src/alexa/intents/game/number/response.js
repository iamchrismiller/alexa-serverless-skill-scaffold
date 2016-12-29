/**
 * Number Guess Game Response Alexa Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  const slots = this.event.request.intent.slots;
  const params = {
    number: this.attributes.guess.value,
    guess: slots.guess && slots.guess.value ? slots.guess.value : null
  };

  if (params.number === params.guess) {
    this.emit(':ask',
      this.t('GAME_RESPONSE_WIN', params).concat(' ', this.t('GAME_REPLAY')),
      this.t('GAME_REPLAY'),
    );
  } else {
    this.emit(':ask',
      this.t('GAME_RESPONSE_LOSE', params).concat(' ', this.t('GAME_REPLAY')),
      this.t('GAME_REPLAY'),
    );
  }
};
