const { Sequelize } = require("sequelize");

// Create Sequelize instance
const sequelize = new Sequelize("khelbro", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: require("mysql2"),
  logging: false, // set true to see SQL logs
});

sequelize
  .authenticate()
  .then(() => console.log("MySQL connected"))
  .catch((err) => console.error("Unable to connect:", err));

module.exports = sequelize;
