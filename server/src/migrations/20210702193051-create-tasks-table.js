'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      title: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('todo', 'in-progress', 'testing', 'done', 'paid'),
        defaultValue: 'todo',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('tasks');

  }
};
