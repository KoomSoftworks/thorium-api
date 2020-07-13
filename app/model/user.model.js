module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		userId: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
	  	},
		name: {
			type: Sequelize.STRING
	  	},
	  	username: {
			type: Sequelize.STRING
	  	},
	  	email: {
			type: Sequelize.STRING
	  	},
	  	password: {
			type: Sequelize.STRING
	  	},
	});
	
	return User;
}