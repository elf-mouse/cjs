var keys = require('./keys');

document.addEventListener('keyup', function(e) {
  var key = keys[e.keyCode];
});
