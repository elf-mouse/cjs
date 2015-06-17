var f1 = require('/usr/local/projects/export_this/function');
var f2 = require('./function'); // Same location, different string parameter
assert(f1 === f2); // true
