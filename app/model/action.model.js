module.exports = (sequelize, Sequelize) => {
    const Action = sequelize.define('actions', {
        actionId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name : {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        scope: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    Action.associate = function(models) {
        Action.belongsTo(models.Step, {foreignKey: 'stepId', as: 'Steps'});
    }

    return Action;
}