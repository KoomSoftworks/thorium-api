const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const db = require('../config/db.config.js');

verifyToken = (req, res, next) => {
	let token = req.get('Token');
	
	if (!token){
		return res.status(403).send({ 
			statusCode: 403,
			message: 'No token provided.',
			data: {}
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
				statusCode: 500, 
				message: 'Failed to Authentication. ' + err,
				data: {}
			});
		}

		return res.status(200).send({
			statusCode: 200,
			message: "Token validated.",
			data: {}
		});
	});
}

const authJwt = {};
authJwt.verifyToken = verifyToken;

module.exports = authJwt;