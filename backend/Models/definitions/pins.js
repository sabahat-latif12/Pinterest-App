const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConfig");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");
const users = require("../definitions/users");

class pins extends Model {}

pins.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING(60),

      allowNull: false,
      unique: false,

      references: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "pins",
    sequelize,
  }
);

module.exports = pins;
