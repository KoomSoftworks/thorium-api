const db = require('../config/db.config.js');
const config = require('../config/config.js');
const User = db.user;

let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
	User.create({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
		projects: ''
	}).then(user => {
		res.send(user.username + " has been registered.");
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
}

exports.signin = (req, res) => {
	User.findOne({
		where: { username: req.body.username }
	}).then(user => {
		if (!user) { return res.status(404).send('User has not been found.'); }

		let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid password." });
		}
		
		let token = jwt.sign({ id: user.id }, config.secret, {
		  expiresIn: 86400 // 24
		});
		
		res.status(200).send({ auth: true, accessToken: token });
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}