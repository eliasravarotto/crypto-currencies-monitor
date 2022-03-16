const logger = require('../logger');
const { User } = require('../models');
const { databaseError } = require('../errors');
const { DB_CONNECTION } = require('../constants/errorMessages');

exports.createUser = async user => {
  try {
    logger.error(user);
    return await User.create(user);
  } catch (e) {
    logger.error(e);
    throw databaseError(DB_CONNECTION);
  }
};

exports.findUser = async params => {
  try {
    const response = await User.findOne({ where: params });
    return response;
  } catch (e) {
    logger.error(e);
    throw databaseError(DB_CONNECTION);
  }
};

exports.findUserByEmail = async email => {
  try {
    return await User.findOne({ where: { email } });
  } catch (e) {
    logger.error(e);
    throw databaseError(DB_CONNECTION);
  }
};

exports.findUserById = async id => {
  try {
    return await User.findOne({ where: { id } });
  } catch (e) {
    logger.error(e);
    throw databaseError(DB_CONNECTION);
  }
};

exports.updateUser = async (filter, newParameters) => {
  try {
    return await User.update(newParameters, { where: filter });
  } catch (e) {
    logger.error(e);
    throw databaseError(DB_CONNECTION);
  }
};
