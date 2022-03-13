exports.signUpMapper = body => ({
  username: body.username,
  email: body.email,
  password: body.password
});
