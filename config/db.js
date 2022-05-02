const config = require('../config').common.database;

module.exports = {
  development: {
    username: config.username,
    password: config.password,
    database: config.dbname,
    host: config.host,
    port: config.port,
    dialect: 'postgres'
  },
  testing: {
    username: config.username,
    password: config.password,
    database: config.dbname,
    host: config.host,
    port: config.port,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: config.username,
    password: config.password,
    database: config.dbname,
    host: config.host,
    port: config.port,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
};
