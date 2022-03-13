'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      coin_external_id: {
        type: Sequelize.STRING
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE
    });
  },

  down: queryInterface => queryInterface.dropTable('coins')
};
