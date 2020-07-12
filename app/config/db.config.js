//const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize((env.database || process.env.database), (env.username || process.env.username), (env.password || process.env.password), {
  host: env.host || process.env.host,
  dialect: env.dialect || process.env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max || process.env.max,
    min: env.min || process.env.min,
    acquire: env.acquire || process.env.acquire,
    idle: env.idle || process.env.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('../model/user.model.js')(sequelize, Sequelize);

module.exports = db;