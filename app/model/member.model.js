const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define('members', {
        memberId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'userId'
            }
        },
        projectId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'projectId'
            }
        },
        type: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    Member.associate = function(models) {
        Member.hasOne(models.projectId);
        Member.hasOne(models.userId);
    }

    return Member;
}