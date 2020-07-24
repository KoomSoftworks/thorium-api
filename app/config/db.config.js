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
db.browser = require('../model/browser.model')(sequelize, Sequelize);
db.platform = require('../model/platform.model')(sequelize, Sequelize);
db.member = require('../model/member.model')(sequelize, Sequelize);
db.project = require('../model/project.model')(sequelize, Sequelize);
db.folder = require('../model/folder.model')(sequelize, Sequelize);
db.testCase = require('../model/testCase.model')(sequelize, Sequelize);
db.action = require('../model/action.model')(sequelize, Sequelize);
db.status = require('../model/status.model')(sequelize, Sequelize);
db.locatorType = require('../model/locatorType.model')(sequelize, Sequelize);
db.step = require('../model/step.model')(sequelize, Sequelize);

module.exports = db;