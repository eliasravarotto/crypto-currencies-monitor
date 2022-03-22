const axios = require('axios');
const { baseUrl, marketsUrl } = require('../../config').common.coinApi;
const logger = require('../logger');
const { externalApiError } = require('../errors');
const { EXTERNAL_API_ERROR } = require('../constants/errorMessages');

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
