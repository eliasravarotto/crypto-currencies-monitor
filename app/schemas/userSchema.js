const {
  PASSWORD_REQUIREMENTS,
  USERNAME_IS_REQUIRED,
  EMAIL_IS_REQUIRED,
  PASSWORD_IS_REQUIRED
} = require('../constants/validationMessages');

exports.signUpSchema = {
  username: {
    in: ['body'],
    notEmpty: true,
    errorMessage: USERNAME_IS_REQUIRED
  },
  email: {
    in: ['body'],
    isEmail: true,
    notEmpty: true,
    errorMessage: EMAIL_IS_REQUIRED
  },
  password: {
    in: ['body'],
    notEmpty: true,
    errorMessage: PASSWORD_IS_REQUIRED,
    isLength: {
      errorMessage: PASSWORD_REQUIREMENTS,
      options: { min: 8 }
    }
    // custom: {
    //   options: password => constants.ALPHANUMERIC.test(password),
    //   errorMessage: 'The password must be alphanumeric'
    // }
  }
};

exports.signInSchema = {
  email: {
    in: ['body'],
    isEmail: true,
    notEmpty: true,
    errorMessage: EMAIL_IS_REQUIRED
  },
  password: {
    in: ['body'],
    notEmpty: true,
    errorMessage: PASSWORD_IS_REQUIRED
  }
};

exports.updateUserSchema = {
  email: {
    in: ['body'],
    isEmail: true,
    notEmpty: true,
    errorMessage: EMAIL_IS_REQUIRED
  },
  username: {
    in: ['body'],
    notEmpty: true,
    errorMessage: PASSWORD_IS_REQUIRED
  }
};
