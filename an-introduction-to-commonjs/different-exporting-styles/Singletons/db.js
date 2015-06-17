function Db() {}

Db.prototype = {
  connect: function(dsn) {},
  query: function(obj) {}
};

// There will only ever be one instance of the database class
module.exports = new Db();
