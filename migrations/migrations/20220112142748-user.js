'use strict';

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
      bio: Sequelize.TEXT,
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

      // Timestamps
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE
    }),

  down: queryInterface => queryInterface.dropTable('users')
};
