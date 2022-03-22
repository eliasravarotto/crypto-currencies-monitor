const logger = require('../logger');
const { Coin } = require('../models');
const { databaseError } = require('../errors');
const { DB_CONNECTION } = require('../constants/errorMessages');

exports.getUserCoins = async (offset, limit, userId) => {
  try {
    return await Coin.findAll({
      offset,
      limit,
      where: { user_id: userId },
      order: [['created_at', 'DESC']]
    });
  } catch (e) {
    logger.error(e);
    throw databaseError(DB_CONNECTION);
  }
};
