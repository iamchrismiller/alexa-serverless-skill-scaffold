'use strict';

/**
 * Alexa Handlers
 */
module.exports = {
  HelloWorld: function() {
    this.emit(':tell', 'Hello World, Hey!');
  },
};
