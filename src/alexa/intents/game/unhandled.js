/**
 * Game Unhandled Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  this.emit(':tell', this.t('GAME_UNHANDLED'));
};
