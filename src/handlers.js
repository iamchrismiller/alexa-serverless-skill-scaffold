'use strict';

/**
 * Alexa Skill Handlers
 */
module.exports = {
  'HelloWorld': function() {
    const greetingIndex = ~~(Math.random() * this.t('GREETING').length);
    this.emit(':tell', this.t('GREETING')[greetingIndex]);
  },
  'AMAZON.CancelIntent': function() {
    const messageIndex = ~~(Math.random() * this.t('STOP_MESSAGES').length);
    this.emit(':tell', this.t('STOP_MESSAGES')[messageIndex]);
  },
  'AMAZON.HelpIntent': function() {
    this.emit(':tell', this.t(['HELP_MESSAGE']), this.t(['HELP_REPROMPT']));
  },
};
