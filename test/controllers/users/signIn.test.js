const supertest = require('supertest');
const app = require('../../../app');
const { BAD_CREDENTIALS } = require('../../../app/constants/errorMessages');
const { AUTH_ERROR } = require('../../../app/errors');
const usersFactory = require('../../factory/user');
const { credentials } = require('../../mocks/users/signIn');

const request = supertest(app);

beforeEach(() => usersFactory.create(credentials));

describe('USERS >>> POST /users/login', () => {
  test('Should return user information', async () => {
    const response = await request.post('/users/login').send(credentials);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('user');
    expect(response.body.user).toMatchObject({
      email: credentials.email
    });
  });

  test('Should return bad credentials', async () => {
    const response = await request.post('/users/login').send({ ...credentials, password: 'bad' });

    expect(response.statusCode).toBe(401);
    expect(response.body).toMatchObject({
      internal_code: AUTH_ERROR,
      message: BAD_CREDENTIALS
    });
  });
});
