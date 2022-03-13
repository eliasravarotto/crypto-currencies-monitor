const { healthCheck } = require('./controllers/healthCheck');
const { signUp } = require('./controllers/userController');
const validateSchema = require('./middlewares/schemaValidator');
const { signUpSchema } = require('./schemas/userSchema');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', [validateSchema(signUpSchema)], signUp);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
};
