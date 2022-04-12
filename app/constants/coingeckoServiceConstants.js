exports.HOST = '';

exports.COIN_ID_REPLACEMENT = '{coinId}';
exports.COINS_ID_REPLACEMENT = '{coinsIds}';
exports.CURRENCY_REPLACEMENT = '{currency}';
exports.MARKET_DATA_REPLACEMENT = '{marketData}';
exports.INCLUDE_24CHANGE_REPLACEMENT = '{include24hrChange}';

exports.GET_SIMPLE_PRICE_PATH = '/simple/price';
exports.GET_SIMPLE_PRICE_PARAMS =
  '?ids={coinsIds}&vs_currencies={currency}&include_24hr_change={include24hrChange}';

exports.GET_COINS_MARKETS_PATH = '/coins/markets';
exports.GET_COINS_MARKETS_PARAMS =
  '?vs_currency={currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false';

exports.GET_COIN_BY_ID_PATH = '/coins/';
exports.GET_COIN_BY_ID_PARAMS =
  '{coinId}?localization=false&tickers=false&market_data={marketData}&community_data=false&developer_data=false&sparkline=false';
