const sequelize = require("../config/database");
const User = require("./userModel");

const db = {
  sequelize,
  User,
};

// Sync all models with DB (optional in dev)
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Sync error:", err));

module.exports = db;
