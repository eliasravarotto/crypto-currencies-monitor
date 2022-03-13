const { validationResult, checkSchema } = require('express-validator');
const logger = require('../logger');
const { validateError } = require('../errors');

const checkValidationResult = (req, res, next) => {
  const err = validationResult(req);
  if (err.isEmpty()) {
    return next();
  }
  logger.error(`An error ocurred trying validate schema: ${err.mapped()}`);
  return next(validateError(err.mapped()));
};

const validateSchema = schema => checkSchema(schema);

module.exports = schema => [validateSchema(schema), checkValidationResult];
