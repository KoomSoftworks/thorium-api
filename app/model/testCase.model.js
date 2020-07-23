const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const TestCase = sequelize.define('testcases', {
        testId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        folderId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'folders',
                key: 'folderId'
            }
        }
    });

    TestCase.associate = function(models) {
        TestCase.hasOne(models.stepId);
        TestCase.belongsTo(models.Folder, {foreignKey: 'folderId', as: 'Folders'});
    }

    return TestCase;
}