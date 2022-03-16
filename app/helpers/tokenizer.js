const jwt = require('jsonwebtoken');
const config = require('../../config').common;

exports.generateToken = user =>
  jwt.sign(user, config.session.secret, { expiresIn: config.session.expiresIn });

exports.decodeToken = token => jwt.verify(token, config.session.secret);
