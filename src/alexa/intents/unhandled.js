/**
 * Unhandled Handler
 * @this Refers to Alexa SDK Context
 */
module.exports = function() {
  this.emit(':ask',
    this.t('UNHANDLED'),
    this.t('HELP_MESSAGE')
  );
};
