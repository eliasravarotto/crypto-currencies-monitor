exports.config = {
  environment: 'production',
  isProduction: true,
  common: {
    database: {
      dbname: process.env.DB_NAME
    }
  }
};
