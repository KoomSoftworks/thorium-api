//const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.database, process.env.username, process.env.password, {
  host: process.env.host,
  dialect: process.env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: process.env.max,
    min: process.env.min,
    acquire: process.env.acquire,
    idle: process.env.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('../model/user.model.js')(sequelize, Sequelize);

module.exports = db;