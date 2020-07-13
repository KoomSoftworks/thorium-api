module.exports = (sequelize, Sequelize) => {
    const Browser = sequelize.define('browsers', {
        browserId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncremente: true
        },
        name : {
            type: Sequelize.STRING,
            allowNull: false
        },
        version: {
            type: Sequelize.STRING,
            allowNull: false
        },
        platformId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references : {
                model: 'platforms',
                key: 'platformId'
            }
        }
    });

    Browser.associate = function(models) {
        Browser.hasOne(models.platformId);
    }

    return Browser;
}