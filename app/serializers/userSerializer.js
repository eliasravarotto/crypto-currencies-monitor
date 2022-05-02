const properties = ['id', 'email', 'username', 'image', 'preferredMoney', 'token'];

exports.userSerializer = (user, token) => {
  const response = properties.reduce((target, key) => {
    target[key] = user[key];
    return target;
  }, {});
  response.token = token;
  return response;
};
