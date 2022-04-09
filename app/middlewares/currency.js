const logger = require('../logger');
const { notFoundError, defaultError, validateError } = require('../errors');
const { ARS, USD, JPY, EUR } = require('../constants/currencies');
const { CURRENCY_NOT_FOUND, COIN_DUPLICATED } = require('../constants/errorMessages');
const { getCoinById } = require('../services/coinGecko');
const { findUniqCoinBy } = require('../services/coin');

exports.verifyCurrency = ({ params: { preferredMoney } }, res, next) => {
  try {
    if ([ARS, USD, JPY, EUR].includes(preferredMoney)) {
      return next();
    }
    throw notFoundError(CURRENCY_NOT_FOUND);
  } catch (error) {
    logger.error(error.message);
    return next(defaultError(error.message));
  }
};

exports.verifyIfCoinExist = async (req, res, next) => {
  try {
    const { preferredMoney } = req.user;
    const { coinExternalId } = req.body;
    await getCoinById(coinExternalId, preferredMoney);
    return next();
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

exports.verifyDuplicated = async (req, res, next) => {
  try {
    const { coinExternalId } = req.body;
    const { id: userId } = req.user;
    const coin = await findUniqCoinBy({ userId, coinExternalId });
    if (coin) throw validateError(COIN_DUPLICATED);
    return next();
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};
