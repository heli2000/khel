const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // adjust path as needed

const Otp = sequelize.define(
  "Otp",
  {
    otpId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdDateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: "otps",
  }
);

module.exports = Otp;
