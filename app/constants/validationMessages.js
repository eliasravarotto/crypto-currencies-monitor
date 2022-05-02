exports.PASSWORD_REQUIREMENTS = 'The password must be greater than or equal to 8 in length';
exports.PASSWORD_IS_REQUIRED = 'Password is required';
exports.EMAIL_IS_REQUIRED = 'Email is required';
exports.USERNAME_IS_REQUIRED = 'Username is required';
exports.FIELD_IS_REQUIRED = '{field} is required';

exports.fieldIsRequired = field => {
  const message = this.FIELD_IS_REQUIRED;
  return message.replace('{field}', field);
};
