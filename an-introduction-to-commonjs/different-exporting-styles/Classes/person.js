function Person(name) {
  this.name = name;
}

Person.prototype = {
  setName: function(name) {
    this.name = name;
  },

  speak: function() {
    console.log('Hi, my name is ' + this.name);
  }
};

module.exports = Person;
