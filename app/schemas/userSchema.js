const {
  PASSWORD_REQUIREMENTS,
  USERNAME_IS_REQUIRED,
  EMAIL_IS_REQUIRED,
  PASSWORD_IS_REQUIRED,
  EMAIL_ALREADY_IN_USE
} = require('../constants/validationMessages');
const { validateError } = require('../errors');
const { findUserByEmail } = require('../services/user');

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
    errorMessage: EMAIL_IS_REQUIRED,
    custom: {
      options: async email => {
        const userFound = await findUserByEmail(email);
        if (userFound) {
          throw validateError();
        }
      },
      errorMessage: EMAIL_ALREADY_IN_USE
    }
  },
  password: {
    in: ['body'],
    notEmpty: true,
    errorMessage: PASSWORD_IS_REQUIRED,
    isLength: {
      errorMessage: PASSWORD_REQUIREMENTS,
      options: { min: 8 }
    }
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
