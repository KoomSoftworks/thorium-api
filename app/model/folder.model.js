const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Folder = sequelize.define('folders', {
        folderId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        projectId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'projectId'
            }
        },
        parent: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    Folder.associate = function(models) {
        Folder.hasMany(models.testId);
        Folder.belongsTo(models.projectId, {foreignKey: 'projectId', as: 'Projects'});
    }

    return Folder;
}