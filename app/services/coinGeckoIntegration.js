const {
  COINS_ID_REPLACEMENT,
  CURRENCY_REPLACEMENT,
  INCLUDE_24CHANGE_REPLACEMENT,
  COIN_ID_REPLACEMENT
} = require('../constants/coingeckoServiceConstants');

exports.createHashMapGetSimplePrice = (coinsId, currency, include24hrChange = false) => {
  const hashmap = new Map();
  hashmap.set(COINS_ID_REPLACEMENT, coinsId);
  hashmap.set(CURRENCY_REPLACEMENT, currency);
  hashmap.set(INCLUDE_24CHANGE_REPLACEMENT, include24hrChange);

  return hashmap;
};

exports.createHashMapGetCoinsMarkets = currency => {
  const hashmap = new Map();
  hashmap.set(CURRENCY_REPLACEMENT, currency);

  return hashmap;
};

exports.createHashMapGetCoinById = coinId => {
  const hashmap = new Map();
  hashmap.set(COIN_ID_REPLACEMENT, coinId);

  return hashmap;
};
