const { DEFAULT_CURRENCY } = require('../../app/constants/currencies');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: Sequelize.STRING,
      preferred_money: {
        type: Sequelize.STRING,
        defaultValue: DEFAULT_CURRENCY
      },
      reset_password_token: Sequelize.STRING,
      reset_password_sent_at: Sequelize.DATE,
      remember_created_at: Sequelize.DATE,
      sign_in_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      current_sign_in_at: Sequelize.DATE,
      last_sign_in_at: Sequelize.DATE,
      current_sign_in_ip: Sequelize.STRING,
      last_sign_in_ip: Sequelize.STRING,
      session_closed_at: Sequelize.DATE,

      // Timestamps
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE
    }),

  down: queryInterface => queryInterface.dropTable('users')
};
