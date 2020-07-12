const db = require('../config/db.config.js');
const config = require('../config/config.js');
const User = db.user;

let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
const env = require('../config/env.js');

exports.signup = (req, res) => {
	User.create({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
		projects: []
	}).then(user => {
		res.status(200).send({
			statusCode: 200,
			message: user.username + " has been registered.",
			data: {}
		});
	}).catch(err => {
		res.status(500).send({
			statusCode: 500,
			message: err,
			data: {}
		});
	})
}

exports.signin = (req, res) => {
	User.findOne({
		where: { username: req.body.username }
	}).then(user => {
		if (!user) { 
			return res.status(404).send({
				statusCode: 404,
				message: 'User has not been found.',
				data: {}
			}); 
		}

		let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({
				statusCode: 401, 
				message: "Invalid password.",
				data: {}
			});
		}
		
		let token = jwt.sign({ id: user.id }, (config.secret || process.env.SECRET), {
		  expiresIn: 86400 // 24
		});
		
		res.status(200).send({
			statusCode: 200,
			message: 'Success',
			data: {
				accessToken: token
			} 
		});
		
	}).catch(err => {
		 res.status(500).send({
			statusCode: 500,
			message: err,
			data: {}
		}); 
	});
}