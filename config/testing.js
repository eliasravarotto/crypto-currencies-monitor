exports.config = {
  environment: 'testing',
  isTesting: true,
  common: {
    database: {
      dbname: process.env.DB_NAME_TEST || 'postgres'
    },
    session: {
      secret: 'some-super-secret'
    }
  }
};
