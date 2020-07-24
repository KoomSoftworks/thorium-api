module.exports = (sequelize, Sequelize) => {
    const Step = sequelize.define('steps', {
        stepId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        index: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        actionId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'actions',
                key: 'actionId'
            }
        },
        value: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        locatorTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'locatorTypes',
                key: 'locatorTypeId'
            }
        },
        locatorValue: {
            type: Sequelize.STRING,
        },
        screenshot: {
            type: Sequelize.STRING,
        },
        skip: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        statusId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'statuses',
                key: 'statusId'
            }
        },
        testId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model : 'testcases',
                key: 'testId'
            }
        }
    });

    Step.associate = function(models) {
        Step.hasOne(models.actionId);
        Step.hasOne(models.locatorTypeId);
        Step.hasOne(models.statusId);
        Step.belongsTo(models.TestCase, {foreignKey: 'testId', as: 'TestCases'});
    }

    return Step;
}