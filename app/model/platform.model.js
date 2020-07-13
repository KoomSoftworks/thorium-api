module.exports = (sequelize, Sequelize) => {
    const Platform = sequelize.define('platforms', {
        platformId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        name : {
            type: Sequelize.STRING,
            allowNull: false,
        },
        version : {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    Platform.associate = function(models) {
        Platform.belongsTo(models.Browser, {foreignKey: 'browserId', as: 'Browsers'});
    };

    return Platform;
}