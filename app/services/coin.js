const logger = require('../logger');
const { Coin } = require('../models');
const { databaseError } = require('../errors');
const { DB_CONNECTION } = require('../constants/errorMessages');
const { DEFAULT_OFFSET, DEFAULT_LIMIT } = require('../constants/pagination');

exports.getCoinsByParams = async (params, offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT) => {
  try {
    return await Coin.findAll({
      offset,
      limit,
      where: params,
      order: [['created_at', 'DESC']]
    });
  } catch (error) {
    logger.error(error);
    throw databaseError(DB_CONNECTION);
  }
};

exports.create = async coinData => {
  try {
    return await Coin.create(coinData);
  } catch (error) {
    logger.error(error);
    throw databaseError(DB_CONNECTION);
  }
};

exports.findUniqCoinBy = async params => {
  try {
    return await Coin.findOne({ where: params });
  } catch (error) {
    logger.error(error);
    throw databaseError(DB_CONNECTION);
  }
};
