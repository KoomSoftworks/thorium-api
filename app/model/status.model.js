module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define('status', {
        statusId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    Status.associate = function(models) {
        Status.belongsTo(models.Step, {foreignKey: 'stepId', as: 'Steps'});
    }

    return Status;
}