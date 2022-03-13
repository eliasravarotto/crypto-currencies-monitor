const logger = require('../logger');
const { encrypt } = require('../helpers/encrypter');
const { createUser } = require('../services/user');
const { generateToken } = require('../helpers/tokenGenerator');
const { userSerializer } = require('../serializers/userSerializer');
const { signUpMapper } = require('../mappers/userMapper');

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
