const { fieldIsRequired } = require('../constants/validationMessages');

exports.addCoinSchema = {
  coinExternalId: {
    in: ['body'],
    notEmpty: true,
    errorMessage: fieldIsRequired('coinExternalId')
  }
};
