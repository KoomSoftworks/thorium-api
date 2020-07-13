module.exports = (sequelize, Sequelize) => {
    const LocatorType = sequelize.define('locatorTypes', {
        locatorTypeId: {
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

    LocatorType.assoaciate = function(models) {
        LocatorType.belongsTo(models.Step, {foreignKey: 'stepId', as: 'Steps'});
    }

    return LocatorType;
}