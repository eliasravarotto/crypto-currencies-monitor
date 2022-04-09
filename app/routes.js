const { healthCheck } = require('./controllers/healthCheck');
const validateSchema = require('./middlewares/schemaValidator');
const { verifyCurrency, verifyIfCoinExist, verifyDuplicated } = require('./middlewares/currency');
const { verifyToken } = require('./middlewares/auth');
const { signUpSchema, signInSchema, updateUserSchema } = require('./schemas/userSchema');
const { addCoinSchema } = require('./schemas/coinSchema');
const {
  signUp,
  signIn,
  signOut,
  getUser,
  setCurrency,
  updateUser
} = require('./controllers/usersController');
const { addCoin, getUserTop } = require('./controllers/coinsController');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/users', [verifyToken], getUser);
  app.post('/users', [validateSchema(signUpSchema)], signUp);
  app.put('/users', [verifyToken, validateSchema(updateUserSchema)], updateUser);
  app.post('/users/login', [validateSchema(signInSchema)], signIn);
  app.post('/users/invalidate_sessions', [verifyToken], signOut);
  app.post('/users/:preferredMoney/currency', [verifyToken, verifyCurrency], setCurrency);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  app.post(
    '/coins',
    [verifyToken, validateSchema(addCoinSchema), verifyIfCoinExist, verifyDuplicated],
    addCoin
  );
  app.get('/top-user-coins', [verifyToken], getUserTop);
};
