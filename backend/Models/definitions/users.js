const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConfig");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");

class users extends Model {}

users.init(
  {
    userId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(34),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(34),
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
  }
);

users.beforeCreate(async (user) => {
  user.userId = uuid();
  user.password = await hash(user.password, 10);
});

module.exports = users;
