// const { factory, factoryByModel } = require('./factoryByModels');
// const { encrypt } = require('../../app/helpers/encrypter');

// factoryByModel('User');
// module.exports = {
//   create: attrs => factory.create('User', { ...attrs, password: encrypt(attrs.password || 'defaultpass') })
// };
const faker = require('faker');
const { factory } = require('factory-girl');
const { User } = require('../../app/models');
const { encrypt } = require('../../app/helpers/encrypter');

factory.define('User', User, {
  username: faker.name.findName(),
  email: faker.name.findName(),
  password: encrypt('ABC123456'),
  image: faker.name.findName(),
  preferredMoney: faker.name.findName()
});

module.exports = {
  create: params => factory.create('User', { ...params, password: encrypt(params.password) }),
  createMany: (num = 5, params) =>
    factory.createMany('User', num, { ...params, password: encrypt(params.password) }),
  build: params => factory.build('User', { ...params, password: encrypt(params.password) }),
  attributes: params => factory.attrs('User', { ...params, password: encrypt(params.password) })
};
