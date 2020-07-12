const db = require('../config/db.config.js');
//const config = require('../config/config.js');
const User = db.user;

checkDuplicateUserNameOrEmail = (req, res, next) => {
	User.findOne({
		where: { username: req.body.username }
	}).then(user => {
		if(user){
			return res.status(400).send({
				statusCode: 400,
				message: "Username is already in use.",
				data: {}
			});
		}
		
		User.findOne({ 
			where: { email: req.body.email } 
		}).then(user => {
			if(user){
				return res.status(400).send({
					statusCode: 400,
					message: "Email is already in use.",
					data: {}
				});
			}
			next();
		});
	});
}

const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;

module.exports = signUpVerify;