const axios = require('axios');
const logger = require('../logger');
const { externalApiError, notFoundError } = require('../errors');
const { baseUrl, marketsUrl } = require('../../config').common.coinApi;
const { EXTERNAL_API_ERROR, COIN_NOT_FOUND } = require('../constants/errorMessages');

exports.getCoinById = async (coinId, userPreferredMoney) => {
  try {
    const url = `${baseUrl}/coins/${coinId}`;
    const { data } = await axios.get(url, {
      params: {
        vs_currency: userPreferredMoney
      }
    });
    return data;
  } catch (error) {
    logger.error(error);
    if (error.message.includes('404')) throw notFoundError(COIN_NOT_FOUND);

    throw externalApiError(EXTERNAL_API_ERROR);
  }
};

exports.getAllCoins = async userPreferredMoney => {
  try {
    const { data } = await axios.get(marketsUrl, {
      params: {
        vs_currency: userPreferredMoney
      }
    });
    return data;
  } catch (error) {
    logger.error(error);
    throw externalApiError(EXTERNAL_API_ERROR);
  }
};
