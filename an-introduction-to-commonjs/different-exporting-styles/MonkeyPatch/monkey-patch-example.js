require('./shim');

var foo = function() {
};

// Foo now has .bind
foo.bind(this);
