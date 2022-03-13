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
    const user = await this.findUserById(filter.id);
    if (!user) return user;
    return user.update({ ...newParameters });
  } catch (e) {
    logger.error(e);
    throw databaseError(DB_CONNECTION);
  }
};
