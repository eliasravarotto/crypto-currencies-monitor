const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.ENCRYPT_ERROR = 'encrypt_error';
exports.encryptError = message => internalError(message, exports.ENCRYPT_ERROR);

exports.VALIDATE_ERROR = 'validate_error';
exports.validateError = message => internalError(message, exports.VALIDATE_ERROR);

exports.NOT_FOUND_ERROR = 'not_found_error';
exports.notFoundError = message => internalError(message, exports.NOT_FOUND_ERROR);

exports.AUTH_ERROR = 'auth_error';
exports.authError = message => internalError(message, exports.AUTH_ERROR);

exports.SESSION_EXPIRED_ERROR = 'session_expired_error';
exports.sessionExpiredError = message => internalError(message, exports.SESSION_EXPIRED_ERROR);
