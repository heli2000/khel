const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // adjust path as needed

const User = sequelize.define(
  "User",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true, // Note: Sequelize does not support 'trim' directly
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1,
    },
  },
  {
    timestamps: false,
    tableName: "users",
  }
);

module.exports = User;
