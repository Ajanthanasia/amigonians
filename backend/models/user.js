const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("condb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
