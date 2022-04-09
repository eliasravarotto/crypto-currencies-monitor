const properties = ['coinExternalId', 'createdAt'];
const coinsProp = ['id', 'symbol', 'name', 'image', 'market_data'];

exports.coinSerializer = coin => {
  const response = properties.reduce((target, key) => {
    target[key] = coin[key];
    return target;
  }, {});

  return response;
};

exports.topSerializer = coins => {
  const responseArray = coins.map(coin => {
    const coinSerialized = coinsProp.reduce((target, key) => {
      target[key] = coin[key];
      return target;
    }, {});
    coinSerialized.market_data = {};
    coinSerialized.market_data.current_price = coin.market_data.current_price;
    coinSerialized.market_data.low_24h = coin.market_data.low_24h;
    coinSerialized.market_data.high_24h = coin.market_data.high_24h;
    return coinSerialized;
  });
  return responseArray;
};
