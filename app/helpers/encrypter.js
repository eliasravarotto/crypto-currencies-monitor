const bcrypt = require('bcrypt');
const logger = require('../logger');
const { encryptError } = require('../errors');
const config = require('../../config').common;

exports.encrypt = pass => {
  try {
    logger.info('encrypting user passwors');
    return bcrypt.hash(pass, parseInt(config.encrypt.saltRounds));
  } catch (e) {
    logger.error(e.message);
    throw encryptError(e.message);
  }
};

exports.compare = (pass, passEncrypted) => bcrypt.compare(pass, passEncrypted);
