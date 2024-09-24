require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("database created sucessfully");
  })
  .catch((error) => {
    console.log(`database not created ${error} `);
  });

module.exports = sequelize;
