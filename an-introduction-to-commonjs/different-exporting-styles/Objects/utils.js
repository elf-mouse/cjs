var keys = require('./keys');

var Utils = {
  convertKeyCode: function(keyCode) {
    return keys[keyCode];
  },

  printMyName: function() {
    console.log('whee');
  }
};

module.exports = Utils;
