const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const db = require('../config/db.config.js');

verifyToken = (req, res, next) => {
	let token = req.get('Token');
  console.log(token);
	if (!token){
		return res.status(403).send({ 
			auth: false, message: 'No token provided.' 
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
					auth: false, 
					message: 'Fail to Authentication. ' + err 
				});
		}
		return res.status(200).send({
			auth: true,
			message: "Token validated."
		});
		next();
	});
}

const authJwt = {};
authJwt.verifyToken = verifyToken;

module.exports = authJwt;