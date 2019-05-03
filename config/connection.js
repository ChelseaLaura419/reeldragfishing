
var Sequelize = require("sequelize");

var sequelize = new Sequelize("trips", "root", "", {
  host: "127.0.0.1",
  port: 3300,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
