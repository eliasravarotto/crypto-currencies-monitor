const logger = require('../logger');
const { notFoundError, defaultError } = require('../errors');
const { ARS, USD, JPY, EUR } = require('../constants/currencies');
const { CURRENCY_NOT_FOUND } = require('../constants/errorMessages');

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
