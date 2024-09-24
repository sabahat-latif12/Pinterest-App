const sequelize = require("../bin/dbConfig");
const users = require("./definitions/users");
const follow = require("./definitions/follow");
const pins = require("./definitions/pins"); // Import the Pins model

const models = { users, follow, pins };

const db = {};

// Define associations

// Follow relationships
users.belongsToMany(users, {
  through: follow,
  as: "Followers", // Users who follow the user
  foreignKey: "followingId", // The user being followed
});

users.belongsToMany(users, {
  through: follow,
  as: "Following", // Users the user follows
  foreignKey: "followerId", // The user who is following
});

// Define the one-to-many relationship between users and pins
users.hasMany(pins, {
  foreignKey: "userId", // Foreign key in the pins table
  as: "Pins", // Alias for accessing the pins of a user
});

pins.belongsTo(users, {
  foreignKey: "userId", // The user who created the pin
  as: "User", // Alias for accessing the user who owns the pin
});

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
