const logger = require('../logger');
const { create, getCoinsByParams } = require('../services/coin');
const { coinSerializer, topSerializer } = require('../serializers/coinSerializer');
const { getCoinById } = require('../services/coinGecko');

exports.addCoin = async (req, res, next) => {
  try {
    const { coinExternalId } = req.body;
    const { id: userId } = req.user;

    const coin = await create({
      coinExternalId,
      userId
    });

    const response = coinSerializer(coin);
    return res.status(201).json(response);
  } catch (error) {
    logger.error(`Error trying to create add coin. ${error.message}`);
    return next(error);
  }
};

exports.getUserTop = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const dbCoins = await getCoinsByParams({ userId });
    const promises = dbCoins.map(coin => getCoinById(coin.coinExternalId));
    const data = await Promise.all(promises);
    return res.status(200).json(topSerializer(data));
  } catch (error) {
    logger.error(`Error trying to create add coin. ${error.message}`);
    return next(error);
  }
};
