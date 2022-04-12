const axios = require('axios');
const logger = require('../logger');
const { externalApiError, notFoundError } = require('../errors');
const { HOST } = require('../../config').common.coinApi;
const { EXTERNAL_API_ERROR, COIN_NOT_FOUND } = require('../constants/errorMessages');
const { createParametersForEndpoint } = require('../helpers/Utils');
const {
  GET_COINS_MARKETS_PARAMS,
  GET_COINS_MARKETS_PATH,
  GET_COIN_BY_ID_PARAMS,
  GET_COIN_BY_ID_PATH
} = require('../constants/coingeckoServiceConstants');
const { createHashMapGetCoinsMarkets, createHashMapGetCoinById } = require('./coinGeckoIntegration');

exports.getCoinById = async coinId => {
  try {
    const hashmap = createHashMapGetCoinById(coinId);
    const params = createParametersForEndpoint(hashmap, GET_COIN_BY_ID_PARAMS);

    const { data } = await axios.get(HOST + GET_COIN_BY_ID_PATH + params);
    return data;
  } catch (error) {
    logger.error(error);
    if (error.message.includes('404')) throw notFoundError(COIN_NOT_FOUND);

    throw externalApiError(EXTERNAL_API_ERROR);
  }
};

exports.getAllCoins = async userPreferredMoney => {
  try {
    const hasMap = createHashMapGetCoinsMarkets(userPreferredMoney);
    const params = createParametersForEndpoint(hasMap, GET_COINS_MARKETS_PARAMS);

    const { data } = await axios.get(HOST + GET_COINS_MARKETS_PATH + params);

    return data;
  } catch (error) {
    logger.error(error);
    throw externalApiError(EXTERNAL_API_ERROR);
  }
};
