const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConfig");
const { v4: uuid } = require("uuid");
const users = require("./users");
class follow extends Model {}

follow.init(
  {
    followerId: {
      type: DataTypes.STRING(60),
      allowNull: false,
      references: {
        model: users,
        key: "userId",
      },
    },
    followingId: {
      type: DataTypes.STRING(60),
      allowNull: false,
      references: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    sequelize,
    modelName: "follow",
    timestamps: true,
  }
);
follow.beforeCreate(async (user) => {
  user.id = uuid();
});

module.exports = follow;
