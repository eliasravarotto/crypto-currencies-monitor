exports.COINS_ID_REPLACEMENT = '{coinsIds}';
exports.CURRENCY_REPLACEMENT = '{currency}';
exports.INCLUDE_24CHANGE_REPLACEMENT = '{include24hrChange}';

exports.GET_SIMPLE_PRICE = '/simple/price';
exports.GET_SIMPLE_PRICE_PARAMS =
  '?ids={coinsIds}&vs_currencies={currency}&include_24hr_change={include24hrChange}';

exports.GET_COINS_MARKETS = '/coins/markets';
exports.GET_COINS_MARKETS_PARAMS =
  '?vs_currency={currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false';
