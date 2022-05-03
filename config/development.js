exports.config = {
  environment: 'development',
  isDevelopment: true,
  common: {
    database: {
      dbname: process.env.DB_NAME_DEV
    }
  }
};
