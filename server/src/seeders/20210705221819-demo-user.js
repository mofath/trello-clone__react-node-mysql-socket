'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: 'a741dfa6-24de-4b46-afc7-370772f068d5',
      username: 'demo',
      password: '123456789',
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};