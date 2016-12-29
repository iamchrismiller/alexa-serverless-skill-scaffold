/* eslint-disable max-len */

'use strict';

/**
 * i18n Strings for Alexa Handlers
 */
module.exports = {
  'en-US': {
    translation: {
      // This could be an environment variable?
      SKILL_NAME: 'scaffold',
      WELCOME_MESSAGE: 'You can ask me to think of a number or say help. What would you like?',
      HELP_MESSAGE: 'Here are some things you can say: think of a number, hello world.',
      HELP_REPROMPT: 'What can I do for you?',
      STOP_MESSAGES: [
        'Okay, Goodbye!',
        'Okay, Talk soon!',
      ],
      HELLO_WORLD: [
        'Hello world', 'Hello le monde', 'Hello mundo', 'Hello Welt',
        'Hello verden', 'Hello dunia', 'Hello terrarum', 'Hello świat',
      ],
      UNHANDLED: 'Hmm, not sure I understand.',
      GAME_QUESTION: `Okay, i've got a number between {{min}} and {{max}}. What is it?`,
      GAME_RESPONSE_WIN: `You got it. I was thinking of {{number}}`,
      GAME_RESPONSE_LOSE: `Well, I was thinking of {{number}}`,
      GAME_UNHANDLED: 'Try responding with something like: are you thinking of number 5',
      GENERIC_ERROR: 'Looks like something went wrong, try again later!',
    },
  },
};
