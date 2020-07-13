const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAMEDB, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  operatorsAliases: 0,
 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('../model/user.model.js')(sequelize, Sequelize);

module.exports = db;