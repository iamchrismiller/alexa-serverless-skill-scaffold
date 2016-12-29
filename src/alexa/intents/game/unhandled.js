/**
 * Game Unhandled Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  this.emit(':listen',
    this.t('GAME_UNHANDLED'),
    this.t('GAME_UNHANDLED_REPROMPT'),
  );
};
