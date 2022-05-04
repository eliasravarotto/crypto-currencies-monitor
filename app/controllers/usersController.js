const logger = require('../logger');
const { encrypt, compare } = require('../helpers/encrypter');
const { createUser, updateUser, findUserById, findUser } = require('../services/user');
const { generateToken } = require('../helpers/tokenizer');
const { userSerializer } = require('../serializers/userSerializer');
const { signUpMapper } = require('../mappers/userMapper');
const { authError } = require('../errors');
const { SUCCESS_SIGNOUT } = require('../constants/successMessages');
const { BAD_CREDENTIALS } = require('../constants/errorMessages');

exports.signUp = async (req, res, next) => {
  try {
    const user = signUpMapper(req.body);

    const passEncrypted = await encrypt(user.password);
    const newUser = await createUser({ ...user, password: passEncrypted });

    const token = generateToken({ id: newUser.id, username: newUser.username, email: newUser.email });
    const response = userSerializer(newUser, token);

    logger.info('User created:', newUser);
    return res.status(201).send({ user: response });
  } catch (e) {
    logger.error('User could not be created');
    logger.error(e);
    return next(e);
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userFound = await findUser({ email });
    if (!userFound) throw authError(BAD_CREDENTIALS);

    if (!(await compare(password, userFound.password))) {
      throw authError(BAD_CREDENTIALS);
    }

    const token = generateToken({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
      preferredMoney: userFound.preferredMoney,
      currentSignInAt: Date.now()
    });
    const response = userSerializer(userFound, token);
    logger.info('Successful login');
    return res.status(200).send({ user: response });
  } catch (e) {
    logger.error(e);
    return next(e);
  }
};

exports.signOut = async (req, res, next) => {
  try {
    const sessionClosedAt = Date.now();
    await updateUser({ id: req.user.id }, { sessionClosedAt });
    return res.json({ message: SUCCESS_SIGNOUT });
  } catch (error) {
    logger.error(`Error trying to sign-out user. ${error.message}`);
    return next(error);
  }
};

exports.updateUser = async ({ user: { id }, body }, res, next) => {
  try {
    const { username, email } = body;
    await updateUser({ id }, { username, email });
    const userUpdated = await findUserById(id);

    const token = generateToken({ id, username, email });
    const response = userSerializer(userUpdated, token);
    return res.status(200).send(response);
  } catch (error) {
    logger.error(`Error trying to sign-out user. ${error.message}`);
    return next(error);
  }
};

exports.setCurrency = async (req, res, next) => {
  try {
    const { user } = req;
    const { preferredMoney } = req.params;
    await updateUser({ id: user.id }, { preferredMoney });
    const userUpdated = await findUserById(user.id);
    const response = userSerializer(userUpdated, user.token);
    return res.json(response);
  } catch (error) {
    logger.error(`Error trying to set preferredMoney. ${error.message}`);
    return next(error);
  }
};

exports.getUser = (req, res) => res.send(req.user);
