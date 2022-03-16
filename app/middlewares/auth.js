const logger = require('../logger');
const { authError, sessionExpiredError } = require('../errors');
const { decodeToken } = require('../helpers/tokenizer');
const userService = require('../services/user');
const { TOKEN_NOT_PROVIDED, SESSION_EXPIRED } = require('../constants/errorMessages');

exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return next(authError(TOKEN_NOT_PROVIDED));
    const decoded = decodeToken(token);
    req.user = decoded;

    const { sessionClosedAt } = await userService.findUserById(decoded.id);
    if (decoded.currentSignInAt < sessionClosedAt) return next(sessionExpiredError(SESSION_EXPIRED));

    return next();
  } catch (error) {
    logger.error(error.message);
    return next(authError(error.message));
  }
};
